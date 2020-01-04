import React, { Component } from 'react';
import PieChartCustomLegend from './PieChartCustomLegend';


export default class ChartCAC40 extends Component {
    render() {
    return (
        <div>
          <h5> Représentation des femmes à la présidence des entreprises du CAC40 </h5>
          <PieChartCustomLegend
            data={{
              labels: [
              "Président",
              "Présidente"],
              datasets: [
              {
                Label: "Représentation des femmes à la présidence des entreprises du CAC40",
                data: [38,2],
                backgroundColor: [
                "#D6E5FA",
                "#FDF6FB",
                ]
              }
              ]
            }}
            height={50}
          />
        </div>
      )
  }
}
