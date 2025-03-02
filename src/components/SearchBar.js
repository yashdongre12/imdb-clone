import React from 'react';

const SearchBar = ({ searchTerm, handleSearch, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleSearch} 
                placeholder="Search movies..."
            />
            <button type="submit">🔍 Search</button>
        </form>
    );
};

export default SearchBar;
