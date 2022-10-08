import React from "react";
import { useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { BsWallet2, BsGraphUp, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { generalApi, apiKey } from "../services/api.js";
import MovieCard from "../components/MovieCard.js";
import "../css/movie_cards.css";
import "../css/movie.css";




const Movie = () =>{

  const {id} = useParams();
  const [movie, setMovie] = useState("");
  
  const getMovie = async () =>{
    const response = await fetch(`${generalApi}${id}?${apiKey}`);
    const data = await response.json();
    setMovie(data);
    };
    
  const formatCurrency = (number) =>{
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD"
    });
  };
  
  useEffect(() =>{
    
    getMovie();
  }, []);

  return(
    <div className="movie_page">
      {!movie && (<p>Carregando...</p>)}
      {movie && (
        <>
          <MovieCard movie ={movie} showLink = {false} />
          <span className="tagline" mb-3 d-inline-block`}>{movie.tagline}</span>
          <div className="movie_info">
            <h5><BsWallet2 className="me-2" />Orçamento: </h5>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="movie_info">
            <h5><BsGraphUp className="me-2" />Receita: </h5>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="movie_info">
            <h5><BsHourglassSplit className="me-2" />Duração: </h5>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="movie_info">
            <h5 className="mb-3"><BsFillFileEarmarkTextFill className="me-2" />Descrição: </h5>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie
