import React from "react";
import Esthetics from "./Esthetics";
import Hair from "./Hair";
import Skin from "./Skin";

import classes from "./Services.module.scss";

function Services() {
  return (
    <div>
      <header className={classes.Services}>
        <h2>Services</h2>
        <h4>* prices vary, please contact us for a free consultation</h4>
      </header>
      <Esthetics />
      <Hair />
      <Skin />
    </div>
  );
}

export default Services;
