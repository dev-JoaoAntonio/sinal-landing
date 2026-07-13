import { Seal } from "./Seal";
import styles from "./PhoneMockup.module.css";

/**
 * Ilustração do app: tela de confirmação de horário com o selo.
 * Construída em HTML/CSS (não é screenshot) — nítida em qualquer tela e leve.
 * Conteúdo é EXEMPLO ilustrativo, não dado real.
 */
export function PhoneMockup() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {/* Etiqueta flutuante: sinal recebido */}
      <div className={`${styles.chip} ${styles.chipTop}`}>
        <span className={styles.chipDot} />
        Sinal recebido · Pix
      </div>

      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.appbar}>
            <span className={styles.appbarTitle}>Agenda de hoje</span>
            <span className={styles.appbarDate}>Qui, 10 jul</span>
          </div>

          {/* Card principal — horário garantido */}
          <div className={styles.confirmCard}>
            <Seal size={54} tone="onCereja" />
            <div className={styles.confirmText}>
              <strong>Horário garantido</strong>
              <span>Sinal de 50% pago adiantado</span>
            </div>
          </div>

          <div className={styles.booking}>
            <div className={styles.time}>
              <span className={styles.timeH}>14:00</span>
              <span className={styles.timeDur}>1h</span>
            </div>
            <div className={styles.bookingInfo}>
              <strong>Ana Beatriz</strong>
              <span>Alongamento em gel</span>
            </div>
            <span className={styles.paid}>R$ 60 pago</span>
          </div>

          <div className={`${styles.booking} ${styles.bookingMuted}`}>
            <div className={styles.time}>
              <span className={styles.timeH}>16:30</span>
              <span className={styles.timeDur}>45m</span>
            </div>
            <div className={styles.bookingInfo}>
              <strong>Marcos R.</strong>
              <span>Corte + barba</span>
            </div>
            <span className={styles.paid}>R$ 35 pago</span>
          </div>

          <div className={styles.totalBar}>
            <span>Garantido hoje</span>
            <strong>R$ 95</strong>
          </div>
        </div>
      </div>

      {/* Etiqueta flutuante: faturamento */}
      <div className={`${styles.chip} ${styles.chipBottom}`}>
        <span className={styles.chipUp}>↑ 32%</span>
        no mês
      </div>
    </div>
  );
}
