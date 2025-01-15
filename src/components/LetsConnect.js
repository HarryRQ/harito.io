import "../styles/LetsConnect.css";
import { useInView } from "react-intersection-observer";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

export default function LetsConnect() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      id="lets-connect"
      ref={ref}
      className={`lets-connect ${inView ? "visible" : ""}`}
    >
      <h3>Say Hello! ッ</h3>
      <div className="lets-connect-description">
        <p>
          Whether it’s a question, a suggestion, or just a friendly hello, feel
          free to reach out. I’ll do my best to respond as soon as I can!
        </p>
      </div>
      <div className="socials">
        <a
          href="mailto:harry.riveraq@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
      </div>
      <div className="credits">
        <p>Designed and built by Harry Rivera Quintana</p>
        <p>All rights reserved. ©</p>
      </div>
    </section>
  );
}
