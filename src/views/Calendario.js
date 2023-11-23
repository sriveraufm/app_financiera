import React from "react";
import "../styles/Header.css";
import "../styles/Calendario.css";
import { useNavigate } from "react-router-dom";

function Calendario() {
  let navigate = useNavigate();
  const switchToMain = () => {
    navigate("/Main");
  };

  const handleDayClick = (day) => {
    navigate(`/day/${day}`);
  };
  const daysInMonth = 30; // Número de días en noviembre (puedes ajustar esto según el mes real)

  // Crear un array de números del 1 al número de días en el mes
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  return (
    <div className="calendario-container">
      <div className="headerall">
        <div className="header-content">
          <img
            src="easy_peasy_logo.png"
            alt="Pagos y transferencias"
            className="header-logo"
          />
          <h1 className="h1">Calendario noviembre</h1>
        </div>
        <button className="return-button" onClick={switchToMain}>
          Regresar
        </button>
      </div>

      <div className="calendario-days">
        {/* Mapear los días del mes */}
        {daysArray.map((day) => (
          <div
            key={day}
            className="calendario-day"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;
