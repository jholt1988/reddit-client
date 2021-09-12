import React from 'react';
const styles = require('../../redditClient.modules.css')

export const Avatar = (props) => {
    return (
       <div className={styles.Avatar} type={props.type}>
           <span className={styles.type} >
               <img className='avatar-image' src={props.icon_img} alt={`${props.type} avatar`}/>
               <p className={`${styles.title}${props.type}`}>{props.title}</p>
           </span>
       </div>
    )
}

export default Avatar