import React from "react";
import style from '../../redditClient.module.css';
import Card from "../../elements/card/Card";
import Avatar from "../../elements/avatars/avatar";

export const Comment = (props) => {
    const {comment} = props;

    return(
        <Card className={style.Comment} key={comment.id} comment={comment}>
               <Avatar type='commentAuthor 'icon_img={comment.icon_img} title={comment.author}/>
               <div className={style.commentContainer}>
                   <div className={style.commentText}  comment={comment}>{comment}</div>
               </div>
            
        </Card>
    )
}

export default Comment