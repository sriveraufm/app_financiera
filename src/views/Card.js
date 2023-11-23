import React from "react";
import "../styles/Header.css";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";

function Card() {
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

      <div className="cards-info">
        <div className="cards-block">
          <h1>VISA - TARJETA DE CRÉDITO</h1>
          <p>Dueño: Juan Pérez</p>
          <p>Número de Tarjeta: **** **** **** 1234</p>
          <p>Fecha de Vencimiento: 12/23</p>
          <p>Fecha de Pago: 05/01/2023</p>
          <p>Saldo Actual: $500.00</p>
          <p>Mora: $20.00</p>
          {/* Otros posibles campos */}
          <p>Límite de Crédito: $1,000.00</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
