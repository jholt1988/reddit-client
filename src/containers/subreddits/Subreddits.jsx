import React,{useEffect} from "react";
import Subreddit from '../../components/subreddit/Subreddit';
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, fetchSubreddits } from "../../app/slices/subredditSlice";
import { selectSelectedSubreddit } from "../../app/slices/redditSlice";
import style from '../../redditClient.module.css'
export const Subreddits = () => {
  const subreddits = useSelector(selectSubreddits);

  const selectedSubreddit = useSelector(selectSelectedSubreddit)
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchSubreddits());
}, [dispatch]);
    
   
    return(
        <div className={style.SubredditContainer}>
        {subreddits.map((subreddit) => (
            <Subreddit subreddit={subreddit} key={subreddit.id}/>
        )
    )}
    </div>
    )
}

export default Subreddits