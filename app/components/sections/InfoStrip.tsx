import { IconPix, IconPhoneOff, IconShield } from "../icons";
import styles from "./InfoStrip.module.css";

const items = [
  {
    icon: IconPix,
    title: "Sinal no Pix ou cartão",
    text: "50% adiantado, na hora de agendar.",
  },
  {
    icon: IconPhoneOff,
    title: "Sem o cliente baixar app",
    text: "Ele reserva direto pelo seu link.",
  },
  {
    icon: IconShield,
    title: "Protegido do no-show",
    text: "Faltou? O sinal fica com você.",
  },
];

/** Card que atravessa a borda entre o hero e a seção de baixo, sobrepondo os dois. */
export function InfoStrip() {
  return (
    <div className={styles.wrap} aria-label="Destaques">
      <div className={styles.floater}>
        <div className="container">
          <ul className={styles.card}>
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.title} className={styles.item}>
                <span className={styles.icon}>
                  <Icon size={24} />
                </span>
                <div className={styles.copy}>
                  <strong className={styles.title}>{it.title}</strong>
                  <span className={styles.text}>{it.text}</span>
                </div>
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}
