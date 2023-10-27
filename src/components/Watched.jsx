import { useMovieContext } from "../conText/GlobalContext"
import MoviesContainer from "./MoviesContainer"

const Watched = () => {
  const {watched} = useMovieContext()
  return <MoviesContainer type="watched" heading="My watched list" movies={watched}/>
}

export default Watched