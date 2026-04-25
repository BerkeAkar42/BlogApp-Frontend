import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col col-sm-3 col-md-3" id="logo">
            <Link to="/">BlogApp</Link></div>
          <div className="col col-sm-9 col-md-9" id="navMenu">
            <ul className="nav-Links">
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/blogs">Bloglar</Link></li>
            </ul>
            <button type="button" className="btn" >Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
