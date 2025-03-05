import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;  

  return (
    <div className="w-48 md:w-52 pr-4">
      <img 
        className="w-full h-[150px]md:h-[300px] object-cover rounded-lg transition-transform duration-300 hover:scale-110" 
        src={IMG_CDN_URL + posterPath} 
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
