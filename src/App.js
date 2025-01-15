import LetsConnect from "./components/LetsConnect";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <NavBar />
      <Socials />
      <main>
        <AboutMe />
        <Description />
        <Experience />
        <LetsConnect />
      </main>
    </>
  );
}

export default App;
