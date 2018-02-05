import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCoins from '../Common/ListCoins';

class CoinDeleted extends Component {

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to React Performance with React 15
          </h1>
        </header>
        <ListCoins  coins={this.props.coins}/>
      </div>;
  }
}

CoinDeleted.propTypes = {
  coins: PropTypes.array.isRequired
}

export default CoinDeleted;
