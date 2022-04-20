import Dp from "./assets/cv-dp.jpeg";
import "./App.css";
import BasicDetails from "./components/basicDetails";
import Skills from "./components/skills";
import Education from "./components/education";
import Experience from "./components/experience";
import Objectives from "./components/objective";

function App() {
  return (
    <div className="App">
      <div className="CV-header">
        <div className="header-right">
          <BasicDetails />
          <Objectives />
        </div>
      </div>
      <div className="CV-body">
        <div className="CV-body-left">
          <Skills />
        </div>
        <div className="CV-body-right">
          <Education /> <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
