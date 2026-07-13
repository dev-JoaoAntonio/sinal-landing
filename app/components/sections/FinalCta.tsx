import { LeadForm } from "../LeadForm";
import { Seal } from "../Seal";
import { site } from "@/lib/site";
import styles from "./FinalCta.module.css";

/**
 * CTA final + captura de lead. A âncora #cadastro é o alvo de todos os
 * botões "Começar grátis". Quando o cadastro real existir, veja CTA_HREF
 * em lib/site.ts pra apontar os botões direto pro sistema.
 */
export function FinalCta() {
  return (
    <section className={styles.cta} id="cadastro">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <Seal size={64} tone="onCereja" className={styles.seal} />
          <h2 className={styles.title}>
            Sua próxima cadeira cheia começa agora.
          </h2>
          <p className={styles.sub}>
            Ative seus {site.trialDias} dias grátis e comece a proteger cada
            horário. Sem cartão, sem burocracia — a gente te ajuda a configurar.
          </p>
          <ul className={styles.points}>
            <li>Configuração em minutos</li>
            <li>Seu link pronto pra divulgar</li>
            <li>Cancele quando quiser</li>
          </ul>
        </div>

        <div className={styles.formCard} data-reveal data-reveal-delay="100">
          <h3 className={styles.formTitle}>Comece grátis</h3>
          <p className={styles.formLead}>
            Deixe seu contato — liberamos seu acesso pelo WhatsApp.
          </p>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
