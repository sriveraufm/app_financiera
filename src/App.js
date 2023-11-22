import React, { useState, Fragment } from "react";
import "./App.css";
import Login from "./views/Login";
import HomeScreen from "./views/HomeScreen";
import Main from "./views/Main";
import Pagos from "./views/Pagos";
import CuentasBancarias from "./views/CuentasBancarias";
import Control from "./views/Control";
import Prestamos from "./views/Prestamos";
import Calendario from "./views/Calendario";
import Configuracion from "./views/Configuracion";
import Ayuda from "./views/Ayuda";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/main" element={<Main />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/cuentasbancarias" element={<CuentasBancarias />} />
            <Route path="/control" element={<Control />} />
            <Route path="/Prestamos" element={<Prestamos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/ayuda" element={<Ayuda />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
