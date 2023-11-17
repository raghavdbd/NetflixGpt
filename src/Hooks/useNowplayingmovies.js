
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addnowplayingmovie } from '../util/MovieSlice'
import { options } from '../util/Constant'

const useNowplayingmovies =()=>{
  const [movies,setmovies]=useState();
    const dispatch=useDispatch()
  const moviecall =async()=>{

    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json=await data.json();
   
    setmovies(json.results)

    dispatch(addnowplayingmovie(json.results))

  }
  useEffect(()=>{
    moviecall();
  },[])
return movies

}
export default useNowplayingmovies;
