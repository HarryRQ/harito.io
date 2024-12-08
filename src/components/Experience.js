import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../data";

import "../styles/Experience.css";

import { useState } from "react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState();

  function handleExperience(experience) {
    setSelectedExperience(experience);
  }

  return (
    <section id="experience" className="experience">
      <h3>Experience</h3>
      <menu>
        <ExperienceItem
          isSelected={selectedExperience === "Lockheed Martin"}
          onSelect={() => {
            handleExperience("Lockheed Martin");
          }}
        >
          Lockheed Martin
        </ExperienceItem>
        <ExperienceItem
          isSelected={selectedExperience === "Climatology Office"}
          onSelect={() => {
            handleExperience("Climatology Office");
          }}
        >
          Climatology Office
        </ExperienceItem>
        <ExperienceItem
          isSelected={selectedExperience === "National Weather Service"}
          onSelect={() => {
            handleExperience("National Weather Service");
          }}
        >
          National Weather Service
        </ExperienceItem>
        <ExperienceItem
          isSelected={selectedExperience === "UPRM"}
          onSelect={() => {
            handleExperience("UPRM");
          }}
        >
          University of Puerto Rico at Mayagüez
        </ExperienceItem>
      </menu>
    </section>
  );
}
