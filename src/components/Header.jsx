import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/public/Logo_1.jpg" 
            alt="Gods of Eternia Logo" 
            className="game-logo" 
          />
          <h1 className="game-title">Gods of Eternia</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/register" className="nav-link">Registro</Link>
          <Link to="/about" className="nav-link">Acerca de</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;