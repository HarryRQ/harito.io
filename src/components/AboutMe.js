import "../styles/AboutMe.css";
import surfing from "./assets/me-surfing.jpeg";
import linkedinpic from "./assets/me-linkedin.jpeg";

import { useInView } from "react-intersection-observer";
import TypewriterComponent from "typewriter-effect";
import { type } from "@testing-library/user-event/dist/type";

export default function AboutMe() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      id="about"
      ref={ref}
      className={`about-me ${inView ? "visible" : ""}`}
    >
      <div className="about-me-content">
        <div className="about-me-description">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I'm Harry ッ");
              typewriter.start();
            }}
            options={{
              wrapperClassName: "typewriter-text",
              cursorClassName: "custom-cursor", // Add a custom class to the typewriter text
            }}
          />
          <p>
            I'm a software engineer from{" "}
            <a
              href="https://youtu.be/1TCX_Aqzoo4?si=fyzdjE7WZYLQNfSt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Puerto Rico
            </a>{" "}
            with <b>2+ years</b> of experience specializing in{" "}
            <b>C++, system design</b>, and developing efficient, scalable
            software solutions. I thrive on solving complex problems and
            optimizing code for real-world applications.
          </p>
        </div>
        <div className="about-me-image">
          <img src={linkedinpic} alt="Picture of me" />
        </div>
      </div>
    </section>
  );
}
