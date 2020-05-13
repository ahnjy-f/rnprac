import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App 5';
import GraphStore from './graph/Store';

//表示をレンダリング
ReactDOM.render(
    <Provider store={GraphStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);