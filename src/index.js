import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import middleWare from "./components/middleWare";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";

const middleware1 = store => next => action => {
    console.log('middleware1 start');
    const result = next(action);
    console.log('middleware1 end');
}
const middleware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action);
    console.log('middleware2 end');
}

const myReducer = (state, action) => {
    console.log('myReducer');
    return state;
}
const store = createStore((myReducer, applyMiddleware(middleware1, middleware2)))
store.dispatch({type: 'comeAction'});
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
