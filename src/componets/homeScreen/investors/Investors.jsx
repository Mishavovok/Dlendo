import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './investors.css';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  LineController,
  BarController,
);

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const options = {
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        color: '#43fcff',
        font: {
          // size: 11,
          // weight: 200,
        },
      },
    },
    y: {
      ticks: {
        color: '#43fcff',
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: '#43fcff',
      backgroundColor: '#FA544D',
      borderWidth: 1,
      fontSize: 100,
      fill: false,
      data: [1000, 600, 800, 400, 800, 1000, 1000, 600, 800, 400, 500, 600],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: '#43fcff',
      barThickness: 7,
      borderRadius: 20,
      borderColor: 'white',
      borderWidth: 1,
      size: 10,
      data: [1000, 600, 800, 400, 800, 1000, 1000, 600, 800, 400, 500, 600],
    },
  ],
};
function Investors() {
  return (
    <div className="investors">
      <h1 className="investors__title">Investors</h1>
      <p className="investors__text">Total active investors by month</p>
      <div className="investors__background">
        <Chart type="bar" options={options} data={data} />
        <div className="investors__background-item">
          <button className="background__item-time">
            <p className="background__item-time-text">Daily</p>
            <p className="background__item-time-number">263</p>
          </button>
          <button className="background__item-time">
            <p className="background__item-time-text">Manthly</p>
            <p className="background__item-time-number">712</p>
          </button>
          <button className="background__item-time">
            <p className="background__item-time-text">Year</p>
            <p className="background__item-time-number">712</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Investors;
