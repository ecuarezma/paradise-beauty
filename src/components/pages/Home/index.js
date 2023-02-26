import React from "react";
import Services from "../../Services";
import Products from "../../Products";

import classes from "./Home.module.scss";

import salonChairs from "../../../assets/unsplash/salonchairs.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <header className={classes.header}>
        <h1>
          Paradise Beauty <br /> Salon
        </h1>
        <h4>tel: 786.295.9742</h4>
      </header>
      <div className={classes.bgImage}>
        <img src={salonChairs} alt="Row of salon chairs facing away" />
      </div>
      <Services />
      <Products />
    </div>
  );
};

export default Home;
