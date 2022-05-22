import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header/Header";
//VIEWS
import Home from "./components/Views/Home/Home";
import AboutMe from "./components/Views/About/AboutMe";
import Shop from "./components/Views/Shop/Shop";
import Work from "./components/Views/Work/Work";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Cart" />
      </Routes>
    </Router>
  );
}

export default App;
