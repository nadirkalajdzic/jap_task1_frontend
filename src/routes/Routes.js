import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Page404 from "../pages/Page404/Page404";

import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <Router basename="">
      <Switch>
        <PrivateRoute
          exact={true}
          path="/"
          component={LandingPage}
          title="Home"
        />
        <PrivateRoute
          exact={true}
          path="/landing"
          component={LandingPage}
          title="Home"
        />
        <Route path="*" component={Page404} title="404" />
      </Switch>
    </Router>
  );
}

export default Routes;
