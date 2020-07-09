import React from "react";
import classes from "../Services.module.scss";

export default function Skin() {
  return (
    <article>
      <header className={classes.skinBg}>
        <h2>Skin</h2>
      </header>
      <div className={classes.info}>
        <h3>FACIALS + TREATMENTS</h3>
        <ul>
          <li>Refreshing Facial</li>
          <li>Glamour Cleansing + Restoring Facial</li>
          <li>Collagen Facial</li>
          <li>Hydrating Facial</li>
          <li>Lifting Facial</li>
          <li>Rejuvenating Facial Hyper Pumpkin Peel</li>
          <li>Back Treatment + Relaxation</li>
          <li>Hand Treatment</li>
        </ul>
      </div>
    </article>
  );
}
