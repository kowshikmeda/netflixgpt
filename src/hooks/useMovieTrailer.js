import { useDispatch ,useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();

    //console.log(movieId);
    const movieTrailer=useSelector(store=>store.movies.trailerVideo);
    const getMovieVideos=async()=>{
      const data=await 
      fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
       API_OPTIONS);
      const json=await data.json();
      //console.log(json);
      const filterData=json.results.filter(video=>video.type==='Trailer');
      const Trailer=filterData.length?filterData[0]:json.results[0];
     // console.log(Trailer);
      dispatch(addTrailerVideo(Trailer));
    }
    useEffect(() => { 
      !movieTrailer && getMovieVideos();
      
    },[])
}

export default useMovieTrailer;