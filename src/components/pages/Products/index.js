import React from "react";
import classes from "../Services/Services.module.scss";

export default function Products() {
  return (
    <article>
      <header className={classes.bottleBg} />
      <div className={classes.info}>
        <h3>PRODUCTS</h3>
        <ul className={classes.products}>
          <li>Lanza</li>
          <li>Salon-In</li>
          <li>Salerm</li>
          <li>Cosmetics</li>
          <li>Hair Food</li>
          <li>Maui</li>
          <li>OGX</li>
          <li>Neutogena</li>
          <li>Ponds</li>
          <li>Paul</li>
          <li>Mitchel</li>
          <li>Felps</li>
          <li>Professional</li>
          <li>Loreal</li>
          <li>Hempz</li>
          <li>OPI</li>
        </ul>
      </div>
    </article>
  );
}
