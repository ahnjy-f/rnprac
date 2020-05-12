import { createStore } from 'redux';

const initData = {
    data: [
        { people : 20, amount : 10},
        { people : 30, amount : 0},
        { people : 40, amount : 0},
        { people : 50, amount : 0},
        { people : 60, amount : 0},
        { people : 70, amount : 0},
        { people : 80, amount : 200}
    ]
};

// レデューサー
export function graphReducer(state=initData, action) {
    switch (action.type){
        case 'ADD':
            return addReduce(state, action)
            
        default:
            return state;
    }
}

// レデュースアクション
function addReduce(state, action){   
    let graph = { people:action.people, amount:action.amount };
    let newgraph = state.data.slice();
    let i = 0;

    console.log(newgraph);
    console.log(graph);
    

    for (i=0; i<7; i++){
        console.log(newgraph[i]);
        if ( parseInt(graph.people) == newgraph[i].people){
             newgraph[i].amount = graph.amount;
             break;
        }
    }

    // newgraph.splice(i, 1, graph);

    return {
        data: newgraph
    }
}

// アクションクリエーター

export function addGraph(people, amount){

    return{
        type: 'ADD',
        people: people,
        amount: amount
    }
}

// ストアを作成
export default createStore(graphReducer);
