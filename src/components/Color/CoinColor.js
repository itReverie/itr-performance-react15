import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCoins from '../Common/ListCoins';

class CoinColor extends Component {

  constructor(props){
    super(props);
    this.state= {color:'#ff80ff'}
    this.onColorSelected = this.onColorSelected.bind(this);
  }

  createSelectItems() {
      let items = [ <option key='pink' value='#ff80ff'>pink</option>,
                    <option key='gray' value='#b3b3cc'>gray</option>,
                  <option key='brown' value='#cc9966'>brown</option>];
      return items;
  }

 onColorSelected(e) {
     //here you will see the current selected value of the select input
     this.setState({color:e.target.value});
 }

  render() {
    return <div className="App">
        <select type="select" onChange={this.onColorSelected} label="Color Select" >
          {this.createSelectItems()}
        </select>
        <ListCoins coins={this.props.coins} color={this.state.color} colorChanged={this.onColorSelected}/>
      </div>;
  }
}

CoinColor.propTypes = {
  coins: PropTypes.array.isRequired
}

export default CoinColor;
