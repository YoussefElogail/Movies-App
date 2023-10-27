import { useEffect, useState } from "react"
import "./Add.css"
import axios from "axios"
import ResultCard from "./ResultCard"
const Add = () => {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=a4c50802`)
    .then((res)=> {
      if (res.data.Search) {
        setMovies(res.data.Search);
      }
    })
    .catch((error)=> console.log(error))
  },[searchValue])
  return (
    <main className="add-page">
      <section className="container">
        <div className="add-content">
          <div className="input-container">
            <input type="text" placeholder="Serch for a movie" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
          </div>
          <ul className="results">
            {movies.length > 0 && movies.map((movie)=>(
              <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Add