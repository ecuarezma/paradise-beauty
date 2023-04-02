import React from "react";
import { Link } from "react-router-dom";
import { imageFiles } from "../../../assets/data/nails.data";
import classes from "./Nails.module.scss";

const Nails = () => {
  const images = imageFiles.map((image, i) => (
    <div key={i} className={classes.Image}>
      <img src={image} alt="salon nails" />
    </div>
  ));

  return (
    <div className={classes.Container}>
      <h3>
        Nails by <span>Yemisi</span>
      </h3>
      <section className={classes.ImageContainer}>{images}</section>
      <div className={classes.GoBackBtn}>
        <Link to=".." relative="path" className="button">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Nails;
