import React from "react";
import INFO from "../../data/user";

import "./styles/techstack.css";

const TechStack = () => {
    return (
        <div className="techstack-section">
            <div className="techstack-container">
                <h2 className="techstack-title">Tech Stack</h2>
                
                <div className="techstack-grid">
                    {INFO.techstack.skills.map((skill, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon">
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="tech-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
