export const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Servicio premium en Puerto Rico</p>
          <h1>Servicios de limpieza confiables con estándares impecables.</h1>
          <p className="lead">
            Cuidamos hogares, negocios y alquileres con planes flexibles, personal capacitado y
            comunicación constante para que todo esté perfecto.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Reservar evaluación gratuita
            </a>
            <a className="button button-secondary" href="mailto:cleaningmhc@gmail.com">
              Solicitar por correo
            </a>
          </div>
          <div className="hero-highlights">
            <div>
              <span className="highlight-label">Checklist</span>
              <span className="highlight-caption">Limpieza certificada</span>
            </div>
            <div>
              <span className="highlight-label">4X</span>
              <span className="highlight-caption">Control de calidad</span>
            </div>
            <div>
              <span className="highlight-label">100%</span>
              <span className="highlight-caption">Garantía de satisfacción</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Profesional de limpieza desinfectando una mesa"
              width={560}
              height={640}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
