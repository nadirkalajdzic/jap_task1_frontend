import React from "react";

import Button from "@material-ui/core/Button";
import useButtonStyle from "./ButtonStyle";

import "./Header.css";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

function Header() {
  const classes = useButtonStyle();
  return (
    <div className="page-header">
      <div className="header-logo">Moviesapp</div>
      <div className="header-search-bar">
        <HeaderSearch />
      </div>
      <div className="header-login-or-register">
        <Button className={classes.button}>LOGIN</Button>
        <div className="bold">OR</div>
        <Button className={classes.button}>REGISTER</Button>
      </div>
    </div>
  );
}

export default Header;
