import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Card from "../components/Card";

function Test() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/info/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <table className="player-table">
      <thead>
        <tr>
          {[
            "Name",
            "NAT",
            "TEAM",
            "POS",
            "Overall",
            "PAC",
            "SHO",
            "PAS",
            "DRI",
            "DEF",
            "PHY",
          ].map((col, index) => (
            <th key={index}>{col}</th>
          ))}
          <th></th> {/* Extra header for the dropdown arrow */}
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <Card key={index} player={player} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Test;
