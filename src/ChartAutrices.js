import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Colette', 'George Sand', 'Marguerite Duras', 'Madame de La Fayette', 'Marguerite Yourcenar', 'Simone de Beauvoir'],
  datasets: [
    {
      label: "Occurence de autrice dans les annales de bac",
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [10, 9, 8, 5, 5, 3, 0]
    }
  ]
};


export default class ChartAutrices extends Component {
  render() {
    return (
      <div style={{position: "relative", width: 700, height: 450}}>
        <h3>Occurence de l autrice dans les annales de bac entre 2002 et 2008 </h3>
        <HorizontalBar
        data={data}

        />
      </div>
    );
  }
}
