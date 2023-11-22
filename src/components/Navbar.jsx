import React from "react";
import { Link } from "react-router-dom";
import blob from '../assets/magicpattern-blob-1699003732278.png'

const Navbar = () => {
  return (
    <nav>
       <img src={blob} className="blob" alt="blob" />

      <div className="navbar-container">
        <Link to={"/"} className="navbar-link">
          <h3 className="navbar-title">
            <span className="material-symbols-outlined navnar-icons">pets</span>
            <span className="nav-title-text">Cats</span>
          </h3>
        </Link>
        <div className="navbar-right-part">
          <Link to={"favorites"} className="navbar-link">
            <div className="navbar-links">
              <span className="material-symbols-outlined navnar-icons">
                favorite
              </span>
              <div className="nav-option">Favorites</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
