import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; 

function Home() {
  return (
    <div className="container" >
      <div className="content">
        <h1>❤️❤️❤️ Holiii wapa ❤️❤️❤️</h1>
        <Link to="/SecondView">
          <button>Pulsa aquí para recibir tu regalo uwu</button>
        </Link>
      </div>
      <img
        src="public/images/felizcum.jpg" 
        alt="bottom decoration"
        className="below-button-image"
      />
    </div>
  );
}

export default Home;