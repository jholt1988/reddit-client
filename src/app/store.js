import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    reducer:{
        reddit:reddit.reducer,
        subreddit: subreddit.reducer
    
    }
} 
)


export const store = configureStore({
    reducers
})