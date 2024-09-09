import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FelizCumple.css"; 

const FelizCumple = ({ setPoemaSeleccionado }) => {
  const navigate = useNavigate();

  const poemas = [
    {
      titulo: "Risas al Viento",
      autor: "Autor Desconocido",
      poema: "Tu risa ilumina el mundo, que este día sea profundo."
    },
    {
      titulo: "Cielo de Felicidad",
      autor: "Juan Pérez",
      poema: "Hoy el cielo canta por ti, porque naciste para ser feliz."
    },
    {
      titulo: "Luz Inolvidable",
      autor: "María García",
      poema: "En tu día tan especial, la vida te sonríe, sin igual."
    },
    {
      titulo: "Corazón Libre",
      autor: "Luis Fernández",
      poema: "Que tu corazón sea siempre libre, en este día inolvidable."
    },
    {
      titulo: "Razones para Celebrar",
      autor: "Sofía López",
      poema: "Un año más, una razón más para celebrar tu luz y tu paz."
    }
  ];

  const obtenerPoema = () => {
    const randomPoema = poemas[Math.floor(Math.random() * poemas.length)];
    setPoemaSeleccionado(randomPoema); 
    navigate("/PoemaView"); 
  };

  return (
    <div className="container">
      <div className="message">
        <h1>Feliz cumpleaños wapa 🎉🎂</h1>
        <button onClick={obtenerPoema} className="center">Obtener un poema aleatorio</button>
      </div>
    </div>
  );
};

export default FelizCumple;
