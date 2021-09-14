import React from 'react';
import style from './redditClient.module.css' ;
import Header from '../src/containers/header/Header';
import { Home } from './containers/home/Home';
import Subreddits from './containers/subreddits/Subreddits';



 const App = () => { 
     return(
 <div className={style.App}>
     <Header />
     <Home/>
    <Subreddits />
    

     

 </div>

      ) }
export default App;