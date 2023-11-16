import React, { useEffect, useState } from 'react'
import { options } from '../util/Constant'
const useFatchingTrailer = () => {
    const[trailerid,settrailerid]=useState();
    const getmovies= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/507089/videos?language=en-US', options)
        const json=await data.json();
        const trailer=json.results.filter(video =>video.type==="Trailer")[0]
        console.log(trailer)
        settrailerid(trailer.key)
        
     

    }
    useEffect(()=>{
        getmovies();

    },[])
    return trailerid;

}

export default useFatchingTrailer
