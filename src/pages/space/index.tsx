import React, { memo, useEffect } from 'react';
import { useLocation } from 'umi';
import './index.less';

const Space = (props: any) => {
  const { history, route } = props;
  const location = useLocation();
  // 存在二级路由，重定向
  useEffect(() => {
    const regexp = new RegExp(`${route.path}$`, 'g');
    if (regexp.test(location.pathname)) {
      history.replace(route.routes[0].path);
    }
  }, [route, location]);
  return <div className="home-wrap">{props.children}</div>;
};

export default memo(Space);
