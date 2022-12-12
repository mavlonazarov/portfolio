import React from "react";
import "./App.css";
import HeaderNew from "./components/header/HeaderNew";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import Work from "./components/work/Work";
// import Testimonials from "./components/testimonials.jsx/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <>
      <HeaderNew />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualifications />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
