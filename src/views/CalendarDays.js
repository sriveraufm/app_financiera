import React from "react";
import "../styles/Header.css";
import { useNavigate, useParams } from "react-router-dom";

function CalendarDays() {
  const { day } = useParams();
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
        <h1 className="h1">{`${day} de noviembre`}</h1>
      </div>
      <button className="return-button" onClick={switchToMain}>
        Regresar
      </button>
      <div className="card-info">
        <div className="card-block">
          <h1>Gasto por comida de 75Q en Gitane</h1>
        </div>
        <div className="card-block">
          <h1>Pago de Universidad 5000Q</h1>
        </div>
        <div className="card-block">
          <h1>Transferencia a "Etson" por 1000Q</h1>
        </div>
      </div>
    </div>
  );
}

export default CalendarDays;
