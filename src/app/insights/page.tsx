import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Altius Lexia",
  description:
    "Preguntas frecuentes sobre protección de datos, ciberseguridad, propiedad intelectual y cumplimiento legal para empresas de tecnología en Ecuador.",
};

const faqs = [
  {
    question: "¿Qué obligaciones tiene mi empresa bajo la LOPDP?",
    answer:
      "La Ley Orgánica de Protección de Datos Personales (LOPDP) exige que toda empresa que trate datos personales en Ecuador implemente medidas técnicas y organizativas adecuadas: registro de actividades de tratamiento, evaluaciones de impacto, políticas de privacidad transparentes, mecanismos para ejercicio de derechos ARCO y notificación de brechas a la Autoridad de Protección de Datos. El incumplimiento puede generar sanciones de hasta el 1% de la facturación anual.",
  },
  {
    question: "¿Mi empresa necesita un Delegado de Protección de Datos (DPO)?",
    answer:
      "Sí, la LOPDP exige el nombramiento de un DPO cuando la empresa realiza tratamiento a gran escala de datos sensibles, cuando es una entidad del sector público, o cuando su actividad principal requiere observación habitual y sistemática de titulares de datos. Si tu empresa no cumple estos supuestos, igualmente recomendamos designar un responsable de protección de datos como buena práctica. Ofrecemos servicio de DPO externo para startups y empresas tecnológicas.",
  },
  {
    question: "¿Qué debo hacer si mi empresa sufre una brecha de seguridad de datos?",
    answer:
      "Debes notificar a la Autoridad de Protección de Datos Personales dentro de las 72 horas siguientes al conocimiento de la brecha. Si la brecha implica un riesgo alto para los titulares, también debes notificarles directamente. Es fundamental contar con un protocolo de respuesta a incidentes previamente documentado que incluya: contención, evaluación del impacto, preservación de evidencia digital, notificación regulatoria y comunicación a afectados.",
  },
  {
    question: "¿Cómo protejo la propiedad intelectual de mi software en Ecuador?",
    answer:
      "El software se protege automáticamente bajo derechos de autor al momento de su creación, sin necesidad de registro (aunque el registro ante el SENADI otorga ventajas probatorias). Adicionalmente, puedes proteger algoritmos innovadores mediante patentes de invención, resguardar tu marca y nombre comercial con registros marcarios, e implementar acuerdos de confidencialidad (NDA) y cláusulas de propiedad intelectual en contratos con empleados y contratistas.",
  },
  {
    question: "¿Qué estructura legal recomiendan para una startup tecnológica en Ecuador?",
    answer:
      "Recomendamos constituir una Sociedad por Acciones Simplificada (SAS) por su flexibilidad y bajo costo de mantenimiento. Es ideal para startups por su estructura de gobierno simplificada, facilidad para emitir diferentes clases de acciones, compatibilidad con acuerdos de vesting y cap tables, y menor carga regulatoria. Para startups con proyección internacional, diseñamos estructuras que facilitan la inversión extranjera y la operación en múltiples jurisdicciones.",
  },
  {
    question: "¿Qué protocolos de ciberseguridad exige la ley ecuatoriana?",
    answer:
      "La normativa ecuatoriana, incluyendo la LOPDP y regulaciones sectoriales (especialmente para el sector financiero), exige implementar medidas de seguridad proporcionales al riesgo: cifrado de datos sensibles, controles de acceso, auditorías periódicas de seguridad, planes de continuidad de negocio y protocolos de respuesta a incidentes. Para empresas fintech, la Junta de Política y Regulación Financiera establece requisitos adicionales de ciberseguridad y gestión de riesgos operativos.",
  },
  {
    question: "¿Puedo transferir datos personales fuera de Ecuador?",
    answer:
      "Sí, pero bajo condiciones específicas. La LOPDP permite transferencias internacionales cuando el país receptor ofrece un nivel adecuado de protección, cuando existen cláusulas contractuales estándar aprobadas, cuando el titular ha dado su consentimiento explícito, o cuando la transferencia es necesaria para la ejecución de un contrato. Para empresas SaaS con infraestructura cloud, diseñamos marcos contractuales que garantizan el cumplimiento en transferencias a proveedores como AWS, Google Cloud o Azure.",
  },
  {
    question: "¿Qué deben incluir los términos de servicio de mi plataforma SaaS?",
    answer:
      "Unos términos de servicio robustos para SaaS deben cubrir: definición clara del servicio y niveles de disponibilidad (SLA), políticas de uso aceptable, tratamiento y propiedad de datos del usuario, limitación de responsabilidad, procedimientos de suspensión y terminación, política de privacidad integrada conforme a la LOPDP, jurisdicción aplicable y mecanismos de resolución de disputas. También recomendamos incluir cláusulas de actualización unilateral con notificación previa.",
  },
  {
    question: "¿Cómo puedo proteger los datos de mis clientes si uso servicios cloud internacionales?",
    answer:
      "Es fundamental formalizar acuerdos de procesamiento de datos (DPA) con cada proveedor cloud, verificar que sus certificaciones de seguridad (SOC 2, ISO 27001) estén vigentes, implementar cifrado en tránsito y en reposo, y documentar las bases legales para cada transferencia internacional. Te ayudamos a auditar tus proveedores, negociar cláusulas contractuales adecuadas y establecer un programa de gobernanza de datos que cumpla con la LOPDP y estándares internacionales.",
  },
  {
    question: "¿Ofrecen planes de asesoría legal recurrente para empresas tech?",
    answer:
      "Sí, ofrecemos planes de asesoría legal recurrente diseñados específicamente para empresas de tecnología. Incluyen: consultas ilimitadas sobre protección de datos y ciberseguridad, revisión trimestral de cumplimiento regulatorio, actualización de políticas y contratos, servicio de DPO externo, capacitación para equipos técnicos y soporte prioritario ante incidentes de seguridad. Cada plan se adapta al tamaño y necesidades específicas de tu empresa.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface pt-32 pb-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-primary-container uppercase">
            Preguntas Frecuentes
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
            FAQ
          </h1>
          <p className="font-instrument italic text-xl md:text-2xl text-outline max-w-2xl leading-relaxed">
            Respuestas a las consultas más comunes de empresas tecnológicas sobre
            cumplimiento legal en Ecuador.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-surface pb-20 md:pb-32 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-surface-container-highest/30 rounded-[1.25rem] hover:bg-surface-container-highest/50 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex items-start gap-4 pr-4">
                    <span className="font-mono text-xs text-primary-container mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-primary leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-primary-container shrink-0 transition-transform duration-300 group-open:rotate-45">
                    add
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="pl-10 md:pl-12 border-l border-outline-variant/15">
                    <p className="text-outline text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-surface py-20 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-6">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-outline text-lg mb-10 max-w-xl mx-auto">
            Agenda una consulta estratégica con nuestro equipo. Cada caso es
            único y merece atención personalizada.
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
