export enum TabRoutes {
  mainUrl = '/',
  homeUrl = '/home',
  scoreBoardUrl = '/score-board',
}

export const pages = [
  {
    text: 'Розклад',
    path: TabRoutes.homeUrl,
    url: TabRoutes.homeUrl,
  },
  {
    text: 'Фотолітопис',
    path: TabRoutes.scoreBoardUrl,
    url: TabRoutes.scoreBoardUrl,
  },
];

export const userMenuSt = {
  vertical: 'top' as const,
  horizontal: 'right' as const,
};

export const settings = [
  {
    text: 'Profile',
    path: '/',
  },
  {
    text: 'Logout',
    path: '/',
  },
];
