import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

export default class ChartAcademiefrancaise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1946", "1971", "2001", "2004", "2008",
        "2011", "2014", "2017"],
        datasets: [
          {
            label: "Nombre de femmes sénatrices",
            backgroundColor: "rgb(236, 112, 127)",
            data: [21, 4, 35, 60, 75, 77, 87, 115]
          },
          {
            label: "Nombre total de sénateurs",
            backgroundColor: "rgb(97, 123, 227)",
            data: [314, 283, 321, 331, 343, 348, 348, 348]
          }
        ]
      }
    }
  }


  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(255, 0, 255, 0.8)");
    return gradient;
  }

  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["rgb(97, 123, 227)", "rgb(236, 112, 127)"];
      data.datasets.forEach((set, i) => {
        // set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "grey";
        set.borderWidth = 2;
      });
    }

    return data;
  }

  render() {
    return (
      <div style={{ width: 600, height: 270}}>
        <h5> Représentation des femmes au Sénat </h5>
          <Line
            options={{
              responsive: true,
              lineHeightAnnotation: {
                always: false,
                hover: true,
              }
            }}
            data={this.getChartData}
          />
      </div>
    )
  }
}
