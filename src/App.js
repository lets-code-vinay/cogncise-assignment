import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Views/Homepage";
import Login from "./Views/Login";
import Tickets from "./Components/Tickets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
