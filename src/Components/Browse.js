import React from 'react'
import Header from './Header'
import useNowplayingmovies from '../Hooks/useNowplayingmovies'
import MainContainer from './MainContainer';
import SecondayContainer from './SecondayContainer';





const Browse = () => {
 const movies= useNowplayingmovies();
 if(!movies) return ;

  
  return (
    <div>
     <Header />
     <MainContainer />
     <SecondayContainer movies1={movies} />
     
     {/* 
     we can divide our app in two container
     -videoGround
     -video title
     Secondy container
      movie List
      cards

     
     */}
      
    </div>
  )
}

export default Browse
