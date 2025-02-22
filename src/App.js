import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/intro/intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/skills/Skill";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
