export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        name: '首页',
        icon: 'icon-home',
        component: '@/pages/home',
      },
      {
        path: '/custom',
        name: '客户管理',
        icon: 'icon-kehu',
        component: '@/pages/custom',
      },
      {
        path: '/space',
        name: '空间管理',
        icon: 'icon-project_space',
        component: '@/pages/space',
        routes: [
          {
            path: '/space/list',
            name: '空间列表',
            icon: 'icon-facebook',
            component: '@/pages/space/list',
            hideInMenu: true,
          },
          {
            path: '/space/price',
            name: '空间报价',
            icon: 'icon-facebook',
            component: '@/pages/space/price',
            hideInMenu: true,
          },
        ],
      },

      {
        path: '/project',
        name: '项目管理',
        icon: 'icon-xiangmu',
        component: '@/pages/project',
      },
      {
        path: '/offertemplate',
        name: '报价模板',
        icon: 'icon-yetaimoban',
        component: '@/pages/offertemplate',
      },
    ],
  },
];
