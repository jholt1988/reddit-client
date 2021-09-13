import React from "react";
import Post from "../../components/post/Post";
import Comment from '../../components/comment/Comment';

export const Home = () => {
   
   
   
   
    const renderPosts = () => {
        posts.map((post) => {
            <Post post={post} key={post.id}/>
        })
    }

    const  renderComments = () => {
        comments.map((comment) => {
            <Comment comment={comment} key={comment.id}/>
        })
    }
}