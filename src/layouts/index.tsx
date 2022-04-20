// 基础路由
import React, { memo, useCallback, useEffect } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { history, useLocation } from 'umi';
import { routes } from '../../config/routes';
import './index.less';

const BaseLayout = (props: any) => {
  const location = useLocation();
  // 页面挑战
  const handleMenuJump = useCallback((item) => {
    // console.log(item)
    history.push(item.path);
  }, []);

  // 跳转到首页
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/home');
    }
  }, []);
  return (
    <div className="layout-wrap">
      <ProLayout
        title="装修报价"
        headerRender={false}
        iconfontUrl="//at.alicdn.com/t/font_3343436_lf9c3lkhprm.js"
        route={{
          routes: routes[0].routes,
        }}
        menuItemRender={(item, dom) => (
          <a onClick={() => handleMenuJump(item)}>{dom}</a>
        )}
      >
        <PageContainer
          header={{
            breadcrumb: {},
          }}
        >
          {props.children}
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default memo(BaseLayout);
