import React from "react";
import classes from "../Services/Services.module.scss";

export default function Products() {
  return (
    <article>
      <header className={classes.bottleBg} />
      <div className={classes.info}>
        <h3>PRODUCTS</h3>
        <ul className={classes.products}>
          <div>
            <li>Lanza</li>
            <li>Salon-In</li>
            <li>Salerm</li>
            <li>Cosmetics</li>
          </div>
          <div>
            <li>Hair Food</li>
            <li>Maui</li>
            <li>OGX</li>
            <li>Neutogena</li>
          </div>
          <div>
            <li>Ponds</li>
            <li>Paul</li>
            <li>Mitchel</li>
            <li>Felps</li>
          </div>
          <div>
            <li>Professional</li>
            <li>Loreal</li>
            <li>Hempz</li>
            <li>OPI</li>
          </div>
        </ul>
      </div>
    </article>
  );
}
