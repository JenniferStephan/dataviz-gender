import React, { Component } from 'react';
import { Pie } from "react-chartjs-2";

export default class ChartCAC40 extends Component {

constructor(props) {
    super(props);

    this.state = {
      Legend: []
    }
  }



  componentDidMount() {
    const legend = this.chart && this.chart.chartInstance.generateLegend()
    this.setState
  }




  LegendMarkup = chart => {
    const legendSet = chart.data.datasets[0];
    const legend = chart.data.map((set,i) => {
      let datapoint = chart.data.labels[i];
      if (datapoint) {
        return (
            <li
              key={datapoint}
              onClick={e => this.handleLegendClick(e)}
              className="legend-group--item list-group-item"
              dataIdx={i}
              dataQuantity={legendSet.data[i]}
              style= {{ borderColor: legendSet.backgroundColor[i] }}
            >
              <mark
                style={{ backgroundColor: legendSet.backgroundColor[i] }}
              >

                {legendSet.data[i]}
              </mark>
            </li>

          )
      }
      else return "";
    });
    return legend;
  }

  render() {
    return (
      <div style={{position: "relative"}}>
         <Pie
          height={this.props.height}
          ref={el => (this.Chart = el )}
          data= {this.props.data}
          options={{
            legend: {
              display: false
            },
            LegendCallBack: this.LegendMarkup
          }}
         />
      </div>
    )
  }
}
