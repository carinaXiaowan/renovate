export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/home', component: '@/pages/home' },
      { path: '/list', component: '@/pages/list' },
    ],
  },
];
