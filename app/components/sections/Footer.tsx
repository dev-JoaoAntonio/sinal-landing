import { Logo } from "../Logo";
import { CTA_HREF, CTA_LABEL, NAV_LINKS, site } from "@/lib/site";
import styles from "./Footer.module.css";

// Links de rodapé — placeholders. Troque "#" pelos destinos reais.
const columns = [
  {
    title: "Produto",
    links: NAV_LINKS.map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre o Sinal", href: "#" },
      { label: "Contato", href: `mailto:${site.email}` },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", href: "#" },
      { label: "Política de privacidade", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo height={34} tone="onDark" />
            <p className={styles.pitch}>
              Agendamento com sinal antecipado. Seu horário protegido, sua agenda
              cheia.
            </p>
            <a href={CTA_HREF} className="btn btn-light">
              {CTA_LABEL}
            </a>
          </div>

          <nav className={styles.cols} aria-label="Rodapé">
            {columns.map((col) => (
              <div key={col.title} className={styles.col}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={styles.link}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
            © {site.name}. Todos os direitos reservados.
          </p>
          <div className={styles.social}>
            <a href={site.instagram} className={styles.link}>
              Instagram
            </a>
            <a href={site.whatsapp} className={styles.link}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
