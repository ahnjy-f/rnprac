import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import Rect from './Rect';

let theme = {
  light: {
    backgroundColor:"#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor:"#006",
    color: "#eef",
    padding: "10px"
  }
};

const ThemeContext = React.createContext(theme.light); // ⭐️

class App extends Rect {
  // input = '';

  // msgStyle = {
  //   fontSize: "20pt",
  //   color: "#900",
  //   margin: "20px 0px",
  //   padding: "5px",
  // }
  // msgStyle2 = {
  //   fontSize: "20pt",
  //   color: "white",
  //   backgroundColor:"#900",
  //   margin: "20px 0px",
  //   padding: "5px",
  //   borderBottom: "2px solid #900"
  // }
  // btnStyle = {
  //   fontSize: "16pt",
  //   padding: "10px"
  // }
  // area = {
  //   width:"500px",
  //   height:"500px",
  //   border:"1px solid blue"
  // }
  // inputStyle = {
  //   fontSize: "12pt",
  //   padding: "5px"
  // }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     // list: this.data
  //     message: 'type your name:'
  //   };
  //   // this.doAction = this.doAction.bind(this);
  //   // this.doChange = this.doChange.bind(this);
  //   // this.doSubmit = this.doSubmit.bind(this);
  //   this.doCheck = this.doCheck.bind(this);
  // }

  // doAction(e){
  //     let x = e.pageX;
  //     let y = e.pageY;
  //     this.data.push({x:x, y:y});
  //     this.setState({
  //       list:this.data
  //     });
  // }

  // draw(d){
  //   let s = {
  //     position: "absolute",
  //     left: (d.x - 25) + "px",
  //     top: (d.y - 25) + "px",
  //     width: "50px",
  //     height: "50px",
  //     backgroundColor: "#66f3",
  //   };
  //   return <div style={s}></div>;
  // }

  // doChange(event){
  //   this.input = event.target.value;
  // }

  // doSubmit(event){
  //   this.setState({
  //     message: 'Hello, ' + this.input + '!!'
  //   });
  //   event.preventDefault();
  // }

  // doCheck(event) {
  //   alert(event.target.value + "は長すぎます。（最大10文字）");
  // }

  static contextType = ThemeContext;

  render() {
  // return <div>
  //     <h1>React</h1>
  //     <Message title="Children!" maxlength="10" onCheck={this.doCheck} />
  //       {/* これはコンポーネントのコンテンツです。
  //       マルでテキストを分割し、リストにして表示します。
  //       改行は必要ありません。
  //     </Message>
  //     <h2>{this.state.message}</h2>
  //     <form onSubmit={this.doSubmit}>
  //       <label>
  //         <span style={this.inputStyle}></span>Message:
  //         <input type="text" style={this.inputStyle} onChange={this.doChange} required pattern="[A-Za-z _,.]+" />
  //       </label>
  //       <input type="submit" style={this.inputStyle} value="Click" />
  //     </form> */}
  //   </div>;
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value= "This is Content sample." />
        <Message value= "*これはテーマのサンプルです。" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render(){
    return (
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component {
  // li = {
  //   fontSize: "16pt",
  //   color: "#06",
  //   margin: "0px",
  //   padding: "0px",
  // }

  // inputStyle = {
  //   fontSize: "12pt",
  //   padding: "5px"
  // }

  // constructor(props){
  //   super(props);
  //   this.doChange = this.doChange.bind(this);
  // }

  static contextType = ThemeContext;

  // doChange(e){
  //     if (e.target.value.length > this.props.maxlength){
  //       this.props.onCheck(e);
  //       e.target.value = e.target.value.substr(0, this.props.maxlength);
  //     }
  //   }

  render(){
    // let content = this.props.children;
    // let arr = content.split('。');
    // let arr2 = [];
    // for ( let i =0; i<arr.length; i++ ){
    //   if ( arr[i].trim() != '' ){
    //     arr2.push(arr[i]);
    //   }
    // }
    // let list = arr2.map((value,key)=>(
    //   <li style={this.li} key={key}>{value}.</li>)
    // );
    // return <div>
    //   <h2>{this.props.title}</h2>
    //   <ol>{list}</ol>
    // </div>
    // return <input type="text" style={this.inputStyle} onChange={this.doChange} />
    return (
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;
