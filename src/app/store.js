import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    reducer:{
        
    
    }
} 
)


export const store = configureStore({
    reducers
})