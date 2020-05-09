import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <nav className={classes.Navbar}>
      <div className={classes.bars} onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className={`${classes.Nav} ${isActive && classes.isActive} `}>
        <div className={classes.times}>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </div>
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
