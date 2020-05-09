import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  return (
    <nav className={classes.Navbar}>
      <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={classes.Nav}>
        <ul>
          <li>home</li>
          <li>appointments</li>
          <li>services</li>
          <li>shop</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
