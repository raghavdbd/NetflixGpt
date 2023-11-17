import React from 'react'

const MovieCard = ({posterpath}) => {
  // console.log(poster_path)
  return (
    <div className='w-48 pr-5' flex>
      <img src={"https://image.tmdb.org/t/p/w200"+posterpath} alt="" />
      
    </div>
  )
}

export default MovieCard
