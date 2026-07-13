import { site } from "./site";

/**
 * Conteúdo do FAQ — módulo neutro (sem "use client") para poder ser importado
 * tanto pelo componente cliente (Faq.tsx) quanto pelo servidor (JSON-LD em page.tsx).
 */
export const faqItems = [
  {
    q: "E se o cliente não aparecer?",
    a: `O sinal que ele pagou adiantado fica com você. Como o horário só é confirmado depois do pagamento, você nunca mais bloqueia a agenda de graça. Nada de correr atrás nem cobrar constrangido — a proteção é automática.`,
  },
  {
    q: "Como eu recebo o dinheiro?",
    a: `O sinal cai na sua conta. O cliente paga no Pix ou no cartão na hora de reservar, e você acompanha tudo pelo painel de faturamento. Quando ele comparece, o sinal abate no valor final do serviço.`,
  },
  {
    q: "Preciso instalar algum programa?",
    a: `Não. O Sinal funciona pelo navegador, no celular ou no computador. Você configura sua agenda e seu link e já pode começar a receber reservas.`,
  },
  {
    q: "O cliente precisa baixar um app?",
    a: `Não. Ele só abre o seu link, escolhe o horário e paga o sinal. Quanto menos atrito, mais gente marca — por isso não existe app nem cadastro complicado pro seu cliente.`,
  },
  {
    q: "Quanto custa depois dos 30 dias grátis?",
    a: `Você escolhe entre o plano Essencial (R$ ${site.precoEssencial}/mês) e o Pro (R$ ${site.precoPro}/mês, com dicas de IA). O teste é grátis por ${site.trialDias} dias e não pede cartão pra começar. Se não quiser continuar, é só não assinar.`,
  },
  {
    q: "Quem define o valor do sinal?",
    a: `Você. O padrão é 50% do valor do serviço, mas o controle é seu. O dinheiro do sinal é sempre seu — o Sinal é a ferramenta, não fica com a sua receita.`,
  },
] as const;
