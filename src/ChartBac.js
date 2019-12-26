import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['2002', '2003', '2004', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Auteurs',
      backgroundColor: 'rgba(97, 123, 227, 0.2)',
      borderColor: 'rgba(97, 123, 227, 0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(97, 123, 227, 0.4)',
      hoverBorderColor: 'rgb(97, 123, 227, 1)',
      data: [40, 38, 47, 31, 39, 20, 48, 56, 28, 36, 61, 46, 52, 75, 57, 83, 41, 0]
    },
    {
      label: 'Autrices',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [7, 5, 3, 4, 1, 7, 3, 1, 4, 2, 2, 2, 4, 3, 1, 14, 8, 0]
    }
  ]
};

export default class ChartBac extends Component {
  render() {
      return (
        <div style={{position: "relative", width: 800, height: 450}}>
          <h2>Occurrence annales Bac</h2>
          <Bar
            data={data}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      );
    }
}
