import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Other Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">English</h3>
              <span className="skills__level">C1</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name"> Illustrator</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Basics</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name"> Photoshop</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">UI / UX</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">FireBase</h3>
              <span className="skills__level">Basics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
