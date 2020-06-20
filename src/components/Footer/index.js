import React from "react";
import { setLanguage } from "../../util/lang";
import classes from "./Footer.module.scss";

const Footer = ({ language }) => {
  const { footer } = setLanguage(language);
  const { hours, location, weekdays, saturday, sunday, closed } = footer;

  return (
    <footer className={classes.Footer}>
      <div className={classes.schedule}>
        <h4>{hours}: </h4>
        <p>
          {weekdays}: <span>9am - 7pm</span>
        </p>
        <p>
          {saturday}: <span>9am - 6pm</span>
        </p>
        <p>
          {sunday}:{" "}
          <span>
            <em>{closed}</em>
          </span>
        </p>
      </div>
      <div className={classes.location}>
        <h4>{location}: </h4>
        <p>13911 SW 42nd St.</p>
        <p>Suite 103</p>
        <p>Miami, FL 33175</p>
      </div>
    </footer>
  );
};

export default Footer;
