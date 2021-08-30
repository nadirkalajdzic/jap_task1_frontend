import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ title, exact, path, component }) {
  document.title = `Moviesapp | ${title}`;
  return <Route exact={exact} path={path} component={component} />;
}

export default PrivateRoute;
