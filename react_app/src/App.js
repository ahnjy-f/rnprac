import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SelectForm from './graph/SelectForm';
import Graph from './graph/Graph';
// import ValueForm from './graph/ValueForm.js';

// Appコンポーネント
class App extends Component {
    td = {
        width: "250px"
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Graph</h1>
                <hr />
                <table><tbody><tr>
                    <td style={this.td}><SelectForm /></td>
                    {/* <td style={this.td}><ValueForm /></td> */}
                </tr></tbody></table>
                <Graph />
            </div>
        );
    }
}

export default connect() (App);
