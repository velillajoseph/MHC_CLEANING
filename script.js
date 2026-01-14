const translations = {
  es: {
    navServices: "Servicios",
    navAbout: "Nosotros",
    navContact: "Contacto",
    headerWhatsapp: "WhatsApp",
    heroHeadline: "Servicios de limpieza profesionales en los que puedes confiar",
    heroSubheadline: "Cotización gratis. Respuesta rápida. Servicio confiable.",
    heroTagline: "¡Tu espacio, nuestro cuidado!",
    heroPrimaryCta: "Solicitar cotización gratis por WhatsApp",
    heroSecondaryCta: "Llamar ahora",
    trustFree: "Cotización gratis",
    trustFast: "Respuesta rápida",
    trustQuality: "Enfoque en calidad",
    heroCardTitle: "Agenda tu limpieza hoy",
    heroCardBody:
      "Atención personalizada en español e inglés. Te respondemos en el menor tiempo posible.",
    heroCardCta: "WhatsApp",
    servicesTitle: "Servicios",
    servicesIntro: "Soluciones flexibles para hogares, alquileres y negocios.",
    service1Title: "Limpieza Residencial",
    service1Body: "Mantén tu hogar impecable con planes adaptados a tu rutina.",
    service2Title: "Limpieza Profunda",
    service2Body: "Atención al detalle para dejar cada espacio como nuevo.",
    service3Title: "AirBnB / Short-Term Rental",
    service3Body: "Preparación rápida y confiable para tus huéspedes.",
    service4Title: "Limpieza Comercial",
    service4Body:
      "Espacios de trabajo limpios que generan confianza en tu equipo y clientes.",
    aboutTitle: "Sobre MHC Cleaning",
    aboutBody1:
      "En MHC Cleaning cuidamos cada detalle para que disfrutes de un ambiente limpio y saludable. Nuestro equipo se adapta a tus necesidades con un trato profesional y respetuoso.",
    aboutBody2:
      "Desde hogares hasta negocios, trabajamos con consistencia y comunicación clara para que siempre sepas qué esperar.",
    contactTitle: "Contacto",
    contactIntro: "Contáctanos para coordinar tu limpieza y recibir una cotización.",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Correo",
    contactHoursLabel: "Horario",
    contactHours: "Domingo a Sábado – 8:00 AM a 6:00 PM",
    contactWhatsappCta: "Solicitar cotización por WhatsApp",
    modalTitle: "Cotización por WhatsApp",
    modalSubtitle: "Completa los detalles para preparar tu mensaje.",
    modalFieldLocation: "Localidad de servicio",
    modalFieldCity: "Ubicación",
    modalFieldServiceType: "Tipo de servicio",
    modalSubmit: "Abrir WhatsApp",
    selectPlaceholder: "Selecciona una opción",
    formHint: "Completa todos los campos para continuar.",
    serviceLocationOptions: ["AirBnB", "Residencia", "Comercial"],
    serviceTypeOptions: ["Limpieza Regular", "Limpieza Profunda"],
  },
  en: {
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    headerWhatsapp: "WhatsApp",
    heroHeadline: "Professional Cleaning Services You Can Trust",
    heroSubheadline: "Free quotes. Fast response. Reliable service.",
    heroTagline: "Your space, our care.",
    heroPrimaryCta: "Request a Free Quote on WhatsApp",
    heroSecondaryCta: "Call Now",
    trustFree: "Free quotes",
    trustFast: "Fast response",
    trustQuality: "Quality-focused",
    heroCardTitle: "Book your cleaning today",
    heroCardBody:
      "Personalized service in Spanish and English. We respond as quickly as possible.",
    heroCardCta: "WhatsApp",
    servicesTitle: "Services",
    servicesIntro: "Flexible solutions for homes, rentals, and businesses.",
    service1Title: "Residential Cleaning",
    service1Body: "Keep your home spotless with plans tailored to your routine.",
    service2Title: "Deep Cleaning",
    service2Body: "Detail-focused care to refresh every space.",
    service3Title: "AirBnB / Short-Term Rental",
    service3Body: "Quick, reliable turnovers for your guests.",
    service4Title: "Commercial Cleaning",
    service4Body: "Clean workspaces that build trust with teams and clients.",
    aboutTitle: "About MHC Cleaning",
    aboutBody1:
      "At MHC Cleaning we care for every detail so you can enjoy a clean and healthy environment. Our team adapts to your needs with professional, respectful service.",
    aboutBody2:
      "From homes to businesses, we deliver consistent results with clear communication so you always know what to expect.",
    contactTitle: "Contact",
    contactIntro: "Reach out to schedule your cleaning and receive a quote.",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactHoursLabel: "Hours",
    contactHours: "Sunday to Saturday – 8:00 AM to 6:00 PM",
    contactWhatsappCta: "Request a WhatsApp quote",
    modalTitle: "WhatsApp Quote",
    modalSubtitle: "Complete the details to prepare your message.",
    modalFieldLocation: "Service location",
    modalFieldCity: "Location",
    modalFieldServiceType: "Service type",
    modalSubmit: "Open WhatsApp",
    selectPlaceholder: "Select an option",
    formHint: "Please complete all fields to continue.",
    serviceLocationOptions: ["AirBnB", "Residential", "Commercial"],
    serviceTypeOptions: ["Regular Cleaning", "Deep Cleaning"],
  },
};

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

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector(".modal-close");
const form = document.querySelector(".modal-form");
const submitButton = form.querySelector('button[type="submit"]');
const hint = form.querySelector(".form-hint");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const headerPanel = document.querySelector(".header-panel");
const navLinks = document.querySelectorAll(".nav-link");
const stickyShell = document.querySelector(".sticky-shell");

