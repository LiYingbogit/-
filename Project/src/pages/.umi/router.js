import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/companylist/companyintroduce",
        "exact": true,
        "component": require('../companylist/companyintroduce.js').default
      },
      {
        "path": "/companylist/companynews",
        "exact": true,
        "component": require('../companylist/companynews.js').default
      },
      {
        "path": "/companylist/companyphone",
        "exact": true,
        "component": require('../companylist/companyphone.js').default
      },
      {
        "path": "/companylist",
        "exact": true,
        "component": require('../companylist/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "component": () => React.createElement(require('H:/Project/Yingzhi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/companylist/companyintroduce","exact":true,"component":"./src/pages/companylist/companyintroduce.js"},{"path":"/companylist/companynews","exact":true,"component":"./src/pages/companylist/companynews.js"},{"path":"/companylist/companyphone","exact":true,"component":"./src/pages/companylist/companyphone.js"},{"path":"/companylist","exact":true,"component":"./src/pages/companylist/index.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
