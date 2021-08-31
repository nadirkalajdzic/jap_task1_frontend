import React, { useState } from "react";

import { Input, Button } from "@material-ui/core";

import { validateEmail } from "../../helpingFunctions";

import "./RegisterPageForm.css";
import "../AuthStyles.css";
import useButtonStyle from "../Header/ButtonStyle";

const validStyleObj = { backgroundColor: "var(--valid-green-color)" };
const invalidStyleObj = { backgroundColor: "var(--invalid-red-color)" };

function RegisterPageForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameStyle, setFirstNameStyle] = useState({});

  const [lastName, setLastName] = useState("");
  const [lastNameStyle, seLastNameStyle] = useState({});

  const [email, setEmail] = useState("");
  const [emailStyle, setEmailStyle] = useState({});

  const [password, setPassword] = useState("");
  const [passwordStyle, setPasswordStyle] = useState({});

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatStyle, setPasswordRepeatStyle] = useState({});

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
    e.target.value !== ""
      ? setFirstNameStyle(validStyleObj)
      : setFirstNameStyle(invalidStyleObj);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
    e.target.value !== ""
      ? seLastNameStyle(validStyleObj)
      : seLastNameStyle(invalidStyleObj);
  };

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

  const passwordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value);
    e.target.value === password
      ? setPasswordRepeatStyle(validStyleObj)
      : setPasswordRepeatStyle(invalidStyleObj);
  };

  const classes = useButtonStyle();

  return (
    <div className="auth-page-form">
      <div>
        <div className="auth-page-input">
          <div className="auth-page-single-input-label">
            {firstNameStyle === invalidStyleObj
              ? "First name cannot be empty!"
              : "First name"}
          </div>
          <div className="auth-page-single-input-input">
            <Input
              placeholder="e.g. John"
              type="text"
              value={firstName}
              onChange={firstNameChange}
              className="auth-form-input"
              style={firstNameStyle}
            />
          </div>
        </div>
        <div className="auth-page-input">
          <div className="auth-page-single-input-label">
            {lastNameStyle === invalidStyleObj
              ? "Last name cannot be empty!"
              : "Last name"}
          </div>
          <div className="auth-page-single-input-input">
            <Input
              placeholder="e.g. Doe"
              type="text"
              value={lastName}
              onChange={lastNameChange}
              className="auth-form-input"
              style={lastNameStyle}
            />
          </div>
        </div>
      </div>
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
      <div className="auth-page-input">
        <div className="auth-page-single-input-label">
          {passwordRepeatStyle === invalidStyleObj
            ? "Passwords must match"
            : "Repeat password"}
        </div>
        <div className="auth-page-single-input-input">
          <Input
            placeholder="Repeat password"
            type="password"
            value={passwordRepeat}
            onChange={passwordRepeatChange}
            className="auth-form-input"
            style={passwordRepeatStyle}
          />
        </div>
      </div>
      <div className="auth-page-button">
        <Button className={classes.button}>LOGIN</Button>
      </div>
    </div>
  );
}

export default RegisterPageForm;
