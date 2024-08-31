import React from "react";
import AttributeBar from "./AttributeBar";
import "./StateCategory.css";

const StatCategory = ({ stats, title, overall }) => {
  return (
    <div className="stat-category">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <span className="stat-overall">{overall}</span>
      </div>
      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li key={index}>
            <div className="stat-item">
              <AttributeBar label={stat.label} value={stat.value} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatCategory;
