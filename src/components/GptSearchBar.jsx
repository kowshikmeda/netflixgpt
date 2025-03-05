import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const [isFinished, setIsFinished] = useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Get the fetchMovies function from the custom hook
  const fetchMovies = useGptSearch({ searchText: searchText.current?.value });

  const handleGptSearchClick = async () => {
    //console.log("Search Text:", searchText.current.value);
    setIsFinished(true);
    fetchMovies(); // Call the fetchMovies function when the button is clicked
    //searchText.current.value = ""; // Clear the input field
    //setIsFinished(false);
    
  };

  return (
    <div className="pt-[40%] md:pt-[10%]  flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="col-span-9 p-4 m-4 bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-3 bg-red-600 font-bold text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
