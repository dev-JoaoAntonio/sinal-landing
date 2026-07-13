"use client";

import { useState } from "react";
import { Seal } from "./Seal";
import { site } from "@/lib/site";
import styles from "./LeadForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulário de captura de interesse (trial). Por enquanto envia para
 * /api/lead, que é um PLACEHOLDER — veja app/api/lead/route.ts para plugar
 * o destino real (CRM, planilha, e-mail, ou o /signup do sistema).
 */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Não foi possível enviar agora.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Algo deu errado. Tente de novo."
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <Seal size={64} tone="brand" animated />
        <h3>Recebemos seu contato!</h3>
        <p>
          Em breve a gente te chama no WhatsApp pra liberar seus{" "}
          {site.trialDias} dias grátis. Sem compromisso.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Seu nome</span>
          <input
            className={styles.input}
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Como te chamam?"
            required
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>WhatsApp</span>
          <input
            className={styles.input}
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>E-mail</span>
        <input
          className={styles.input}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="voce@email.com"
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>O que você faz?</span>
        <select className={styles.input} name="area" defaultValue="">
          <option value="" disabled>
            Selecione seu serviço
          </option>
          <option>Manicure / Nail designer</option>
          <option>Cabeleireiro(a)</option>
          <option>Barbeiro(a)</option>
          <option>Esteticista</option>
          <option>Outro serviço de beleza</option>
        </select>
      </label>

      <button
        type="submit"
        className="btn btn-primary btn-block btn-lg"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : "Quero meus 30 dias grátis"}
      </button>

      {status === "error" && (
        <p className={styles.errorMsg} role="alert">
          {error}
        </p>
      )}

      <p className={styles.disclaimer}>
        Sem cartão para começar. A gente te chama no WhatsApp pra liberar o
        acesso.
      </p>
    </form>
  );
}
