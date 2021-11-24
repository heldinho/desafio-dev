import { Table } from 'antd';
import { mask } from 'remask';
import * as util from '../utils';

const pattern = {
  taxId: '999.999.999-99',
};

const columnShops = [
  {
    title: 'CPF',
    dataIndex: 'taxId',
    render: taxId => <span>{mask(taxId, pattern['taxId'])}</span>,
  },
  {
    title: 'Dono da Loja',
    dataIndex: 'owner',
  },
  {
    title: 'Nome Loja',
    dataIndex: 'shop',
  },
  {
    title: 'Valor',
    dataIndex: 'amount',
    render: amount => util.numberToReal(parseFloat(amount)),
  },
];

const columns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
    render: type => util.types[type],
  },
  {
    title: 'Data',
    dataIndex: 'date',
  },
  {
    title: 'Valor',
    dataIndex: 'amount',
    render: amount => util.numberToReal(parseFloat(amount)),
  },
  {
    title: 'CPF',
    dataIndex: 'taxId',
    render: taxId => <span>{mask(taxId, pattern['taxId'])}</span>,
  },
  {
    title: 'Cartão',
    dataIndex: 'card',
  },
  {
    title: 'Hora',
    dataIndex: 'hour',
  },
  {
    title: 'Dono da Loja',
    dataIndex: 'owner',
  },
  {
    title: 'Nome Loja',
    dataIndex: 'shop',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function DataTable({ data, type }) {
  return (
    <Table
      columns={type === 'shops' ? columnShops : columns}
      dataSource={data}
      scroll={{ y: 350 }}
      onChange={onChange}
    />
  );
}
