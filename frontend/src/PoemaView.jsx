import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PoemaView.css"; 

const PoemaView = ({ poemaSeleccionado }) => {
  const navigate = useNavigate();

  if (!poemaSeleccionado) {
    return navigate("/FelizCumple");
  }

  return (
    <div className="poem-container">
      <div className="poema">
        <h2>{poemaSeleccionado.titulo}</h2>
        <h4>{poemaSeleccionado.autor}</h4>
        <pre>{poemaSeleccionado.poema}</pre>
      </div>
      <button onClick={() => navigate("/FelizCumple")}>Volver</button>
    </div>
  );
};

export default PoemaView;
