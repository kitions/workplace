// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: '',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: '',
    external: true,
    newWindow: true,
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
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '\u6743\u9650',
    path: '/auth',
    icon: 'person',
    children: [
      {
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '\u8BA2\u5355\u7BA1\u7406',
    path: '/order',
    icon: 'cascades',
    children: [
      {
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },

];

export { headerMenuConfig, asideMenuConfig };
