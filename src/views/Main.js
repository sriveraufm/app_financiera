import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";

function Main() {
  let navigate = useNavigate();
  const switchToCuentasBancarias = () => {
    navigate("/CuentasBancarias");
  };

  const switchToPagos = () => {
    navigate("/Pagos");
  };

  const switchToControl = () => {
    navigate("/Control");
  };

  const switchToPrestamos = () => {
    navigate("/Prestamos");
  };

  const switchToCalendario = () => {
    navigate("/Calendario");
  };

  const switchToConfiguracion = () => {
    navigate("/Configuracion");
  };
  const switchToAyuda = () => {
    navigate("/Ayuda");
  };

  return (
    <div className="main-screen">
      <div className="sidebar">
        <Sidebar className="main">
          <main>
            {/* <div className="logo-name-container"> */}
            <img src="easy_peasy_logo.png" alt="App Logo" className="logo" />
            {/* </div> */}

            <hr />

            <Menu>
              <MenuItem
                className="menu-item-custom"
                onClick={switchToCuentasBancarias}
              >
                Cuentas Bancarias
              </MenuItem>
              <MenuItem className="menu-item-custom" onClick={switchToPagos}>
                Pagos
              </MenuItem>
              <MenuItem className="menu-item-custom" onClick={switchToControl}>
                Control de tarjetas
              </MenuItem>
              <MenuItem
                className="menu-item-custom"
                onClick={switchToPrestamos}
              >
                Prestamos
              </MenuItem>
              <MenuItem
                className="menu-item-custom"
                onClick={switchToCalendario}
              >
                Calendario
              </MenuItem>
              <MenuItem
                className="menu-item-custom"
                onClick={switchToConfiguracion}
              >
                Configuracion
              </MenuItem>
              <MenuItem className="menu-item-custom" onClick={switchToAyuda}>
                Ayuda
              </MenuItem>
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
}

export default Main;
