import { useContext } from "react";
import { GlobalContext, useMovieContext } from "../conText/GlobalContext";
import * as actions from "../conText/actoinsTypes";
import "./ResultCard.css";
const ResultCard = ({ movie }) => {
  const movieContext = useMovieContext();

  const storedMovie = movieContext.watchList.find(
    (o) => o.imdbID === movie.imdbID
  );

  const storedMovieWatched = movieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            disabled={watchListDisabled}
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn"
          >
            Add to watch list
          </button>
          <button
            disabled={watchedDisabled}
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
