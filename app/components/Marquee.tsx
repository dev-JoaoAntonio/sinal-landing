import styles from "./Marquee.module.css";

type Props = {
  words: string[];
  /** Inverte o sentido do movimento. */
  reverse?: boolean;
  className?: string;
};

/**
 * Carrossel de palavras em loop contínuo ("corrente"), no formato
 * "palavra • palavra • …" (bolinha como separador).
 * Puro CSS (sem JS): o track tem 4 cópias e desliza -50%, então o recomeço é
 * imperceptível. Decorativo — marcado como aria-hidden.
 */
export function Marquee({ words, reverse, className }: Props) {
  const copy = (key: number) => (
    <span className={styles.copy} key={key}>
      {words.map((w, i) => (
        <span className={styles.item} key={i}>
          <span className={styles.word}>{w}</span>
          <span className={styles.dot}>•</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`${styles.marquee} ${className ?? ""}`} aria-hidden="true">
      <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
        {[0, 1, 2, 3].map(copy)}
      </div>
    </div>
  );
}
