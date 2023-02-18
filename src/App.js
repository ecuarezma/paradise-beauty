import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/";
import Products from "./components/Products";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("English");

  const setLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Navbar language={language} setLang={setLang} />
      <Home language={language} />
      <Services />
      <Products />
      <Footer language={language} />
    </>
  );
};

export default App;
