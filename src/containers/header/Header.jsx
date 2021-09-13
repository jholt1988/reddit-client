import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import style from "../../redditClient.module.css";

export function Header (){
  return (
    <div className={style.Header}>
      <div className={style.LogoContainer}>
        <h1 className={style.Logo}>Reddit Client</h1>
      </div>
      <SearchBar OnClick={onclick} />
    </div>
  );
};

export default Header;
