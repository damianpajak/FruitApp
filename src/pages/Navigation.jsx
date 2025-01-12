import { NavLink, Outlet } from "react-router";

export const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav_menu container">
          <li>
            <NavLink className="nav_menu-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_menu-link" to="/fruits">
              Fruits
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_menu-link" to="fruit-app">
              Fruit App
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
