import React from "react";
import classes from "./Home.module.scss";

import salonChairs from "../../../assets/unsplash/salonchairs.jpg";

const Home = ({ language }) => {
  const setLanguage = (lang) => {
    switch (lang) {
      case "Spanish":
        return {
          subtitle: "bajo construcción",
        };
      default:
        return {
          subtitle: "under construction",
        };
    }
  };
  let { subtitle } = setLanguage(language);
  return (
    <div className={classes.Home}>
      <header className={classes.header}>
        <h1>
          Paradise Beauty <br /> Salon
        </h1>
        <h4>{subtitle}</h4>
      </header>
      <div className={classes.bgImage}>
        <img src={salonChairs} alt="Row of salon chairs facing away" />
      </div>
    </div>
  );
};

export default Home;
