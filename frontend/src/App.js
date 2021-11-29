import React from 'react';
import { v4 as uuid } from 'uuid';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Input, Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as util from './utils';
import * as Http from './services';
import DataTable from './components/DataTable';
import ListCnab from './views/ListCnab';
import MSG_TYPES from './types/messages';

const { Sider, Content } = Layout;

export default function App() {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const inputFile = React.useRef(null);

  const openNotificationWithIcon = arg => {
    const { type, message, description } = arg;
    notification[type]({
      message: message,
      description: description,
    });
  };

  const onNotification = arg => {
    openNotificationWithIcon(arg);
  };

  const save = async () => {
    if (data.length <= 0) return;
    try {
      const dt = await Http.create(data);
      if (dt.error) {
        onNotification(MSG_TYPES.REMESSAS.ERROR.FRONT);
      } else if (dt.success) {
        setData([]);
        setTotal(0);
        inputFile.current.value = '';
        onNotification(MSG_TYPES.REMESSAS.SUCCESS);
      }
    } catch (err) {
      onNotification(MSG_TYPES.REMESSAS.ERROR.BACK);
    }
  };

  const load = async e => {
    if (e.target.files.length <= 0) return;

    setData([]);
    const arr = [];
    let totalAmount = 0;
    const reader = new FileReader();
    reader.onload = e => {
      const lines = e.target.result.split(/\r?\n/);
      lines.forEach(line => {
        if (String(line) !== '') {
          totalAmount += +String(line).substring(9, 19).trim() / 100.0;
          arr.push({
            id: String(uuid()),
            type: String(line).substring(0, 1).trim(),
            date: String(line).substring(1, 9).trim(),
            amount: +String(line).substring(9, 19).trim() / 100.0,
            taxId: String(line).substring(19, 30).trim(),
            card: String(line).substring(30, 42).trim(),
            hour: String(line).substring(42, 48).trim(),
            owner: String(line).substring(48, 62).trim(),
            shop: String(line).substring(62, String(line).length).trim(),
          });
        }
      });
      setData(arr);
      setTotal(totalAmount);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UploadOutlined />}>
            <Link to="/">Enviar CNAB</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to="/list">Lista CNABs</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path="/">
              <Row>
                <Col md={8}>
                  <input
                    ref={inputFile}
                    type="file"
                    onChange={load}
                    accept="text/plain"
                  />
                </Col>
                <Col md={8}>
                  <Button type="primary" onClick={save}>
                    Salvar Remessa
                  </Button>
                </Col>
                <Col md={8}>
                  <Input value={util.numberToReal(total)} />
                </Col>
                <Col md={24} style={{ marginTop: 14 }}>
                  <DataTable data={data} />
                </Col>
              </Row>
            </Route>
            <Route exact path="/list">
              <ListCnab />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
