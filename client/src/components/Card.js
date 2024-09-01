import "./Card.css";
import DropdownDetails from "./DropdownDetails";

function Card({ player, index, toggleDropdown, visibleDropdown }) {
  return (
    <>
      <tr>
        <td className="player-name">
          <img
            src={player["Player Image"]}
            alt={player["Name"]}
            className="player-image"
          />
          {player["Name"]}
        </td>
        <td>
          <button className="transparent-button">
            <img
              src={player["Country Flag"]}
              alt={player["NATION"]}
              className="flag"
            />
          </button>
        </td>
        <td>
          <button className="transparent-button">
            <span className="position">{player["Position"]}</span>
          </button>
        </td>
        <td>
          <button className="transparent-button">
            <img
              src={player["Club Logo"]}
              alt={player["TEAM"]}
              className="club-logo"
            />
          </button>
        </td>
        <td>
          <span className="stat-value">{player["Overall"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["PAC"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["SHO"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["PAS"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["DRI"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["DEF"]}</span>
        </td>
        <td>
          <span className="stat-value">{player["PHY"]}</span>
        </td>
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
          <td colSpan="12">
            <DropdownDetails key={index} player={player} />
          </td>
        </tr>
      )}
    </>
  );
}

export default Card;
