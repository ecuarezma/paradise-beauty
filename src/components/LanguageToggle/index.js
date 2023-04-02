import { useContext } from "react";
import { LanguageContext } from "../contexts/lang.context";
import { ScrollEventContext } from "../contexts/scroll.context";

import classes from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  const { changeLang } = useContext(LanguageContext);
  const { isScrolled } = useContext(ScrollEventContext);
  return (
    <div
      className={`${classes.SelectLang} ${isScrolled && classes.isScrolled}`}
    >
      <select
        name="language"
        id="lang-select"
        onChange={(e) => changeLang(e.target.value)}
      >
        <option value="English">ENGLISH</option>
        <option value="Spanish">ESPAÑOL</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
