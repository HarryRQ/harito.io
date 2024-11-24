import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <header className="header">
      <a href="/" className="Harito">
        Harito
      </a>
      <nav className="navbar">
        <a href="/">Home </a>
        <a href="/">About </a>
        <a href="/">Experience </a>
      </nav>
    </header>
  );
}
