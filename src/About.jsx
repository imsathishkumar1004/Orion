import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-image">
          <img
            src="/assets/MCA.jpg" 
            alt="About Us"
          />
        </div>

        <div className="about-text">
          <h1>About Us</h1>
          <p>
          ORIOS 2K25 - An Inter-Department Technical Symposium Organized by the Department of MASTER OF COMPUTER APPLICATIONS, Kongu Engineering College, ORION is designed to enhance technical skills and foster innovation among students across various departments.
          </p>
          <p>
          This symposium provides a vibrant platform for participants to showcase their talents, exchange knowledge, and engage in skill-building activities within a collaborative and competitive environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
