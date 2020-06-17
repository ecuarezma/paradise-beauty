import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.schedule}>
        <h4>Hours: </h4>
        <p>Monday - Friday: 9am - 7pm</p>
        <p>Saturday: 9am - 6pm</p>
        <p>Sunday: closed</p>
      </div>
      <div className={classes.location}>
        <h4>Location: </h4>
        <p>13911 SW 42nd St.</p>
        <p>Suite 103</p>
        <p>Miami, FL 33175</p>
      </div>
    </footer>
  );
};

export default Footer;
