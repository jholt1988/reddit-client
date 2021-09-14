import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import redditReducer from './slices/redditSlice';
import subredditsReducer from './slices/subredditSlice'



export const store = configureStore({
    reducer:{
        reddit: redditReducer,
        subreddit: subredditsReducer
    
    }
} 

    
)

export default store