"use client";

import { useState } from "react";
import styles from "./Phone3D.module.css";

type Tilt = "left" | "right" | "none";

type Props = {
  /** Caminho da print (ex.: "/prints/hero.png"). Se o arquivo não existir,
   *  mostra o placeholder automaticamente. */
  src?: string;
  alt?: string;
  /** Texto do placeholder enquanto não há print. */
  label: string;
  tilt?: Tilt;
  /** Carregar cedo (hero). */
  priority?: boolean;
  className?: string;
};

function PictureIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5-5L5 20" />
    </svg>
  );
}

/**
 * Celular 3D que exibe uma print do sistema. Enquanto a imagem não existe (ou
 * falha ao carregar), mostra um placeholder claro — então dá pra plugar as
 * prints depois só jogando os arquivos em public/prints/.
 */
export function Phone3D({
  src,
  alt = "",
  label,
  tilt = "right",
  priority,
  className,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.phone} ${styles[tilt]} ${className ?? ""}`}>
      <div className={styles.frame}>
        <span className={styles.island} aria-hidden="true" />
        <div className={styles.screen}>
          {!loaded && (
            <div className={styles.placeholder} aria-hidden="true">
              <span className={styles.phIcon}>
                <PictureIcon />
              </span>
              <span className={styles.phLabel}>{label}</span>
              <span className={styles.phHint}>print do sistema</span>
            </div>
          )}
          {src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className={`${styles.shot} ${loaded ? styles.shotVisible : ""}`}
              src={src}
              alt={alt || label}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
