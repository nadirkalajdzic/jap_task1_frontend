import React from "react";
import { Route, Redirect } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";

function PrivateRoute({ title, exact, path, component, authorize }) {
  const isAuthenticated =
    authorize !== undefined && localStorage.getItem("session") != null;

  if (isAuthenticated) return <Redirect to="/" />;

  return <Route exact={exact} path={path} component={component} />;
}

export default PrivateRoute;
