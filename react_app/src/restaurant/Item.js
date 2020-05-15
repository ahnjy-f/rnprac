import React, { Component } from 'react';
import { connect } from 'react-redux';
import { find } from './Store';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            jsondata:[],
            url: ""
        };
    
        this.doAction = this.doAction.bind(this);
        this.doChange = this.doChange.bind(this);
        this.doAddressChange = this.doAddressChange.bind(this);
      }
    
      doAction(e){
        e.preventDefault();
        let fdata = [];
        let newdata = [];
        console.log(this.state.url);
            fetch(this.state.url).then(response => {
                return response.json();
            }).then((result) => {
              
              fdata = Object.keys(result).map((key)=>[key, result[key]]);
              console.log(fdata);
                for ( let i=1; i<10; i++){
                    newdata.push(fdata[4][1][i])
                }
            console.log(newdata);
            this.setState({
                jsondata: newdata,
                url: this.state.url
            });
            let action = find(this.state.jsondata)
            this.props.dispatch(action)
            //   this.setState({
            //       jsondata: fdata
            //     });
            }).catch((error)=>{
                this.setState({
                    jsondata: [],
                    url: ""
                });
            })

        
        // this.props.dispatch(find(this.state.jsondata), find(this.state.url));
        this.setState({
            jsondata: [],
            url: ""
        });
        
      }

      doChange(e){
          let name = e.target.value;
          let furl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=bfce39765f3edea25de5ee1cd5a8003a&';

          let kurl = furl + 'name=' + name;
          this.setState({
              url: kurl
          });
      }

      doAddressChange(e){
        let name = e.target.value;
        let furl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=bfce39765f3edea25de5ee1cd5a8003a&';

        let kurl = furl + 'address=' + name;
        this.setState({
            url: kurl
        });
      }
    
      render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.doAction}>
                        名前で検索: 
                        <input type="text" size="40" onChange={this.doChange} required />
                        <input type="submit" value="データ取得"/>
                    </form>
                </div>
                <div>
                    <form onSubmit={this.doAction}>
                        住所で検索: 
                        <input type="text" size="40" onChange={this.doAddressChange} required />
                        <input type="submit" value="データ取得"/>
                    </form>
                </div>
            </div>
        );
      }
}

export default connect((state)=>state)(Item);