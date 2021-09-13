import React from 'react';
import Card from '../../elements/card/Card';
import PostTitle from './PostTitle';
import PostLink from './PostLink';
import PostDetails from './PostDetails'
import VoteContainer from './VoteContainer';
import style from '../../redditClient.module.css';


export const  Post = (props) => {
    
    const {post} = props
    return(
        <Card className={style.Post} key={post.key} post={post}>
            <VoteContainer voteTotal= {post.voteTotal}/>
            <div className={style.Postwrapper}>
                <PostTitle title={post.title}/>
                <PostLink url={post.url}/>
                <PostDetails author= {post.author} createTime={post.createTime} commentTotal={post.num_commenys}/>
            </div>
        </Card>
    )
}

export default Post