import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './interesr.css';
import arrowmoney from '../../../assets/arrowmoney.png';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      bodyFont: {
        size:15,
      },
      titleFont: {
        family:"Montserrat",
        size:14,
        weight: 'normal',
      },
      titleColor: '#8186AF',
      backgroundColor: '#090B32',
      pointRadius:10,
      usePointStyle: true,
      boxWidth: 30,
      boxHeight:20,
      borderWidth:1,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (context.parsed.y !== null) {
            label += ' ' + context.parsed.y + '%';
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 10,
      ticks: {
        // size: 10,
        autoSkip: false,
        stepSize: 1,
        color: '#43fcff',
        callback: (value) => value + '%',
        font: {
          family: 'Montserrat',
          fontweight: 100,
        },
      },
    },
    x: {
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
        // maxRotation: 0,
        // minRotation: 0,
        color: '#43fcff',
        font: {
          family: 'Montserrat',
          fontweight: 400,
        },
      },
    },
  },
};
// window.innerWidth > 2000 ? 20 : 10,
// window.addEventListener('resize', () => {
//   if (window.innerWidth < 2000) {
//     ChartJS.options.legend.labels.fontSize = 10;
//   } else {
//     ChartJS.options.legend.labels.fontSize = 20
//   }
// });

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const data = {
  labels,
  datasets: [
    {
      data: [3, 4, 3, 4, 5, 4.5, 4.5, 5.5, 4, 5, 3.5, 4.5],
      borderColor: '#43fcff',
      backgroundColor: '#FA544D',
      pointRadius: 4,
      borderWidth: 1.5,
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
          <img className="interest__statistics-img" src={arrowmoney} alt="" />
          <p className="interest__statistics-text">Last month</p>
          <p className="interest__statistics-number">5.7%</p>
        </div>
      </div>
    </div>
  );
}

export default Interest;
