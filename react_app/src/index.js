import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import storage from 'redux-persist/lib/storage';

import './index.css';
import App from './App';
import RestaurantStore from './restaurant/Store';

//表示をレンダリング
ReactDOM.render(
    <Provider store={RestaurantStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);