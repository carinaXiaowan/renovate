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
        name: '项目管理',
        icon: 'icon-facebook',
        component: '@/pages/project',
      },
      {
        path: '/custom',
        name: '客户管理',
        icon: 'icon-facebook',
        component: '@/pages/custom',
      },
      {
        path: '/template',
        name: '模板管理',
        icon: 'icon-facebook',
        component: '@/pages/template',
      },
    ],
  },
];
