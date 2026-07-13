type Props = {
  /** Altura em px; a largura acompanha proporcionalmente. */
  height?: number;
  /** onLight = grafite sobre claro; onDark = creme sobre escuro. */
  tone?: "onLight" | "onDark";
  className?: string;
};

/**
 * Wordmark do Sinal desenhado inline (selo + "sinal" + ponto-selo).
 * Inline em vez de <img> para herdar cor por tom e ficar nítido em qualquer DPI.
 */
export function Logo({ height = 34, tone = "onLight", className }: Props) {
  const ink = tone === "onDark" ? "var(--creme)" : "var(--grafite)";
  const width = (height * 320) / 96; // mantém proporção do viewBox

  return (
    <svg
      className={className}
      height={height}
      width={width}
      viewBox="0 0 320 96"
      role="img"
      aria-label="Sinal"
    >
      {/* Selo */}
      <g transform="translate(48,48)">
        <circle
          r="42"
          fill="none"
          stroke="var(--cereja)"
          strokeWidth="3.2"
          strokeDasharray="1.9 6.2"
          strokeLinecap="round"
        />
        <circle r="32" fill="var(--cereja)" />
        <path
          d="M -14.5 1.5 L -4.5 11.5 L 16 -11.5"
          fill="none"
          stroke="var(--creme)"
          strokeWidth="7.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Wordmark */}
      <text
        x="104"
        y="70"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="62"
        letterSpacing="-2.2"
        fill={ink}
      >
        sinal
      </text>
      {/* Ponto-selo (acento da marca, logo após o wordmark) */}
      <circle cx="255" cy="64" r="6.5" fill="var(--cereja)" />
    </svg>
  );
}
