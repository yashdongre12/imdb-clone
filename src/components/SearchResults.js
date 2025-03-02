import React from "react";
import MovieList from "./MovieList";

const SearchResults = ({ movies, onMovieSelect, onAddToFavorites }) => {
  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      {movies.length > 0 ? (
        <MovieList movies={movies} onMovieSelect={onMovieSelect} onAddToFavorites={onAddToFavorites} />
      ) : (
        <p>No results found. Try searching for another movie.</p>
      )}
    </div>
  );
};

export default SearchResults;
