/**
 * Mapa das prints (screenshots do sistema) usadas nos celulares 3D.
 *
 * COMO USAR: solte os arquivos em `public/prints/` com EXATAMENTE estes nomes.
 * Assim que o arquivo existir, o celular 3D troca o placeholder pela print
 * automaticamente — não precisa mexer no código.
 *
 * Formato ideal: print vertical do celular, proporção ~9:19.5
 * (ex.: 1170×2532 ou 1080×2340), PNG/JPG/WebP otimizado.
 */
export const PRINTS = {
  hero: { src: "/prints/hero.png", label: "Agenda do dia" },

  // Seção "Veja por dentro" (galeria)
  showcase: [
    { src: "/prints/agenda.png", label: "Sua agenda online" },
    { src: "/prints/sinal.png", label: "Sinal no Pix" },
    { src: "/prints/faturamento.png", label: "Faturamento" },
  ],

  // Um por passo em "Como funciona"
  steps: [
    { src: "/prints/passo-agendar.png", label: "Cliente agenda" },
    { src: "/prints/passo-sinal.png", label: "Paga o sinal" },
    { src: "/prints/passo-confirmado.png", label: "Horário confirmado" },
  ],

  // Destaque na seção "Recursos"
  features: { src: "/prints/painel.png", label: "Painel do profissional" },
} as const;
