import React from "react";
import "./AttributeBar.css";

const AttributeBar = ({ label, value }) => {
  const getBarColor = (value) => {
    if (value >= 80) return "green";
    if (value >= 60) return "yellow";
    return "red";
  };

  return (
    <div className="attribute-bar">
      <span className="attribute-label">{label}</span>
      <span className="attribute-value">{value}</span>
      <div className="bar-container">
        <div
          className={`bar ${getBarColor(value)}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AttributeBar;
