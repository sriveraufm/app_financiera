import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

function Pagos() {
  let navigate = useNavigate();
  const switchToMain = () => {
    navigate("/Main");
  };
  return (
    <div className="headerall">
      <div className="header-content">
        <img
          src="easy_peasy_logo.png"
          alt="Pagos y transferencias"
          className="header-logo"
        />
        <h1 className="h1">Pagos y transferencias</h1>
      </div>
      <button className="return-button" onClick={switchToMain}>
        Regresar
      </button>
    </div>
  );
}

export default Pagos;
