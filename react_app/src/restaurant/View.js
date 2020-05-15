import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './Store';

// import Like from './Like';


class View extends Component{
    th={
        backgroundColor: "#79c06e",
        color:"white",
        minWidth: "100px"
    }
    td={
        border: "1px solid black",
        height: "100px"
    }

    constructor(props){
        super(props);
        this.state={
            likedata: []
        }
        this.doChange = this.doChange.bind(this);
    }

    // doChange(e){
    //     let datanumber = parseInt(e.target.index);
    //     let likedata = this.props.jsondata[datanumber]
    //     console.log(this.props.jsondata[datanumber])
    //     this.setState({
    //         likedata: likedata
    //     })
    //     console.log(likedata)
    // }

    doChange(e){
        let blankbox = [];
        let resid = e.target.value;
        blankbox.push(resid)
        this.setState({
            likedata: blankbox
        })

        let action = add(this.state.likedata);
        this.props.dispatch(action);
        this.setState({
            likedata: []
        })
    }
    //     // let action = add(this.state.likebox);
    //     // this.props.dispatch(action);
    //     // this.setState({
    //     //     likebox: []
    //     // });

    //     let action = add(this.state.name, this.state.oneurl);
    //     this.props.dispatch(action);
    //     this.setState({
    //         name: "",
    //         oneurl: ""
    //     })
    // }

    
    render(){
        let propdata = this.props.jsondata
        // let namedata =[];
        // for (let i=0; i<9; i++){
        //     namedata.push()
        // }
        let n = 0;
        console.log(propdata)
        // let toString = Object.prototype.toString

        // console.log(toString.call(propdata))
        // console.log(this.props.jsondata.length);
        let data = propdata.map((value)=>(
                    <tr>
                        <th style={this.th}>No.{n++}</th>
                        <td style={this.td}>{value.id}</td>
                        <td style={this.td}>{value.name}</td>
                        <td style={this.td}><a href={value.url}>homepage!</a></td>
                        <td style={this.td}><img src={value.image_url.shop_image1} /></td>
                        <td style={this.td}>{value.address}</td>
                        <td style={this.td}>{value.tel}</td>
                        <td style={this.td}>{value.opentime}</td>
                        <td style={this.td}>
                            <button value={value.id} onclick={this.doChange}>
                                ♡
                            </button>
                        </td>
                        {/* <td style={this.td}><Like value={value} index={n++} /></td>  */}
                    </tr>
        ))
        // let data = namedata.map((value)=>(
        //     <tr>
        //         <th>No, {n++}</th>
        //         <td> {value[n++].name} </td>
        //     </tr>
        // ))
        // for (var i=0; i<9; i++){
        //     console.log(propdata[i].id)
        //     console.log(propdata[i].name)
        // }
        return(
            <div>
                <table>
                    <tr>
                        <th style={this.th}>Num.</th>
                        <th style={this.th}>店のid</th>
                        <th style={this.th}>店の名前</th>
                        <th style={this.th}>店のホームページ</th>
                        <th style={this.th}>イメージ</th>
                        <th style={this.th}>住所</th>
                        <th style={this.th}>電話番号</th>
                        <th style={this.th}>開ける時間</th>
                        <th style={this.th}>気に入る店保存</th>
                    </tr>
                    {data}
                </table>
            </div>
        )
    }
}

export default connect((state)=>state)(View);
