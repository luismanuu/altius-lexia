"use client";

import { useRef, useState } from "react";

const inputCls =
  "w-full bg-surface-container-high border-none text-on-surface py-4 px-4 focus:ring-2 focus:ring-primary-container/50 focus:outline-none transition-all";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-widest text-outline-variant mb-2 group-focus-within:text-primary-container transition-colors";

export default function LandingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("");
    setIsError(false);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (res.ok && json.ok) {
        setStatus("Mensaje enviado. Te contactaremos pronto.");
        formRef.current?.reset();
      } else {
        setIsError(true);
        setStatus(json.error ?? "No se pudo enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setIsError(true);
      setStatus("No se pudo enviar el mensaje. Verifica tu conexión.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate={false}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />
      <div className="group">
        <label htmlFor="lp-name" className={labelCls}>
          Nombre Completo
        </label>
        <input
          id="lp-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre completo"
          className={inputCls}
        />
      </div>
      <div className="group">
        <label htmlFor="lp-email" className={labelCls}>
          Email Corporativo
        </label>
        <input
          id="lp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tunombre@empresa.com"
          className={inputCls}
        />
      </div>
      <div className="group">
        <label htmlFor="lp-message" className={labelCls}>
          Mensaje
        </label>
        <textarea
          id="lp-message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto..."
          className={`${inputCls} resize-none`}
        />
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`font-mono text-xs min-h-[1.25rem] ${isError ? "text-error" : "text-primary-container"}`}
      >
        {status}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary-container text-on-primary-container py-5 font-bold tracking-widest hover:brightness-110 active:scale-[0.98] transition-all uppercase text-xs disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Agendar Consulta"}
      </button>
    </form>
  );
}
