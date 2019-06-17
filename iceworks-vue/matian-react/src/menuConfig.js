// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: '/',
    external: true,
    newWindow: false,
    icon: 'message',
  },
  {
    name: 'help',
    path: '/',
    external: true,
    newWindow: false,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      {
        name: 'monitor',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: '表格页表格页',
        path: '/table/basic',
        // authority: 'admin',
      },
      {
        name: 'general',
        path: '/table/general',
        // authority: 'user',
      },
    ],
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'copy',
    children: [
      {
        name: 'basic',
        path: '/list/basic',
      },
      {
        name: 'general',
        path: '/list/general',
      },
    ],
  },
  {
    name: 'account',
    path: '/account',
    icon: 'person',
    children: [
      {
        name: 'setting',
        path: '/account/setting',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
