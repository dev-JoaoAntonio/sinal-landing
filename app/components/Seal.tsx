import styles from "./Seal.module.css";

type Tone = "brand" | "onDark" | "onCereja" | "ink";

type Props = {
  /** Diâmetro em px. */
  size?: number;
  tone?: Tone;
  /** Anima o traço do check ao entrar na tela. */
  animated?: boolean;
  className?: string;
  title?: string;
};

/**
 * O Selo do Sinal — carimbo de confirmação:
 * anel serrilhado (perfuração) + disco + check ("apareceu / horário garantido").
 * Elemento-assinatura da marca; reutilizado em confirmações, bullets e selos de confiança.
 */
export function Seal({
  size = 48,
  tone = "brand",
  animated = false,
  className,
  title,
}: Props) {
  // ring/disc/check por tom
  const palette: Record<Tone, { ring: string; disc: string; check: string }> = {
    brand: { ring: "var(--cereja)", disc: "var(--cereja)", check: "var(--creme)" },
    ink: { ring: "var(--grafite)", disc: "var(--grafite)", check: "var(--creme)" },
    onDark: { ring: "var(--creme)", disc: "var(--creme)", check: "var(--grafite)" },
    onCereja: { ring: "var(--creme)", disc: "var(--creme)", check: "var(--cereja)" },
  };
  const c = palette[tone];

  return (
    <svg
      className={[styles.seal, animated ? styles.animated : "", className]
        .filter(Boolean)
        .join(" ")}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {/* perfuração externa (serrilha de carimbo) */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke={c.ring}
        strokeWidth="4"
        strokeDasharray="2.5 8.2"
        strokeLinecap="round"
      />
      {/* disco do selo */}
      <circle cx="60" cy="60" r="43" fill={c.disc} />
      {/* check do comparecimento */}
      <path
        className={styles.check}
        d="M 40 62 L 54 76 L 82 44"
        fill="none"
        stroke={c.check}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
