import { Phone3D } from "../Phone3D";
import { Seal } from "../Seal";
import { IconArrow } from "../icons";
import { CTA_HREF, CTA_LABEL, site } from "@/lib/site";
import { PRINTS } from "@/lib/prints";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="conteudo">
      <div className={`container ${styles.inner}`}>
        {/* Hero sempre visível (melhor LCP); a entrada é pura CSS, sem depender
            do observer — nada de conteúdo principal preso invisível. */}
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.intro}`}>
            Agenda protegida contra o no-show
          </span>

          <h1 className={`${styles.headline} ${styles.intro}`}>
            Chega de cadeira vazia.{" "}
            <span className="text-cereja">Cobre o sinal</span>, garanta o
            comparecimento.
          </h1>

          <p className={`lead ${styles.sub} ${styles.intro}`}>
            No Sinal, o cliente reserva pagando 50% adiantado — Pix ou cartão. Se
            faltar, o sinal fica com você. Seu horário protegido, sem
            constrangimento.
          </p>

          <div className={`${styles.actions} ${styles.intro}`}>
            <a href={CTA_HREF} className="btn btn-primary btn-lg">
              {CTA_LABEL}
              <IconArrow />
            </a>
            <a href="#como-funciona" className="btn btn-ghost btn-lg">
              Ver como funciona
            </a>
          </div>

          <ul className={`${styles.trust} ${styles.intro}`}>
            <li>
              <Seal size={22} tone="brand" /> {site.trialDias} dias grátis
            </li>
            <li>
              <Seal size={22} tone="brand" /> Sem cartão para começar
            </li>
            <li>
              <Seal size={22} tone="brand" /> O cliente não baixa app
            </li>
          </ul>
        </div>

        <div className={`${styles.art} ${styles.intro}`}>
          <Phone3D
            src={PRINTS.hero.src}
            label={PRINTS.hero.label}
            alt="Tela da agenda do dia no app Sinal"
            tilt="right"
            priority
            className={styles.heroPhone}
          />
        </div>
      </div>
    </section>
  );
}
