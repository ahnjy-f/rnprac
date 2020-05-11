import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// ステートのマッピング
function mappingState(state){
    return state;
}

// Appコンポーネント
class App2 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Redux</h1>
                <Message />
                <Button />
            </div>
        );
    }
}

// ストアのコネクト
App2 = connect()(App2);

// メッセージ表示のコンポーネント
class Message extends Component {
    style = {
        fontSize:"20pt",
        padding: "20px 5px"
    }

    render(){
        return(
            <p style={this.style}>
                {this.props.message}: {this.props.counter}
            </p>
        );
    }
}

//ストアのコネクト
Message = connect(mappingState) (Message);

//
class Button extends Component {
    style = {
        fontSize:"16pt",
        padding:"5px 10px",
        margin: "5px"
    }

    constructor(props) {
        super(props);
        this.doIncrease = this.doIncrease.bind(this);
        this.doDecrease = this.doDecrease.bind(this);
        this.doZero = this.doZero.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    //　ボタンクリックでディスパッチを実行
    // doAction(e){
    //     if (e.shiftKey) {
    //         this.props.dispatch({ type:'DECREMENT' });
    //     } else {
    //         this.props.dispatch({ type:'INCREMENT' });
    //     }
    // }
    doIncrease(){
        this.props.dispatch({ type:'INCREMENT' });
    }
    doDecrease(){
        this.props.dispatch({ type:'DECREMENT' });
    }
    doZero(){
        this.props.dispatch({ type:'ZERO' });
    }

    doAction(e){
        if ( e.target.value === "+" ){
            this.props.dispatch({ type:'INCREMENT' });
        } else if ( e.target.value === "-" ){
            this.props.dispatch({ type:'DECREMENT' });
        } else if ( e.target.value === "0" ){
            this.props.dispatch({ type:'ZERO' });
        }
    }

    render(){
        return(
            <div>
                {/* <button style={this.style} onClick={this.doIncrease}>
                    +
                </button>
                <button style={this.style} onClick={this.doDecrease}>
                    -
                </button>
                <button style={this.style} onClick={this.doZero}>
                    0
                </button> */}
                <button style={this.style} value="+" onClick={this.doAction} >+</button>
                <button style={this.style} onClick={this.doAction} value="-">-</button>
                <button style={this.style} onClick={this.doAction} value="0">0</button>
            </div>
        );
    }
}

//ストアのコネクト
Button = connect() (Button);

export default App2;
