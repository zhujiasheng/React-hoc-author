import HomePage  from './page/Index';
import Login from './page/Login';
import NotFound from "./page/NotFound";

import Purchase from "./page/purchase";
import Sales from "./page/sales";
import Stock from "./page/stock";
import Search from "./page/search";

export const routerConfig = [
  {
    path: '/',
    component: HomePage,
    auth: true,
  },{
    path: '/home',
    component: HomePage,
    auth: true,
  },{
    path: '/login',
    component: Login,
  },{
    path: '/purchase',
    component: Purchase,
  },{
    path: '/sales',
    component: Sales
  },{
    path: '/stock',
    component: Stock
  },{
    path: '/search',
    component: Search
  },{
    path: '/404',
    component: NotFound
  }
]
