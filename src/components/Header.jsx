import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">
          <Link to="/">Movies</Link>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/watch-list">Watch List</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add" className="btn">
              Add
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
