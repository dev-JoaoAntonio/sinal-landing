import { Seal } from "../Seal";
import { CTA_HREF, site } from "@/lib/site";
import styles from "./Pricing.module.css";

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    price: site.precoEssencial,
    tagline: "Tudo pra proteger sua agenda e receber o sinal.",
    features: [
      "Agenda online com link próprio",
      "Sinal via Pix e cartão",
      "Proteção automática contra no-show",
      "Lembretes e confirmação no WhatsApp",
      "Painel de faturamento",
    ],
  },
  {
    name: "Pro",
    price: site.precoPro,
    tagline: "Pra quem quer crescer com inteligência do lado.",
    featured: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do Essencial",
      "Dicas de IA pra lotar sua agenda",
      "Sugestão de melhores horários e preços",
      "Relatórios de performance avançados",
      "Prioridade no suporte",
    ],
  },
];

export function Pricing() {
  return (
    <section className={`section ${styles.pricing}`} id="planos">
      <div className="container">
        <div className={styles.head} data-reveal>
          <span className="eyebrow">Planos e preços</span>
          <h2>
            Comece com <span className="text-cereja">{site.trialDias} dias
            grátis</span>. Sem cartão.
          </h2>
          <p className="lead">
            Testa à vontade. Se não fizer sentido, é só não continuar — sem multa,
            sem letras miúdas.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              data-reveal
              data-reveal-delay={i * 100}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}

              <header className={styles.cardHead}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
              </header>

              <div className={styles.priceRow}>
                <span className={styles.currency}>R$</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.per}>/mês</span>
              </div>
              <p className={styles.afterTrial}>
                depois dos {site.trialDias} dias grátis
              </p>

              <ul className={styles.list}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Seal size={20} tone="brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CTA_HREF}
                className={`btn btn-block btn-lg ${
                  plan.featured ? "btn-primary" : "btn-ghost"
                }`}
              >
                Começar grátis
              </a>
            </article>
          ))}
        </div>

        <p className={styles.note} data-reveal>
          Preços por profissional. O sinal cobrado dos seus clientes é definido por
          você e cai direto na sua conta.
        </p>
      </div>
    </section>
  );
}
