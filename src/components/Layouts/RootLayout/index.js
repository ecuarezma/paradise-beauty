import { React, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { LanguageContext } from "../../contexts/lang.context";
import { ScrollEventProvider } from "../../contexts/scroll.context";

const RootLayout = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <ScrollEventProvider>
        <Navbar language={language} id="navbar" />
      </ScrollEventProvider>
      <main>
        <Outlet language={language} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default RootLayout;
