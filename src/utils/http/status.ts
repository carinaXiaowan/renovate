export const systemStatus = {
  '310': {
    msg: '无session信息!',
    path: '/403',
  },
  '405': {
    msg: 'session过期',
    path: '/403',
  },
  '406': {
    msg: '用户已在其他地方登陆!!',
    path: '/403',
  },
  '506': {
    msg: '系统其它异常错误!',
    path: '/500',
  },
  '407': {
    msg: '系统其它异常错误!',
    path: '/',
  },
  '788': {
    msg: '用户登录超时或在其他地方登录，请重新登录!',
    // path: '/',
  },
};
