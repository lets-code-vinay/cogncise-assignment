import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Views/Homepage";
import Login from "./Views/Login";
import Tickets from "./Components/Tickets";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/homepage"
            element={<ProtectedRoute Component={Homepage} />}
          />

          <Route
            exact
            path="/"
            element={<ProtectedRoute Component={Homepage} />}
          />
          <Route exact path={"/login"} element={<Login />} />

          <Route
            exact
            path="/tickets"
            element={<ProtectedRoute Component={Tickets} />}
          />
          <Route path="/*" element={<ProtectedRoute Component={Homepage} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
