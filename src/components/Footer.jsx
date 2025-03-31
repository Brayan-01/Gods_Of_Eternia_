function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4 className="footer-title">Redes Sociales</h4>
          <div className="footer-icons">
            <a href="#"><i className="ri-twitter-x-line"></i></a> {/* X (Twitter) Icon */}
            <a href="#"><i className="ri-youtube-line"></i></a> {/* YouTube Icon */}
            <a href="#"><i className="ri-github-line"></i></a> {/* Git (GitHub) Icon */}
          </div>
        </div>
        <div>
          <h4 className="footer-title">Enlaces Útiles</h4>
          <ul className="footer-links">
            <li><a href="#">Soporte</a></li>
            <li><a href="#">Guía del Juego</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Términos de Servicio</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;