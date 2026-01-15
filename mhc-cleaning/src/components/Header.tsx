import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#home" aria-label="MHC Cleaning home">
          <img
            className="brand-wordmark"
            src="/assets/logo-16-9.png"
            alt="MHC Cleaning"
          />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <span className="nav-toggle-icon" aria-hidden="true" />
        </button>
        <nav
          id="primary-navigation"
          className={`nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <a
            href="#services"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
        </nav>
        <div className="header-actions">
          <a className="button button-ghost button-icon" href="tel:+19392573875">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              focusable="false"
              className="icon"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.24 1.01l-2.21 2.19z"
              />
            </svg>
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
