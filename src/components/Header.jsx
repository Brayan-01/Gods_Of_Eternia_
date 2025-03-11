import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Gods of Eternia</h1>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/register">Registro</Link>
          <Link to="/about">Acerca de</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
