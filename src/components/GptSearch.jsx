import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    
   
         <div className="fixed -z-20">
         <img className='max-md:h-screen object-cover'
          src={BG_IMG_URL}
          alt="background-image"
        />
      </div>
      <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
        
    
    </>
    
  )
}

export default GptSearch