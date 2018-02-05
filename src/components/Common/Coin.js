import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Coin.css';
import shallowCompare from 'react-addons-shallow-compare';

const buttonCoin ={
  backgroundColor:'#aaaaaa',
  margin:'20px',
   width:'100px',
    height:'50px'
}

export default class Coin extends PureComponent{


  componentWillMount() {
    //OK this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeleteClick = this.props.delete.bind(this,this.props.id)
  }


  // handleDeleteClick(event) {
  //   console.log(event);
  //   console.log(this);
  //   const targetKey = this.props.id;
  //   this.props.delete.bind(this,targetKey)
  //   //this.props.onDeleteClick(event, targetKey);
  // }

  //shouldComponentUpdate(nextProps, nextState){
  //     //if we just pass FALSE it will render but does not allow us to interact as the component is not connected with the tree
  //     return false;
  //     //If we pass TRUE it will rerender everytime our state and props change are updated.
  //     return true;
  //     //To solve the issue we should compare current and next props as well as current and previosu state
  //     return ((this.state !== nextState) && (this.props !== nextProps));//(this.state !== nextState) || (this.props !== nextProps)
 //      return shallowCompare(this, nextProps, nextState);
  //}

  //this.handleDeleteClick
//onClick={this.props.delete.bind(this,this.props.id)}
    render(){
        return <button style={buttonCoin}
        onClick={this.handleDeleteClick}>
                  {this.props.name}
               </button>
    }
}


Coin.propTypes={
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
}
