import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Altius Lexia",
  description:
    "Agenda una consulta estratégica. Procesamos tu solicitud en menos de 24 horas laborables.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface pt-32 pb-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
            Conectemos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
            Hablemos de tu siguiente hito.
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface pb-20 md:pb-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left: Info */}
          <div className="w-full md:w-5/12">
            <p className="text-outline text-lg md:text-xl mb-12 max-w-md leading-relaxed">
              Nuestro equipo está listo para integrar la arquitectura legal que
              tu proyecto tecnológico requiere.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  mail
                </span>
                <span className="font-mono text-sm text-on-surface">
                  nexus@altiuslexia.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  call
                </span>
                <span className="font-mono text-sm text-on-surface">
                  +593 2 123 4567
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  location_on
                </span>
                <span className="font-mono text-sm text-on-surface">
                  Quito | Guayaquil | Miami
                </span>
              </div>
            </div>

            <div className="bg-surface-container-highest/30 p-6 rounded-[1.25rem]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="text-on-surface text-sm font-bold mb-1">
                    Respuesta en menos de 24 horas
                  </p>
                  <p className="text-outline text-sm leading-relaxed">
                    Entendemos la urgencia del sector tech. Procesamos tu
                    solicitud en menos de 24 horas laborables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-7/12 bg-surface-container p-8 md:p-16 rounded-sm shadow-xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all"
                  />
                </div>
                <div className="group">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Tu Startup S.A."
                    className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                  Correo Corporativo
                </label>
                <input
                  type="email"
                  placeholder="juan@startup.com"
                  className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all"
                />
              </div>

              <div className="group">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                  Asunto
                </label>
                <select className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all appearance-none">
                  <option value="">Selecciona un servicio</option>
                  <option value="privacidad">Privacidad de Datos</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                  <option value="ip">Propiedad Intelectual</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="group">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos sobre tu proyecto y los desafíos legales que enfrentas..."
                  rows={5}
                  className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container py-5 font-bold tracking-widest hover:brightness-110 transition-all uppercase text-xs"
              >
                Enviar Solicitud
              </button>

              <p className="font-mono text-[10px] text-outline-variant text-center uppercase tracking-wider">
                Su información está protegida bajo nuestras políticas de
                privacidad
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface-container-lowest py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { city: "Quito", address: "Av. República del Salvador N34-127", type: "Sede Principal" },
            { city: "Guayaquil", address: "Av. Francisco de Orellana, Edificio Trade Building", type: "Oficina Regional" },
            { city: "Miami", address: "1221 Brickell Avenue, Suite 900", type: "Operaciones LATAM" },
          ].map((office) => (
            <div
              key={office.city}
              className="bg-surface-container-highest/20 p-8 rounded-[1.25rem] hover:bg-surface-container-highest/40 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-container mb-4 block">
                {office.type}
              </span>
              <h3 className="text-xl font-bold text-primary mb-2">
                {office.city}
              </h3>
              <p className="text-outline text-sm">{office.address}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
