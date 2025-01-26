import React from "react";
import "./tech.css";

const nonTechnicalEvents = [
  {
    title: "Talent Show",
    description:
      "Show off your talent and shine in our Talent Show! Whether it's singing, dancing, or acting, this is your chance to take the stage.",
    image: "/assets/Talent.jpg",
    pdfUrl: "/assets/TALENTSHOW_rules.pdf", // PDF link for Talent Show
  },
  {
    title: "Triple Drouble",
    description:
      "Participate in the exciting Triple Drouble event. Engage in fun challenges and team games to test your skills and creativity.",
    image: "/assets/Triple.jpg",
    pdfUrl: "/assets/TRIPLE_TROUBLE_rules.pdf", // PDF link for Triple Trowble
  },
  {
    title: "Photography",
    description:
      "Capture the world through your lens in the Photography competition. Showcase your photography skills and win exciting prizes.",
    image: "/assets/Photograph.jpg",
    pdfUrl: "/assets/PHOTOGRAPHY_rules.pdf", // PDF link for Photography
  },
  {
    title: "Connection",
    description:
      "Join the Connection event to test your networking and communication skills in a fun and engaging format.",
    image: "/assets/Connextion.jpg",
    pdfUrl: "/assets/CONNECTION_rules.pdf", // PDF link for Connection
  },
];

// Reusable EventCard Component
const EventCard = ({ event }) => {
  const handleImageError = (e) => {
    e.target.src = "/assets/placeholder.png"; // Default placeholder image
  };

  return (
    <div className="event-card">
      <img
        src={event.image}
        alt={event.title}
        onError={handleImageError}
        className="event-image"
      />
      <h3 className="event-title">{event.title}</h3>
      <p className="event-description">{event.description}</p>
      <a
        href={event.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more-link"
      >
        Read More » To Rules
      </a>
    </div>
  );
};

const NonTechnicalEvents = () => {
  return (
    <div className="event-container">
      <h1>Non-Technical Events</h1>
      <div className="event-cards">
        {nonTechnicalEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default NonTechnicalEvents;
