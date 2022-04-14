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
        path: '/project',
        name: '项目',
        icon: 'icon-facebook',
        component: '@/pages/project',
      },
    ],
  },
];
