import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Altius Lexia",
  description:
    "Alertas regulatorias, analisis de Tech Law y guias de cumplimiento para el ecosistema tecnologico de Ecuador.",
};

const articles = [
  {
    category: "Alertas Regulatorias",
    date: "2026-03-15",
    title: "Como afecta el reglamento de la LOPDP a las Fintech?",
    excerpt:
      "Analisis del impacto del nuevo reglamento sobre las operaciones de datos en plataformas financieras digitales en Ecuador.",
  },
  {
    category: "Tech Law Briefs",
    date: "2026-03-08",
    title: "Checklist de Ciberseguridad para CEOs 2026",
    excerpt:
      "Las diez medidas legales y tecnicas que todo lider de tecnologia debe implementar antes de que termine el ano.",
  },
  {
    category: "Guias de Cumplimiento",
    date: "2026-02-22",
    title: "Proteccion de Software: Derechos de Autor vs. Patentes en Ecuador",
    excerpt:
      "Guia practica para fundadores sobre como proteger su codigo y sus innovaciones bajo el marco legal ecuatoriano.",
  },
  {
    category: "Alertas Regulatorias",
    date: "2026-02-10",
    title:
      "Transferencias internacionales de datos: lo que tu SaaS necesita saber",
    excerpt:
      "Las clausulas contractuales estandar y garantias que las plataformas cloud deben cumplir para operar en la region.",
  },
  {
    category: "Tech Law Briefs",
    date: "2026-01-28",
    title: "Rondas de inversion y due diligence legal en Latam",
    excerpt:
      "Los cinco elementos legales que los inversionistas revisan antes de cerrar una ronda seed o Serie A.",
  },
  {
    category: "Guias de Cumplimiento",
    date: "2026-01-15",
    title: "NDA y Secretos Industriales: Blindaje para equipos de desarrollo",
    excerpt:
      "Como estructurar acuerdos de confidencialidad efectivos para proteger tu propiedad intelectual interna.",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("es-EC", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface pt-32 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
            Publicaciones
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
            Insights
          </h1>
          <p className="font-instrument italic text-xl md:text-2xl text-outline max-w-2xl leading-relaxed">
            Analisis, alertas regulatorias y guias practicas para el ecosistema
            tecnologico.
          </p>
        </div>
      </section>

      {/* Categories filter (visual only) */}
      <section className="bg-surface px-6 md:px-24 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {["Todos", "Alertas Regulatorias", "Tech Law Briefs", "Guias de Cumplimiento"].map(
            (cat) => (
              <button
                key={cat}
                className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 transition-colors ${
                  cat === "Todos"
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-secondary-container/30 text-on-secondary-container hover:bg-secondary-container/50"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-surface pb-20 md:pb-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-surface-container-highest/50 p-8 rounded-[1.25rem] flex flex-col justify-between hover:bg-surface-container-highest/80 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-secondary-container/40 text-on-secondary-container px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded-sm">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px] text-outline">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-outline text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="font-mono text-xs text-primary-fixed-dim group-hover:text-primary transition-colors flex items-center gap-2">
                    Leer mas
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-6">
            Mantente informado.
          </h2>
          <p className="text-outline text-lg mb-10 max-w-xl mx-auto">
            Recibe alertas regulatorias y analisis directamente en tu correo. Sin
            spam, solo contenido relevante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-1 bg-white px-6 py-4 text-surface font-mono text-sm focus:ring-2 focus:ring-primary-container/50 focus:outline-none"
            />
            <button className="bg-primary-container text-on-primary-container px-8 py-4 font-bold text-xs tracking-widest hover:brightness-110 transition-all uppercase">
              Suscribir
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
