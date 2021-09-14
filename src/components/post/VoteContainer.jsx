import React, {useState} from 'react';
import { TiArrowUpThick, TiArrowDownThick} from 'react-icons/ti'
import style from '../../redditClient.module.css'

export const VoteContainer = (props) => {
    const [voteTotal, setVoteTotal] = useState(voteTotal);
setVoteTotal=788787;

    return (
        <div className ='Vote-Container' voteTotal={voteTotal}>
            <button  className={style.button} type="button"><TiArrowUpThick></TiArrowUpThick></button>
            <div>
                <p className='voteTotal'>{voteTotal}</p>
            </div>
            <button className={style.button} type='button'><TiArrowDownThick></TiArrowDownThick></button>
        </div>
    )
}


export default VoteContainer
