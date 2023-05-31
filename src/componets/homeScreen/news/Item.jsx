import React from 'react';
import news from '../../../assets/news.png';
import views from '../../../assets/views.png';
import calendar from '../../../assets/calendar.png';

import './news.css';

function Item() {
  return (
    <div className="news__item">
      <img className='news__item-img' src={news} alt="" />
      <div className="news__statistics">
        <img className='news__statistics-img' src={calendar} alt="" />
        <p className='news__statistics-date'>08/09/2020</p>
        <img className='news__statistics-img' src={views} alt="" />
        <p className='news__statistics-views'>2543</p>
        <p className='news__statistics-hashtag'>#hashtag</p>
        <h3 className='news__statistics-title'>AVW baut Holzbüros in </h3>
        <h3 className='news__statistics-text'>Hamburg-Bahrenfeld…</h3>
      </div>
    </div>
  );
}

export default Item;
