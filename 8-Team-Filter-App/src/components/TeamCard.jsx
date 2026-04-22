import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="card">
      <img src={member.image} alt={member.name} className="avatar" />

      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>

      <div className="skills">
        {member.skills.split(",").map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>

    </div>
  );
};

export default TeamCard;