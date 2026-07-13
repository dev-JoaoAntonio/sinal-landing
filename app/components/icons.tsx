/**
 * Ícones de linha (stroke) para os cards de recurso.
 * Herdam currentColor; tamanho controlado por prop.
 */
type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function IconLink({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function IconPix({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.6 20.4 12 12 20.4 3.6 12 12 3.6Z" />
      <path d="M8.4 8.4 12 12l3.6-3.6M8.4 15.6 12 12l3.6 3.6" />
    </svg>
  );
}

export function IconChart({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 3 2 4-6" />
    </svg>
  );
}

export function IconWhatsapp({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 20l1.3-3.8A7.5 7.5 0 1 1 8 19l-4 1Z" />
      <path d="M9.2 9.4c.2 2.4 3 5.2 5.4 5.4.5 0 .9-.4 1.1-.9.1-.3 0-.6-.3-.8l-1.2-.7c-.2-.1-.5-.1-.7.1l-.4.4c-.9-.4-1.6-1.1-2-2l.4-.4c.2-.2.2-.5.1-.7l-.7-1.2c-.2-.3-.5-.4-.8-.3-.5.2-.9.6-.9 1.1Z" />
    </svg>
  );
}

export function IconPhoneOff({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M11 18.5h2" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

export function IconShield({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconArrow({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
