import React from "react";
import "../styles/Header.css";
import "../styles/Pagos.css";
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
      <div className="account-info">
        <div className="account-block">
          <h1>Transferencias entre cuentas</h1>
        </div>
        {/* Puedes agregar más bloques de cuenta según sea necesario */}
        <div className="account-block">
          <h1>Transferencias a terceros</h1>
        </div>
        <div className="account-block">
          <h1>Transferencias CHH</h1>
        </div>
        <div className="account-block">
          <h1>Pagos a terceros</h1>
        </div>
        <div className="account-block">
          <h1>Pagos a instituciones</h1>
        </div>
      </div>
    </div>
  );
}

export default Pagos;
