import React from "react";
import { Link } from "react-router-dom";
import nails1 from "../../../assets/images/nails/nails1.jpg";
import nails2 from "../../../assets/images/nails/nails2.jpg";
import nails3 from "../../../assets/images/nails/nails3.jpg";
import nails4 from "../../../assets/images/nails/nails4.jpg";
import nails5 from "../../../assets/images/nails/nails5.jpg";
import nails6 from "../../../assets/images/nails/nails6.jpg";
import nails7 from "../../../assets/images/nails/nails7.jpg";
import nails8 from "../../../assets/images/nails/nails8.jpg";
import nails9 from "../../../assets/images/nails/nails9.jpg";
import classes from "./Nails.module.scss";

let imageFiles = [
  nails1,
  nails2,
  nails3,
  nails4,
  nails5,
  nails6,
  nails7,
  nails8,
  nails9,
];

const Nails = () => {
  const images = imageFiles.map((image, i) => (
    <div key={i} className={classes.Image}>
      <img src={image} alt="salon nails" />
    </div>
  ));

  return (
    <div className={classes.Container}>
      <div className={classes.GoBackBtn}>
        <Link to="/" className="button">
          Go Back
        </Link>
      </div>
      <h3>
        Nails by <span>Yemisi</span>
      </h3>
      <section className={classes.ImageContainer}>{images}</section>
    </div>
  );
};

export default Nails;
