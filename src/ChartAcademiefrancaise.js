import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

export default class ChartAcademiefrancaise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1635", "1803", "1980", "2019"],
        datasets: [
          {
            label: "Nombre de femmes",
            backgroundColor: "rgb(236, 112, 127)",
            data: [0, 0, 1, 5]
          },
          {
            label: "Nombre total d'Immortels'",
            backgroundColor: "rgb(97, 123, 227)",
            data: [39, 40, 39, 30]
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
      <div style={{position: "relative", width: 800, height: 470}}>
        <h3> Représentation des femmes à l Academie francaise </h3>
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

