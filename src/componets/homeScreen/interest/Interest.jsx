import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './interesr.css';
import arrowmoney from '../../../assets/arrowmoney.png';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 10,
      ticks: {
        size: 10,
        autoSkip: false,
        stepSize: 1,
        color: '#43fcff',
        callback: (value) => value + '%',
        font: {
          size: 10.5,
          weight: 200,
        },
      },
    },
    x: {
      ticks: {
        color: '#43fcff',
        font: {
          size: 6.5,
          weight: 200,
        },
      },
    },
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [3, 4, 3, 5, 6.5, 5, 5, 7, 4, 5, 9, 6],
      borderColor: '#43fcff',
      backgroundColor: '#FA544D',
    },
  ],
};

function Interest() {
  return (
    <div className="interest">
      <h1 className="interest__title">Interesr</h1>
      <p className="interest__text">Average interest by all projects</p>
      <div className="interest__background">
        <Line options={options} data={data} />
        <div className="interest__statistics">
          <img className='interest__statistics-img' src={arrowmoney} alt="" />
          <p className='interest__statistics-text'>Last month</p>
          <p className='interest__statistics-number'>5.7%</p>
        </div>
      </div>
    </div>
  );
}

export default Interest;
