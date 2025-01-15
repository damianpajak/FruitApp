import { NavLink, Outlet } from "react-router";

export const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-container container">
          <div className="nav-container_logo">
            <img src="src\img\fruits_logo.png" style={{ width: 50 }} />
            <p>
              <span>Fruit</span>
              <span>App</span>
            </p>
          </div>
          <ul className="nav-container_menu">
            <li>
              <NavLink className="nav-container_menu-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-container_menu-link" to="/fruits">
                Fruits
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-container_menu-link" to="fruit-app">
                Fruit App
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
