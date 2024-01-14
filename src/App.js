import LandingPage from "./sections/landingPage";
import Aboutme from "./sections/aboutMe";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
// import Footer from "./sections/footer";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Aboutme />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
