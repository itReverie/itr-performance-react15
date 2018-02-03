import React, { Component } from 'react';

export default class Coin extends Component{
    render(){
        return <div style={{backgroundColor:'#aaaaaa', margin:'20px', width:'100px', height:'50px'}} >{this.props.name}</div>
    }
}