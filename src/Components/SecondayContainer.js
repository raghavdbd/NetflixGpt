import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondayContainer = (movies1) => {
   

  return (
    <div className='bg-black' >
      <div className='-mt-20 relative z-20' >
      <MovieList  title={"Now Playing"} movies={movies1.movies1}  />
      </div>
       
        <MovieList title={"Trending"} movies={movies1.movies1}  />
        <MovieList title={"Most Raited"} movies={movies1.movies1}  />
        <MovieList title={"Funny"} movies={movies1.movies1}  />
        <MovieList title={"Romance"} movies={movies1.movies1}  />
        {/* 
        movie list
        
        */}
      
    </div>
  )
}

export default SecondayContainer
