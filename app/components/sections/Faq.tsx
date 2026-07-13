"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";
import styles from "./Faq.module.css";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="eyebrow">Dúvidas</span>
          <h2>Perguntas que todo profissional faz</h2>
        </div>

        {/* data-reveal fica no container estável, não nos itens: os itens têm
            className controlado pelo React (open/fechado), e um re-render ao
            clicar apagaria a classe .is-visible que o observer adiciona no DOM,
            fazendo a dúvida "sumir". */}
        <div className={styles.list} data-reveal>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <h3 className={styles.qHead}>
                  <button
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
