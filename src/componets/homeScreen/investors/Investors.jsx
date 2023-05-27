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

ChartJS.defaults.font.size = 9;
const options = {
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
      pointRadius:10,
      usePointStyle: true,
      boxWidth: 30,
      boxHeight:20,
      borderWidth:1,
      titleColor: '#8186AF',
      backgroundColor: '#090B32',
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
              context.parsed.y,
            );
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        color: '#43fcff',
        font: {
          // size:  window.innerWidth > 1300 ? 10:20,
          family: 'Montserrat',
          fontweight: 400,
        },
      },
    },
    y: {
      min: 200,
      max: 1000,
      ticks: {
        color: '#43fcff',
        stepSize: 200,
        font: {
          family: 'Montserrat',
          fontweight: 400,
        },
      },
    },
  },
};

export const data = {
  labels,

  datasets: [
    {
      type: 'line',
      label: '',
      borderColor: '#43fcff',
      backgroundColor: '#FA544D',
      borderWidth: 1.5,
      pointRadius: 4,
      fill: false,
      data: [950, 600, 800, 400, 800, 950, 950, 600, 800, 400, 500, 600],
    },
    {
      type: 'bar',
      backgroundColor: '#43fcff',
      barThickness: 7,
      borderRadius: 20,
      borderColor: 'white',
      borderWidth: 1,

      data: [950, 600, 800, 400, 800, 950, 950, 600, 800, 400, 500, 600],
    },
  ],
};
function Investors() {
  function responsiveFont() {
    if (window.outerWidth > 2400) {
      ChartJS.defaults.font.size = 18;
    }
    if (window.outerWidth < 2400 && window.outerWidth > 1899) {
      ChartJS.defaults.font.size = 13;
    }
    if (window.outerWidth < 1899 && window.outerWidth > 1799) {
      ChartJS.defaults.font.size = 12;
    }
    if (window.outerWidth < 1799 && window.outerWidth > 1699) {
      ChartJS.defaults.font.size = 10;
    }
    if (window.outerWidth < 1699 && window.outerWidth > 1400) {
      ChartJS.defaults.font.size = 9;
    }
    if (window.outerWidth < 1400 && window.outerWidth > 989) {
      ChartJS.defaults.font.size = 8;
    }
  }

  return (
    <div className="investors">
      <h1 className="investors__title">Investors</h1>
      <p className="investors__text">Total active investors by month</p>
      <div className="investors__background">
        <Chart onResize={responsiveFont()} type="bar" options={options} data={data} />
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
