import { auth } from "./firebase";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
// import useAuth from "./api/useAuth";
// import Profile from "./Components/Profile/Profile";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
    </div>
  );
}

export default App;
