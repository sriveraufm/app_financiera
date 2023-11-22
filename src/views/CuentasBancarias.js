import React from "react";
import "../styles/Header.css";

import { useNavigate } from "react-router-dom";

function CuentasBancarias() {
  let navigate = useNavigate();
  const switchToMain = () => {
    navigate("/Main");
  };
  return (
    <div className="headerall">
      <div className="header-content">
        <img
          src="easy_peasy_logo.png"
          alt="Cuentas Bancarias"
          className="header-logo"
        />
        <h1 className="h1">Cuentas bancarias</h1>
      </div>
      <button className="return-button" onClick={switchToMain}>
        Regresar
      </button>
      {/* Agregar mockups de cuentas bancarias */}
      <div className="account-info">
        <div className="account-block">
          <h1>Banco GyT - Monetaria</h1>
          <p>Número de cuenta: XXXX-XXXX-XXXX-XXXX</p>
          <p>Nombre: Etson Guerrero</p>
          <p>Saldo: $100000.00</p>
        </div>
        {/* Puedes agregar más bloques de cuenta según sea necesario */}
        <div className="account-block">
          <h1>Banco Bi - Ahorro</h1>
          <p>Número de cuenta: XXXX-XXXX-XXXX-XXXX</p>
          <p>Nombre: John Doe</p>
          <p>Saldo: $100.00</p>
        </div>
      </div>
    </div>
  );
}

export default CuentasBancarias;
