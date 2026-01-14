export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo.png" alt="MHC Cleaning" className="footer-logo" />
          <p>
            Limpieza premium con procesos claros, equipos verificados y resultados impecables en
            cada visita.
          </p>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul>
            <li>Residencial</li>
            <li>Limpieza profunda</li>
            <li>Airbnb y alquileres</li>
            <li>Comercial</li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>+1 (939) 257-3875</li>
            <li>cleaningmhc@gmail.com</li>
            <li>Atención bilingüe · PR</li>
          </ul>
        </div>
        <div>
          <h3>Horario</h3>
          <ul>
            <li>Domingo a sábado · 8:00 AM – 6:00 PM</li>
            <li>Citas especiales bajo solicitud.</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 MHC Cleaning LLC. Todos los derechos reservados.
      </div>
    </footer>
  );
};
