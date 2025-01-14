import "../styles/Socials.css";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

//? Left here for color reference (bright green)
//? rgb(153, 244, 228

export default function Socials() {
  return (
    <div className="contact-info-container">
      <div className="socials-icons">
        <a
          href="https://www.linkedin.com/in/harry-rivera/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
        <a
          href="https://github.com/HarryRQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
        <a
          href="https://www.instagram.com/harito.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
      </div>
      <div className="email">
        <a href="mailto:harry.riveraq@gmail.com">harry.riveraq@gmail.com</a>
      </div>
    </div>
  );
}
