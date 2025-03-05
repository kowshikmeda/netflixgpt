import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults } from "../utils/gptSlice";
import { getMovieSuggestions } from "../utils/gemini";

// TMDB API search
const searchMoviesTmdb = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

// Custom hook for GPT search
const useGptSearch = ({ searchText }) => {
  const dispatch = useDispatch();
  //console.log(" in gpt Search Text:", searchText);
  const fetchMovies = async () => {
    try {
      if (!searchText) return;

      //console.log("User Query:", searchText);

      // Get movie suggestions from Gemini
      const suggestions = await getMovieSuggestions(searchText);
      //console.log("Gemini Results:", suggestions);

      const gptMovies = suggestions.split(",");
      //console.log("GPT Movies:", gptMovies);

      // Fetch TMDB results based on GPT movie suggestions
      const promiseArray = gptMovies.map((movie) => searchMoviesTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      //console.log("TMDB Results:", tmdbResults);

      // Dispatch action to update Redux store
      dispatch(
        addGptMoviesResults({ moviesNames: gptMovies, moviesResults: tmdbResults })
      );
    } catch (error) {
      //console.error("Error in API call:", error);
    }
  };

  return fetchMovies; // Return the fetchMovies function to be called in components
};

export default useGptSearch;
