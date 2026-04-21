import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="card">
        <div className="card-content">
            <img src={member.avatar} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.bio}</p>
        </div>
      
    </div>
  );
};

export default TeamCard;