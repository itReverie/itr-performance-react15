import React, { Component } from 'react';
import './App.css';
import './components/Common/Coin.css';
import CoinDeleted from './components/Delete/CoinDeleted';
import CoinColor from './components/Color/CoinColor';

import Perf from 'react-addons-perf';

//Expose tools on window object
window.Perf=Perf;

const coins= [{id:1, name:'A', color:'#a2a2a2', url:''},
{id:2, name:'B', color:'#a2a2a2', url:''},
{id:3, name:'C', color:'#a2a2a2', url:''},
{id:4, name:'D', color:'#a2a2a2', url:''},
{id:5, name:'E', color:'#a2a2a2', url:''}];


class App extends Component {

constructor(props) {
  super(props);
       this.state = {coins: coins};
}

//<CoinDeleted coins={this.state.coins}/>
  render() {
    return (<div>
        <h1 className="App-title">
          Welcome to React Performance with React 15
        </h1>


      <CoinDeleted coins={this.state.coins}/>
      <CoinColor coins={this.state.coins}/>
       </div>
            )
  }
}

export default App;
