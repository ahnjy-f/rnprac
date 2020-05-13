import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Item from './Item';

class Graph extends Component {
    th = {
        fontSize: "14pt",
        backgroundColor: "blue",
        color: "white",
        padding: "5px 10px",
        width: "50px"
    }
    td = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        minWidth: "300px"
    }

    render(){
        let data;
        let n = 0;
        
        
        data = this.props.data.map((value)=>{
            let star = '';
            const amount = Math.floor(this.props.data[n].amount / 10);

            console.log(this.props.data[n].amount / 10);

            if (amount == 0) {
                star = '';
            } else {
                for (let i=0; i<amount; i++){
                    star = star + '*';
                }
            }

            return (<tr>
                        <th style={this.th}>{ this.props.data[n++].people }</th>
                        <td> | </td>
                        <td style={this.td}>{ star }</td>
                    </tr>);
        })

        return (
            <table>
                <tbody>
                    {data}
                </tbody>
            </table>
        );
    }
}

export default connect((state)=>state)(Graph);
