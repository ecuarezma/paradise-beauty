import React from "react";
import classes from "../Services.module.scss";

export default function Hair() {
  return (
    <article>
      <header className={classes.hairBg}>
        <h2>Hair</h2>
      </header>
      <div className={classes.info}>
        <h3>CUT</h3>
        <ul>
          <li>Woman's Wash | Cut | Style</li>
          <li>Men's Wash | Cut | Style</li>
          <li>Children's Wash | Cut | Style</li>
          <li>Bang Trim</li>
        </ul>
        <br />
        <h3>STYLING</h3>
        <ul>
          <li>Wash | Blow Dry</li>
          <li>Updo</li>
          <li>Flat Iron</li>
        </ul>
        <br />
        <h3>COLORING</h3>
        <ul>
          <li>Foil Highlights</li>
          <li>Individual Foils</li>
          <li>Fashion Highlights</li>
          <li>Full Color</li>
          <li>Roots</li>
          <li>Semi-Permanent Color</li>
          <li>Color Correction</li>
        </ul>
        <h3>TREATMENTS</h3>
        <br />
        <ul>
          <li>Keratin</li>
          <li>Ultimate Treatment</li>
          <li>Cellophane Treatment</li>
          <li>Perm</li>
          <li>Relaxer</li>
          <li>Capillary Surgery Botox</li>
        </ul>
      </div>
    </article>
  );
}
