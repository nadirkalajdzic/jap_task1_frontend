import React, { useState } from "react";

import { Input, Button } from "@material-ui/core";

import { validateEmail } from "../../helpingFunctions";

import "./LoginPageForm.css";
import "../AuthStyles.css";
import useButtonStyle from "../Header/ButtonStyle";

const validStyleObj = { backgroundColor: "var(--valid-green-color)" };
const invalidStyleObj = { backgroundColor: "var(--invalid-red-color)" };

function LoginPageForm() {
  const [email, setEmail] = useState("");
  const [emailStyle, setEmailStyle] = useState({});
  const [password, setPassword] = useState("");
  const [passwordStyle, setPasswordStyle] = useState({});

  const emailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value)
      ? setEmailStyle(validStyleObj)
      : setEmailStyle(invalidStyleObj);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    e.target.value !== ""
      ? setPasswordStyle(validStyleObj)
      : setPasswordStyle(invalidStyleObj);
  };

  const classes = useButtonStyle();
  return (
    <div className="auth-page-form">
      <div className="auth-page-input">
        <div className="auth-page-single-input-label">
          {emailStyle === invalidStyleObj
            ? "Invalid Email!"
            : "Email or username"}
        </div>
        <div className="auth-page-single-input-input">
          <Input
            placeholder="Email or username"
            type="email"
            value={email}
            onChange={emailChange}
            className="auth-form-input"
            style={emailStyle}
          />
        </div>
      </div>
      <div className="auth-page-input">
        <div className="auth-page-single-input-label">
          {passwordStyle === invalidStyleObj
            ? "Password cannot be empty"
            : "Password"}
        </div>
        <div className="auth-page-single-input-input">
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChange}
            className="auth-form-input"
            style={passwordStyle}
          />
        </div>
      </div>
      <div className="auth-page-button">
        <Button className={classes.button}>LOGIN</Button>
      </div>
    </div>
  );
}

export default LoginPageForm;
