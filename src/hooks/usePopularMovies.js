import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getNowPopularMovies = async () => {
        const data=await 
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1', API_OPTIONS);
         const json=await data.json();
        // console.log(json.results);
         dispatch(addPopularMovies(json.results))
     
     }
   
     useEffect(()=>{
      getNowPopularMovies();
     },[])
}

export default usePopularMovies;