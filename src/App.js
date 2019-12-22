import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "Video",
            backgroundColor: "rgba(24, 24, 24, 0.8)",
            data: [1, 3, 4, 56, 57, 67, 80]
          },
          {
            label: "Audio",
            backgroundColor: "rgba(255, 0, 255, 0.8)",
            data: [7, 23, 9, 2, 19, 45, 25]
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
      let colors = ["rgba(24, 24, 24, 0.8)", "rgba(255, 0, 255, 0.8)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = colors[i];
        set.borderWidth = 2;
      });
    }

    return data;
  }

  render() {
    return (
      <div style={{position: "relative", width: 800, height: 750}}>
        <h3> Sample of a chart </h3>
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





