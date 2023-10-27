import { useMovieContext } from "../conText/GlobalContext";
import * as actions from "../conText/actoinsTypes"

const MovieControls = ({ movie, type }) => {
  const { moviesDispatch : dispatch } = useMovieContext()
  
  return (
    <div className="inner-card-controls">
      {type === "watch-list" ? (
        <>
          <button onClick={()=> dispatch({type : actions.ADD_MOVIE_TO_WATCHED , payload : movie})} className="ctrl-btn">
            <i className="fa-solid fa-eye"></i>
          </button>
          <button onClick={()=> dispatch({type : actions.REMOVE_MOVIE_FROM_WATCHLIST , payload : movie.imdbID})} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      ) : (
        <>
          <button onClick={()=> dispatch({type:actions.MOVE_TO_WATCHLIST , payload: movie})} className="ctrl-btn">
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button onClick={()=> dispatch({type: actions.REMOVE_FROM_WATCHED , payload: movie.imdbID})} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
