import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" classname="experience">
      <ul>
        {EXPERIENCE.map((experience) => (
          <ExperienceItem {...experience} />
        ))}
      </ul>
    </section>
  );
}
