import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; // Import custom styles

const MovieCard = ({ movie, onAddToFavorites }) => {
  return (
    <div className="col-md-3">
      <div className="card movie-card mb-4">
        <Link to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} className="card-img-top movie-poster" alt={movie.Title} />
        </Link>
        <div className="card-body text-center">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <button className="btn btn-warning" onClick={() => onAddToFavorites(movie)}>
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