const serviceLocationSelect = form.querySelector('select[name="serviceLocation"]');
const municipalitySelect = form.querySelector('select[name="municipality"]');
const serviceTypeSelect = form.querySelector('select[name="serviceType"]');

const langButtons = document.querySelectorAll(".lang-btn");

let currentLanguage = localStorage.getItem("mhcLanguage") || "es";
let lastFocusedElement = null;
let menuOpen = false;

const setTextContent = (key) => {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
    node.textContent = translations[currentLanguage][key];
  });
};

const populateSelect = (select, options) => {
  const placeholder = translations[currentLanguage].selectPlaceholder;
  select.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });
};

const updateLanguage = () => {
  document.documentElement.lang = currentLanguage;
  Object.keys(translations[currentLanguage]).forEach((key) => {
    if (typeof translations[currentLanguage][key] === "string") {
      setTextContent(key);
    }
  });

  populateSelect(serviceLocationSelect, translations[currentLanguage].serviceLocationOptions);
  populateSelect(serviceTypeSelect, translations[currentLanguage].serviceTypeOptions);

  const municipalityValue = municipalitySelect.value;
  populateSelect(municipalitySelect, municipalities);
  if (municipalityValue) {
    municipalitySelect.value = municipalityValue;
  }

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });

  validateForm();
};

const openModal = (trigger) => {
  lastFocusedElement = trigger;
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  serviceLocationSelect.focus();
};

const closeModal = () => {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

const updateMenuState = (open) => {
  menuOpen = open;
  siteHeader.classList.toggle("menu-open", menuOpen);
  menuToggle.setAttribute("aria-expanded", menuOpen ? "true" : "false");
};

const closeMenu = () => {
  if (menuOpen) {
    updateMenuState(false);
  }
};

const updateScrollMargins = () => {
  if (!stickyShell) {
    return;
  }
  const offset = stickyShell.offsetHeight + 16;
  document.querySelectorAll("section[id], main[id]").forEach((section) => {
    section.style.scrollMarginTop = `${offset}px`;
  });
};

const validateForm = () => {
  const isValid =
    serviceLocationSelect.value && municipalitySelect.value && serviceTypeSelect.value;
  submitButton.disabled = !isValid;
  hint.textContent = isValid ? "" : translations[currentLanguage].formHint;
  return isValid;
};

const buildMessage = () => {
  const location = serviceLocationSelect.value;
  const municipality = municipalitySelect.value;
  const serviceType = serviceTypeSelect.value;

  if (currentLanguage === "es") {
    return `¡Hola! Me gustaría solicitar una cotización de MHC Cleaning.

Localidad de servicio: ${location}
Ubicación: ${municipality}
Tipo de servicio: ${serviceType}

Por favor, déjenme saber su disponibilidad. ¡Gracias!`;
  }

  return `Hello! I would like to request a quote from MHC Cleaning.

Service location: ${location}
Location: ${municipality}
Service type: ${serviceType}

Please let me know your availability. Thank you!`;
};

openModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn));
});

menuToggle.addEventListener("click", () => updateMenuState(!menuOpen));

closeModalButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
  if (!modal.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
  if (event.key === "Escape" && menuOpen) {
    closeMenu();
  }
});

form.addEventListener("input", validateForm);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }

  const message = buildMessage();
  const url = `https://wa.me/19392573875?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLanguage = btn.dataset.lang;
    localStorage.setItem("mhcLanguage", currentLanguage);
    updateLanguage();
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

window.addEventListener("resize", () => {
  updateScrollMargins();
  if (window.innerWidth >= 768) {
    closeMenu();
  }
});

updateLanguage();
updateScrollMargins();
