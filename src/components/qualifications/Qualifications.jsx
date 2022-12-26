import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualifications section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  International Relatioins - Bachelor
                </h3>
                <span className="qualification__subtitle">
                  American University of Central Asia - Kyrgyzstan
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2013 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  International Business & Management
                </h3>
                <span className="qualification__subtitle">UITM - Poland</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Current
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>06/2022 - Current
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Designer</h3>
                <span className="qualification__subtitle">
                  Obuv.com - Kyrgyzstan
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Translator</h3>
                <span className="qualification__subtitle">
                  Teleperformance - Dubai, UAE
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Senior Recruitment Coordinator
                </h3>
                <span className="qualification__subtitle">AMS - Poland</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Junior Frondtend Developer
                </h3>
                <span className="qualification__subtitle">
                  InterKit - Remote
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Current
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
