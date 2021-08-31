import React, { useState } from "react";

import Page from "../../components/Page/Page";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import "./LandingPage.css";

import { makeStyles } from "@material-ui/core";
import ItemList from "../../components/ItemList/ItemList";
const useStyle = makeStyles({
  root: {
    color: "var(--button-color)",
    fontWeight: 500,
    borderColor: "var(--button-color)",
    borderWidth: 2,
  },
  selected: {
    backgroundColor: "red",
  },
});

function LandingPage() {
  const [toggle, setToggle] = useState(0);
  const classes = useStyle();

  const handleToggle = (event, newVal) => {
    if (newVal !== null && newVal !== toggle) setToggle(newVal);
  };

  return (
    <Page>
      <div className="landing-page-header">
        <div className="landing-page-big-title bold">
          Welcome to the movies app site
        </div>
        <div className="landing-page-title-description">
          A site where you can find all the information you need to find your
          next movie for a sunday night.
        </div>
      </div>
      <div className="landing-page-toggle-buttons">
        <ToggleButtonGroup
          className="landing-page-toggle-group"
          value={toggle}
          exclusive
          onChange={handleToggle}
        >
          <ToggleButton className={classes.root} value={0}>
            TOP RATED MOVIES
          </ToggleButton>
          <ToggleButton className={classes.root} value={1}>
            TOP RATED TV SHOWS
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="landing-page-item-list">
        <div>
          <ItemList />
        </div>
      </div>
    </Page>
  );
}

export default LandingPage;
