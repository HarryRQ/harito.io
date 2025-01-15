import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../data";

import "../styles/Experience.css";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState();

  function handleExperience(experience) {
    setSelectedExperience(experience);
  }

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.09 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`experience ${inView ? "visible" : ""}`}
    >
      <h3 className="experience-heading">{`{ Experience }`}</h3>
      <menu>
        {EXPERIENCE.map((experience) => {
          return (
            <ExperienceItem
              key={experience.title}
              title={experience.title}
              image={experience.image}
              company={experience.company}
              description={experience.description}
              duration={experience.duration}
            />
          );
        })}
      </menu>
    </section>
  );
}
// <ExperienceItem
//   isSelected={selectedExperience === "Lockheed Martin"}
//   onSelect={() => {
//     handleExperience("Lockheed Martin");
//   }}
// >
//   Lockheed Martin
// </ExperienceItem>
// <ExperienceItem
//   isSelected={selectedExperience === "Climatology Office"}
//   onSelect={() => {
//     handleExperience("Climatology Office");
//   }}
// >
//   Climatology Office
// </ExperienceItem>
// <ExperienceItem
//   isSelected={selectedExperience === "National Weather Service"}
//   onSelect={() => {
//     handleExperience("National Weather Service");
//   }}
// >
//   National Weather Service
// </ExperienceItem>
// <ExperienceItem
//   isSelected={selectedExperience === "UPRM"}
//   onSelect={() => {
//     handleExperience("UPRM");
//   }}
// >
//   University of Puerto Rico at Mayagüez
// </ExperienceItem>
