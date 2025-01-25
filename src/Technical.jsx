import React from "react";
import "./tech.css";

const technicalEvents = [
  {
    title: "Paper Presentation",
    description:
      "Paperizm is a Paper Presentation event that aims to foster intellectual discussions, promote interdisciplinary collaboration, and contribute to the advancement of knowledge.",
    image: "/src/assets/paper.jpg",
    pdfUrl: "/src/assets/PAPER PRESENTATION rules.pdf", // PDF link for Paper Presentation
  },
  {
    title: "Debugging",
    description:
      "Embark on a journey into a captivating world of designs with our pixel perfection. Explore Software: Adobe Photoshop, Adobe Illustrator.",
    image: "/src/assets/code.jpg",
    pdfUrl: "/src/assets/CODING CONTEST rules.pdf", // PDF link for Debugging
  },
  {
    title: "Quiz",
    description:
      "Compete in solving complex coding problems to test your logical and analytical thinking.",
    image: "/src/assets/Quiz.jpg",
    pdfUrl: "/src/assets/QUIZ rules.pdf", // PDF link for Quiz
  },
  {
    title: "Logo Creation",
    description:
      "Test your technical knowledge in a fun and engaging quiz format.",
    image: "/src/assets/graphic.png",
    pdfUrl: "/src/assets/LOGO CREATION rules.pdf", // PDF link for Logo Creation
  },
];

const TechnicalEvents = () => {
  return (
    <div className="event-container">
      <h1>Technical Events</h1>
      <br /><br />
      <div className="event-cards">
        {technicalEvents.map((event, index) => (
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

export default TechnicalEvents;
