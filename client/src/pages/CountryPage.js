import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CountryPage() {
  const { country } = useParams(); // Get the country from the URL parameters
  const [players, setPlayers] = useState([]);

  const [visibleDropdown, setVisibleDropdown] = useState({});

  const toggleDropdown = (index) => {
    setVisibleDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    fetch(`http://localhost:3001/info?country=${country}`)
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [country]);

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
          <Card
            key={index}
            player={player}
            index={index}
            toggleDropdown={toggleDropdown}
            visibleDropdown={visibleDropdown}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CountryPage;
