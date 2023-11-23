import React from "react";
import "../styles/Header.css";
import "../styles/Ayuda.css";
import { useNavigate } from "react-router-dom";

function Ayuda() {
  let navigate = useNavigate();
  const switchToMain = () => {
    navigate("/Main");
  };

  return (
    <div className="ayuda-container">
      <div className="headerall">
        <div className="header-content">
          <img
            src="easy_peasy_logo.png"
            alt="Pagos y transferencias"
            className="header-logo"
          />
          <h1 className="h1">Ayuda</h1>
        </div>
        <button className="return-button" onClick={switchToMain}>
          Regresar
        </button>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {/* Chat messages go here */}
          <div className="message received">Hola, ¿en qué puedo ayudarte?</div>
          <div className="message sent">Hola, tengo un problema con...</div>
          {/* Add more chat messages as needed */}
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Escribe tu mensaje..." />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
