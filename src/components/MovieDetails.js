import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = "41a6e4d5";

const MovieDetails = ({ movie, onAddToFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentMovie, setCurrentMovie] = useState(movie);

  useEffect(() => {
    if (!movie || movie.imdbID !== id) {
      const fetchDetails = async () => {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setCurrentMovie(data);
      };
      fetchDetails();
    }
  }, [id, movie]);

  if (!currentMovie) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <button className="btn btn-warning mb-3" onClick={() => navigate(-1)}>
        🔙 Back
      </button>
      

      <div className="row">
        {/* Left Side - Movie Poster */}
        <div className="col-md-4 text-center">
          <img
            src={currentMovie.Poster}
            alt={currentMovie.Title}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Right Side - Movie Details */}
        <div className="col-md-8">
          <h2 className="mb-3">{currentMovie.Title} ({currentMovie.Year})</h2>
          <p><strong>⭐ IMDB Rating:</strong> {currentMovie.imdbRating}</p>
          <p><strong>🎭 Genre:</strong> {currentMovie.Genre}</p>
          <p><strong>🎬 Director:</strong> {currentMovie.Director}</p>
          <p><strong>📝 Plot:</strong> {currentMovie.Plot}</p>
          <p><strong>🎭 Actors:</strong> {currentMovie.Actors}</p>
          <p><strong>📅 Release Date:</strong> {currentMovie.Released}</p>
          <p><strong>⏳ Runtime:</strong> {currentMovie.Runtime}</p>
          <p><strong>🏆 Awards:</strong> {currentMovie.Awards}</p>
          <p><strong>🌍 Language:</strong> {currentMovie.Language}</p>
          <p><strong>🎥 Production:</strong> {currentMovie.Production}</p>
          <p><strong>💰 Box Office:</strong> {currentMovie.BoxOffice}</p>
          <p><strong>📊 Metascore:</strong> {currentMovie.Metascore}</p>
          <button className="btn btn-primary mt-3" onClick={() => onAddToFavorites(currentMovie)}>
            ❤️ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
