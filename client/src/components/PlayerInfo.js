import React from "react";
import "./PlayerInfo.css";

const PlayerInfo = ({ player }) => {
  const infoItems = [
    { label: "ATT WORK RATE", value: player["ATT WORK RATE"] },
    { label: "PREFERRED FOOT", value: player["PREFERRED FOOT"] },
    { label: "LEAGUE", value: player["LEAGUE"] },
    { label: "HEIGHT", value: player["HEIGHT"] },
    { label: "NATION", value: player["NATION"] },
    { label: "DEF WORK RATE", value: player["DEF WORK RATE"] },
    { label: "AGE", value: player["AGE"] },
    { label: "TEAM", value: player["TEAM"] },
    { label: "WEIGHT", value: player["WEIGHT"] },
  ];

  return (
    <div className="player-info">
      {infoItems.map((item, index) => (
        <div key={index} className="attribute">
          {item.label}
          <span className="attr">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
