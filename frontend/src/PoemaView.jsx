import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PoemaView.css"; 

const PoemaView = ({ poemaSeleccionado }) => {
  const navigate = useNavigate();

  if (!poemaSeleccionado) {
    return navigate("/FelizCumple");
  }

  return (
    <div className="container">
      <div className="poema">
        <h2>{poemaSeleccionado.titulo}</h2>
        <h4>{poemaSeleccionado.autor}</h4>
        <p>{poemaSeleccionado.poema}</p>
      </div>
      <button onClick={() => navigate("/FelizCumple")}>Volver a la página principal</button>
    </div>
  );
};

export default PoemaView;
