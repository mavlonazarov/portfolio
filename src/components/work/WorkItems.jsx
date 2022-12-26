import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="p1" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <h5 className="work__tech">{item.tech}</h5>
      <div className="work__forward">
        <a href={item.demo} className="work__button" target="_blank">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.source} className="work__button" target="_blank">
          Source <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
