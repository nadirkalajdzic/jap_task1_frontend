import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, Button } from "@material-ui/core";
import { validateEmail } from "../../helpingFunctions";

import { loginUser } from "../../api/authApi";
import { Form } from "antd";

import "./LoginPageForm.css";
import "../AuthStyles.css";
import useButtonStyle from "../Header/ButtonStyle";

const validStyleObj = { backgroundColor: "var(--valid-green-color)" };
const invalidStyleObj = { backgroundColor: "var(--invalid-red-color)" };

function LoginPageForm() {
  const [email, setEmail] = useState("");
  const [emailStyle, setEmailStyle] = useState({});
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

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

  const login = () => {
    setDisabled(true);
    loginUser(email, password)
      .then((res) => {
        const obj = {
          token: res.data.data.token,
          name: res.data.data.name + " " + res.data.data.surname,
        };
        localStorage.setItem("session", JSON.stringify(obj));
        history.push("/");
      })
      .catch(console.log);
    setDisabled(false);
  };

  return (
    <div className="auth-page-form">
      <Form onFinish={loginUser}>
        <Form.Item name="email">
          <div className="auth-page-input">
            <div className="auth-page-single-input-label">
              {emailStyle === invalidStyleObj ? "Invalid Email!" : "Email"}
            </div>
            <div className="auth-page-single-input-input">
              <Input
                placeholder="e.g. john.doe@gmail.com"
                type="email"
                value={email}
                onChange={emailChange}
                className="auth-form-input"
                style={emailStyle}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item name="password">
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
        </Form.Item>
        <Form.Item>
          <div className="auth-page-button">
            <Button
              className={classes.button}
              disabled={disabled}
              onClick={login}
            >
              LOGIN
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPageForm;
