import { IconArrow } from "../icons";
import { CTA_HREF, CTA_LABEL } from "@/lib/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="conteudo">
      <div className={`container ${styles.inner}`}>
        {/* Hero sempre visível (melhor LCP); a entrada é pura CSS, sem depender
            do observer — nada de conteúdo principal preso invisível. */}
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow} ${styles.intro}`}>
            Agenda protegida contra o no-show
          </span>

          <h1 className={`${styles.headline} ${styles.intro}`}>
            Chega de cadeira vazia.{" "}
            <span className={styles.hl}>Cobre o sinal</span>, garanta o
            comparecimento.
          </h1>

          <p className={`lead ${styles.sub} ${styles.intro}`}>
            No Sinal, o cliente reserva pagando 50% adiantado — Pix ou cartão. Se
            faltar, o sinal fica com você. Seu horário protegido, sem
            constrangimento.
          </p>

          <div className={`${styles.actions} ${styles.intro}`}>
            <a href={CTA_HREF} className={`btn btn-light btn-lg ${styles.ctaPrimary}`}>
              {CTA_LABEL}
              <IconArrow />
            </a>
            <a href="#como-funciona" className={`btn btn-lg ${styles.ctaGhost}`}>
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
