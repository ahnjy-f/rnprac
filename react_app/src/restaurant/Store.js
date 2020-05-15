import { createStore } from 'redux';

const initData = {
    jsondata: [],
    url: "",
    likebox: []
}

// reducer
export function RestaruantReducer(state=initData, action){
    switch(action.type){
        case "FIND":
            return RestaruantReduce(state, action)

        case "ADD":
            return LikeboxReduce(state, action)
        
        default:
            return state;
    }
}

// reduce-action

function RestaruantReduce(state, action){
    // let fu = action.url;
    // let fdata = [];
    // let newdata = [];
    // console.log(fu);
    // fetch(fu).then(response => {
    //     return response.json();
    //     }).then((result) => {
          
    //       fdata = Object.keys(result).map((key)=>[key, result[key]]);
    //       console.log(fdata);
    //         for ( let i=1; i<10; i++){
    //             newdata.push(fdata[4][1][i])
    //         }
            
    //     console.log(newdata);
    //     return state({
    //         jsondata: newdata,
    //         url: fu
    //     });
    //     //   this.setState({
    //     //       jsondata: fdata
    //     //     });
    // }).catch((error)=>{
    //     return state({
    //         jsondata: [],
    //         url: ""
    //     });
    // })
        // .catch(
        //     newdata = [ "取得できませんでした" ]

        //   this.setState({
        //       jsondata: "取得できませんでした",
        //       url: ""
        //     })
        // );
    return {
        jsondata: action.jsondata,
        likebox: state.likebox
    }
    
}

function LikeboxReduce(state, action){
    
    let newlikebox = state.likebox.slice();
    newlikebox.push(action.likedata);

    return {
        jsondata: state.jsondata,
        likebox: newlikebox
    }
}

// action creator

export function find(jsondata){
    return {
        type: "FIND",
        jsondata:jsondata
    }
}

export function add(likedata){
    return {
        type: "ADD",
        likedata: likedata
    }
}

export default createStore(RestaruantReducer);
