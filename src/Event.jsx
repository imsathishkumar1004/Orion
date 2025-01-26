import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

const Event = () => {
  const navigate = useNavigate();

  const eventCategories = [
    {
      title: "TECH",
      description: "Explore our technical events.",
      image: "/public/assets/Tech.jpg", // Replace with the actual path to the image
      link: "/technical",
    },
    {
      title: "NON TECH",
      description: "Dive into our non-technical events.",
      image: "/public/assets/Non-Tech.jpg", // Replace with the actual path to the image
      link: "/non-technical",
    },
  ];

  const renderCategoryCard = (category) => (
    <div
      className="event-card"
      key={category.title}
    >
      <img src={category.image} alt={category.title} className="event-image" />
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <button
        className="explore-button"
        onClick={() => navigate(category.link)}
      >
        Explore Now
      </button>
    </div>
  );

  return (
    <div className="event-container">
      <h1>Explore Our Events</h1>
      <div className="event-cards">
        {eventCategories.map((category) => renderCategoryCard(category))}
      </div>
    </div>
  );
};

export default Event;



