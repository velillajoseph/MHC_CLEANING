export const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">Sobre nosotros</p>
          <h2>Un equipo dedicado a crear espacios impecables.</h2>
          <p>
            MHC Cleaning trabaja con estándares consistentes, checklists digitales y supervisión
            constante para garantizar resultados superiores en cada visita.
          </p>
          <p>
            Nuestro equipo está entrenado y verificado para entregar un servicio confiable,
            discreto y detallista, siempre con productos seguros para tu familia o negocio.
          </p>
          <div className="about-metrics">
            <div>
              <span className="metric">+150</span>
              <span className="metric-label">Espacios atendidos</span>
            </div>
            <div>
              <span className="metric">5⭐</span>
              <span className="metric-label">Satisfacción promedio</span>
            </div>
          </div>
        </div>
        <div className="about-media">
          <img
            src="https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Profesional de limpieza aspirando una sala"
            width={520}
            height={640}
          />
        </div>
      </div>
    </section>
  );
};
