import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import { useState } from "react";
import Home from "../pages/Home.js";
import "../css/navbar.css";


function Navbar(){
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!search) return
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return(
    <nav id="navbar" className="p-3 d-flex flex-column align-items-center mb-5">
      <h2>
        <Link to ="/" className="navbar_logo d-flex align-items-center"><BiCameraMovie className="me-1" />TheMovies</Link>
      </h2>
      <form onSubmit={handleSubmit} className="d-flex">
        <input value={search} onChange={(e) =>{setSearch(e.target.value);}} type="text" placeholder="Pesquisar filme" className="navbar_input rounded p-1 pe-3 me-2"></input>
        <button type="submit" className="d-flex flex-column align-items-center justify-content-center p-2 rounded navbar_search_button">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar

