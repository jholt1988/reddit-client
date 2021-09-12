import React from 'react';
import Card from '../../elements/card/Card';
import PostTitle from './PostTitle';
import PostLink from './PostLink';
import PostDetails from './PostDetails'
const styles = require('../../index.css')


export const  Post = (props) => {
    return(
        <Card className={styles.Post} key={props.key} post={props.post}>
            {/* vote-container goes here */}
            <div className={styles.Postwrapper}>
                <PostTitle title={props.post.title}/>
                <PostLink url={props.post.url}/>
                <PostDetails author={props.post.author} createTime={props.post.createTime} totalComments={props.post.totalComments}/>
                    
                    

            </div>
        </Card>
    )
}

export default Post