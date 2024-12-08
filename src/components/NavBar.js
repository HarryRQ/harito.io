import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <header className="header">
      <a href="/" className="Harito">
        Harito.io
      </a>
      <nav className="navbar">
        <a href="/">Home </a>
        <a href="#about">About </a>
        <a href="/">Experience </a>
      </nav>
    </header>
  );
}
