import { NavLink, Outlet } from "react-router";

export const Navigation = () => {
  const activePage = () => ({
    borderBottom: "0.5rem solid #c7d36f",
    color: "#c7d36f",
  });

  return (
    <>
      <nav className="nav">
        <div className="nav-container container">
          <div className="nav-container_logo">
            <img
              src="src\img\fruits_logo.png"
              alt="Fruit logo"
              style={{ width: 50 }}
            />
            <p>
              <span>Fruit</span>
              <span>App</span>
            </p>
          </div>
          <ul className="nav-container_menu">
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activePage() : {})}
                className="nav-container_menu-link"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activePage() : {})}
                className="nav-container_menu-link"
                to="/fruits"
              >
                Fruits
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activePage() : {})}
                className="nav-container_menu-link"
                to="fruit-app"
              >
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
