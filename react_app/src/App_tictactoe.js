import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Message from './tictactoe/Message';
import Board from './tictactoe/Board';

class App extends Component {

    p = {
        color: "gray",
        fontSize: "5pt"
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Tic-Tac-Toe</h1>
                <hr />
                <Message />
                <Board />
                <div>
                    <p style={this.p}> o picture : <a href='https://pngtree.com/so/검정'>검정 png from pngtree.com</a> </p>
                    <p style={this.p}> x picture : <a href='https://pngtree.com/so/x'>x png from pngtree.com</a> </p>
                    <p style={this.p}> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> </p>
                </div>
            </div>
        );
    }
}

export default connect() (App);
