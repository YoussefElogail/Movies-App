import  * as actions  from "./actoinsTypes"

export const reducer = (state , {type , payload}) => {
  switch(type){
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state ,
        watchList : [ ...state.watchList , payload ]
      }
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return{
        ...state,
        watchList : state.watchList.filter((movieId)=> movieId.imdbID !== payload)
      }
    case actions.ADD_MOVIE_TO_WATCHED:
      return{
        watchList : state.watchList.filter((movieId)=>movieId.imdbID !== payload.imdbID),
        watched : [...state.watched , payload  ]
      }
    case actions.MOVE_TO_WATCHLIST:
      return{
        watchList : [...state.watchList , payload],
        watched : state.watched.filter((movieId)=>movieId.imdbID !== payload.imdbID)
      }
      case actions.REMOVE_FROM_WATCHED:
        return{
          ...state,
          watched : state.watched.filter((movieId)=> movieId.imdbID !== payload)
        }
      default:
        return state
  }
}