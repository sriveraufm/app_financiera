import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const switchToMain = () => {
    navigate("/Main");
  };

  return (
    <div className="login-screen">
      <div className="header">
        <img
          src="easy_peasy_logo.png"
          alt="Easy Peasy Finance Logo"
          className="login-logo"
        />
        <h1 className="h1 ">Easy Peasy Finance</h1>
      </div>
      <div className="login-form">
        <input
          type="text"
          placeholder="No. de usuario"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />
        <div className="button-container">
          <button className="login-btn" onClick={switchToMain}>
            Iniciar sesión
          </button>
          <button className="create-account-btn">Crear cuenta</button>
        </div>
        <div className="authentication-methods">
          <div className="fingerprint-icon">
            <FontAwesomeIcon icon={faFingerprint} size="3x" />
          </div>
          <div className="face-icon">
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
          </div>
        </div>
        <div className="login-help">
          <a href="#forgot" className="login-link">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="#help" className="login-link">
            Ayuda
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
