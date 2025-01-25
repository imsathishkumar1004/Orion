import React, { useState, useEffect } from "react";
import Event from "./Event";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-02-13T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div className="home-container" id="home">
        <h3 className="fade-in">KONGU ENGINEERING COLLEGE</h3>
        <h1 className="orion-text">ORION 2K25</h1>
        <h3 className="fade-in">MASTER OF COMPUTER APPLICATIONS</h3>
        <p className="fade-in">Your one-stop platform for events, teams, and more!</p>

        {/* Countdown Section */}
        <div className="countdown">
          <h2>Registration Ends In:</h2>
          <div className="timer">
            <div>{timeLeft.days} Days</div>
            <div>{timeLeft.hours} Hours</div>
            <div>{timeLeft.minutes} Minutes</div>
            <div>{timeLeft.seconds} Seconds</div>
          </div>
          <br />
          <br />
          {/* Register Now Button */}
          <a
            href="https://forms.gle/5dFzrg5HLzaA17q18"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-button bounce"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Events Section */}
      <div className="section" id="events">
        <Event />
      </div>

      {/* About Section */}
      <div className="section" id="about">
        <About />
      </div>

      {/* Contact Section */}
      <div className="section" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
