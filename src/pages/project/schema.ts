import { ProColumns } from '@ant-design/pro-table';
import { TableListItem } from './interface';

export const columns: ProColumns<TableListItem>[] = [
  {
    title: '项目名称',
    dataIndex: 'name',
  },
  {
    title: '施工内容',
    dataIndex: 'containers',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
  },
];
