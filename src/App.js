import React, { Component } from 'react';
import './App.css';
import CoinDeleted from './components/Delete/CoinDeleted';

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


  render() {
    return (<div><CoinDeleted coins={this.state.coins}/> </div>
            )
  }
}

export default App;
