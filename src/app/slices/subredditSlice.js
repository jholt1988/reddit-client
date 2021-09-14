import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../api/redditApi";




const initialState = {
    listSubreddits:[],
    isLoading:false,
    isError: false
}
export const subredditsSlice = createSlice({
    name:'subreddits',
    initialState: initialState,
    reducers: {
        setSubreddits (state, action) {
            state.listSubreddits = action.payload
        },
        startLoadSubreddits (state) {
            state.isLoading =  true;
            state.isError = false;
        },

        completeLoadSubreddits (state, action) {
            state.isLoading = false;
            state.isError = false;
            state.listSubreddits = action.payload;
        },

        errorLoadSubreddits (state) {
            state.isError = true;
            state.isLoading = true;
        }
    }
})



export const {
    startLoadSubreddits,
    completeLoadSubreddits, 
    errorLoadSubreddits
} = subredditsSlice.actions

export default subredditsSlice.reducer;




export const fetchSubreddits = () => async (dispatch) => {

        
    try{
    dispatch(startLoadSubreddits());    
    const subreddits = await getSubreddits()
     await dispatch(completeLoadSubreddits(subreddits));
      
     } 
     catch (error){
         dispatch(errorLoadSubreddits());
     }

  };

  export const selectSubreddits =(state) => (state.subreddit.listSubreddits);   
