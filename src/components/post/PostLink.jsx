import React from 'react';
import style from '../../redditClient.module.css'

export const PostLink = (props) => {
    return(
        <div className={style.PostLinkWrapper} url={props.url}>
            <img className={style.PostLink} src={props.url} alt='reddit'/>
        </div>
    )
}

export default PostLink 