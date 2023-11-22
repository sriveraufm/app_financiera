import React from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  let navigate = useNavigate();
  const switchToLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="content">
      <img src="easy_peasy_logo.png" alt="Logo" />
      <h1>EASY PEASY FINANCE</h1>
      <p>Organizar tus finanzas nunca fue tan fácil.</p>
      <div className="buttons">
        <button className="btn-primary" onClick={switchToLogin}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
