import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAddToFavorites }) => {
  return (
    <div className="row">
      {movies.length === 0 ? (
        <h3>No movies found</h3>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onAddToFavorites={onAddToFavorites} />
        ))
      )}
    </div>
  );
};

export default MovieList;
