import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
