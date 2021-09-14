import React from "react";
import {FiSearch} from 'react-icons/fi'
import style from '../../reddit_homie.css';


export const SearchBar = (props) => {
   const{onsubmit} = props
    return(
        <form className={style.searchBar} type='search' >
            <input  placeholder='Search' />
            <button type='submit' onSubmit={onsubmit}><FiSearch/></button>
        </form>
    )

}

export default SearchBar