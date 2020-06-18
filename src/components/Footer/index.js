import React from "react";
import classes from "./Footer.module.scss";

const Footer = ({ language }) => {
  const setLanguage = (lang) => {
    switch (lang) {
      case "English":
        return {
          hours: "Hours",
          location: "Location",
          weekdays: "Monday - Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "closed",
        };
      case "Spanish":
        return {
          hours: "Horas",
          location: "Dirección",
          weekdays: "Lunes - Viernes",
          saturday: "Sabado",
          sunday: "Domingo",
          closed: "cerrado",
        };
    }
  };
  let { hours, location, weekdays, saturday, sunday, closed } = setLanguage(
    language
  );
  return (
    <footer className={classes.Footer}>
      <div className={classes.schedule}>
        <h4>{hours}: </h4>
        <p>{weekdays}: 9am - 7pm</p>
        <p>{saturday}: 9am - 6pm</p>
        <p>
          {sunday}: {closed}
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
