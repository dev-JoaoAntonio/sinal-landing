import { Seal } from "../Seal";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    n: "1",
    title: "O cliente agenda pelo seu link",
    text: "Você manda seu link (bio, WhatsApp, story). O cliente escolhe o serviço e o horário livre. Nada de instalar app.",
  },
  {
    n: "2",
    title: "Ele paga o sinal na hora",
    text: "Para confirmar, o cliente paga 50% adiantado no Pix ou cartão. O horário só trava depois do sinal pago.",
  },
  {
    n: "3",
    title: "Ele aparece — ou o sinal fica com você",
    text: "Compareceu? O sinal abate no valor final. Faltou? O dinheiro é seu. Do seu jeito, sem cobrança constrangedora.",
    isSeal: true,
  },
];

export function HowItWorks() {
  return (
    <section className={`section ${styles.how}`} id="como-funciona">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="eyebrow">Como funciona</span>
          <h2>Três passos. Zero dor de cabeça.</h2>
          <p className="lead">
            Simples pra você configurar e ainda mais simples pro seu cliente usar.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={styles.step}
              data-reveal
              data-reveal-delay={i * 110}
            >
              <div className={styles.badge}>
                {s.isSeal ? (
                  <Seal size={56} tone="brand" animated />
                ) : (
                  <span className={styles.num}>{s.n}</span>
                )}
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
