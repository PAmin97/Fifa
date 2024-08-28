import React, { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  /* React Hook to store each players data from our MongoDB databse */
  const [players, setPlayers] = useState([]);
  /* list of table header names */
  const [columns] = useState([
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
  ]);

  /* 
  React Hook to connect to our external database and fetch our data
  and store it in our players state
  */
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
          {columns.map(
            (
              col,
              index // iterate through the columns list and set each table header to a value in the list
            ) => (
              <th key={index}>{col}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {players.map(
          (
            player,
            index // iterate through all the players data from our database and store each players data into a variable called player
          ) => (
            <tr key={index}>
              <td className="player-name">
                <img
                  src={player["Player Image"]} // get the URL from the Player Image column in our database for the current player
                  alt={player["Name"]}
                  className="player-image"
                />
                {player["Name"]}
              </td>
              {columns.slice(1).map(
                (
                  col,
                  i // iterate through the columns list from index 1 so we dont display player name again
                ) => (
                  <td key={i} className={col.toLowerCase()}>
                    {col === "NAT" ? ( // if the current col variable equals NAT then display the URL under the Country Flag column from our database
                      <button className="transparent-button">
                        <img
                          src={player["Country Flag"]}
                          alt={player["NATION"]}
                          className="flag"
                        />
                      </button>
                    ) : col === "POS" ? (
                      <button className="transparent-button">
                        <span className="position">{player["Position"]}</span>
                      </button>
                    ) : col === "TEAM" ? (
                      <button className="transparent-button">
                        <img
                          src={player["Club Logo"]}
                          alt={player["TEAM"]}
                          className="club-logo"
                        />
                      </button>
                    ) : (
                      <span className={`stat-value ${player[col]}`}>
                        {player[col]}
                      </span>
                    )}
                  </td>
                )
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default Card;
