import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Altius Lexia",
  description:
    "Donde la Ley y la Tecnologia convergen. Conoce la firma legal tech de Ecuador.",
};

const stats = [
  { value: "500+", label: "Casos Exitosos" },
  { value: "12", label: "Jurisdicciones" },
  { value: "24/7", label: "Respuesta Agil" },
  { value: "3", label: "Especializaciones" },
];

const values = [
  {
    icon: "shield",
    title: "Precision Tecnica",
    description:
      "Cada estrategia legal esta respaldada por un entendimiento profundo de las arquitecturas tecnologicas de nuestros clientes.",
  },
  {
    icon: "speed",
    title: "Velocidad de Ejecucion",
    description:
      "Operamos al ritmo del ecosistema startup. Respuestas agiles sin sacrificar rigor juridico.",
  },
  {
    icon: "public",
    title: "Perspectiva Global",
    description:
      "Estandares internacionales aplicados con precision al marco legal ecuatoriano y latinoamericano.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Quote */}
      <section className="bg-surface pt-32 pb-20 md:pb-32 px-6 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <span className="font-mono text-xs tracking-widest text-primary-container uppercase mb-6 block">
              Nuestra Firma
            </span>
            <p className="font-instrument italic text-3xl md:text-5xl text-primary leading-tight mb-12">
              &ldquo;Donde la Ley y la Tecnologia convergen para crear el futuro
              de la infraestructura empresarial.&rdquo;
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-primary-container pl-6">
                  <span className="block text-2xl font-bold text-primary">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-sm overflow-hidden border border-outline-variant/20">
              <img
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Modern minimalist law office interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3SJXcuAvy7v7FG-8aGU6Jg7O6E2rWG99opySJxSzo2GLgrs8Q_OR1IOrYqgICqsSSaYMm4ZWK82m1YPj4zSv33U3Ooa6XJCirQ7XHpWw1uvYt1YS-ElWAo_iDWc-A-yt2CFrH9CLcvBlk7sxZPneNmVJR5jiuW_vyn-dWpTAo2chO6vhZxVmx2b5jzS_DjCLjCuEpSDBK5xTuNuVM_r1X6S-fzYo56SS0WrLIzKz0ycM2knERoOLN-5m0X-Lt-cODAOkxDCantiE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Copy */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-surface mb-8">
              Sobre Altius Lexia
            </h2>
            <p className="text-outline text-lg leading-relaxed mb-6">
              No somos una firma de abogados tradicional. Nacimos de la
              necesidad de un ecosistema tecnologico en Ecuador que exigia
              respuestas sofisticadas.
            </p>
            <p className="text-outline text-lg leading-relaxed">
              Nos inspiramos en los estandares globales para ofrecer una asesoria
              tecnica-legal que permite a los fundadores y CTOs escalar con
              seguridad juridica. Nuestra mision es ser el puente entre la
              innovacion y el cumplimiento regulatorio.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
              Principios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface-container-highest/30 p-8 md:p-10 rounded-[1.25rem] hover:bg-surface-container-highest/50 transition-colors"
              >
                <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">
                  {v.icon}
                </span>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {v.title}
                </h3>
                <p className="text-outline text-base leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-outline-variant uppercase">
              El Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-surface mt-4">
              Liderazgo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Directora de Privacidad",
                role: "Data Privacy Lead",
                focus: "LOPDP & Cloud Compliance",
              },
              {
                name: "Director de Ciberseguridad",
                role: "Cybersecurity Counsel",
                focus: "Incident Response & Digital Forensics",
              },
              {
                name: "Directora de IP",
                role: "IP Strategy Lead",
                focus: "Software Patents & Licensing",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-white p-8 md:p-10 rounded-[1.25rem] shadow-sm"
              >
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-surface/5 to-surface-container-high/10 rounded-sm mb-6" />
                <h3 className="text-lg font-bold text-surface mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-outline-variant uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-outline text-sm">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Construyamos juntos.
          </h2>
          <p className="text-outline text-lg mb-10 max-w-xl mx-auto">
            Nuestro equipo esta listo para conversar sobre los desafios legales
            de tu empresa tecnologica.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary-container text-on-primary-container px-10 py-5 text-sm font-bold tracking-widest hover:brightness-110 transition-all"
          >
            CONTACTAR AL EQUIPO
          </Link>
        </div>
      </section>
    </>
  );
}
