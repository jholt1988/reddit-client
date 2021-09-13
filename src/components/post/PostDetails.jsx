import React from "react";
import Avatar from "../../elements/avatars/avatar";
import style from '../../redditClient.module.css'


export const PostDetails = (props) => {
               const {post} = props
    return (
        <div className={style.PostDetailsWrapper} author={post.author} createTime={post.createTime} totalComments={post.totalComments}>
            <span>
                <Avatar type="reddit-author" author={post.author} />
                <p className={style.createTime}>{post.reateTime}</p>
                <span className={style.PostCommentWrapper}>
                    <img className={style.commentIcon} src='' alt='comment' />
                    <p className={style.totalComments}>{post.num_comments}</p>
                </span>
            </span>
        </div>
    )

}

export default PostDetails