import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-logo">
            <h2>Welcome to</h2>
            <h2>Chart.JS</h2>
          </div>
          <div className="nav-container">
            <nav className="nav-bar">
              <Link className="nav-link" to="/">Bar Chart</Link>
              <Link className="nav-link" to="line">Line Chart</Link>
              <Link className="nav-link" to="donut" >Doughnut Chart</Link>
              <Link className="nav-link" to="bubble">Bubble Chart</Link>
            </nav>
          </div>
        </div>
        <div className="children-container">
          Look at this neat chart!
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
