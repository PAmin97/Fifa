import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PlayerInfo from "../components/PlayerInfo";
import StatCategory from "../components/StatCategory";

function HomePage() {
  const [players, setPlayers] = useState([]);
  const [visibleDropdown, setVisibleDropdown] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/info/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleDropdown = (index) => {
    setVisibleDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
          <React.Fragment key={index}>
            <tr>
              <td className="player-name">
                <img
                  src={player["Player Image"]}
                  alt={player["Name"]}
                  className="player-image"
                />
                {player["Name"]}
              </td>
              {[
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
              ].map((col, i) => (
                <td key={i} className={col.toLowerCase()}>
                  {col === "NAT" ? (
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
              ))}
              <td>
                <button
                  className="dropdown-button"
                  onClick={() => toggleDropdown(index)}
                >
                  {visibleDropdown[index] ? "▲" : "▼"}
                </button>
              </td>
            </tr>
            {visibleDropdown[index] && (
              <tr>
                <td colSpan={12}>
                  <div className="dropdown-content">
                    <div>
                      <img
                        className="card-player-image"
                        src={player["Player Image"]}
                        alt={player["Name"]}
                      />
                    </div>
                    <PlayerInfo player={player} />
                    <div className="card-details">
                      <div>
                        <span>Pace</span>
                        <span>{player["Pace"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Acceleration",
                              value: player["Acceleration"],
                            },
                            {
                              label: "Sprint Speed",
                              value: player["Sprint Speed"],
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <span>Shooting</span>
                        <span>{player["Shooting"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Positioning",
                              value: player["Positioning"],
                            },
                            { label: "Finishing", value: player["Finishing"] },
                            {
                              label: "Shot Power",
                              value: player["Shot Power"],
                            },
                            {
                              label: "Long Shots",
                              value: player["Long Shots"],
                            },
                            {
                              label: "Volleys",
                              value: player["Volleys"],
                            },
                            {
                              label: "Penalties",
                              value: player["Penalties"],
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <span>Passing</span>
                        <span>{player["Passing"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Vision",
                              value: player["Vision"],
                            },
                            { label: "Crossing", value: player["Crossing"] },
                            {
                              label: "Free Kick Accuracy",
                              value: player["Free Kick Accuracy"],
                            },
                            {
                              label: "Short Passing",
                              value: player["Short Passing"],
                            },
                            {
                              label: "Long Passing",
                              value: player["Long Passing"],
                            },
                            {
                              label: "Curve",
                              value: player["Curve"],
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <span>Dribbling</span>
                        <span>{player["Dribbling"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Agility",
                              value: player["Agility"],
                            },
                            { label: "Balance", value: player["Balance"] },
                            {
                              label: "Reactions",
                              value: player["Reactions"],
                            },
                            {
                              label: "Ball Control",
                              value: player["Ball Control"],
                            },
                            {
                              label: "Dribbling",
                              value: player["Dribbling"],
                            },
                            {
                              label: "Composure",
                              value: player["Composure"],
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <span>Defending</span>
                        <span>{player["Defending"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Interceptions",
                              value: player["Interceptions"],
                            },
                            {
                              label: "Heading Accuracy",
                              value: player["Heading Accuracy"],
                            },
                            {
                              label: "Def Awareness",
                              value: player["Def Awareness"],
                            },
                            {
                              label: "Standing Tackle",
                              value: player["Standing Tackle"],
                            },
                            {
                              label: "Sliding Tackle",
                              value: player["Sliding Tackle"],
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <span>Physicality</span>
                        <span>{player["Physicality"]}</span>
                        <StatCategory
                          stats={[
                            {
                              label: "Jumping",
                              value: player["Jumping"],
                            },
                            {
                              label: "Stamina",
                              value: player["Stamina"],
                            },
                            {
                              label: "Strength",
                              value: player["Strength"],
                            },
                            {
                              label: "Aggression",
                              value: player["Aggression"],
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default HomePage;
