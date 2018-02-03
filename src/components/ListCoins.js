import React, { Component } from "react";
import Coin from "./Coin";
import PropTypes from 'prop-types';


class CoinsList extends Component{
 render(){
    return (<div>{this.props.coins.map(coin => <Coin name={coin.name}/>)}</div>);
 }
}

CoinsList.propTypes = {
  coins: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

  export default CoinsList;