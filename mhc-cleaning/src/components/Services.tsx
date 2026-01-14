const services = [
  {
    title: "Limpieza residencial",
    description: "Rutinas semanales o quincenales para mantener tu hogar fresco y ordenado.",
  },
  {
    title: "Limpieza profunda",
    description: "Intervenciones detalladas para cocinas, baños y espacios de alto tránsito.",
  },
  {
    title: "Airbnb y alquileres",
    description: "Checklist exprés para recibir a cada huésped con estándares hoteleros.",
  },
  {
    title: "Limpieza comercial",
    description: "Servicios discretos para oficinas, salas de espera y locales.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Soluciones versátiles para cada espacio.</h2>
          <p>
            Nos adaptamos a tu ritmo con horarios extendidos, comunicación bilingüe y procesos
            confiables.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="text-link" href="#contact">
                Coordinar servicio
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
