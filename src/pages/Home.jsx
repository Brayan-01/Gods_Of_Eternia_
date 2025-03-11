import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="page-container">
        <Header />
      <main className="content">
        {/* Sección Hero */}
        <section className="hero-section">
          {/* Capa oscura */}
          <div className="overlay"></div>

          {/* Contenido */}
          <div className="hero-content">
            <h2>
              Bienvenido a <span>Gods of Eternia</span>
            </h2>
            <p>
              Sumérgete en un mundo épico de fantasía medieval donde los dioses caminan entre los mortales.
            </p>

            {/* Botón */}
            <div className="btn-container">
              <Link to="/register">
                <button className="play-button">Jugar Ahora</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
