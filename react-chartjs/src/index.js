import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import BubbleChart from './BubbleChart';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={BarChart} />
      <Route path="line" component={LineChart} />
      <Route path="donut" component={DoughnutChart} />
      <Route path="bubble" component={BubbleChart} />
      
    </Route >
  </Router>,
  document.getElementById('root')
);
