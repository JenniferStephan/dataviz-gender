import React, { Component } from 'react';
import PieChartCustomLegend from './PieChartCustomLegend';


export default class ChartCAC40 extends Component {
    render() {
    return (
        <div>
          <h1> hello </h1>
          <PieChartCustomLegend
            data={{
              labels: [
              "Saudi Arabia",
              "Russia",
              "Irak"],
              datasets: [
              {
                Label: "Oil Price",
                data: [34,54,67],
                backgroundColor: [
                "#D77FA1",
                "#FDF6FB",
                "#D6E5FA"
                ]
              }
              ]
            }}
            height={90}
          />
        </div>
      )
  }
}
