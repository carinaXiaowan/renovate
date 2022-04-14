// 基础路由
import React, { memo } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { routes } from '../../config/routes';
import './index.less';

const BaseLayout = (props: any) => {
  return (
    <div className="layout-wrap">
      <ProLayout
        title="装修报价"
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: routes[0].routes,
        }}
      >
        <PageContainer content="欢迎使用">{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};

export default memo(BaseLayout);
