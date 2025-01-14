import "../styles/Description.css";
import surfing2 from "./assets/surfing2.jpeg";

export default function Description() {
  return (
    <section id="description" className="description-section">
      <h2 className="description-title">{`{ About Me }`}</h2>
      <div className="description-content">
        <div className="description-text-container">
          <p>
            I was born and raised on the small island of Borikén. I have always
            been fascinated by the advancements in technology, and as tech
            evolved, my curiosity grew. This passion led me to pursue a
            Bachelor's degree in Computer Science at the University of Puerto
            Rico, Mayagüez. Since then, I have been working as an Associate
            Software Engineer at Lockheed Martin. Outside of work, my interests
            include filmmaking, traveling, hiking, and surfing.
          </p>
        </div>
        <div className="description-image-container">
          <img src={surfing2} alt="Surfing" />
        </div>
      </div>
    </section>
  );
}
