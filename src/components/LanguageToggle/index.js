import { setLanguage } from "../../util/lang";

import classes from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  <div className={classes.selectLang}>
    <select
      name="language"
      id="lang-select"
      onChange={(e) => setLang(e.target.value)}
    >
      <option value="English">ENGLISH</option>
      <option value="Spanish">ESPAÑOL</option>
    </select>
  </div>;
};

export default LanguageToggle;
