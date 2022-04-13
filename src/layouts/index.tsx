// 基础路由
import React, { memo } from 'react';
const BaseLayout = (props: any) => {
  return <div style={{ padding: 20 }}>{props.children}</div>;
};

export default memo(BaseLayout);
