import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies)return;
  const mainMovie=movies[0];
  //console.log(mainMovie);
  const {title,overview,id}=mainMovie;
  return (
    <div>
       <VideoTitle title={title} overview={overview}/>
      <VideoBackGround movieId={id}/>
     
    </div>
  )
}

export default MainContainer