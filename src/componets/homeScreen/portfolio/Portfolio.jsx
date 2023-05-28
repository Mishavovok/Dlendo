import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Color from './Color';
import './portfolio.css';

ChartJS.register(ArcElement, Tooltip);
const options = {
  cutout: [10, 75, 60, 50],
  plugins: {
    tooltip: {
      
    }
  }
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
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://644e7d724e86e9a4d8fa22f8.mockapi.io/color')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <p className="portfolio__text">Dlendos portfolio segmentation</p>

      <div className="portfolio__info">
        <div className="portfolio__info-circle">
          <p className="portfolio__info-circle-text">Whole poryfolio</p>
          <div className="portfolio__circle">
            <Doughnut options={options} data={data} />
          </div>
        </div>
        <div className="portfolio__info-items">
          {items.map((obj) => (
            <Color key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
