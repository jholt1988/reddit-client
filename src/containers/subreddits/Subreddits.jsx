import React from "react";
import Subreddit from '../../components/subreddit/Subreddit';


export const Subreddits = () => {
    return(
        subreddits.map((subreddit) => {
            <Subreddit subreddit={subreddit} key={subreddit.id} onClick={onclick}/>
        })
    )
}

export default Subreddit