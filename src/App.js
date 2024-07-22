import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
