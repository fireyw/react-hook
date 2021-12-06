import {createStore, applyMiddleware} from 'redux'

import React from 'react';

const middleWare = () => {
    console.log('1111');
    const middleware1= store => next=> action =>{
        console.log('middleware1 start');
        const result= next(action);
        console.log('middleware1 end');
    }
    const middleware2= store => next=> action =>{
        console.log('middleware2 start');
        const result= next(action);
        console.log('middleware2 end');
    }

    const myReducer= (state, action)=>{
        console.log('myReducer');
        return state;
    }


};
export default middleWare;
