import React from "react";
import Avatar from "../../elements/avatars/avatar";
import Card from "../../elements/card/Card";
import style from '../../redditClient.module.css'

export const Subreddit = (props) =>{
    const {subreddit, onclick} = props;
    return(
        <Card className={style.Subreddit} subreddit={subreddit} >
            <button type='button' onClick={onclick}>
                <Avatar type='subreddit' icon_img={subreddit.icon_img} title={subreddit.title}/>
            </button>
        </Card>
    )
}

export default Subreddit