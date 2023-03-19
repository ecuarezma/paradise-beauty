import { React, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { LanguageContext } from "../../contexts/lang.context";

const RootLayout = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Navbar language={language} />
      <main>
        <Outlet language={language} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default RootLayout;
