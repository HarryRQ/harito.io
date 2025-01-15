import "../styles/Description.css";
import surfing2 from "./assets/surfing2.jpeg";

export default function Description() {
  const tech = [
    "C++",
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Ada",
    "SQL",
  ];
  return (
    <section id="description" className="description-section">
      <h2 className="description-title">{`{ About Me }`}</h2>
      <div className="description-content">
        <div className="description-text-container">
          <p>
            I've always been fascinated by technology, which led me to pursue a
            Bachelor's degree in Computer Science at the{" "}
            <b>University of Puerto Rico, Mayagüez</b>. Currently, I work as an{" "}
            <b>Associate Software Engineer</b> at <b>Lockheed Martin</b>,
            specializing in <b>C++ development</b> and <b>systems design</b>,
            with experience in software development for{" "}
            <b>real-time operating systems</b>. I also mentor new hires,
            reviewing their code and guiding them to integrate smoothly into the
            team while adhering to coding standards.
          </p>
          <p>Here are some of the technologies I've been working with:</p>
        </div>
        <div className="technologies">
          <ul>
            {tech.map((skill, index) => (
              <li key={index}>{skill}</li> // Renders each skill as an <li> element
            ))}
          </ul>
        </div>
        <p>
          Outside of work, my interests include filmmaking, traveling, hiking,
          and surfing.
        </p>
      </div>
    </section>
  );
}
