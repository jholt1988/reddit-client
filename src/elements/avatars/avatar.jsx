import React from 'react';
import style from '../../redditClient.module.css'

export const Avatar = (props) => {
    const {type, icon_img, title} = props
    return (
       <div className={style.Avatar} type={type}>
           <span className={style.type} >
               <img className='avatar-image' src={icon_img} alt={`${props.type} avatar`}/>
               <p className={`${style.title}${props.type}`}>{title}</p>
           </span>
       </div>
    )
}

export default Avatar