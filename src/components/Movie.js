import React from "react";
import question_mark from "../question_mark.png";

const Movie = ({ movie, onMovieClick, onChecked }) => {
  //function to pass clicked/checked info back to parent
  const onMovieChecked = (e) => {
    onMovieClick(movie.Title);
    onChecked(e);
  };

  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={movie.Poster === "N/A" ? question_mark : movie.Poster}
        />
      </div>
      <div className="selectMovie">
        <input
          id="select"
          type="checkbox"
          onChange={onMovieChecked}
          defaultValue={false}
        />
        <label>Select</label>
      </div>
    </div>
  );
};

export default Movie;
