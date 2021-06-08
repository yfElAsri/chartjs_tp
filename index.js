// Import stylesheets
import './style.css';
import Chart from 'chart.js';

import * as DataSet1 from './data/AU-city-population-2018.json';
import * as DataSet2 from './data/bloodPressure.json';
import * as DataSet3 from './data/bloodGlucose.json';




console.log( DataSet3['0'] );

let ds8 = jsonArray( DataSet3 );
let ds8_dates = ds8.slice().map( d => d.MonitorDate.split(' ')[0] );
let ds8_bgl = ds8.slice().map( d=> d.BGL );
let chart8_ctx = document.getElementById("chart6").getContext('2d');
let chart8 = new Chart( chart8_ctx, {
  type:'line',
  data: {
    labels: ds8_dates,
    datasets: 
    [ 
      { 
        label:"BGL",
        data: ds8_bgl,
        backgroundColor: 'rgb( 0, 100, 100 )',
        borderColor: 'rgb( 50, 200, 200 )',
        fill: false
      }
    ]
  },
  options: {
    legend: { display: false },
    tooltips: {
      position: 'average', // 'nearest',
      mode: 'index',
      intersect: false,
    },
	}
});












function jsonArray( obj )
{
  let a = [];
  for( let k in obj )
    if( parseInt( k ) < 50 ) a[ parseInt( k ) ] = obj[ k ]; 
  return a;
}

let chart3_ctx = document.getElementById("chart3").getContext('2d');
let ds3 = jsonArray( DataSet2 );
let ds3_dates = ds3.slice().map( d => d.DateTime.split(' ')[0] );
let ds3_bps = ds3.slice().map( d => parseInt( d.BPS ) );
let ds3_bpd = ds3.slice().map( d => parseInt( d.BPD ) );
let ds3_bpsMax = ds3.slice().map( d => parseInt( d.MaxBPS ) );
let ds3_bpsMaxVal = ds3_bpsMax.reduce( (c,v) => c>v?c:v ) + 10;
let ds3_bpsMin = ds3.slice().map( d => parseInt( d.MinBPS ) );
let ds3_bpsMinVal = ds3_bpsMin.reduce( (c,v) => c<v?c:v ) - 10;

let chart3 = new Chart( chart3_ctx, {
  type:'line',
  data: {
    labels: ds3_dates,
    datasets: 
    [ 
      { 
        label:"Upper Level",
        data: ds3_bpsMax,
        steppedLine: true,
        borderColor: 'red',
        backgroundColor: 'white',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      { 
        label:"BPS",
        data: ds3_bps,
        backgroundColor: '#509b21',
        borderColor: '#6fdb2b',
        fill: false
      },
      { 
        label:"Lower Level",
        data: ds3_bpsMin,
        steppedLine: true,
        borderColor: 'orange',
        backgroundColor: 'white',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      }
    ]
  },
  options: {
    // responsive: false,
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          min: ds3_bpsMinVal,
          max: ds3_bpsMaxVal
        }
      }]
    },
    tooltips: {
      position: 'average', // 'nearest',
      mode: 'index',
      intersect: false,
    },
	}
} );






let chart4_ctx = document.getElementById("chart4").getContext('2d');
let ds4 = jsonArray( DataSet2 );
let ds4_dates = ds4.slice().map( d => d.DateTime.split(' ')[0] );
let ds4_bpd = ds4.slice().map( d => parseInt( d.BPD ) );
let ds4_bpdMax = ds4.slice().map( d => parseInt( d.MaxBPD ) );
let ds4_bpdMaxVal = ds4_bpdMax.reduce( (c,v) => c>v?c:v ) + 10;
let ds4_bpdMin = ds4.slice().map( d => parseInt( d.MinBPD ) );
let ds4_bpdMinVal = ds4_bpdMin.reduce( (c,v) => c<v?c:v ) - 10;


