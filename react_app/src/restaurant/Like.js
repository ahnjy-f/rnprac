import React, { Component } from 'react';
import { connect } from 'react-redux';

class Like extends Component{

    constructor(props){
        super(props);
        this.state={
            likingdata: []
        }

        this.doChange = this.doChange.bind(this);
    }

    doChange(e){
        console.log(e.target.value);
        let targetdata = e.target.value;
        this.setState({
            likingdata: targetdata
        })
    }
    
    render(){
        // let n=1;
        // let likingdata;
        // likingdata = this.props.likebox.map((value) => {
            
        //     return(
      
        //             <tr>
        //                 <th>No.{n++}</th>
        //                 <td>気に入った店の名前: {value.name}</td>
        //                 <td>気に入った店のリンク: {value.url}</td>
        //             </tr>
              
        //     );
        // })

        return(
            <button value={this.props.value} onclick={this.doChange}>♡</button>
        )
    }
}


export default connect((state)=>state)(Like);