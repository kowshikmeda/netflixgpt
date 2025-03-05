import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return null;
    
    return (
        <div className="p-4">
            <h1 className="text-2xl md:text-3xl  py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
                <div className="flex space-x-4 snap-x snap-mandatory">
                    {movies.map(movie => (
                        <div key={movie.id} className="snap-start">
                            <MovieCard posterPath={movie.poster_path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
