import React, { useState } from "react";
import question_mark from "../question_mark.png";

const Movie = ({ movie, onMovieClick }) => {
  const [selected, setSelected] = useState(false);
  const onChecked = (e) => {
    setSelected(e.target.checked ? true : false);
  };

  const addToList = selected ? movie.Title : "";

  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={movie.Poster === "N/A" ? question_mark : movie.Poster}
        />
      </div>
      <p>({movie.Year})</p>
      <div className="selectMovie">
        <input
          id="select"
          type="checkbox"
          // onChange={() => onMovieClick(movie.Title)}
          onChange={() => onMovieClick(movie.Title)}
          defaultValue={false}
        />
        <label>Select</label>
        <div>{selected ? "You have added this movie to your list" : ""}</div>
        <div>{addToList}</div>
      </div>
    </div>
  );
};

export default Movie;
