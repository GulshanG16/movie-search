/* ======================================================
    Lab 8 - App.jsx starter
====================================================== */

import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";

export default function App() {
  // TODO 3: 
  // Create state variables using useState
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [watchlist, setWatchlist] = useState([]);

  const API_KEY = "ENTER_OMDB_API_KEY_HERE";
 

  const fetchMovies = async (query) => {
    // TODO 4: 
    // Before fetching: set isLoading to true and clear the error message
    setIsLoading(true);
    setError("");

    if (!API_KEY || API_KEY === "ENTER_OMDB_API_KEY_HERE") {
      setMovies([]);
      setError("No API key. Add your OMDb API key in App.jsx.");
      setIsLoading(false);
      return;
    }

    try {
      const url =
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      // TODO 5: 
      // If data.Response is True, store data.Search in movies.
      // Otherwise clear movies and show the error.
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found.");
      }

    } catch (err) {
      // TODO 6: 
      setError("Failed to fetch movies.");
      setMovies([]);
    } finally {
      // TODO 7: 
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // TODO 8: 
    // Runs on first load and whenever searchTerm changes
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    // TODO 9: 
    // Update searchTerm (useEffect will fetch the new results)
    setSearchTerm(newSearchTerm);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const alreadyExists = prevWatchlist.some(
        (item) => item.imdbID === movie.imdbID
      );
      if (alreadyExists) {
        return prevWatchlist;
      }
      return [...prevWatchlist, movie];
    });
  };

  // TODO 11A: Conditional rendering (decide what to show in the results area)
  let content;
  if (isLoading) {
    content = <p className="status">Loading...</p>;
  } else if (error !== "") {
    content = <p className="status error">{error}</p>;
  } else if (movies.length === 0) {
    content = <p className="status">No movies found.</p>;
  } else {
    content = <MovieGrid movies={movies} addToWatchlist={addToWatchlist} />;
  }

  return (
    <div className="page">
      <Header title="Movie Search" searchTerm={searchTerm} />

      {/* TODO 10: Render SearchBar and pass handleSearch as onSearch */}
      <SearchBar onSearch={handleSearch} />

      <main className="panel">
        {/* TODO 11A: Show the content chosen above */}
        {content}

        {/* TODO 11B: Watchlist section */}
        <section className="watchlist">
          <h2>My Watchlist</h2>
          {watchlist.length === 0 ? (
            <p className="status">No movies in watchlist yet.</p>
          ) : (
            <ul>
              {watchlist.map((movie) => (
                <li key={movie.imdbID}>
                  {movie.Title} ({movie.Year})
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
