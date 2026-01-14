export const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#home" aria-label="MHC Cleaning home">
          <img className="brand-mark" src="/assets/logo.png" alt="" aria-hidden="true" />
          <div>
            <span className="brand-title">MHC Cleaning</span>
            <span className="brand-subtitle">Tu espacio, nuestro cuidado</span>
          </div>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services" className="nav-link">
            Servicios
          </a>
          <a href="#about" className="nav-link">
            Nosotros
          </a>
          <a href="#contact" className="nav-link">
            Contacto
          </a>
        </nav>
        <div className="header-actions">
          <a className="button button-ghost" href="tel:+19392573875">
            Llamar ahora
          </a>
          <a className="button button-primary" href="#contact">
            Solicitar cotización
          </a>
        </div>
      </div>
    </header>
  );
};
