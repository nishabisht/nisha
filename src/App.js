import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import { Footer } from "./components/Footer";
import { Contact } from "./components/ContactUs";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Skill />
        <Project />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
