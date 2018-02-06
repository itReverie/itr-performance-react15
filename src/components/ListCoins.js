import React, { Component } from "react";
import Coin from "./Coin";
import PropTypes from 'prop-types';

class ListCoins extends Component{

  constructor(props){
        super(props);
        this.state = {
          coins: this.props.coins
        }

     }

     delete(id){
           this.setState(prevState => ({
               coins: prevState.coins.filter(coin => coin.id !== id )
           }));
        }

  componentWillMount(){
      this.delete = this.delete.bind(this);
  }

 render(){
    return (<div>{this.state.coins.map(coin => <Coin
      key={coin.id}
      coin = {coin}
      delete={this.delete}
      />)}</div>);
 }
}

ListCoins.propTypes = {
  coins: PropTypes.array.isRequired

};

  export default ListCoins;
