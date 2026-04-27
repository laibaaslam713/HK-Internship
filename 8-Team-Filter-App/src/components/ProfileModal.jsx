import React, { useEffect } from "react";

const ProfileModal = ({ member, onClose }) => {
  // ESC key se close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Outside click se close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <img 
          src={member.image} 
          alt={member.name} 
          className="modal-image"
        />
        <div className="modal-content">
          <h2>{member.name}</h2>
          <p className="modal-role">{member.role}</p>
          <p className="modal-bio">{member.bio}</p>
          <div className="modal-skills">
            <h4>Skills:</h4>
            {member.skills.split(",").map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill.trim()}
              </span>
            ))}
          </div>
          <div className="social-links">
            <h4>Connect:</h4>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;