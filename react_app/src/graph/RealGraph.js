import React, { Component } from 'react';
import { connect } from 'react-redux';
import { XYPlot, LineSeries , HorizontalGridLines,
VerticalGridLines, XAxis, YAxis } from "react-vis"
import '../App.css';

class RealGraph extends Component { 

    render(){
        var bigdata = [];
        var picturedata = [];
        let data = this.props.data;

        for ( let i =0; i<7; i++){
            picturedata.push({x:data[i].amount, y:data[i].people})
            bigdata.unshift([picturedata[i]])
        }
        
        console.log(picturedata);
        console.log(bigdata);

        return(
            <div>
                <XYPlot xType={"ordinal"} yType={"ordinal"} width={500} height={350}>
                    <LineSeries data={picturedata} strokeStyle={"solid"} stroke={"#0000ff"} />
                    <HorizontalGridLines/>
                    <VerticalGridLines/>
                    <XAxis title={"amount"} />
                    <YAxis title={"people"} />
                </XYPlot>
            </div>
        );
    }

}

export default connect((state)=>state)(RealGraph);