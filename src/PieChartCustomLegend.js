import React, { Component, PureComponent } from 'react';
import { Pie } from "react-chartjs-2";


class Legend extends PureComponent {
  render() {
    let legend = this.props.legend
    // .filter(item => item.props.dataQuantity > 0 )
    // .sort((a,b) => b.props.dataQuantity - a.props.dataQuantity);
      return (
        <div className="d-none">
            <ul className="legend-group list-group">
              {legend}
            </ul>
        </div>
        )
    }
  }

export default class PieChartCustomLegend extends Component {

constructor(props) {
    super(props);

    this.state = {
      legend: []
    }
  }



  componentDidMount() {
    const legend = this.chart && this.chart.chartInstance.generateLegend()
    this.setState({legend});
  }




  legendMarkup = chart => {
    const legendSet = chart.data.datasets[0];
    const legend = chart.data.map((set,i) => {
      let datapoint = chart.data.labels[i];
      if (datapoint) {
        return (
            <li
              id={`${legendSet.Label.replace(/\s/g,"")}`}
              key={datapoint}
              onClick={e => this.handleLegendClick(e)}
              className="legend-group--item list-group-item"
              dataIdx={i}
              dataQuantity={legendSet.data[i]}
              style= {{ borderColor: legendSet.backgroundColor[i] }}
            >

                {legendSet.data[i]}
                {datapoint}
            </li>
          )
      } else return "";
    });
    return legend;
  }

  handleLegendClick = e => {
    let inst = this.chart.chartInstance;
    let el = document.getElementById(e.currentTarget.id);

    if (el.classList.contains("btn-disabled")) {
      el.classList.remove("btn-disabled")
    } else {
      el.classList.add("btn-disabled")
    }

    let t = el.attributes("dataIdx")
    let meta = inst.config.data.datasets[0]._meta;
    let first = Object.keys(meta)[0];

    meta[first].data[t].hidden = !meta[first].data[t].hidden;
    inst.update();
  }

  render() {

    const { legend } = this.state;

    return (
      <div style={{position: "relative"}}>
         <Pie
          height={this.props.height}
          ref={el => (this.chart = el )}
          data= {this.props.data}
          options={{
            legend: {
              display: false
            },
            LegendCallBack: this.LegendMarkup
          }}
         />

         <Legend
          ref={el => (this.legend = el )}
          legend={legend}
          handleLegendClick={e => this.handleLegendClick(e) }
         />
      </div>
    )
  }
}
