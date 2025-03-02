import React from "react";

const FavoritesPage = ({ favorites, setFavorites }) => {
  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <h2>Your Favorite Movies</h2>
      <div className="row">
        {favorites.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="col-md-3">
              <div className="card mb-4">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <button className="btn btn-danger" onClick={() => removeFromFavorites(movie.imdbID)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
