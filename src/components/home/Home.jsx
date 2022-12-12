import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDow from "./ScrollDow";

const Home = () => {
  return (
    <section className="home sectioin" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDow />
      </div>
    </section>
  );
};

export default Home;
