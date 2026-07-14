import {
  IconLink,
  IconPix,
  IconChart,
  IconWhatsapp,
  IconShield,
  IconPhoneOff,
} from "../icons";
import { Phone3D } from "../Phone3D";
import { PRINTS } from "@/lib/prints";
import styles from "./Features.module.css";

const features = [
  {
    icon: IconLink,
    title: "Agenda online com link próprio",
    text: "Um endereço só seu pra dividir onde quiser. O cliente vê seus horários livres e reserva sozinho.",
  },
  {
    icon: IconPix,
    title: "Sinal no Pix e no cartão",
    text: "O cliente paga os 50% na hora de agendar. Você recebe o adiantamento e para de trabalhar no escuro.",
  },
  {
    icon: IconShield,
    title: "Horário protegido do no-show",
    text: "Faltou sem avisar? O sinal fica com você. Proteção automática, sem você precisar cobrar ninguém.",
  },
  {
    icon: IconChart,
    title: "Faturamento e performance",
    text: "Veja quanto entrou, seus horários de pico e o que mais vende. Decisão com número, não no achismo.",
  },
  {
    icon: IconWhatsapp,
    title: "WhatsApp centralizado",
    text: "Confirmações e lembretes saem do lugar certo. Menos vai-e-volta, menos horário esquecido.",
  },
  {
    icon: IconPhoneOff,
    title: "O cliente não baixa nada",
    text: "Ele agenda direto pelo navegador. Sem app, sem cadastro chato — quanto menos atrito, mais gente marca.",
  },
];

export function Features() {
  return (
    <section className={`section ${styles.features}`} id="beneficios">
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.head} data-reveal>
            <span className="eyebrow">Tudo em um lugar</span>
            <h2>O que você ganha com o Sinal</h2>
            <p className="lead">
              As ferramentas do dia a dia do balcão, sem complicação e sem
              mensalidade de sistema caro.
            </p>
          </div>
          <div className={styles.introPhone} data-reveal data-reveal-delay="120">
            <Phone3D
              src={PRINTS.features.src}
              label={PRINTS.features.label}
              alt="Painel do profissional no Sinal"
              tilt="left"
              className={styles.featPhone}
            />
          </div>
        </div>

        <ul className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className={styles.card}
                data-reveal
                data-reveal-delay={(i % 3) * 90}
              >
                <span className={styles.iconWrap}>
                  <Icon size={26} />
                </span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
