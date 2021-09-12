import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    reducer:{
        reddit:{
            name:'reddit',
            initialState:{posts:{}}
        }
    
    }
} 
)


export const store = configureStore({
    reducers
})