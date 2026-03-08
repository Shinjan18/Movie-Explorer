import { useState } from "react";

function SearchBar({ searchMovies }) {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchMovies(query);
    setQuery("");

  };

  return (

    <form className="search" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button>Search</button>

    </form>

  );
}

export default SearchBar;