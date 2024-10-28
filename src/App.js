import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import { Footer } from "./components/Footer";
import { Contact } from "./components/ContactUs";
import { ThemeProvider } from "./components/ThemeContext";
import ToolsSection from "./components/ToolsSection";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Skill />
        <Project />
        <ToolsSection />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
