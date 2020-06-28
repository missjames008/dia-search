import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=days&apikey=5cbc208f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);

  const onMovieClick = (movie) => {
    setClickedItem(movie);
    console.log(movie);
  };

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  const search = (searchValue) => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5cbc208f`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  };

  return (
    <div className="App">
      <Header text="FAST Movie Search" />
      <Search search={search} />
      <p className="App-intro">Search for your favorite movies!</p>

      <div className="movies">
        {movies.map((movie, index) => (
          <Movie
            key={`${index}-${movie.Title}`}
            movie={movie}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>

      <div className="selected">
        <h2>SELECTED MOVIES</h2>
        {clickedItem ? (
          <ul>
            <li>{clickedItem}</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
