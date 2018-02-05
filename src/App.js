import React, { Component } from 'react';
import './App.css';
import './components/Common/Coin.css';
import coins from './data/Coins';
import CoinManager from "./components/CoinManager";

import Perf from 'react-addons-perf';
//Expose tools on window object
window.Perf=Perf;

class App extends Component {
  
  render() {
    console.log(coins);
    return <div>
         <h1 className="App-title">
          Welcome to React Performance with React 15
        </h1>
        <CoinManager coins={coins} />
      </div>;
  }
}

export default App;
