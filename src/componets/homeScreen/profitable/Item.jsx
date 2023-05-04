import React from 'react';
import calendar from '../../../assets/calendar.png';
import amounimg from '../../../assets/amount.png';
import project from '../../../assets/project.png';
import investors from '../../../assets/investors.png';
import roi from '../../../assets/roi.png';
import './profitable.css';
function Item() {
  return (
    <div className="profitable__item">
      <div className="profitable__data">
        <img className="profitable__data-img" src={calendar} alt="" />
        <p className="profitable__data-text">26 Oct 2018 18:42 PM</p>
      </div>
      <div className="profitable__project">
        <img className="profitable__project-img" src={project} alt="" />
        <p>Alberchtstrabe 335</p>
      </div>
      <div className="profitable__investors">
        <img className="profitable__investors-img" src={investors} alt="" />
        <p>4365</p>
      </div>
      <div className="profitable__funded">
        <p className="profitable__funded-text">
          €670000/<span className="profitable__funded-text-red">€670000</span>
        </p>
        <div className="profitable__funded-line" />
      </div>
      <div className="profitable__roi">
        <img className="profitable__roi-img" src={roi} alt="" />
        <p className='profitable__roi-text'>€987000</p>
      </div>
      <div className="profitable__net">
        <img className="profitable__net-img" src={amounimg} alt="" />
        <p className='profitable__net-text'>€ 23987.87</p>
      </div>
    </div>
  );
}

export default Item;
