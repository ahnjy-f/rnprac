import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// ステートの値
let state_value = {
  counter:0,
  message: "COUNTER"
}

// レデューサー
function counter(state = state_value, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        counter:state.counter + 1,
        message:"INCREMENT"
      };
      case 'DECREMENT':
        return {
          counter:state.counter - 1,
          message:"DECREMENT"
        };
      case 'ZERO':
        return {
          counter: 0,
          message: "TOZERO"
        };
      default:
        return state;
  }
}

// ストアを作成
let store = createStore(counter);

// 表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
