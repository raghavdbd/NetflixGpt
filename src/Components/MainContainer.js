import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './TitleVideo'
import VideoBackGround from './VideoBackGround';

function MainContainer() {
    const movies = useSelector((store) => store.movies.nowplayingmovie);
    if (!movies) return;

    const mainmovie = movies[0];
    console.log(mainmovie);
    const { original_title, overview,id } = mainmovie;


    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround id={id} />


        </div>
    );
}

export default MainContainer
