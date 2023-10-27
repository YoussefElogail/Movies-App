import MovieCard from "./MovieCard"
import "./MoviesContainer.css"
const MoviesContainer = ({type ,heading , movies}) => {
  return (
    <main className="movie-page">
      <section className="container">
        <div className="header">
          <h1  className='heading'>{heading}</h1>
          <span className='count-pill'>{movies.length}{movies.length > 1 ? " Movies" : " Movie"} </span>
        </div>
        {movies.length > 0 ? (<div className="movie-grid">
          {movies.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie} type={type}/>
          ))}
        </div>) : (<h2 className="no-movies">No movies in your list, Add some!</h2>) }
      </section>
    </main>
  )
}

export default MoviesContainer