import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import useButtonStyle from "./ButtonStyle";

import "./Header.css";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

function Header() {
  const history = useHistory();
  const classes = useButtonStyle();

  const routeToHome = () => history.push("/");
  const routeToLogin = () => history.push("/login");
  const routeToRegister = () => history.push("/register");

  return (
    <div className="page-header">
      <div className="header-logo" onClick={routeToHome}>
        Moviesapp
      </div>
      <div className="header-search-bar">
        <HeaderSearch />
      </div>
      <div className="header-login-or-register">
        <Button className={classes.button} onClick={routeToLogin}>
          LOGIN
        </Button>
        <div className="bold">OR</div>
        <Button className={classes.button} onClick={routeToRegister}>
          REGISTER
        </Button>
      </div>
    </div>
  );
}

export default Header;
