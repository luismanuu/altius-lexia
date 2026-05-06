"use client";

import { useRef, useState } from "react";

const inputCls =
  "w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors";

export default function ContactoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.info("[contact-form] phase-1 stub:", payload);
    setStatus("Mensaje recibido. Te responderemos pronto.");
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <label htmlFor="c-name" className={labelCls}>
            Nombre Completo
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre completo"
            className={inputCls}
          />
        </div>
        <div className="group">
          <label htmlFor="c-company" className={labelCls}>
            Empresa
          </label>
          <input
            id="c-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Empresa o startup"
            className={inputCls}
          />
        </div>
      </div>

      <div className="group">
        <label htmlFor="c-email" className={labelCls}>
          Correo Corporativo
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tunombre@empresa.com"
          className={inputCls}
        />
      </div>

      <div className="group">
        <label htmlFor="c-subject" className={labelCls}>
          Asunto
        </label>
        <select
          id="c-subject"
          name="subject"
          required
          defaultValue=""
          className={`${inputCls} appearance-none`}
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option value="privacidad">Privacidad de Datos</option>
          <option value="ciberseguridad">Ciberseguridad</option>
          <option value="ip">Propiedad Intelectual</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="group">
        <label htmlFor="c-message" className={labelCls}>
          Mensaje
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto y los desafíos legales que enfrentas..."
          className={`${inputCls} resize-none`}
        />
      </div>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="font-mono text-xs text-primary-container min-h-[1.25rem]"
      >
        {status}
      </div>

      <button
        type="submit"
        className="w-full bg-primary-container text-on-primary-container py-5 font-bold tracking-widest hover:brightness-110 transition-all uppercase text-xs"
      >
        Agendar Consulta
      </button>

      <p className="font-mono text-[10px] text-outline-variant text-center uppercase tracking-wider">
        Tu información está protegida bajo nuestras políticas de privacidad
      </p>
    </form>
  );
}
