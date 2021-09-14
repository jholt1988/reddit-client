import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'



import Post from "../../components/post/Post";
import Comment from '../../components/comment/Comment';
import { selectFilteredPosts, fetchPosts, fetchComments, setSearchTerm } from "../../app/slices/redditSlice";
import style from '../../redditClient.module.css'
export const Home = () => {
   const reddit = useSelector((state) => state.reddit);
   const {isLoading, isError, selectedSubreddit, searchTerm} = reddit;
   const selectPosts = useSelector(selectFilteredPosts)
   const dispatch = useDispatch()

   
   useEffect(() => {
       dispatch(fetchPosts(selectedSubreddit))
   },[selectedSubreddit])

   console.log("loop, loop, loop")
   console.log(selectFilteredPosts)
   
   if(isLoading){
       return (
           <div>
               <h2>Is Loading</h2>
               <h2>Is Loading</h2>
               <h2>Is Loading</h2>
               <h2>Is Loading</h2>
           </div>
       )
   }
   
   if (isError) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (selectPosts === null) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </button>
      </div>
    );
  }

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index,permalink))
        }
        return getComments
    }
    const renderPosts = (comments) => {
        return(
        <div className={style.PostsContainer}>{
            
        selectPosts.map((post, index) => (
            <Post post={post} key={post.id} onToggleComments={onToggleComments(index)}>
                 if(comments.showingComments){
            renderComments(comments)}
            </Post>
        )) 
       
        }
        </div>
        )
    }

    const  renderComments = (post) => {
        return(
        <div className={style.Comments}>
        {
       post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id}/>
       ))}
        
        </div>
        )
    }

    return(
        <div className={style.Home}>
           { renderPosts() }
        </div>
    )

}

