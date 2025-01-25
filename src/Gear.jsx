import React from "react";
import "./Gear.css";
import { Link } from "react-router-dom";

const Gear = ({ label, link }) => {
  return (
    <div className="gear">
      <Link to={link} className="gear-link">
        <div className="gear-content">
          <span>{label}</span>
        </div>
      </Link>
    </div>
  );
};

export default Gear;
