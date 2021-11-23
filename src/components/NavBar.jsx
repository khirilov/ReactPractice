import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <nav className="nav-extended teal">
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          {isAuth && (
            <li className="tab" onClick={logout}>
              Log Out
            </li>
          )}
          <li className="tab">
            <Link to="/posts">Posts Page</Link>
          </li>
          <li className="tab">
            <Link to="/about">About Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
