import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-[100dvh] flex flex-col md:flex-row pt-20">
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-24 py-20">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
              Legal Infrastructure
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 text-primary">
            El derecho a la velocidad de tu código.
          </h1>
          <p className="font-instrument italic text-xl md:text-3xl text-outline mb-12 leading-relaxed">
            Sistemas legales arquitectónicos para la economía digital de
            vanguardia.
          </p>
          <div>
            <Link
              href="/contacto"
              className="inline-block bg-primary-container text-[#1e1c0d] px-10 py-5 text-sm font-bold tracking-widest hover:brightness-110 transition-all"
            >
              AGENDAR CONSULTA ESTRATÉGICA
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[45%] relative bg-surface-container-low overflow-hidden min-h-[50vh] md:min-h-0">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,#0c141f_25%,transparent_25%,transparent_50%,#0c141f_50%,#0c141f_75%,transparent_75%,transparent)] bg-[length:64px_64px]" />
          </div>
          <div className="relative h-full w-full flex items-center justify-center p-12">
            <div className="w-full aspect-square border-l border-t border-primary-container/20 relative">
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-primary-container/5 border border-primary-container/10" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary-container/40" />
              <img
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay grayscale opacity-60"
                alt="Abstract geometric composition with architectural lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5xmdkViHu-c4rTEAb3LS1kuKURtSDcwOhNC4Jn_Qe7KRTDjNKZS0nQn6htlUgah7Q8UUZmy37p4HFczz7DruMzPzpSQ1XFiWMt-kK_qgHqcvXJMPoIMXCCNq3BykZFe_roS402mvriE0C6GVREodTAlMgSe0YiCU1IPhxid__WH_kCBnVON5bW-GKlBw431BIkorkG1LPnOWgfKqUPT73y73cfGRaI795lsNKsk0tgnqCLZhGvIszxp5NMpE1u0CZvCOGsP1kfz0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[40%_30%_30%] gap-12">
            {[
              {
                title: "Visión Global",
                text: "Navegamos marcos regulatorios internacionales con la precisión de un arquitecto, garantizando escalabilidad sin fronteras.",
              },
              {
                title: "ADN Tecnológico",
                text: "Hablamos el lenguaje del software. Entendemos el despliegue, la seguridad y la iteración técnica desde la raíz.",
              },
              {
                title: "Agilidad",
                text: "La ley no debe ser un cuello de botella. Implementamos soluciones dinámicas al ritmo del mercado.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-[1px] border-primary-container pt-8">
                <h2 className="text-3xl font-bold text-surface mb-6">
                  {item.title}
                </h2>
                <p className="text-outline text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICAS ── */}
      <section className="bg-surface py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="mb-16 md:mb-24">
            <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
              Core Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-primary">
              Áreas de Práctica
            </h2>
          </div>
          <div className="space-y-24 md:space-y-40">
            {/* Practice 01 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2">
                <h3 className="text-6xl font-bold text-primary-container/20 mb-4 font-mono">
                  01
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Privacidad de Datos
                </h4>
                <p className="text-outline text-lg md:text-xl leading-relaxed max-w-lg">
                  Diseño de estructuras de cumplimiento que protegen el activo
                  más valioso de su empresa sin comprometer la experiencia del
                  usuario.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 border-b border-r border-outline-variant/30 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-container/5 to-transparent" />
                <img
                  className="w-full h-full object-cover opacity-20 grayscale"
                  alt="Digital data flow network"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMu2VJYeFpscqM5CmpY3_PGsQGXFsYO28-fhQ-bVb2RjVMDoFGm7bzkgaqz8qXWTtdLQjyAuvUroJw5ITskvYZoSO6DJHOAT3GfJlvXZP1QvAVICZZSzyMvE7MMz4n8-uHQWPuRGGDgFj4jEXtuVCFy8Jq22NzjbEedtjTd4tqQDIlOyU2xiMSvuuunwgOc1B6ggEL3aQQ1U0TEz0nZYzTRrJize1JBt_0_VcWjOu0GYGIqna1Z7lNJI9z2aKxNLHoNUh6VuXCjIA"
                />
              </div>
            </div>

            {/* Practice 02 — reversed */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2">
                <h3 className="text-6xl font-bold text-primary-container/20 mb-4 font-mono">
                  02
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Ciberseguridad
                </h4>
                <p className="text-outline text-lg md:text-xl leading-relaxed max-w-lg">
                  Protocolos legales de respuesta ante incidentes y blindaje
                  preventivo contra amenazas digitales complejas.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 border-b border-l border-outline-variant/30 relative">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-container/5 to-transparent" />
                <img
                  className="w-full h-full object-cover opacity-20 grayscale"
                  alt="Interconnected structural circuits"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC16aTxWmJ_OwemfLHWpYxpsjPQNnWQOt2M__lIIgZ3_bOhAzTWIqhHAijMb4PwxAc_DPZbAne-pQP2N6jNpTMp4-M2Shm8aN_AawH9qzEYgbeBF8zUs9CM08Uj1xv7L_sMYC26JjuAmlZLktRL1_NPDKzOmiwSylHhnxv4JTF_6f8Yk-RUBH7f5WRLzbi1K14754_F1hScnpuiuh2GAqfEpiwcBd-q9zBN33uFk11D1m-evotwl44engkA3B_xvv67554vpVbjSqI"
                />
              </div>
            </div>

            {/* Practice 03 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2">
                <h3 className="text-6xl font-bold text-primary-container/20 mb-4 font-mono">
                  03
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Propiedad Intelectual
                </h4>
                <p className="text-outline text-lg md:text-xl leading-relaxed max-w-lg">
                  Protección estratégica de algoritmos, patentes de software y
                  activos intangibles en la frontera de la innovación.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 border-b border-r border-outline-variant/30 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-container/5 to-transparent" />
                <img
                  className="w-full h-full object-cover opacity-20 grayscale"
                  alt="Integrated circuit board pathways"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqnRh65zE-PQjIEg8HY1Yy9B6aSax7GC8JZdB6T2w1FXodtnL5X3ZosocUqedUzq-6DN8bemYIc8bPM_VRKugnKyVsr6I5tx6rJu4Fe0FbFgjpjPFW8c6MGNPRAhEo35n75zXvrxlslmpZkJSgbKZe2wq3_BMZqN9FLfKjt7GoO7RkBSMDoFC6SL7P90GWYMy7_o8yGlg8B6afiYPM-8DV988u85gRoMA5e1zBUgicW8Qm4HmwErDJNKpO5-HY5orwjdgm-CWyTGw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORES ── */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs tracking-widest text-outline-variant uppercase">
              Verticals
            </span>
            <h2 className="text-4xl font-bold text-surface mt-4">
              Sectores Estratégicos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            <div className="md:col-span-6 bg-white p-8 md:p-12 rounded-[1.25rem] shadow-sm flex flex-col justify-between group hover:bg-primary-container/5 transition-colors">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-surface mb-4">
                  Startups
                </h3>
                <p className="text-outline text-lg max-w-md">
                  De la semilla al exit. Acompañamos el crecimiento exponencial
                  con bases legales sólidas.
                </p>
              </div>
              <div className="mt-12 flex justify-end">
                <span className="font-mono text-xs text-outline group-hover:text-surface transition-colors">
                  01 / GLOBAL SCALE
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-8 md:p-12 rounded-[1.25rem] shadow-sm flex flex-col justify-between hover:bg-primary-container/5 transition-colors">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-surface mb-4">
                  Fintech
                </h3>
                <p className="text-outline text-base">
                  Regulaciones financieras digitales y cumplimiento de pagos
                  complejos.
                </p>
              </div>
              <div className="mt-8">
                <span className="font-mono text-xs text-outline">
                  02 / COMPLIANCE
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-8 md:p-12 rounded-[1.25rem] shadow-sm flex flex-col justify-between hover:bg-primary-container/5 transition-colors">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-surface mb-4">
                  SaaS
                </h3>
                <p className="text-outline text-base">
                  Modelos de suscripción, términos de servicio y SLAs de alta
                  disponibilidad.
                </p>
              </div>
              <div className="mt-8">
                <span className="font-mono text-xs text-outline">
                  03 / OPERATIONS
                </span>
              </div>
            </div>

            <div className="md:col-span-6 bg-white p-8 md:p-12 rounded-[1.25rem] shadow-sm flex flex-col justify-between hover:bg-primary-container/5 transition-colors">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-surface mb-4">
                  E-commerce
                </h3>
                <p className="text-outline text-base">
                  Logística digital, derechos del consumidor y transacciones
                  transfronterizas.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="font-mono text-xs text-outline">
                  04 / COMMERCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSOTROS / ABOUT ── */}
      <section className="bg-surface py-24 md:py-40 px-6 md:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <p className="font-instrument italic text-3xl md:text-6xl text-primary leading-tight mb-12">
              &ldquo;Donde la Ley y la Tecnología convergen para crear el futuro
              de la infraestructura empresarial.&rdquo;
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-20">
              <div className="border-l border-primary-container pl-6">
                <span className="block text-2xl font-bold text-primary">
                  500+
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                  Casos Exitosos
                </span>
              </div>
              <div className="border-l border-primary-container pl-6">
                <span className="block text-2xl font-bold text-primary">
                  12
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                  Jurisdicciones
                </span>
              </div>
              <div className="border-l border-primary-container pl-6">
                <span className="block text-2xl font-bold text-primary">
                  24/7
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                  Respuesta Ágil
                </span>
              </div>
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

      {/* ── CONTACTO CTA ── */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-surface mb-8 leading-tight">
              Hablemos de tu siguiente hito.
            </h2>
            <p className="text-outline text-lg md:text-xl mb-12 max-w-md">
              Nuestro equipo está listo para integrar la arquitectura legal que
              tu proyecto tecnológico requiere.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  mail
                </span>
                <span className="text-surface font-mono text-sm">
                  nexus@altiuslexia.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  location_on
                </span>
                <span className="text-surface font-mono text-sm">
                  Quito | Guayaquil | Miami
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-surface p-8 md:p-16 rounded-sm shadow-xl">
            <form className="space-y-8">
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
                  Email Corporativo
                </label>
                <input
                  type="email"
                  placeholder="juan@startup.com"
                  className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all"
                />
              </div>
              <div className="group">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container py-5 font-bold tracking-widest hover:brightness-110 transition-all uppercase text-xs"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
