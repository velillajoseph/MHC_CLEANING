import { useState, type ChangeEvent, type FormEvent } from "react";

const whatsappNumber = "19392573875";
const municipalities = [
  "Adjuntas",
  "Aguada",
  "Aguadilla",
  "Aguas Buenas",
  "Aibonito",
  "Añasco",
  "Arecibo",
  "Arroyo",
  "Barceloneta",
  "Barranquitas",
  "Bayamón",
  "Cabo Rojo",
  "Caguas",
  "Camuy",
  "Canóvanas",
  "Carolina",
  "Cataño",
  "Cayey",
  "Ceiba",
  "Ciales",
  "Cidra",
  "Coamo",
  "Comerío",
  "Corozal",
  "Culebra",
  "Dorado",
  "Fajardo",
  "Florida",
  "Guánica",
  "Guayama",
  "Guayanilla",
  "Guaynabo",
  "Gurabo",
  "Hatillo",
  "Hormigueros",
  "Humacao",
  "Isabela",
  "Jayuya",
  "Juana Díaz",
  "Juncos",
  "Lajas",
  "Lares",
  "Las Marías",
  "Las Piedras",
  "Loíza",
  "Luquillo",
  "Manatí",
  "Maricao",
  "Maunabo",
  "Mayagüez",
  "Moca",
  "Morovis",
  "Naguabo",
  "Naranjito",
  "Orocovis",
  "Patillas",
  "Peñuelas",
  "Ponce",
  "Quebradillas",
  "Rincón",
  "Río Grande",
  "Sabana Grande",
  "Salinas",
  "San Germán",
  "San Juan",
  "San Lorenzo",
  "San Sebastián",
  "Santa Isabel",
  "Toa Alta",
  "Toa Baja",
  "Trujillo Alto",
  "Utuado",
  "Vega Alta",
  "Vega Baja",
  "Vieques",
  "Villalba",
  "Yabucoa",
  "Yauco",
];

const buildWhatsappMessage = (serviceType: string, serviceLocation: string, municipality: string) =>
  `Hola, me interesa un servicio de ${serviceType} en ${serviceLocation}, municipio de ${municipality}. ¿Podemos coordinar una cotización?`;

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    serviceType: "",
    serviceLocation: "",
    municipality: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildWhatsappMessage(
      formValues.serviceType,
      formValues.serviceLocation,
      formValues.municipality,
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

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
            <button
              type="button"
              className="button button-whatsapp button-icon"
              onClick={() => setIsModalOpen(true)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false" className="icon">
                <path
                  fill="currentColor"
                  d="M12 2a9.94 9.94 0 00-8.64 15.07L2 22l5.1-1.34A10 10 0 1012 2zm0 2a8 8 0 016.93 12.04l-.43.73.9 3.36-3.49-.92-.7.4A8 8 0 1112 4zm-3.25 4.75c.17-.37.35-.38.52-.39h.43c.14 0 .37-.05.56.26.2.31.69 1.18.75 1.26.06.09.1.2.02.33-.08.14-.12.22-.24.34-.12.12-.26.27-.37.36-.12.1-.24.21-.1.46.14.25.62 1.04 1.34 1.69.92.84 1.7 1.1 1.95 1.23.25.12.4.1.54-.06.14-.17.62-.72.79-.97.17-.25.33-.21.56-.12.23.08 1.44.68 1.68.8.25.12.41.18.47.28.06.1.06.6-.14 1.18-.2.58-1.17 1.14-1.6 1.2-.41.06-.93.08-1.51-.1a12.5 12.5 0 01-4.4-2.66A10.2 10.2 0 016.2 9.96c-.2-.56-.02-1.3.55-1.82.17-.16.31-.33.47-.68z"
                />
              </svg>
              WhatsApp directo
            </button>
            <a className="button button-secondary button-icon" href="tel:+19392573875">
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
      {isModalOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h3 id="whatsapp-modal-title">Detalles para WhatsApp</h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <p>
              Completa estos datos para enviarlos directo a nuestro equipo y acelerar tu
              cotización.
            </p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Tipo de servicio
                <select
                  name="serviceType"
                  value={formValues.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccione...
                  </option>
                  <option value="Limpieza Regular">Limpieza Regular</option>
                  <option value="Limpieza Profunda">Limpieza Profunda</option>
                </select>
              </label>
              <label>
                Ubicación del servicio
                <select
                  name="serviceLocation"
                  value={formValues.serviceLocation}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccione...
                  </option>
                  <option value="Renta a corto plazo">Renta a corto plazo</option>
                  <option value="Residencial">Residencial</option>
                  <option value="Comercial">Comercial</option>
                </select>
              </label>
              <label>
                Municipio
                <select
                  name="municipality"
                  value={formValues.municipality}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccione...
                  </option>
                  {municipalities.map((municipality) => (
                    <option key={municipality} value={municipality}>
                      {municipality}
                    </option>
                  ))}
                </select>
              </label>
              <div className="modal-actions">
                <button type="button" className="button button-ghost" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="button button-primary">
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
};
