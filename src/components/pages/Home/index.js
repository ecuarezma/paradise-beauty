import React from "react";
import classes from "./Home.module.scss";

import salonChairs from "../../../assets/unsplash/salonchairs.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <img src={salonChairs} alt="Row of salon chairs facing away" />
    </div>
  );
};

export default Home;
