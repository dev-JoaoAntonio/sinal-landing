import styles from "./ArrowButton.module.css";

type Props = {
  href?: string;
  label: string;
  className?: string;
};

/**
 * Botão animado (base: Uiverse) — círculo com seta que expande no hover.
 * Cores vêm de custom properties (--btn-*), então dá pra trocar o esquema por
 * contexto (ex.: header claro sobre o hero × header creme ao rolar).
 */
export function ArrowButton({ href = "#", label, className }: Props) {
  return (
    <a href={href} className={`${styles.learnMore} ${className ?? ""}`}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`} />
      </span>
      <span className={styles.buttonText}>{label}</span>
    </a>
  );
}
