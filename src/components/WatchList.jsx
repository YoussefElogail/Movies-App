import { useMovieContext } from "../conText/GlobalContext"
import MoviesContainer from "./MoviesContainer"

const WatchList = () => {
  const {watchList} = useMovieContext()
  return <MoviesContainer type="watch-list" heading="My watch list" movies={watchList} />
}

export default WatchList