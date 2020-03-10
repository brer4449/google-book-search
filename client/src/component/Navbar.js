import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand"><span className="logo">Bid</span>Bot</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav ml-auto">

          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home <span> |</span>
            </Link>
          </li>
          <li className="nav-item categories">
            <Link
              to="/bid"
              className={window.location.pathname === "/bid" ? "nav-link active" : "nav-link"}
            >
              Categories <span> |</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/post"
              className={window.location.pathname === "/post" ? "nav-link active" : "nav-link"}
            >
              Add item
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
