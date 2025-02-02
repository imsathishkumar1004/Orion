import React from "react";
import "./tech.css";

const technicalEvents = [
  {
    title: "Paper Presentation",
    description:
      "Paperizm is a Paper Presentation event that aims to foster intellectual discussions, promote interdisciplinary collaboration, and contribute to the advancement of knowledge.",
    image: "/assets/paper.jpg",
    pdfUrl: "/assets/PAPER_PRESENTATION_rules.pdf",
  },
  {
    title: "Coding Contest",
    description:
      "Test your programming skills by solving fun challenges. Compete with others and see how fast you can code your way to the top!",
    image: "/assets/code.jpg",
    pdfUrl: "/assets/CODING_CONTEST_rules.pdf",
  },
  {
    title: "Quiz",
    description:
      "Test your logical and analytical skills in our thrilling Quiz Challenge! Answer brain-teasing questions, showcase your expertise, and compete to be the ultimate quiz master!",
    image: "/assets/Quiz.jpg",
    pdfUrl: "/assets/QUIZ_rules.pdf",
  },
  {
    title: "Logo Creation",
    description:
      "Unleash your creativity and design skills in our Logo Creation event! Craft unique and innovative logos that capture attention and leave a lasting impression.",
    image: "/assets/graphic.png",
    pdfUrl: "/assets/LOGO_CREATION_rules.pdf",
  },
];

const EventCard = ({ title, description, image, pdfUrl }) => {
  return (
    <div className="event-card">
      <img
        src={image}
        alt={title}
        className="event-image"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = "/assets/default-image.png"; // Fallback image
        }}
      />
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more-link"
      >
        Read More » To Rules
      </a>
    </div>
  );
};

const TechnicalEvents = () => {
  return (
    <div className="event-container">
      <h1>Technical Events</h1>
      <div className="event-cards">
        {technicalEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            pdfUrl={event.pdfUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalEvents;
