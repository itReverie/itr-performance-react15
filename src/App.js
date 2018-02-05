import React, { Component } from 'react';
import './App.css';
import './components/Common/Coin.css';
import CoinColor from "./components/Color/CoinColor";

import Perf from 'react-addons-perf';
//Expose tools on window object
window.Perf=Perf;

const coins = [
  { id: 1, name: "LiteCoin", url: "http://itreverie.com/images/LTC.svg" },
  { id: 2, name: "Bitcoin", url: "http://itreverie.com/images/BTC.svg" },
  { id: 3, name: "Zeit", url: "http://itreverie.com/images/ZEIT.svg" },
  { id: 4, name: "D", url: "http://itreverie.com/images/BTC.svg" },
  { id: 5, name: "E", url: "http://itreverie.com/images/BTC.svg" }
];

class App extends Component {

  render() {
    return <div>
        <h1 className="App-title">
          Welcome to React Performance with React 15
        </h1>
        <CoinColor coins={coins} />
      </div>;
  }
}

export default App;
