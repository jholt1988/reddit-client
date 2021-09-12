import React from "react";
import Avatar from "../../elements/avatars/avatar";
const style = require('*.module.css')


export const PostDetails = (props) => {

return(
    <div className={style.PostDetailsWrapper} author={props.author} createTime={props.createTime} totalComments={props.totalComments}>
       <span>
        <Avatar type="reddit-author" author={props.author} />
        <p className={style.createTime}>{props.createTime}</p> 
        <span className={style.PostCommentWrapper}>
            <img className={style.commentIcon} src='' alt='comment'/>
            <p className={style.totalComments}>{props.totalComments}</p>
        </span>
        </span>
    </div>
)

}

export default PostDetails