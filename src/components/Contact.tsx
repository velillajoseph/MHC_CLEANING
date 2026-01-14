export const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contacto directo</p>
          <h2>Agenda tu plan de limpieza ideal.</h2>
          <p>
            Coordinamos cada detalle con rapidez y transparencia. Comparte la información de tu
            espacio y recibirás una propuesta personalizada.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://wa.me/19392573875">
              WhatsApp directo
            </a>
            <a className="button button-secondary" href="tel:+19392573875">
              Llamar a un asesor
            </a>
            <a className="button button-ghost" href="mailto:cleaningmhc@gmail.com">
              Enviar correo
            </a>
          </div>
        </div>
        <div className="contact-panel">
          <div>
            <span className="panel-label">Teléfono</span>
            <p className="panel-value">+1 (939) 257-3875</p>
            <p className="panel-helper">Atención bilingüe · 7 días a la semana.</p>
          </div>
          <div>
            <span className="panel-label">Horario</span>
            <p className="panel-value">8:00 AM – 6:00 PM</p>
            <p className="panel-helper">Disponibilidad para urgencias y eventos.</p>
          </div>
          <div>
            <span className="panel-label">Zona de servicio</span>
            <p className="panel-value">Puerto Rico</p>
            <p className="panel-helper">Residencial, comercial y short-term rental.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
