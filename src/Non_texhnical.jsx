import React from "react";
import "./tech.css";

const nonTechnicalEvents = [
  {
    title: "Talent Show",
    description:
      "Show off your talent and shine in our Talent Show! Whether it's singing, dancing, or acting, this is your chance to take the stage.",
    image: "/src/assets/Talent.jpg",
    pdfUrl: "/src/assets/TALENTSHOW rules.pdf", // PDF link for Talent Show
  },
  {
    title: "Triple Trowble",
    description:
      "Participate in the exciting Triple Trowble event. Engage in fun challenges and team games to test your skills and creativity.",
    image: "/src/assets/Triple.jpg",
    pdfUrl: "/src/assets/TRIPLE TROUBLE rules.pdf", // PDF link for Triple Drowble
  },
  {
    title: "Photography",
    description:
      "Capture the world through your lens in the Photography competition. Showcase your photography skills and win exciting prizes.",
    image: "/src/assets/photograph.jpg",
    pdfUrl: "/src/assets/PHOTOGRAPHY rules.pdf", // PDF link for Photography
  },
  {
    title: "Connection",
    description:
      "Join the Connection event to test your networking and communication skills in a fun and engaging format.",
    image: "/src/assets/Connextion.jpg",
    pdfUrl: "/src/assets/CONNECTION rules.pdf", // PDF link for Connection
  },
];

const NonTechnicalEvents = () => {
  return (
    <div className="event-container">
      <h1>Non-Technical Events</h1>
      <br /><br />
      <div className="event-cards">
        {nonTechnicalEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <a href={event.pdfUrl} target="_blank" className="read-more-link">
              Read More » To Rules
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonTechnicalEvents;
