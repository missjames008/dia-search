import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

//default search for 'days' so populates on load
const MOVIE_API_URL = "https://www.omdbapi.com/?s=days&apikey=5cbc208f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [selected, setSelected] = useState(false);

  //sets selected movie
  const onMovieClick = (movie) => {
    setClickedItem(movie);
  };

  //sets check to t/f
  const onChecked = (e) => {
    setSelected(e.target.checked ? true : false);
  };

  //alerts on confirm
  const confirmSelected = () =>
    list
      ? alert(`You have selected ${list}`)
      : alert("Please select at least one movie!");

  //initial search/load
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  //add selected movies to array-- this is buggy when checking/unchecking and I would solve with more time
  useEffect(() => {
    setList(clickedItem && selected ? (list) => [...list, clickedItem] : "");
  }, [clickedItem, selected]);

  //get searched movies
  const search = (searchValue) => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5cbc208f`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  };

  return (
    <div className="App">
      <Header text="Movie Search" />
      <Search search={search} />
      <p className="subhead">Search for your favorite movies!</p>

      <div className="movies">
        {movies.map((movie, index) => (
          <Movie
            key={`${index}-${movie.Title}`}
            movie={movie}
            onMovieClick={onMovieClick}
            onChecked={onChecked}
          />
        ))}
      </div>

      <div className="selected">
        <h2>SELECTED MOVIES</h2>
        {list ? list.map((name, index) => <p key={index}>{name}</p>) : ""}

        <input
          onClick={confirmSelected}
          type="submit"
          className="confirmButton"
          value="Confirm selected"
        />
      </div>
    </div>
  );
};

export default App;
