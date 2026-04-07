import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practicas — Altius Lexia",
  description:
    "Privacidad de Datos, Ciberseguridad Legal y Propiedad Intelectual para empresas de tecnologia en Ecuador.",
};

const practices = [
  {
    num: "01",
    title: "Privacidad y Proteccion de Datos",
    headline: "Privacidad como Ventaja Competitiva.",
    body: "En un mercado regulado por la LOPDP, el cumplimiento no es un freno, es un generador de confianza.",
    services: [
      "Implementacion integral de la Ley Organica de Proteccion de Datos Personales (Ecuador).",
      "Auditorias de impacto y Evaluaciones de Riesgo.",
      "DPO (Delegado de Proteccion de Datos) Externo.",
      "Transferencias internacionales de datos y Cloud Compliance.",
    ],
  },
  {
    num: "02",
    title: "Ciberseguridad Legal",
    headline: "Resiliencia ante la Amenaza Digital.",
    body: "La seguridad de la informacion es un imperativo juridico. Protegemos tu responsabilidad legal frente a incidentes.",
    services: [
      "Gestion legal de brechas de seguridad y respuesta a incidentes.",
      "Protocolos de preservacion de evidencia digital.",
      "Cumplimiento de normativas de seguridad para el sector financiero.",
      "Programas de concientizacion legal para equipos tecnicos.",
    ],
  },
  {
    num: "03",
    title: "Propiedad Intelectual para Tech",
    headline: "Blindaje de Activos Intangibles.",
    body: "Tu software y tu marca son tu mayor patrimonio. Los protegemos en Ecuador y en mercados globales.",
    services: [
      "Proteccion de Software y Derechos de Autor.",
      "Estrategia de Secretos Industriales y Acuerdos de Confidencialidad (NDA).",
      "Registro de Marcas y Patentes Tech.",
      "Licenciamiento de Software (SaaS) y transferencia tecnologica.",
    ],
  },
];

export default function PracticasPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface pt-32 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
            Servicios Legales
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
            Areas de Practica
          </h1>
          <p className="font-instrument italic text-xl md:text-2xl text-outline max-w-2xl leading-relaxed">
            Tres pilares estrategicos disenados para la economia digital de
            Ecuador y la region.
          </p>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-surface pb-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="space-y-32 md:space-y-48">
            {practices.map((p, i) => (
              <div
                key={p.num}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-start gap-12 md:gap-20`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-7xl md:text-8xl font-bold text-primary-container/15 mb-2 font-mono">
                    {p.num}
                  </h3>
                  <h4 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {p.title}
                  </h4>
                  <p className="font-instrument italic text-xl text-primary-fixed-dim mb-6">
                    {p.headline}
                  </p>
                  <p className="text-outline text-lg leading-relaxed mb-10 max-w-lg">
                    {p.body}
                  </p>
                  <ul className="space-y-4">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container mt-0.5 text-base">
                          arrow_forward
                        </span>
                        <span className="text-on-surface text-base leading-relaxed">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Visual */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`h-72 md:h-96 relative ${
                      i % 2 === 1
                        ? "border-b border-l border-outline-variant/30"
                        : "border-b border-r border-outline-variant/30"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 ${
                        i % 2 === 1
                          ? "bg-gradient-to-bl from-primary-container/8 to-transparent"
                          : "bg-gradient-to-br from-primary-container/8 to-transparent"
                      }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border border-primary-container/20 rotate-45" />
                    </div>
                    <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-outline-variant">
                        {p.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-6">
            Protege tu innovacion hoy.
          </h2>
          <p className="text-outline text-lg mb-10 max-w-xl mx-auto">
            Agenda una consulta estrategica con nuestro equipo y descubre como
            podemos fortalecer tu estructura legal.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary-container text-on-primary-container px-10 py-5 text-sm font-bold tracking-widest hover:brightness-110 transition-all"
          >
            AGENDAR CONSULTA
          </Link>
        </div>
      </section>
    </>
  );
}
