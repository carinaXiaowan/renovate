// 基础路由
import React, { memo, useCallback } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';
import { routes } from '../../config/routes';
import './index.less';

const BaseLayout = (props: any) => {
  const handleMenuJump = useCallback((item) => {
    // console.log(item)
    history.push(item.path);
  }, []);
  return (
    <div className="layout-wrap">
      <ProLayout
        title="装修报价"
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: routes[0].routes,
        }}
        menuItemRender={(item, dom) => (
          <a onClick={() => handleMenuJump(item)}>{dom}</a>
        )}
      >
        <PageContainer content="欢迎使用">{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};

export default memo(BaseLayout);
