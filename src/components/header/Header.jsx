import React, { useState } from "react";
import "./header.css";
import {
  BiHomeAlt,
  BiUser,
  BiFileBlank,
  BiBriefcaseAlt,
  BiBox,
  BiX,
  BiMessageAlt,
} from "react-icons/bi";

import { GrContact, GrAppsRounded } from "react-icons/gr";

const Header = () => {
  /*=============== Toggle Menu ===============*/

  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Daler
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
                {/* <i className="bx bx-home-alt nav_icon"></i> Home */}
                {/* <BiHomeAlt className="nav__icon" /> Home */}
              </a>
            </li>

            <li className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
                {/* <i className="bx bx-user nav__icon"></i> About */}
                {/* <BiUser className="nav__icon" /> About */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
                {/* <i className="bx bx-file-blank nav__icon"></i> Skills */}
                {/* <BiFileBlank className="nav__icon" /> Skills */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                {/* <i className="bx bx-briefcase nav__icon"></i> Services */}
                {/* <BiBriefcaseAlt className="nav__icon" /> Services */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
                {/* <i className="bx bxs-inbox nav__icon"></i> Portfolio */}
                {/* <BiBox className="nav__icon" /> Portfolio */}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
                {/* <i className="bx bxs-contact nav__icon"></i> Contact */}
                {/* <GrContact className="nav__icon" /> Contact */}
                {/* <BiMessageAlt className="nav__icon" /> Contact */}
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
          {/* <i className="bx bx-x nav__close"></i> */}
          {/* <BiX className="nav__close" /> */}
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
          {/* <box-icon name="checkbox"></box-icon> */}
          {/* <GrAppsRounded /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
