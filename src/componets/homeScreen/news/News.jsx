import React from 'react';
import Item from './Item';
import search from '../../../assets/search.png';
import './news.css';

function News() {
  return (
    <div className="news">
      <div className="news__title">
        <div className="news__title-text">
          <h1>News</h1>
          <p>News about of changing the Dlendo portfolio</p>
        </div>
        <div className="news__title__search">
          <form className="news__form">
            <img className="news__title__search-img" src={search} alt="" />
            <input
              className="news__title__search-input"
              placeholder="Search by keyword"
              type="text"
            />
          </form>
        </div>
      </div>
      <div className="news__info">
    <Item />
    <Item />
    <Item />

    <Item />
    <Item />
    <Item />

    <Item />
    <Item />
    <Item />
      </div>
    </div>
  );
}

export default News;
