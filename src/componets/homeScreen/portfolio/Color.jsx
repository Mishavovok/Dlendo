import React, { useState } from 'react';
import hands from '../../../assets/hands.png';
import './portfolio.css';
function Color({ color, price, progname }) {
  const [activ, setActiv] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const getHandler = (index) => {
    setSelectedIndex(index)
    setActiv(index)
  };

  return (
    <>
      <div className="portfolio__circle-progect">
        <span
          style={{ background: color[selectedIndex] }}
          className="portfolio__circle-progect-color"></span>
        <p className="portfolio__circle-text">€ {price[selectedIndex]}</p>
      </div>
      <div className="portfolio__info__item-color">
        <p className="portfolio__info__item-color-text">All</p>
        {color.map(
          (color, index) => (
            (
              <button
                className={
                  activ === index
                    ? 'portfolio__info__item-color-block active__color'
                    : 'portfolio__info__item-color-block'
                }
                key={index}
                onClick={()=>getHandler(index)}
                style={{ background: color }}></button>
            )
          ),
        )}
      </div>
      <div className="portfolio__info-item">
        <div className="portfolio__info__item-text">
          <h5 className="portfolio__info__item-text-1">Project</h5>
          <h5 className="portfolio__info__item-text-1">Invested</h5>
        </div>
        <div className="portfolio__info-neme">
          <span
            style={{ background: color[selectedIndex] }}
            className="portfolio__info-color"></span>
          <p className="portfolio__info-text">{progname[selectedIndex]}</p>
          <p className="portfolio__info-number">€ {price[selectedIndex]}</p>
        </div>
        <div className="portfolio__info-neme">
          <img className="portfolio__info-img" src={hands} alt="" />
          <p className="portfolio__info-text">All projects</p>
          <p className="portfolio__info-number">€423000</p>
        </div>
      </div>
    </>
  );
}

export default Color;
