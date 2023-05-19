import React from 'react';
import Item from './Item';
import left from '../../../assets/left-arrow.png';
import right from '../../../assets/right-arrow.png';
import './profitable.css';

function Profitable() {
  return (
    <div className="profitable">
      <h1>Profitable projects</h1>
      <p>List of Dlendo profitable projects</p>
      <div className="profitable__background">
        <div className="profitable__scroll">
          <div className="profitable__info">
            <h1>Data</h1>
            <h1>Project</h1>
            <h1>Investors</h1>
            <h1>Funded amount</h1>
            <h1>ROI</h1>
            <h1>Net profit</h1>
          </div>
          <Item />
        </div>

        <p className="profitable__latest">Latest actions (Showing 01 to 06 of 765)</p>
        <div className="profitable__page">
          <p className="arrow__radius">
            <img className="arrow__radius-img" src={left} alt="" />
          </p>
          <p className="profitable__page-number number-activ">1</p>
          <p className="profitable__page-number">2</p>
          <p className="profitable__page-number">4</p>
          <p className="profitable__page-number">...</p>
          <p className="profitable__page-number">12</p>

          <p className="arrow__radius">
            <img className="arrow__radius-img" src={right} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profitable;
