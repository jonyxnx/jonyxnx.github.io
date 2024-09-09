import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import SecondView from "./holi";
import FelizCumple from "./FelizCumple.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SecondView" element={<SecondView />} />
          <Route path="/FelizCumple" element={<FelizCumple />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
