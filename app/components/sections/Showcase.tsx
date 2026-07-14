import { Phone3D } from "../Phone3D";
import { PRINTS } from "@/lib/prints";
import styles from "./Showcase.module.css";

const CAPTIONS = [
  "Seus horários, no seu link. O cliente reserva sozinho, sem instalar app.",
  "Sinal de 50% no Pix ou cartão, pago na hora de agendar.",
  "Veja quanto entrou, seus horários de pico e o que mais vende.",
];

export function Showcase() {
  return (
    <section className={`section ${styles.showcase}`} id="por-dentro">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="eyebrow">Veja por dentro</span>
          <h2>Bonito por fora, esperto por dentro</h2>
          <p className="lead">
            Do agendamento ao pagamento, tudo num app leve que abre no navegador —
            e o cliente não instala nada.
          </p>
        </div>

        <ul className={styles.grid}>
          {PRINTS.showcase.map((p, i) => (
            <li
              key={p.src}
              className={styles.item}
              data-reveal
              data-reveal-delay={i * 110}
            >
              <Phone3D
                src={p.src}
                label={p.label}
                alt={p.label}
                tilt={i % 2 === 0 ? "right" : "left"}
              />
              <p className={styles.caption}>{CAPTIONS[i]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
