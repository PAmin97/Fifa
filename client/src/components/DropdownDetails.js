import React from "react";
import PlayerInfo from "./PlayerInfo";
import StatCategory from "./StatCategory";
import "./DropdownDetails.css";

const DropdownDetails = ({ player }) => {
  return (
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
  );
};

export default DropdownDetails;
