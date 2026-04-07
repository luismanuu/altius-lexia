import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sectores — Altius Lexia",
  description:
    "Servimos a Startups, Fintech, SaaS y E-commerce con asesoria legal especializada en tecnologia.",
};

const sectors = [
  {
    num: "01",
    title: "Startups (Early Stage)",
    tag: "GLOBAL SCALE",
    description:
      "Estructuracion legal para rondas de inversion y proteccion de IP desde el dia 1.",
    details: [
      "Due diligence legal para rondas seed y Serie A",
      "Estructuracion societaria optimizada para inversion extranjera",
      "Proteccion de propiedad intelectual desde la incorporacion",
      "Acuerdos de fundadores, vesting y cap tables",
    ],
    large: true,
  },
  {
    num: "02",
    title: "Fintech",
    tag: "COMPLIANCE",
    description:
      "Navegacion regulatoria ante la Junta de Politica y Regulacion Financiera.",
    details: [
      "Licenciamiento ante reguladores financieros",
      "Cumplimiento anti-lavado (AML/KYC)",
      "Contratos de pasarelas de pago y billeteras digitales",
      "Proteccion de datos financieros sensibles",
    ],
    large: false,
  },
  {
    num: "03",
    title: "Software & SaaS",
    tag: "OPERATIONS",
    description:
      "Contratos de nivel de servicio (SLA) y terminos y condiciones robustos.",
    details: [
      "Terminos de servicio y politicas de privacidad",
      "Acuerdos SLA y uptime guarantees",
      "Licenciamiento de software y modelos de suscripcion",
      "Proteccion de codigo fuente y trade secrets",
    ],
    large: false,
  },
  {
    num: "04",
    title: "E-commerce",
    tag: "COMMERCE",
    description:
      "Proteccion al consumidor digital y logistica de datos masivos.",
    details: [
      "Cumplimiento de proteccion al consumidor digital",
      "Politicas de devolucion y terminos de compra",
      "Gestion de datos de clientes y marketing digital",
      "Regulaciones de comercio transfronterizo",
    ],
    large: true,
  },
];

export default function SectoresPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface pt-32 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
            Verticales de Industria
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
            Sectores Estrategicos
          </h1>
          <p className="font-instrument italic text-xl md:text-2xl text-outline max-w-2xl leading-relaxed">
            Conocimiento profundo de las industrias que estan redefiniendo la
            economia digital en la region.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {sectors.map((s) => (
              <div
                key={s.num}
                className={`${
                  s.large ? "md:col-span-6" : "md:col-span-4"
                } bg-white p-8 md:p-12 rounded-[1.25rem] shadow-sm flex flex-col justify-between hover:bg-primary-container/5 transition-colors group`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-outline-variant">
                      {s.num}
                    </span>
                    <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded-sm">
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className={`${
                      s.large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                    } font-bold text-surface mb-4`}
                  >
                    {s.title}
                  </h3>
                  <p className="text-outline text-base md:text-lg mb-8 max-w-md">
                    {s.description}
                  </p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container mt-0.5 text-sm">
                          check
                        </span>
                        <span className="text-outline text-sm leading-relaxed">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex justify-end">
                  <span className="font-mono text-xs text-outline group-hover:text-surface transition-colors">
                    {s.num} / {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tu industria necesita asesoria especializada.
            </h2>
            <p className="text-outline text-lg leading-relaxed">
              No importa la etapa de tu empresa. Diseñamos estrategias legales
              adaptadas a la realidad operativa de tu sector.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end">
            <Link
              href="/contacto"
              className="inline-block bg-primary-container text-on-primary-container px-10 py-5 text-sm font-bold tracking-widest hover:brightness-110 transition-all"
            >
              AGENDAR CONSULTA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
