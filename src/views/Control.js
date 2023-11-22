import React from "react";
import "../styles/Header.css";
import "../styles/Control.css";
import { useNavigate } from "react-router-dom";

function Control() {
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
        <h1 className="h1">Control de cuentas</h1>
      </div>

      <button className="return-button" onClick={switchToMain}>
        Regresar
      </button>

      <div className="card-info">
        <div className="card-block">
          <h1>VISA - TARJETA DE CRÉDITO</h1>
        </div>
        <div className="card-block">
          <h1>MASTERCARD - TARJETA DE CRÉDITO</h1>
        </div>
        <div className="card-block">
          <h1>VISA - TARJETA DE DÉBITO</h1>
        </div>
      </div>
    </div>
  );
}

export default Control;
