import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const RootLayout = () => {
  const [language, setLanguage] = useState("English");

  const setLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      {/* <Navbar language={language} setLang={setLang} /> */}
      <main>
        <Outlet language={language} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default RootLayout;
