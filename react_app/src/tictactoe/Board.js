import React, { Component } from 'react';
import { connect } from 'react-redux';
import O from './O.png';
import X from './X.png';
import clicking from './clicking.png';
import { pick } from './Store'

class Board extends Component {

    td = {
        border: "1px solid black",
        margin: "0px",
        width: "100px",
        height: "100px"
    }

    // pic = 
    //     <img src={clicking} width="30px" height="30px" alt="clicking" />

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            message: "GAME START!"
        }
        this.doOChange = this.doOChange.bind(this);
        // this.doXChange = this.doXChange.bind(this);
        // this.doAction = this.doAction.bind(this);
    }

    doOChange(e) {
        console.log(e.target.id);
        this.setState({
            location: e.target.id,
            message: "GAME START!"
        });
        console.log(this.state.location);

        let action= pick(this.state.location);
        this.props.dispatch(action);
    
    }

    draw(d) {
            if ( this.props.position[d] == "O") {
                return (
                    <td id={d} style={this.td}>
                        <img src={O} width="30px" height="30px" alt="O" />
                    </td>
                );
            } else if (this.props.position[d] == "X") {
                return (
                    <td id={d} style={this.td}>
                        <img src={X} width="30px" height="30px" alt="X" />
                    </td>
                );
            } else {
                return (
                    <td id={d} style={this.td}>
                        <img src={clicking} width="30px" height="30px" alt="clicking" />
                    </td>
                );
            }
    }

    //     for (let i = 0; i < 9; i++) {
    //         if (this.props.position[i] == "O") {
    //             return (
    //                 <td id={i} style={this.td}>
    //                     <img src={O} width="30px" height="30px" alt="O" />
    //                 </td>
    //             );
    //         } else if (this.props.position[i] == "X") {
    //             return (
    //                 <td id={i} style={this.td}>
    //                     <img src={X} width="30px" height="30px" alt="X" />
    //                 </td>
    //             );
    //         } else {
    //             return (
    //                 <td id={i} style={this.td}>
    //                     <img src={clicking} width="30px" height="30px" alt="clicking" />
    //                 </td>
    //             );
    //         }
    //     }
    // }

    render() {

        return (
            <div>
                <div>
                    % {this.props.message} %
                </div>
                <hr />
                <table onClick={this.doOChange}>
                    <tr>
                        <td id="0" style={this.td} >{this.draw(0)}</td>
                        <td id="1" style={this.td} >{this.draw(1)}</td>
                        <td id="2" style={this.td} >{this.draw(2)}</td>
                    </tr>
                    <tr>
                        <td id="3" style={this.td} >{this.draw(3)}</td>
                        <td id="4" style={this.td} >{this.draw(4)}</td>
                        <td id="5" style={this.td} >{this.draw(5)}</td>
                    </tr>
                    <tr>
                        <td id="6" style={this.td} >{this.draw(6)}</td>
                        <td id="7" style={this.td} >{this.draw(7)}</td>
                        <td id="8" style={this.td} >{this.draw(8)}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default connect((state) => state)(Board);
