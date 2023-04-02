import React, { useState, useContext } from "react";
import { setLanguage } from "../../util/lang";
import LanguageToggle from "../LanguageToggle";
import { ScrollEventContext } from "../contexts/scroll.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.scss";

const Navbar = ({ language, id }) => {
  const [isActive, setActive] = useState(false); //controls when to show slide menu
  const { isScrolled } = useContext(ScrollEventContext);
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

  const handleOpen = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <nav
      className={`${classes.Navbar} ${isScrolled && classes.scrolled}`}
      id={id}
    >
      {/* <div className={classes.bars}>
        <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
      </div> */}
      <LanguageToggle />

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
