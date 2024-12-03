export default function ExperienceItem({
  title,
  company,
  location,
  duration,
  description,
}) {
  return (
    <li>
      <h1>{title}</h1>
      <p>{company}</p>
      <p>{location}</p>
      <p>{duration}</p>
      <p>{description}</p>
    </li>
  );
}
