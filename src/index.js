import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { combineReducers, createStore } from 'redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';


const initialState = {
    product: 'iphone',
    user: 'Tom',
}

const allReducers = combineReducers(
    {
        product: productReducer,
        user: userReducer
    }
);

const actionUpdateUser = {
    type: 'upDateUser',
    payload: { 
        user: "New User John Added"
    }
};

const store = createStore(allReducers, initialState, window.devToolsExtension && window.devToolsExtension());


console.log('3 store.getState is ', store.getState());

store.dispatch(actionUpdateUser);
console.log('4 store.getState is ', store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
