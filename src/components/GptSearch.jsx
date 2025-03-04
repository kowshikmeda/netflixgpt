import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-20">
        <img
          src={BG_IMG_URL}
          alt="background-image"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch