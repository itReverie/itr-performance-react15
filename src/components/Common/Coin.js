import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import './Coin.css';
//import shallowCompare from 'react-addons-shallow-compare';
import styled from 'styled-components';


export default class Coin extends PureComponent{

  componentWillMount() {
    //OK this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeleteClick = this.props.delete.bind(this,this.props.id)
  }

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

      // let buttonCoin  = (color) => ({
      //   backgroundColor:color,
      //   margin:'20px',
      //   width:'100px',
      //   height:'50px'
      // });

      const CoinBox = styled.div`
  width: 100px;
  margin: 20px;
  background: papayawhip;
`;
      //className="button-coin"
//style={buttonCoin(this.props.color)}
//style={{backgroundColor:'#aaaaaa', margin:'20px', width:'100px', height:'50px'}}
        return <CoinBox>
            <p>{this.props.name}</p>
            <img src={this.props.url} alt={this.props.name} onClick={this.handleDeleteClick} style={{ width: "100px", height: "50px" }} />
          </CoinBox>;
    }
}


Coin.propTypes={
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
  color: PropTypes.string
}
