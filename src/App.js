import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Testimonial />
      <ContactUs />
    </div>
  );
}

export default App;
