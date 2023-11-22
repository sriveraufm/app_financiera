import React, { useState, Fragment } from "react";
import "./App.css";
import Login from "./views/Login";
import HomeScreen from "./views/HomeScreen";
import Main from "./views/Main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Main" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
