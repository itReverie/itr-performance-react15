import React, { Component } from 'react';
import './App.css';
import ListCoins from './components/ListCoins';

const coins=[{id:1, name:'bitcoin', color:'#a2a2a2', url:''},
{id:1, name:'bitcoin', color:'#a2a2a2', url:''},
{id:1, name:'ethereum', color:'#a2a2a2', url:''},
{id:1, name:'ajax', color:'#a2a2a2', url:''}];

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to React Performance with React 15
          </h1>
        </header>
        <p className="App-intro" />
        <ListCoins  coins={coins}/>
      </div>;
  }
}

export default App;
