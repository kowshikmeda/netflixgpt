import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const {moviesNames,moviesResults}=useSelector(store=>store.gpt)
  if(!moviesNames) return null;
  return (
    <div className='p-4 m-4 text-white bg-black '>
      {
        moviesNames.map((movieName,index)=>(
          <MovieList key={movieName} title={movieName} movies={moviesResults[index]}/>
        ))
      }
   
     </div>
  )
}

export default GptMovieSuggestions