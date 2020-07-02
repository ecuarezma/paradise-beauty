import React from "react";
import classes from "./Esthetics.module.css";

import mask from "../../../../assets/unsplash/mask.jpg";
import nails from "../../../../assets/unsplash/nails.jpg";

export default function Esthetics() {
  return (
    <div className={classes.Esthetics}>
      <div className={classes.nails} />
      <div className={classes.mask} />
    </div>
  );
}
