import React from "react";
import "../styles/Header.css";
import "../styles/Configuracion.css";
import { useNavigate } from "react-router-dom";

function Configuracion() {
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
        <h1 className="h1">Configuración</h1>
      </div>
      <button className="return-button" onClick={switchToMain}>
        Regresar
      </button>
      <div className="config-cards">
        {/* Config Card 1 */}
        <div className="config-card">
          <h2>Notificaciones</h2>
          <h2>Privacidad</h2>
          <h2>Pérfil</h2>
          <h2>Contraseñas</h2>
          <h2>Control de actividades</h2>
        </div>
      </div>
    </div>
  );
}

export default Configuracion;
