import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("trending");
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Trending Today");

  const fetchMovies = async (type, pageNum = 1) => {

    let url = "";

    if (type === "trending") {
      url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${pageNum}`;
      setTitle("Trending Today");
    }

    if (type === "popular") {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNum}`;
      setTitle("Popular Movies");
    }

    if (type === "now_playing") {
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${pageNum}`;
      setTitle("Now Playing");
    }

    if (type === "upcoming") {
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${pageNum}`;
      setTitle("Upcoming Movies");
    }

    if (type === "top_rated") {
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${pageNum}`;
      setTitle("Top Rated Movies");
    }

    const res = await fetch(url);
    const data = await res.json();

    let results = data.results || [];

// Upcoming filter
if (type === "upcoming") {

  results = results.filter((movie) => {

    if (!movie.release_date) return false;

    return movie.release_date.startsWith("2026");

  });

}
setMovies(results);
  };

  const searchMovies = async (query) => {

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await res.json();

    setMovies(data.results || []);
    setTitle("Search Results");
  };

  useEffect(() => {
    fetchMovies(category, page);
  }, [category, page]);

  return (
    <div className="container">

      <h1 className="title">🎬 Movie Explorer</h1>

      <Navbar
        setCategory={(type) => {
          setCategory(type);
          setPage(1);
        }}
      />

      <SearchBar searchMovies={searchMovies} />

      <h2 className="section-title">{title}</h2>

      <MovieList movies={movies} />

      <div className="pagination">

        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, 5))}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default App;