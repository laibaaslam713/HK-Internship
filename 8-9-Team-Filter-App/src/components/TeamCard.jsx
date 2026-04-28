import React, { useState } from "react";
import ProfileModal from "./ProfileModal";  

const TeamCard = ({ member }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (memberData) => {
    setSelectedMember(memberData);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="card" onClick={() => openModal(member)}>
        <img src={member.image} alt={member.name} className="avatar" />
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <div className="skills">
          {member.skills.split(",").map((skill, i) => (
            <span key={i}>{skill.trim()}</span>
          ))}
        </div>
        <button className="profile-btn">View Profile</button>
      </div>
      {selectedMember && (
        <ProfileModal member={selectedMember} onClose={closeModal} />
      )}
    </>
  );
};

export default TeamCard;  