let chart4 = new Chart( chart4_ctx, {
  type:'line',
  data: {
    labels: ds4_dates,
    datasets: 
    [ 
      { 
        label:"Upper Level",
        data: ds4_bpdMax,
        steppedLine: true,
        borderColor: 'red',
        backgroundColor: 'white',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      { 
        label:"BPD",
        data: ds4_bpd,
        backgroundColor: '#509b21',
        borderColor: '#6fdb2b',
        fill: false
      },
      { 
        label:"Lower Level",
        data: ds4_bpdMin,
        steppedLine: true,
        borderColor: 'orange',
        backgroundColor: 'white',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      }
    ]
  },
  options: {
    // responsive: false,
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          min: ds4_bpdMinVal,
          max: ds4_bpdMaxVal
        }
      }]
    },
    tooltips: {
      position: 'average', // 'nearest',
      mode: 'index',
      intersect: false,
    },
	}
} );



let chart5_ctx = document.getElementById("chart5").getContext('2d');
let ds5 = jsonArray( DataSet2 );
let ds5_dates = ds5.slice().map( d => d.DateTime.split(' ')[0] );
let ds5_pulse = ds5.slice().map( d => parseInt( d.Pulse ) );

let chart5 = new Chart( chart5_ctx, {
  type:'line',
  data: {
    labels: ds5_dates,
    datasets: 
    [ 
      { 
        label:"Pulse",
        data: ds5_pulse,
        backgroundColor: 'rgb( 0, 100, 100 )',
        borderColor: 'rgb( 50, 200, 200 )',
        fill: false
      }
    ]
  },
  options: {
    legend: { display: false },
    tooltips: {
      position: 'average', // 'nearest',
      mode: 'index',
      intersect: false,
    },
	}
} );


let ds6_pos_types = [];
let ds6_pos_counts = [];

ds3.slice().forEach( d => {
  if( ds6_pos_types.indexOf( d.Position ) == -1 ){
    ds6_pos_types.push( d.Position );
    ds6_pos_counts.push( 1 );
  }else{
    ds6_pos_counts[ ds6_pos_types.indexOf( d.Position ) ] ++;
  }
});
let ds6_pos_result = ds6_pos_types.slice().map( (v,i) => {
  return v + ": " + ds6_pos_counts[ i ];
} ).join( '\n' );

document.getElementById('out1').innerText = ds6_pos_result;
























function strRmv( str, char )
{
  while( str.indexOf( char ) > -1 ) 
    str = str.replace( char, '' );
  return str;
}

console.log( DataSet1 );

var ds1_city = DataSet1.data.slice().map( x => x[1] );
var ds1_pop = DataSet1.data.slice().map( x => parseInt( strRmv( x[2], ',' ) ) );
let chart1 = document.getElementById("chart1").getContext('2d');

let barChart = new Chart( chart1, 
{
  type:'bar',
  data: { 
    labels: ds1_city, 
    datasets: [ 
      {
        label: DataSet1.labels[2],
        data: ds1_pop,
        backgroundColor: '#AAA',
        hoverBackgroundColor: 'red'
      },
    ]
  },
  options: 
  {
  }
} );

function randPow( n=10, k=1.661 ) 
{
  return Math.floor( n * Math.pow( Math.random(), k ) );
}

var ds2_max = 15;
var ds2_len = 100000;
var ds2_values = [];
var ds2_unique = Array( ds2_max ).fill(null).map( (x,i) => i );
var ds2_counts = Array( ds2_max ).fill(0);;

for( var i = 0; i < ds2_len; ++i ) 
{
// 10, 1.661 -> 0 will be 25%
  let x = randPow( ds2_max, 1.5 );
  
  ds2_values[ i ] = x;
  ds2_counts[ ds2_unique.indexOf( x ) ] ++;
}

ds2_unique = ds2_unique.map( x => x + "= " + 
  Math.round( 1000 * ( ds2_counts[x]/ds2_len ) )/10 + '%' );


let chart2 = document.getElementById("chart2").getContext('2d');
let barChart2 = new Chart( chart2, 
{
  type:'pie',
  data: { 
    labels: ds2_unique, 
    datasets: [ 
      {
        data: ds2_counts,
        backgroundColor: '#BBB',
        hoverBackgroundColor: 'red'
      },
    ]
  },
  options: {}
} );



let nbdemande_chart = document.getElementById("nbdemande_chart");
let nbdemande_line = new Chart( nbdemande_chart,
{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  });