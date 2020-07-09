import React from "react";
import classes from "../Services.module.scss";

export default function Esthetics() {
  return (
    <article>
      <header className={classes.nailsBg}>
        <h2>Esthetics</h2>
      </header>
      <div className={classes.info}>
        <h3>NAILS</h3>
        <ul>
          <li>Regular Manicure</li>
          <li>Men's Manicure</li>
          <li>Gel Manicure</li>
          <li>Gel Removal</li>
          <li>Regular Pedicure</li>
          <li>Spa Pedicure</li>
          <li>Men's Pedicure</li>
          <li>Gel Pedicure</li>
          <li>Regular Manicure | Pedicure Combo</li>
          <li>Polish Change</li>
        </ul>
        <br />
        <h3>WAXING</h3>
        <ul>
          <li>Eyebrow</li>
          <li>Lip</li>
          <li>Chin</li>
          <li>Sideburns</li>
          <li>Full Face</li>
          <li>Underarm</li>
          <li>Arm</li>
          <li>Leg</li>
          <li>Full Leg</li>
          <li>Bikini</li>
          <li>Back</li>
          <li>Back | Shoulders</li>
          <li>Naval Strip</li>
          <li>Chest | Stomach</li>
        </ul>
      </div>
    </article>
  );
}
