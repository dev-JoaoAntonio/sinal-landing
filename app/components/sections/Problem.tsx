import { IconPhoneOff } from "../icons";
import styles from "./Problem.module.css";

const pains = [
  {
    title: "A cadeira fica vazia",
    text: "Marcou, bloqueou o horário, comprou o material — e o cliente simplesmente não aparece. O prejuízo é seu.",
  },
  {
    title: "“Confirma depois” que nunca vem",
    text: "Você fica no vácuo esperando a resposta. Quando percebe, já perdeu outro cliente que queria aquele horário.",
  },
  {
    title: "WhatsApp virou bagunça",
    text: "Agenda em papel, conversa espalhada, print de comprovante. É fácil errar horário e difícil saber quanto entrou.",
  },
];

export function Problem() {
  return (
    <section className={styles.problem}>
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className={`eyebrow ${styles.eyebrow}`}>
            <IconPhoneOff size={18} /> O problema de sempre
          </span>
          <h2 className={styles.title}>
            Todo horário furado é <span className={styles.hl}>dinheiro que
            some</span> — e não volta.
          </h2>
          <p className={styles.lead}>
            Você não vende produto: vende o seu tempo. Quando o cliente falta, não
            dá pra recuperar aquela hora. O no-show é o buraco silencioso no seu
            faturamento.
          </p>
        </div>

        <ul className={styles.grid}>
          {pains.map((p, i) => (
            <li
              key={p.title}
              className={styles.card}
              data-reveal
              data-reveal-delay={i * 90}
            >
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
