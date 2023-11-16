import React from 'react'
import Header from './Header'
import useNowplayingmovies from '../Hooks/useNowplayingmovies'
import MainContainer from './MainContainer';





const Browse = () => {
  useNowplayingmovies();
  
  return (
    <div>
     <Header />
     <MainContainer />
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
