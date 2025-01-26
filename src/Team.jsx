import React from "react";
import "./Team.css";

const staffCoordinator = {
  name: "Dr.M.Jagadeesan",
  description: "Staff Coordinator guiding the Orion 2K25 team.",
  contact: "+91 99650 79892",
  image: "/assets/Sir.png", 
};

const teamMembers = [
  {
    name: "Jeysaravanan",
    description: "Secretary",
    contact: "+91 91593 22662",
    image: "/assets/Jey.png", 
  },
  {
    name: "Thenmalar T",
    description: "Additional secretary",
    contact: "+91 93856 98235",
    image: "/assets/then.png", 
  },
  {
    name: "VIKASHRAJ R",
    description: "Join Secretary",
    contact: "+91 63815 44729",
    image: "/assets/vikash.png", 
  },
  {
    name: "Divisha",
    description: "Treasurer",
    contact: "+91 73977 46261",
    image: "/assets/divisha.png", 
  },
];


const Team = () => {
  return (
    <div className="team-container">
      {/* Staff Coordinator Section */}
      <div className="staff-card">
        <div className="staff-image-container">
          <img src={staffCoordinator.image} alt={staffCoordinator.name} className="staff-image" />
        </div>
        <div className="staff-info">
          <h2 className="staff-name">{staffCoordinator.name}</h2>
          <p className="staff-description">{staffCoordinator.description}</p>
          <p className="staff-contact">Contact: {staffCoordinator.contact}</p>
        </div>
      </div>

      {/* Coordinators Section */}
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image-container">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-description">{member.description}</p>
              <p className="team-contact">Contact: {member.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
