import React, { useState } from "react";
import "../styles/ExperienceItem.css";

export default function ExperienceItem({
  title,
  duration,
  company,
  description,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const technologiesUsed = {
    "Associate Software Engineer": [
      "C++",
      "System Design",
      "Embedded Software",
      "GNU/Linux",
      "Ada",
    ],

    "Computer Science Intern": ["QGIS", "SQL", "Geo-referenced Databases"],

    "Software Developer": ["React", "TypeScript", "HTML", "CSS"],

    "Undergraduate Researcher": [
      "Evolutionary Algorithms",
      "Genetic Algorithms",
    ],
  };

  return (
    <section className="card">
      <div className="card-info">
        <div className="title-duration">
          <p className="duration">{duration}</p>
          <h1 className="card-title">
            {title} @ {company}
          </h1>
        </div>
        <div className="experience-info">
          <p>
            {description.map((bulletpoint, index) => (
              <li key={index}>{bulletpoint}</li>
            ))}
          </p>
        </div>
        <div className="skills">
          {technologiesUsed[title].map((tech, index) => (
            <span key={index} className="skill-bubble">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
