import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import hands from '../../../assets/hands.png';
import './portfolio.css';

ChartJS.register(ArcElement, Tooltip);
const options = {
  cutout: [10, 75, 60, 50],
};
export const data = {
  labels: [],
  datasets: [
    {
      data: [0],
      borderColor: '#545a7c',
      weight: 1,
      borderWidth: 1,
    },
    {
      data: [1],
      borderColor: '#545a7c',
      weight: 0,
      borderWidth: 1,
    },
    {
      label: '# of Votes',
      data: [10, 10, 10, 10, 10, 20, 70, 10, 10],
      backgroundColor: [
        '#7eff45',
        '#ab45ff',
        '#fa544d',
        '#4e7cff',
        '#ffb100',
        '#ff45d4',
        '#43fcff',
        '#f8ff45',
        '#51358e',
      ],
      borderWidth: 0.01,
      borderColor: '#545a7c',
    },
    {
      data: [1],
      borderColor: '#545a7c',
      weight: 0,
      borderWidth: 2,
    },
  ],
};
function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <p className="portfolio__text">Dlendos portfolio segmentation</p>

      <div className="portfolio__info">
        <div className="portfolio__info-circle">
          <p className='portfolio__info-circle-text'>Whole poryfolio</p>
          <div className="portfolio__circle">
            <Doughnut options={options} data={data} />
          </div>
          <div className="portfolio__circle-progect">
            <span className="portfolio__circle-progect-color"></span>
            <p className="portfolio__circle-text">€ 1332124</p>
          </div>
        </div>
        <div className="portfolio__info-items">
          <div className="portfolio__info__item-color">
            <p className="portfolio__info__item-color-text">All</p>
            <span className="portfolio__info__item-color-1 active__color"></span>
            <span className="portfolio__info__item-color-2"></span>
            <span className="portfolio__info__item-color-3"></span>
            <span className="portfolio__info__item-color-4"></span>
            <span className="portfolio__info__item-color-5"></span>
            <span className="portfolio__info__item-color-6"></span>
            <span className="portfolio__info__item-color-7"></span>
            <span className="portfolio__info__item-color-9"></span>
          </div>
          <div className="portfolio__info-item">
            <div className="portfolio__info__item-text">
              <h5 className="portfolio__info__item-text-1">Project</h5>
              <h5 className="portfolio__info__item-text-1">Invested</h5>
            </div>
            <div className="portfolio__info-neme">
              <span className="portfolio__info-color"></span>
              <p className="portfolio__info-text">Alberchtstrabe</p>
              <p className="portfolio__info-number">€154000</p>
            </div>
            <div className="portfolio__info-neme">
              <img className="portfolio__info-img" src={hands} alt="" />
              <p className="portfolio__info-text">All projects</p>
              <p className="portfolio__info-number">€423000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
