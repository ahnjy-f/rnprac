import { createStore } from 'redux';

const initData = {
    position: [
       "", "", "",
       "", "", "",
       "", "", ""
    ],
    message: "GAME START!"
}

// reducer
export function TTTReducer(state=initData, action){
    switch(action.type){
        case 'PIC':
            return pickReduce(state, action);

        default:
            return state;
    }
}

// reduce-action

function pickReduce(state, action){
    let newdata = state.position.slice();
    let dummyindex = [];
    let computer = null;

    if (newdata[action.location] == ""){
        newdata[action.location] = "O";

        for (let i = 0; i<9; i++){
            if (newdata[i] == ""){
                dummyindex.push(i);
            }
        }
        console.log(dummyindex);

        computer=Math.floor(Math.random() * dummyindex.length);
        console.log(computer);
        newdata[dummyindex[computer]]= "X";
    } else {
        return {
            position: state.position
        }
    }
        
        // while ( !newdata[computer] == "X"){
        //     if (newdata[computer] == "O"){
        //         computer = Math.floor(Math.random() * 10);
        //     } else if (state.position[computer] == ""){
        //         newdata[computer] = "X"
        //         break;
        //     }
        // }
    

    if (newdata[0] == "O" && newdata[1] == "O" && newdata[2]== "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[0] == "X" && newdata[1] == "X" && newdata[2]== "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[3] == "X" && newdata[4] == "X" && newdata[5]== "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[3] == "O" && newdata[4] == "O" && newdata[5] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[6] == "O" && newdata[7] == "O" && newdata[8] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[6] == "X" && newdata[7] == "X" && newdata[8] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[0] == "X" && newdata[3] == "X" && newdata[6] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[0] == "O" && newdata[3] == "O" && newdata[6] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[1] == "O" && newdata[4] == "O" && newdata[7] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[1]== "X" && newdata[4] == "X" && newdata[7] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[2] == "O" && newdata[5] == "O" && newdata[8] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[2] == "X" && newdata[5] == "X" && newdata[8] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[0] == "O" && newdata[4] == "O" && newdata[8] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } else if (newdata[0] == "X" && newdata[4] == "X" && newdata[8] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[2] == "X" && newdata[4] == "X" && newdata[6] == "X"){
        return {
            position:newdata,
            message: "COMPUTER WIN!"
        }
    } else if (newdata[2] == "O" && newdata[4] == "O" && newdata[6] == "O"){
        return {
            position:newdata,
            message: "YOU WIN!"
        }
    } 

    return {
        position: newdata,
        message: "GAME START!"
    };
}

// action creator

export function pick(location){
    return {
        type: 'PIC',
        location: location,
        message: "GAME START!"
    }
}

export default createStore(TTTReducer);
