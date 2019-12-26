import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Victor Hugo', 'Émile ZOLA', 'Gustave FLAUBERT', 'Molière', 'Charles BAUDELAIRE', 'Balzac'],
  datasets: [
    {
      label: "Occurence de autrice dans les annales de bac",
      backgroundColor: 'rgb(97, 123, 227, 0.2)',
      borderColor: 'rgba(97, 123, 227, 0.9)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(97, 123, 227, 0.4)',
      hoverBorderColor: 'rgb(97, 123, 227, 1)',
      data: [63, 29, 24, 18, 17, 16, 0]
    }
  ]
};


export default class ChartAuteurs extends Component {
  render() {
    return (
      <div style={{position: "relative", width: 700, height: 550}}>
        <h3>Occurence de l auteur dans les annales de bac entre 2002 et 2008 </h3>
        <HorizontalBar
        data={data}
        />
      </div>
    );
  }
}

