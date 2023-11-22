import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";

function Main() {
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
              <MenuItem className="menu-item-custom">
                Cuentas Bancarias
              </MenuItem>
              <MenuItem className="menu-item-custom">Pagos</MenuItem>
              <MenuItem className="menu-item-custom">
                Control de tarjetas
              </MenuItem>
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
}

export default Main;
