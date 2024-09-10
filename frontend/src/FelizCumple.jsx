import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FelizCumple.css"; 

const FelizCumple = ({ setPoemaSeleccionado }) => {
  const navigate = useNavigate();

  const poemas = [
    {
      titulo: "",
      autor: "Valeria Mussio",
      poema: `justo donde empezaba el amor, también, estaba esto
éramos un auto viajando a 150km por hora
en la ruta 3 mordimos la banquina
siempre los cinturones puestos nos
mantuvieron atados al asiento, tu cabeza
golpeó con violencia el parabrisas y en ese  
instante
me olvidaste por completo. el auto
estaba en llamas y yo no sabía cómo salir por la ventana 
mis dedos habían olvidado 
cómo desatar nuestros nudos
siempre tuvimos vocación para herirnos mi amor
por vos coagulaba dentro del pecho
tus ojos miraban
suspensivos
los campos de girasoles quemados, te tomé
del cuello y quise revertir el golpe
una
y otra
vez contra el volante, gritando
acordate acordate acordate
quebré tu nariz contra el freno de mano
quereme te odio acordate
quise revertir el golpe pero
no
las vacas dejaron de interesarse,
creo un chimango lloró entre los pastos
un caballo se echaba para morir 
el auto seguía en llamas, ya nunca
volveríamos a casa, ya nadie
vendría por nosotros`
    },
    {
      titulo: "",
      autor: "Zaría Abreu Flores",
      poema: `me decías en el teléfono
-voy a acabar la prepa-
luego lo volviste a decir,
hace dos días

y yo pienso: no, este tipo,
no va a acabar la prepa,
va a acabar con todo
va a dinamitar los puentes
va a hacer explotar las construcciones de reforma
va a derrumbar los edificios
va a acabar con todo

cuando has terminado de explicarme tus razones
me he perdido imaginándote
como el hermoso terrorista
que en verdad eres
¿entiendes por qué –preguntas-
voy a acabar la prepa?

mi silencio te responde:
“sí,
porque vas a acabar con todo” `
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
      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hD31c-AInDQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        <h1>Feliz cumpleaños wapa 🎉🎂</h1>
        <h3>wapa wapa wapa wapa wapa wapa pq estas tan wapa</h3>
        <button onClick={obtenerPoema} className="center">pulsa aqui para obtener un poema</button>
      </div>
    </div>
  );
};

export default FelizCumple;
