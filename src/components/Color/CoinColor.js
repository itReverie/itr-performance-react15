import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCoins from '../Common/ListCoins';

class CoinColor extends Component {

  createSelectItems() {
      let items = [<option key='pink' value='#ff66ff'>pink</option>,<option key='green' value='#33cc33'>green</option>];         
      // for (let i = 0; i <= this.props.maxValue; i++) {
      //      items.push();
      //      //here I will be creating my options dynamically based on
      //      //what props are currently passed to the parent component
      // }
      return items;
  }

 onDropdownSelected(e) {
     console.log("THE VAL", e.target.value);
     //here you will see the current selected value of the select input
 }

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to React Performance with React 15
          </h1>
        </header>
        <Input type="select" onChange={this.onDropdownSelected} label="Color Select" multiple>
       {this.createSelectItems()}
  </Input>
        <ListCoins  coins={this.props.coins}/>
      </div>;
  }
}

CoinColor.propTypes = {
  coins: PropTypes.array.isRequired
}

export default CoinColor;
