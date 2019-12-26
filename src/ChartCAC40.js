import React, { Component } from 'react';
import PieChartCustomLegend from './PieChartCustomLegend';


export default class ChartCAC40 extends Component {
    render() {
    return (
        <div>
          <h1> Représentation des femmes à la présidence des entreprises du CAC40 </h1>
          <PieChartCustomLegend
            data={{
              labels: [
              "Président",
              "Présidente"],
              datasets: [
              {
                Label: "Représentation des femmes à la présidence des entreprises du CAC40",
                data: [39,1],
                backgroundColor: [
                "#D6E5FA",
                "#FDF6FB",
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
