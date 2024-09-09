import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import SecondView from "./holi";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SecondView" element={<SecondView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
