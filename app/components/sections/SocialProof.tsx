import { IconPix, IconShield } from "../icons";
import styles from "./SocialProof.module.css";

// PLACEHOLDERS — não são depoimentos reais. Substitua por depoimentos
// autênticos (com autorização) quando tiver. Marcados visualmente como exemplo.
const testimonials = [
  {
    quote:
      "Aqui entra o depoimento de um profissional real quando a gente tiver. Espaço reservado pra prova social verdadeira.",
    name: "Nome do profissional",
    role: "Serviço · Cidade",
  },
  {
    quote:
      "Outro depoimento de exemplo. Nada de número inventado ou frase fabricada — só a estrutura pronta pra receber a fala real.",
    name: "Nome do profissional",
    role: "Serviço · Cidade",
  },
  {
    quote:
      "Terceiro espaço de depoimento. Assim que houver clientes usando, esta seção recebe histórias verdadeiras.",
    name: "Nome do profissional",
    role: "Serviço · Cidade",
  },
];

export function SocialProof() {
  return (
    <section className={`section ${styles.proof}`} aria-labelledby="prova-titulo">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="eyebrow">Confiança</span>
          <h2 id="prova-titulo">Feito pra quem vive do balcão</h2>
          <p className="lead">
            Pagamento seguro e o dinheiro sempre com você. A prova social real
            entra aqui conforme a comunidade cresce.
          </p>
        </div>

        <ul className={styles.grid}>
          {testimonials.map((t, i) => (
            <li
              key={i}
              className={styles.card}
              data-reveal
              data-reveal-delay={i * 90}
            >
              <span className={styles.exampleTag}>Exemplo</span>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true" />
                <div>
                  <strong className={styles.name}>{t.name}</strong>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Selos de confiança de pagamento */}
        <div className={styles.trustStrip} data-reveal>
          <span className={styles.trustItem}>
            <IconPix size={22} /> Pagamento via Pix
          </span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.trustItem}>
            <IconShield size={22} /> Pagamento seguro
          </span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.trustItem}>Pix e cartão de crédito</span>
        </div>
      </div>
    </section>
  );
}
