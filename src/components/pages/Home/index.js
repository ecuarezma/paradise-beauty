import React from "react";
import { setLanguage } from "../../../util/lang";
import classes from "./Home.module.scss";

import salonChairs from "../../../assets/unsplash/salonchairs.jpg";

const Home = ({ language }) => {
  const { home } = setLanguage(language);
  const { temp } = home;
  return (
    <div className={classes.Home}>
      <header className={classes.header}>
        <h1>
          Paradise Beauty <br /> Salon
        </h1>
        <h4>{temp}</h4>
      </header>
      <div className={classes.bgImage}>
        <img src={salonChairs} alt="Row of salon chairs facing away" />
      </div>
    </div>
  );
};

export default Home;
