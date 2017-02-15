import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 10, y: 9.8, r: 5 }, { x: 10.5, y: 11, r: 8 }, { x: 11, y: 10, r: 6 }, { x: 10.8, y: 9, r: 6 }, { x: 9, y: 10.4, r: 7 }, { x: 9.3, y: 10.9, r: 4 }, { x: 8, y: 10.2, r: 8 }, { x: 8.5, y: 9.3, r: 8 }, { x: 12, y: 9.4, r: 9 }, { x: 13, y: 10, r: 10 },
        { x: 28, y: 20, r: 11 }, { x: 30, y: 21, r: 5 }, { x: 31, y: 22, r: 6 }, { x: 32, y: 23, r: 7 }, { x: 33, y: 24, r: 8 }, { x: 29, y: 23, r: 9 }, { x: 27, y: 22, r: 10 }, { x: 26, y: 24, r: 11 },
        { x: 18, y: 16.5, r: 10 }, { x: 22.2, y: 17, r: 3 }, { x: 19.5, y: 17.1, r: 14 }, { x: 19, y: 15, r: 11 }, { x: 21, y: 16.4, r: 10 }, { x: 20.8, y: 14.9, r: 7 }, { x: 20, y: 16, r: 17 }
      ]
    }
  ]
};

class BubbleComponent extends Component {



  render() {
    return (
      <div>
        <Bubble data={data} />
      </div>
    )
  }
}

export default BubbleComponent