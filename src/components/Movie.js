import React from "react";
import question_mark from "../question_mark.png";

const Movie = ({ movie, onMovieClick, onChecked }) => {
  // const [selected, setSelected] = useState(false);
  // console.log(selected);
  // const onChecked = (e) => {
  //   setSelected(e.target.checked ? true : false);
  // };

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
