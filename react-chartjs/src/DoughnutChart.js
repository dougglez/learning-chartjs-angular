import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {browserHistory} from 'react-router';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
}

class DoughnutChart extends Component {
  handleDynamicClick(){
    browserHistory.push('donut2')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDynamicClick.bind(this)}> Make it Dynamic </button>
        <Doughnut data={data} />
      </div>
    )
  }
}

export default DoughnutChart;