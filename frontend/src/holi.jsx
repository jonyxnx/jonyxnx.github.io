import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SecondView.css';

function SecondView() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const choices = ["piedra", "papel", "tijeras"];
  const navigate = useNavigate();

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("Empate");
    } else if (
      (player === "piedra" && computer === "tijeras") ||
      (player === "papel" && computer === "piedra") ||
      (player === "tijeras" && computer === "papel")
    ) {
      setResult("¡Ganaste!");
      setPlayerWins(prev => prev + 1);
    } else {
      setResult("Perdiste");
      setComputerWins(prev => prev + 1);
    }
    checkGameStatus();
  };

  const checkGameStatus = () => {
    if (playerWins >= 2) {
      setTimeout(() => navigate("/FelizCumple"), 1000); // Navega a otra vista si el jugador gana 2 de 3 rondas
    } else if (computerWins >= 2) {
      setTimeout(() => resetGame(), 0); // Reinicia el juego si el computador gana 2 de 3 rondas
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setPlayerWins(0);
    setComputerWins(0);
  };

  return (
    <div className="container">
      <div className="content">
        <h2> Para ver tu regalo, antes debes de ganar un 2 de 3 en piedra papel o tijera</h2>
        <h7>(upsi si a veces se buguea un poquis)</h7>
        <div>
          <button onClick={() => playGame("piedra")}>Piedra</button>
          <button onClick={() => playGame("papel")}>Papel</button>
          <button onClick={() => playGame("tijeras")}>Tijeras</button>
        </div>
        {result && (
          <div>
            <p>Escogiste: {playerChoice}</p>
            <p>La compu escogio: {computerChoice}</p>
            <h2>Resultado: {result}</h2>
            <p>dianis: {playerWins}</p>
            <p>compu: {computerWins}</p>
            {playerWins < 2 && computerWins < 2 && <button onClick={resetGame}>Reiniciar</button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default SecondView;
