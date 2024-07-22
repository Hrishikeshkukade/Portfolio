import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
    </div>
  );
}

export default App;
