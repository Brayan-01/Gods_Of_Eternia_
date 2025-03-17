import React from "react";
import "./Leaderboard.css"; // Archivo de estilos para el leaderboard

const Leaderboard = () => {
  // Datos de prueba (simulando mejores tiempos en segundos)
  const players = [
    { id: 1, name: "ShadowKnight", time: 120 },
    { id: 2, name: "EternalMage", time: 135 },
    { id: 3, name: "CelestialWarrior", time: 145 },
    { id: 4, name: "DarkSorcerer", time: 160 },
    { id: 5, name: "PhantomAssassin", time: 175 },
  ];

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard🏆</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Jugador</th>
            <th>Tiempo (s)</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id} className="leaderboard-row">
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;