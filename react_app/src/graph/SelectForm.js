import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGraph } from './Store';

class SelectForm extends Component {
    input = {
        fontSize: "16pt",
        color: "#006",
        padding: "1px",
        margin: "5px 10px"
    }
    btn = {
        fontSize: "14pt",
        color: "#006",
        padding: "2px 10px"
    }

    constructor(props){
        super(props);
        this.state={
            people: "20",
            amount: 0
        }
        this.doSelectChange = this.doSelectChange.bind(this);
        this.doInputChange = this.doInputChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doSelectChange(e){
        this.setState({
            people: e.target.value,
            amount: this.state.amount
        });
    }

    doInputChange(e){
        this.setState({
            people: this.state.people,
            amount: parseInt(e.target.value)
        });
    }

    doAction(e){
        e.preventDefault();

        let action = addGraph(this.state.people, this.state.amount);

        console.log(this.state.people);
        console.log(this.state.amount);

        this.props.dispatch(action);
        this.setState({
            people: "20",
            amount: 0
        });
    }

    render(){
        console.log(this.props.data);

        let n = 0;
        let items = this.props.data.map((value)=>{
            
            return <option key={n++} value={ value.people }>{ value.people }</option>;
        })
        return (
            <div>
                <form onSubmit={this.doAction}>
                    <select onChange={this.doSelectChange} style={this.input}>
                        {items}
                    </select>
                    <input type="number" size="20" onChange={this.doInputChange} style={this.input} max="200" required />
                    <input type="submit" style={this.btn} value="add" />
                </form>
            </div>
        )
    }

    
}

export default connect((state)=>state)(SelectForm);
