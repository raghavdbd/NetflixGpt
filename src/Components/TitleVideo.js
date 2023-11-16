import React from 'react'
import useFatchingTrailer from '../Hooks/useFatchingTrailer'

const TitleVideo = ({title,overview}) => {
 
  return (
    <div className=" w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black" >
      <h1 className='text- font-bold'>{title}</h1>
      <p className='w-2/4 text-lg py-6'>{overview}</p>
      <div className=''>
        <button className='bg-white  text-black px-10 p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-500 mx-2 px-10 p-4 px-12 text-xl rounded-lg opacity-50'>MoreInfo</button>
      </div>
      
    </div>
  )
}

export default TitleVideo
