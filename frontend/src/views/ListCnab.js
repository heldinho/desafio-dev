import React from 'react';
import DataTable from '../components/DataTable';
import * as Http from '../services';
import { Button, Popover } from 'antd';
import { BellOutlined, LoadingOutlined } from '@ant-design/icons';

export default function ListCnab() {
  const [data, setData] = React.useState([]);
  const [logs, setLogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const btnLog = React.useRef(null);

  React.useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    setLoading(true);
    Http.getAllShops()
      .then(dt => {
        if (dt) {
          setData(dt);
        } else {
          setLogs(old => [...old, 'Error!']);
          btnLog.current.click();
        }
        setLoading(false);
      })
      .catch(err => {
        setLogs(old => [...old, 'Error!']);
        btnLog.current.click();
        setLoading(false);
      });
  };

  const Content = ({ data }) => {
    return (
      <>
        {data.reverse().map((item, index) => (
          <p key={index}>{`${item} - ${index}`}</p>
        ))}
      </>
    );
  };

  return (
    <>
      <Button
        type="primary"
        onClick={refreshList}
        style={{ marginRight: 20 }}
        disabled={loading}
      >
        {loading ? <LoadingOutlined /> : 'Atualizar Lista'}
      </Button>

      {logs.length > 0 && (
        <Popover
          content={<Content data={logs} />}
          title="Alertas!"
          trigger="click"
          placement="bottomLeft"
        >
          <Button ref={btnLog}>
            <BellOutlined />
          </Button>
        </Popover>
      )}

      <div style={{ marginTop: 14 }}>
        <DataTable data={data} type="shops" />
      </div>
    </>
  );
}
