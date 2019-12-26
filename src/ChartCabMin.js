import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';


const data = {
  labels: ['Présidence', 'Premier ministre', 'Transition Ecologique et Solidaire', 'Culture', 'Justice', 'Solidarités et de la Santé', 'Éducation Nationale'],
  datasets: [
    {
      label: 'Total',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [100, 100, 100,100, 100, 100, 100]
    },
    {
      label: 'Femmes',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [24.14, 36.54, 35.71, 37.50, 45.45, 45.45, 40.00]
    }
  ]
};

export default class ChartCabMin extends Component {
  render() {
    return (
      <div style={{position: "relative", width: 900, height: 500}}>
        <h2>Radar Example</h2>
        <Radar data={data}
        options={{
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }

            }
        }}
        />
      </div>
    );
  }
}
