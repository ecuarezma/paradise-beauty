import { React, createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("English");
  const changeLang = (lang) => {
    setLanguage(lang);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
