import React, { Component } from 'react';
import { connect } from 'react-redux';
import pstore from '../index';

class AllDelForm extends Component {
    check = {
        margin: "5px 0px"
    }

    label = {
        fontSize: "12pt",
        color: "#006",
        padding: "2px 10px"
    }

    constructor(props){
        super(props);
        this.doAllDelete = this.doAllDelete.bind(this);
    }

    doAllDelete(e){
        pstore.purge();
        pstore.flush();
    }

    render(){
        return(
            <div>
                <label style={this.label}>
                    <input type="button" id="all_delete" size="40" onClick={this.doAllDelete} value="All_Delete" style={this.btn} />
                </label>
            </div>
        );
    }
}

export default connect((state)=>state)(AllDelForm);