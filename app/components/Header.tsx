"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CTA_HREF, CTA_LABEL, NAV_LINKS } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sombra/fundo do header ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fecha com Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      data-open={open}
    >
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="Sinal — início">
          <Logo height={30} />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={CTA_HREF} className={`btn btn-primary ${styles.cta}`}>
            {CTA_LABEL}
          </a>
          <button
            className={styles.burger}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <nav className={styles.mobileNav} aria-label="Navegação">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CTA_HREF}
            className="btn btn-primary btn-block btn-lg"
            onClick={() => setOpen(false)}
          >
            {CTA_LABEL}
          </a>
        </nav>
      </div>
    </header>
  );
}
