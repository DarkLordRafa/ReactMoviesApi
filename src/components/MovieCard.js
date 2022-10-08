import React from "react";
import { FaStar } from "react-icons/fa";
import { movieImageUrl } from "../services/api.js";
import { Link } from "react-router-dom";
import "../css/movie_cards.css";



const MovieCard = ({movie, showLink = true}) =>{

  return(
    <div className="movie_card" d-flex flex-column justifiy-content-center align-items-center`}>
        <img src={movieImageUrl + movie.poster_path} alt={movie.title}>
        </img>
        <h4>{movie.title}</h4>
        <p className="movie_cards_star_icon bg-danger d-flex p-1 w-100 justify-content-center align-items-center">
          <FaStar className="me-2" /> {movie.vote_average.toFixed(1)}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`} className="p-2 rounded w-100">Detahes</Link>}
    </div>
  );
};

export default MovieCard;
