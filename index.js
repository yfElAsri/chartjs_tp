// Import stylesheets
import './style.css';
import Chart from 'chart.js';

let nbDemande = document.getElementById('nbDemande').getContext('2d');
let linechartDemande = new Chart(nbDemande, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Nb de demande en 2020',
        data: [650, 590, 800, 810, 560, 550, 400],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }
});

let freqPort = document.getElementById('freqPort').getContext('2d');
let barchartPort = new Chart(freqPort, {
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
        label: 'nb de demande avec x Port',
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

let ImpvsExpo = document.getElementById('ImpvsExpo').getContext('2d');
let horibarchartImp = new Chart(ImpvsExpo, {
  type: 'bar',
  data: {
    labels: ['Import', 'Export'],
    datasets: [
      {
        axis: 'y',
        label: 'nb de demande',
        data: [1239, 1658],
        fill: false,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        borderWidth: 1
      }
    ]
  },
  options: {
    indexAxis: 'y'
  }
});

let typetc = document.getElementById('typetc').getContext('2d');
let piechartType = new Chart(typetc, {
  type: 'doughnut',
  data: {
    labels: ['40', '20', '40HC'],
    datasets: [
      {
        label: 'Type TC',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }
    ]
  }
});

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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        hoverBackgroundColor: 'red'
      }
    ]
  }
});