import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCoins from '../Common/ListCoins';

class CoinDeleted extends Component {

  render() {
    return <div className="App">
        <ListCoins  coins={this.props.coins}/>
      </div>;
  }
}

CoinDeleted.propTypes = {
  coins: PropTypes.array.isRequired
}

export default CoinDeleted;
