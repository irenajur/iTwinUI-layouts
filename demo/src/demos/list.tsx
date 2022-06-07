/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import AppLayoutDemo from './PageLayout/PageLayoutDemo';
import PageLayoutPaddedDemo from './PageLayout/PageLayoutPaddedDemo';
import GridLayoutDemo from './Grid/FluidGridDemo';
import HomePageDemo from './Grid/GridDemo';

/**
 * List of all demos. It is used to dynamically populate the home page and react-router.
 */
export const DEMOS_LIST = [
  {
    listName: 'Layouts',
    layouts: [
      {
        path: 'page-layout-1',
        name: 'PageLayout 1',
        description:
          'Demo consisting of header, side navigation, and full frame content (eg. iTwin.js frame).',
        icon: 'layouts-thumbnails/AppLayout.png',
        component: AppLayoutDemo,
      },
      {
        path: 'page-layout-2',
        name: 'PageLayout 2',
        description:
          'Demo consisting of header, side navigation, and padded content (eg. array of tiles or table).',
        icon: 'layouts-thumbnails/PageLayoutPadded.png',
        component: PageLayoutPaddedDemo,
      },
    ],
  },
  {
    listName: 'Grids',
    layouts: [
      {
        path: 'fluid-grid',
        name: 'Fluid grid',
        description: 'A responsive grid of tiles.',
        icon: 'layouts-thumbnails/TileGridLayout.png',
        component: GridLayoutDemo,
      },
      {
        path: 'grid-1',
        name: 'Grid',
        description: 'Grid layout example for home page.',
        icon: 'layouts-thumbnails/HomeLayout.png',
        component: HomePageDemo,
      },
    ],
  },
  {
    path: 'table-layout',
    name: 'Table',
    description: '',
    icon: 'layouts-thumbnails/TableLayout.png',
    component: TableLayoutDemo,
  },
];
