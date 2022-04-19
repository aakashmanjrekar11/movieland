import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import htmlIcon from "./images/html-icon.png";
import cssIcon from "./images/css-icon.png";
import jsIcon from "./images/js-icon.png";
import reactIcon from "./images/react-icon.png";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://omdbapi.com?apikey=ec548e59";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <span>
        <h1 style={{ display: "inline-block", verticalAlign: "middle" }}>🎬&nbsp;&nbsp;</h1>
        <h1 style={{ display: "inline-block", verticalAlign: "middle" }} className="movieland">
          Movieland
        </h1>
      </span>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      <div className="madewith">
        <h2 style={{ display: "inline", verticalAlign: "middle" }}>Made with ❤️ by Aakash M. using </h2>
        <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={reactIcon} alt="react-icon" />
        <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={htmlIcon} alt="html-icon" />
        <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={cssIcon} alt="css-icon" />
        <img style={{ display: "inline", verticalAlign: "middle" }} className="icon" src={jsIcon} alt="js-icon" />
      </div>
    </div>
  );
}

export default App;
