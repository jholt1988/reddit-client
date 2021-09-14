import React from "react";
import style from '../../redditClient.module.css'


export const PostTitle = (props) => {

    return (
        <div className={style.PostTitleWrapper} title={props.title}>
            <p className={style.PostTitle}>{props.title}</p>
        </div>
    )
}

export default PostTitle