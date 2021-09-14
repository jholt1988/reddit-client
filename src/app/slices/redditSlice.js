import {createSlice, createSelector} from '@reduxjs/toolkit';
import { getSubredditPosts, getPostsWithComments } from '../../api/redditApi';



const initialState ={
    posts: [],
    isLoading: false, 
    isError: false,
    selectedSubreddit:'/r/pics',
    searchTerm: ''
}

export const redditSlice = createSlice({
    name:'reddit',
    initialState: initialState,
    reducers:{

        setPosts (state, action) {
            state.posts=action.payload
        },

        loadPostsStart (state) {
            state.isLoading= true;
            state.isError = false;
        },

        loadPostsSuccess (state, action) {
            state.isLoading = false;
            state.isError = false;
            state.posts = action.payload;
        },

        loadPostsError (state) {
            state.isLoading = false;
            state.isError = true;
        },

        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        setSearchTerm (state, action) {
            state.searchTerm = action.payload;
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
          },
          startLoadComments(state, action) {
            // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
            if (!state.posts[action.payload].showingComments) {
              return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
          },
          completeLoadComments(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
          },
          errorLoadComments(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
          },
    }

})

export default redditSlice.reducer

export const {
    setPosts,
    loadPostsStart,
    loadPostsSuccess,
    loadPostsError,
    setSelectedSubreddit,
    setSearchTerm,
    toggleShowingComments,
    startLoadComments,
    completeLoadComments,
    errorLoadComments
} = redditSlice.actions

export const fetchPosts = (subreddit) => async (dispatch) => {
    dispatch(loadPostsStart())
    try{
      
       const posts = getSubredditPosts(subreddit);

       const postsWithMetaData = posts.map((post) =>(
           {
               ...post,
               comments:[], 
               loadingComments:false, 
               error:false,
               showingComments:false
           }
         ))
         console.log(postsWithMetaData)
         dispatch(loadPostsSuccess(postsWithMetaData))
    }
    catch (error) {
        console.log(error)
        dispatch(loadPostsError())
 
    }
  
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    dispatch(startLoadComments(index));
    try{
        
        const comments = getPostsWithComments(permalink)
        dispatch(completeLoadComments(index, comments))
    }
    catch (error) {
        console.log(error);
        dispatch(errorLoadComments());
    }
}

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit =(state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if(searchTerm !== '') {
            return posts.filter((post) => (
            post.title.toLowerCase().includes(searchTerm.toLowerCase())))
        }
      return posts
    }

)