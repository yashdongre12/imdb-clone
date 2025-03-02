import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import FavoritesPage from "./components/Favorites";
import SearchResults from "./components/SearchResults";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_KEY = "41a6e4d5";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Function to add movies to favorites
  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  // Function to remove movies from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== movieId));
  };

  // Fetch movies from OMDb API
  const fetchMovies = async (query) => {
    if (!query) return;
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  return (
    <>
      <Navbar onSearch={fetchMovies} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} onAddToFavorites={addToFavorites} />} />
          <Route path="/movie/:id" element={<MovieDetails onAddToFavorites={addToFavorites} />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} onRemoveFromFavorites={removeFromFavorites} />} />
          <Route path="/search" element={<SearchResults movies={movies} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
