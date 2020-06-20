import React, { useState, useEffect } from "react";
import { setLanguage } from "../../util/lang";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.scss";

const Navbar = ({ language, setLang }) => {
  const [isActive, setActive] = useState(false); //controls when to show slide menu
  const [isScrolled, setScrolled] = useState(false);

  const { navbar } = setLanguage(language);
  const { list } = navbar;
  const navMenu = list.map((li) => <li key={li}>{li}</li>);

  useEffect(() => {
    const scroll = (e) => {
      const el = document.querySelector("nav");
      if (e.target.documentElement.scrollTop > el.offsetHeight) {
        // check scrollTop element to see if there's one that works on mobile or iOS
        setScrolled(true);
      } else setScrolled(false);
      // console.log(e.target.documentElement.scrollTop);
    };
    //add event listeners
    document.addEventListener("scroll", scroll);
    //clean up function, remove event listener
    return () => {
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
        <ul>{navMenu}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
