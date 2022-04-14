export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: 'icon-shoucang1',
        component: '@/pages/home',
      },
      {
        path: '/list',
        name: '列表',
        icon: 'icon-facebook',
        component: '@/pages/list',
      },
    ],
  },
];
