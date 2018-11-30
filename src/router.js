import React from 'react';
import {
  HashRouter,
  Switch,
} from 'react-router-dom';

import {routerConfig} from "./routerConfig";
import FrontendAuth from "./component/FrontendAuth"

import FootTab from "./component/FootTab";

const RootRouter = () => (
  <HashRouter>
    <div className="App">
      <Switch>
        <FrontendAuth config={routerConfig} />
      </Switch>
      <FootTab />
    </div>
  </HashRouter>
)

export default RootRouter;
