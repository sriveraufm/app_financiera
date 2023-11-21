import React, { useState, Fragment } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
} from "react-pro-sidebar";

function App() {
  // Estado para controlar qué pantalla mostrar
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' o 'login'

  // Función para cambiar a la pantalla de login
  const goToLogin = () => setCurrentScreen('login');
  const goToMain = () => setCurrentScreen('main');

  // Contenido de la pantalla inicial
  const renderHomeScreen = () => (
    <div className="content">
      <img src="easy_peasy_logo.png" alt="Logo" />
      <h1>EASY PEASY FINANCE</h1>
      <p>Organizar tus finanzas nunca fue tan fácil.</p>
      <div className="buttons">
        <button className="btn-primary" onClick={goToLogin}>Get Started</button>
      </div>
    </div>
  );

  // Contenido de la pantalla de login
  const renderLoginScreen = () => (
    <div className="login-screen">
      <div className="header">
        <img src="easy_peasy_logo.png" alt="Easy Peasy Finance Logo" className="login-logo" />
        <h1 className="h1 ">Easy Peasy Finance</h1>
      </div>
      <div className="login-form">
        <input type="text" placeholder="No. de usuario" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />
        <div className="button-container">
          <button className="login-btn" onClick={goToMain}>Iniciar sesión</button>
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
          <a href="#forgot" className="login-link">¿Olvidaste tu contraseña?</a>
          <a href="#help" className="login-link">Ayuda</a>
        </div>
      </div>
    </div>
  );
  const renderMainScreen = () => (
    <div className="main-screen">
      <div className="sidebar">
        <Sidebar className="main">
          <main>
              {/* <div className="logo-name-container"> */}
                <img src="easy_peasy_logo.png" alt="App Logo" className="logo" />
              {/* </div> */}

              <hr />
  
            <Menu>
              <MenuItem className="menu-item-custom">Cuentas Bancarias</MenuItem>
              <MenuItem className="menu-item-custom">Pagos</MenuItem>
              <MenuItem className="menu-item-custom">Control de tarjetas</MenuItem>
              <MenuItem className="menu-item-custom">Prestamos</MenuItem>
              <MenuItem className="menu-item-custom">Calendario</MenuItem>
              <MenuItem className="menu-item-custom">Configuracion</MenuItem>
              <MenuItem className="menu-item-custom">Ayuda</MenuItem>
              {/* <SubMenu label={"Professors"}>
                <MenuItem>Active</MenuItem>
                <MenuItem>Ex Professors</MenuItem>
                <MenuItem>Probation Period</MenuItem>
              </SubMenu> */}
              {/* <SubMenu label={"Records"}>
                <MenuItem>Senior Students</MenuItem>
                <MenuItem>Junior Students</MenuItem>
              </SubMenu> */}
            </Menu>
          </main>
        </Sidebar>
      </div>
      {/* Add your main content here */}
    </div>
  );
  
  

  

  return (
    <div className="app">
      {currentScreen === 'home' && renderHomeScreen()}
      {currentScreen === 'login' && renderLoginScreen()}
      {currentScreen === 'main' && renderMainScreen()}
    </div>
  );
}

export default App;
