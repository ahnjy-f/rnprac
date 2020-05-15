import React, { Component } from 'react';
import { connect } from 'react-redux';

class LikeView extends Component{
    

    render(){
        
        return (
            <div>
              {this.props.likebox}
            </div>
        );
    }
}

export default connect((state)=>state)(LikeView);