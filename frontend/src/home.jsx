import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" >
      <div className="content">
        <h1>Holiii wapa</h1>
        <Link to="/SecondView">
          <button>Pulsa aquí para recibir tu regalo uwu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;