import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./home";
import SecondView from "./holi";
import FelizCumple from "./FelizCumple";
import PoemaView from "./PoemaView";

function App() {
  const [poemaSeleccionado, setPoemaSeleccionado] = useState(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SecondView" element={<SecondView />} />
          <Route path="/FelizCumple" element={<FelizCumple setPoemaSeleccionado={setPoemaSeleccionado} />} />
          <Route path="/PoemaView" element={<PoemaView poemaSeleccionado={poemaSeleccionado} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;