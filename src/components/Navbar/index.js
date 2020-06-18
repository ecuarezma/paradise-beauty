import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ language, setLang }) => {
  const [isActive, setActive] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = (e) => {
      const el = document.querySelector("nav");
      if (e.target.documentElement.scrollTop > el.offsetHeight) {
        setScrolled(true);
      } else setScrolled(false);
      // console.log(e.target.documentElement.scrollTop);
    };
    //add event listeners
    document.addEventListener("touchmove", scroll); // for mobile
    document.addEventListener("scroll", scroll);
    //clean up function, remove event listener
    return () => {
      document.removeEventListener("touchmove", scroll);
      document.removeEventListener("scroll", scroll);
    };
  });

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <nav className={`${classes.Navbar} ${isScrolled && classes.scrolled}`}>
      <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
      </div>
      <div className={classes.selectLang}>
        <select
          name="language"
          id="lang-select"
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="English">ENGLISH</option>
          <option value="Spanish">ESPAÑOL</option>
        </select>
      </div>

      <div className={`${classes.Nav} ${isActive && classes.isActive} `}>
        <div className={classes.times}>
          <FontAwesomeIcon icon={faTimes} onClick={handleClick} />
        </div>
        <ul>
          <li>Home</li>
          <li>Appointments</li>
          <li>Services</li>
          <li>Shop</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
