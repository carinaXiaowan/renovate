import React, { memo } from 'react';
import ProTable from '@ant-design/pro-table';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { columns } from './schema';
import { TableListItem } from './interface';
import './index.less';

const Price = (props: any) => {
  return (
    <div className="home-wrap">
      <ProTable<TableListItem>
        columns={columns}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        options={false}
        dateFormatter="string"
        headerTitle="项目列表"
        toolBarRender={() => [
          <Button key="show">查看日志</Button>,
          <Button key="out">
            导出数据
            <DownOutlined />
          </Button>,
          <Button type="primary" key="primary">
            创建应用
          </Button>,
        ]}
      />
    </div>
  );
};

export default memo(Price);
