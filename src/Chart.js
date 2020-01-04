import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1945", "1946", "1951", "1956", "1958",
        "1962", "1967", "1968", "1973", "1978",
        "1981", "1986", "1988", "1993", "1997", "2002", "2007",
        "2012", "2017"],
        datasets: [
          {
            label: "Nombre de femmes députées",
            backgroundColor: "rgb(236, 112, 127)",
            data: [33, 30, 22, 19, 8, 8, 11, 10, 12, 21, 36, 34, 33, 35, 63, 71, 107, 155, 224]
          },
          {
            label: "Nombre total de députés",
            backgroundColor: "rgb(97, 123, 227)",
            data: [586, 586, 627, 627, 579, 482, 487, 487, 490, 491, 491, 577, 577, 577, 577, 577, 577, 577, 577]
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
        <h5> Représentation des femmes parmi les députés </h5>
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
