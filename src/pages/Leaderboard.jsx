import React from "react";
import "./Leaderboard.css";

const Leaderboard = ({ title, players }) => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">{title} 🏆</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Jugador</th>
            <th>Tiempo(s)</th>
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

const Leaderboards = () => {
  const beginnerPlayers = [
    { id: 1, name: "NoviceHero", time: 180 },
    { id: 2, name: "RookieMage", time: 200 },
    { id: 3, name: "YoungKnight", time: 220 },
    { id: 4, name: "FirstTimer", time: 230 },
    { id: 5, name: "LearningWarrior", time: 240 },
  ];

  const intermediatePlayers = [
    { id: 1, name: "ShadowKnight", time: 120 },
    { id: 2, name: "EternalMage", time: 135 },
    { id: 3, name: "CelestialWarrior", time: 145 },
    { id: 4, name: "FrostMage", time: 150 },
    { id: 5, name: "SilverPaladin", time: 155 },
  ];

  const advancedPlayers = [
    { id: 1, name: "DarkSorcerer", time: 95 },
    { id: 2, name: "PhantomAssassin", time: 105 },
    { id: 3, name: "NightmareHunter", time: 110 },
    { id: 4, name: "LegendaryArcher", time: 115 },
    { id: 5, name: "GrandWizard", time: 118 },
  ];

  return (
    <div className="leaderboards-wrapper">
      <div className="leaderboards-container">
        <Leaderboard title="Principiante" players={beginnerPlayers} />
        <Leaderboard title="Intermedio" players={intermediatePlayers} />
        <Leaderboard title="Avanzado" players={advancedPlayers} />
      </div>
    </div>
  );
};

export default Leaderboards;