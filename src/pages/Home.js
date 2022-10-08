import React from "react";
import { useState, useEffect } from "react";
import { generalApi, apiKey } from "../services/api.js";
import MovieCard from "../components/MovieCard.js";
import "../css/movie_cards.css";
import "../css/movie.css";


const Home = () =>{
   const [topMovies, setTopMovies] = useState([]);
  
  const getTopMovies = async () =>{
    const response = await fetch(`${generalApi}top_rated?${apiKey}`);
    const data = await response.json();
    setTopMovies(data.results);
    };
  
  useEffect(() =>{
    
    getTopMovies();
  }, []);
  
  return(
    <div className="movie_cards container d-flex flex-column justify-content-center align-items-center pb-4">
      <h2 className="mb-4">Melhores Filmes</h2>
      <div className="movie_container d-flex justify-content-space-between align-items-center flex-wrap">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key ={movie.id} movie={movie} /> )}
      </div>
    </div>
  )
}

export default Home
