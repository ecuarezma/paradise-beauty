import React, { useState, useEffect, useContext } from "react";
import { setLanguage } from "../../util/lang";
import { LanguageContext } from "../contexts/lang.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.scss";

const Navbar = ({ language }) => {
  const [isActive, setActive] = useState(false); //controls when to show slide menu
  const [isScrolled, setScrolled] = useState(false);
  const { changeLang } = useContext(LanguageContext);
  const { navbar } = setLanguage(language);
  const { list } = navbar;
  const navMenu = list.map((li) => {
    if (list[3] === li)
      return (
        <li key={li}>
          {li}
          <FontAwesomeIcon icon={faChevronRight} className={classes.chevIcon} />
        </li>
      );
    else return <li key={li}>{li}</li>;
  });

  useEffect(() => {
    const scroll = (e) => {
      const el = document.querySelector("nav");
      const { documentElement } = e.target;
      if (documentElement.scrollTop > el.offsetHeight) {
        setScrolled(true);
      } else setScrolled(false);
    };
    //add event listeners
    document.addEventListener("scroll", scroll, true);
    //clean up function, remove event listener
    return () => {
      document.removeEventListener("scroll", scroll, true);
    };
  });

  const handleOpen = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <nav className={`${classes.Navbar} ${isScrolled && classes.scrolled}`}>
      {/* <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
      </div> */}
      <div className={classes.selectLang}>
        <select
          name="language"
          id="lang-select"
          onChange={(e) => changeLang(e.target.value)}
        >
          <option value="English">ENGLISH</option>
          <option value="Spanish">ESPAÑOL</option>
        </select>
      </div>

      {/* <div className={`${classes.Nav} ${isActive && classes.isActive} `}>
        <div className={classes.times}>
          <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
        </div>
        <ul>{navMenu}</ul>
      </div>
      <div
        className={`${classes.sliderBg} ${isActive && classes.isActive} `}
        onClick={handleClose}
      /> */}
    </nav>
  );
};

export default Navbar;
