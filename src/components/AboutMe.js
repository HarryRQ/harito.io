import "../styles/AboutMe.css";
import surfing from "./assets/me-surfing.jpeg";
export default function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="about-me-description">
        <p>
          I am a Software Engineer born and raised on the beatiful island of{" "}
          {""}
          <a
            href="https://youtu.be/1TCX_Aqzoo4?si=fyzdjE7WZYLQNfSt"
            target="_blank"
          >
            Puerto Rico
          </a>
          . From a young age, I have been fascinated by advancements in science
          and technology, particularly the creation of products that impact
          millions and define modern life. Outside of my professional interests,
          I enjoy slice-of-life content, filmmaking, and travel.
        </p>
      </div>
      <div className="about-me-image">
        <img src={surfing} alt="me surging jeje" />
      </div>
    </section>
  );
}
