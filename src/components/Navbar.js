import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom styles

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="imdb-logo">IMDb</span> Clone
        </Link>

        <form className="d-flex flex-grow-1 mx-3" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">Search</button>
        </form>

        <Link to="/favorites" className="btn btn-outline-warning">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
