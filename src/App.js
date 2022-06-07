import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//VIEWS
import Home from "./components/Views/Home/Home";
import AboutMe from "./components/Views/About/AboutMe";
import Work from "./components/Views/Work/Work";
import Rabbit from "./components/Views/Rabbit/Rabbit";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Rabbit" element={<Rabbit />} />
        <Route path="/:Detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
