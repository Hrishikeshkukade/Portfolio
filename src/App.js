import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Services /> */}
    </div>
  );
}

export default App;
