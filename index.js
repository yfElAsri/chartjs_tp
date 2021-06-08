// Import stylesheets
import './style.css';
import Chart from 'chart.js';

import * as DataSet1 from './data/AU-city-population-2018.json';


function strRmv(str, char) {
  while (str.indexOf(char) > -1) str = str.replace(char, '');
  return str;
}

var ds1_city = DataSet1.data.slice().map(x => x[1]);
var ds1_pop = DataSet1.data.slice().map(x => parseInt(strRmv(x[2], ',')));
let chart1 = document.getElementById('chart1').getContext('2d');

let barChart = new Chart(chart1, {
  type: 'bar',
  data: {
    labels: ds1_city,
    datasets: [
      {
        label: DataSet1.labels[2],
        data: ds1_pop,
        backgroundColor: '#AAA',
        hoverBackgroundColor: 'red'
      }
    ]
  },
  options: {}
});

function randPow(n = 10, k = 1.661) {
  return Math.floor(n * Math.pow(Math.random(), k));
}

var ds2_max = 15;
var ds2_len = 100000;
var ds2_values = [];
var ds2_unique = Array(ds2_max)
  .fill(null)
  .map((x, i) => i);
var ds2_counts = Array(ds2_max).fill(0);

for (var i = 0; i < ds2_len; ++i) {
  // 10, 1.661 -> 0 will be 25%
  let x = randPow(ds2_max, 1.5);

  ds2_values[i] = x;
  ds2_counts[ds2_unique.indexOf(x)]++;
}

ds2_unique = ds2_unique.map(
  x => x + '= ' + Math.round(1000 * (ds2_counts[x] / ds2_len)) / 10 + '%'
);

let chart2 = document.getElementById('chart2').getContext('2d');
let barChart2 = new Chart(chart2, {
  type: 'pie',
  data: {
    labels: ds2_unique,
    datasets: [
      {
        data: ds2_counts,
        backgroundColor: '#BBB',
        hoverBackgroundColor: 'red'
      }
    ]
  },
  options: {}
});

let chart10 = document.getElementById('chart10').getContext('2d');
let linechart10 = new Chart(chart10, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Nb de demande en 2020',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }
});

let chart11 = document.getElementById('chart11').getContext('2d');
let barchart11 = new Chart(chart11, {
  type: 'bar',
  data: {
    labels: [
      'HAVRE(LE)',
      'ANVERS',
      'MARSEILLE',
      'FOS-SUR-MER',
      'MONTOIR-DE-BRETAGNE',
      'ROTTERDAM',
      'DUNKERQUE',
      'ZEEBRUGGE',
      'BASSENS'
    ],
    datasets: [
      {
        label: 'Port par feq',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  }
});

let chart12 = document.getElementById('chart12').getContext('2d');
let piechart12 = new Chart(chart12, {
  type: 'doughnut',
  data: {
    labels: [
    '40',
    '20',
    '40HC'
  ],
    datasets: [{
    label: 'Type TC',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  }
});

