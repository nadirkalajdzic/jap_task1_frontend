import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";

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
      </Switch>
    </Router>
  );
}

export default Routes;
