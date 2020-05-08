import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
          flg:true,
        };
        this.doAction = this.doAction.bind(this);
      }
    
      doAction(){
        this.setState((state)=>({
          flg: !state.flg
        }));
      }
    
      render() {
      return <div>
          <h1>ON/OFF BUTTON</h1>
          {this.state.flg ?
            <button onClick={this.doAction}>ON</button>
            :
            <button onClick={this.doAction}>OFF</button>
          }
        </div>;
      }
}

export default Toggle;

