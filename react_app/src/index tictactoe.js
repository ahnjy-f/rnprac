import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App_tictactoe';
import TictactoeStore from './tictactoe/Store';

//表示をレンダリング
ReactDOM.render(
    <Provider store={TictactoeStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);