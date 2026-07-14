/**
 * Configuração central da landing.
 * Mexa aqui para trocar textos-chave, links e âncoras sem caçar em componentes.
 */

export const site = {
  name: "Sinal",
  // Usado para SEO/OG e URLs absolutas. Ajuste para o domínio real (ou defina
  // NEXT_PUBLIC_SITE_URL na Vercel) antes de publicar.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sinal.app",
  tagline: "Chega de cadeira vazia.",
  description:
    "O Sinal deixa o cliente reservar o horário pagando 50% adiantado, no Pix ou cartão. Faltou? O sinal fica com você. Agenda online com link próprio, sem o cliente baixar app. 30 dias grátis.",

  // Contato / redes (placeholders — troque pelos reais).
  whatsapp: "https://wa.me/5500000000000",
  email: "contato@sinal.app",
  instagram: "https://instagram.com/",

  // Preços dos planos.
  precoEssencial: "49,90",
  precoPro: "89,90",
  trialDias: 30,
} as const;

/**
 * ONDE PLUGAR O CADASTRO REAL:
 * Todos os CTAs "Começar grátis" apontam para CTA_HREF. Por enquanto é a âncora
 * "#cadastro" (seção de captura de e-mail/telefone nesta página). Quando o
 * sistema de cadastro estiver pronto, troque por algo como
 * "https://app.sinal.app/signup" e os botões passam a levar direto pro produto.
 */
export const CTA_HREF = "#cadastro";
export const CTA_LABEL = `Começar ${site.trialDias} dias grátis`;

/** Itens de navegação do header (âncoras internas). */
export const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Recursos" },
  { href: "#por-dentro", label: "Por dentro" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
] as const;
