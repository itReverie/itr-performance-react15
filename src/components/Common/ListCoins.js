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
          // filter() method creates a new array with all elements that pass the test
           this.setState(prevState => ({
               coins: prevState.coins.filter(coin => coin.id !== id )
           }));
        }

  componentWillMount(){
      this.delete = this.delete.bind(this);
  }

 render(){
    return (<div>{this.state.coins.map((coin, index) => {
      const key= coin.id;
      return <Coin
      key ={coin.id}
      id={coin.id}
      name={coin.name}
      delete={this.delete}
      />}
    )}</div>);
 }
}

ListCoins.propTypes = {
  coins: PropTypes.array.isRequired

};

  export default ListCoins;
