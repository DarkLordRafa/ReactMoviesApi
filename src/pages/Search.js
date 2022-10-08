import React from "react";
import { useState, useEffect} from "react";
import { useSearchParams} from "react-router-dom";
import { movieSearchUrl, apiKey} from "../services/api.js";
import MovieCard from "../components/MovieCard.js";
import "../css/movie_cards.css";



const Search = () =>{

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  
  const getSearchMovies = async () =>{
    const response = await fetch(`${movieSearchUrl}?${apiKey}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
    }
  
  useEffect(() =>{
  
    getSearchMovies();
  }, [query]);
  
  
  return(
    <div className="movie_cards container d-flex flex-column justify-content-center align-items-center pb-4">
      <h2 className="mb-4">Resultados para: <span className="movie_cards_query_text">{query}</span></h2>
      <div className="movie_container d-flex justify-content-space-between align-items-center flex-wrap">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key ={movie.id} movie={movie} /> )}
      </div>
    </div>
  )
}

export default Search
