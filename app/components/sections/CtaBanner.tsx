import { CtaButton } from "../CtaButton";
import { Marquee } from "../Marquee";
import styles from "./CtaBanner.module.css";

/* Palavras da "corrente" que corre nas bordas (formato: palavra • palavra • …) */
const TOP_WORDS = [
  "Agenda cheia",
  "Chega de cadeira vazia",
  "Sinal garantido",
  "Pix e cartão",
  "Sem baixar app",
  "Você no controle",
];
const BOTTOM_WORDS = [
  "Proteção, não punição",
  "Seu horário protegido",
  "30 dias grátis",
  "Dinheiro adiantado",
  "Do balcão pra você",
  "Faturamento na palma",
];

/** Seção do CTA: faixa grafite diagonal, com carrossel de palavras nas bordas. */
export function CtaBanner() {
  return (
    <section className={styles.banner} aria-label="Começar o teste grátis">
      <Marquee words={TOP_WORDS} className={styles.marqueeTop} />

      <div className="container">
        <div className={styles.stage}>
          <CtaButton />
        </div>
      </div>

      <Marquee words={BOTTOM_WORDS} reverse className={styles.marqueeBottom} />
    </section>
  );
}
