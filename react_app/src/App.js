import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Item from './restaurant/Item';
import View from './restaurant/View';

import LikeView from './restaurant/LikeView';


class App extends Component{

    render(){
        // let jsondata;
        // fetch('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=bfce39765f3edea25de5ee1cd5a8003a&takeout=1').then(function(response) {
        //     let json = response.json();
        //     console.log(json);
        // });

        return(
            <div>
               <div>
                   <h1>Restaruant 検索</h1>
                </div>
                <hr />
                <LikeView />
                <hr />
                <Item />
                <hr />
                <View />
            </div>
        );
    };
}

export default connect() (App);
