import { language } from "../assets/data/language.data";

export const setLanguage = (lang) => {
  switch (lang) {
    case "Spanish":
      return language.spanish;
    default:
      return language.english;
  }
};
