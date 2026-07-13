# Sinal — Design System (resumo)

Fonte de verdade da **aparência** da marca. A implementação (estrutura de CSS,
componentes) mora no app; os valores abaixo vivem em [`tokens.css`](./tokens.css)
e são consumidos via CSS custom properties.

## Marca em uma frase

Sinal é agendamento com **sinal antecipado**: o cliente reserva pagando 50% e,
se não aparecer, o valor fica com o profissional. A mensagem é **proteção, nunca
punição**. "Seu horário protegido", não "puna o cliente faltoso".

## Voz e tom

- Direto, do balcão, sem juridiquês nem jargão corporativo.
- Fala **"aparecer"**, não "comparecimento formal".
- Foca no ganho do profissional: agenda cheia, dinheiro garantido, menos dor de cabeça.
- Nunca inventa números, depoimentos ou logos de clientes.

## Cor

| Token | Hex | Uso |
| --- | --- | --- |
| `--cereja` | `#8E1F3B` | Cor primária. Botões, selo, destaques. |
| `--cereja-dark` | `#731830` | Hover/pressed. |
| `--laca` | `#A03050` | Brilho/realce (foco, gradiente do ícone). |
| `--grafite` | `#1F1A1C` | Tinta/texto, seções escuras. |
| `--creme` | `#FAF6F2` | Fundo padrão. |
| `--creme-2` | `#F4ECE3` | Seção alternada / cards. |

Contraste: cereja sobre creme e creme sobre cereja passam AA para texto grande e
UI. Para texto pequeno sobre creme use `--grafite`.

## Tipografia

- **Display / títulos:** Bricolage Grotesque (700–800), tracking negativo
  (`-0.02em` a `-0.03em`). É o que dá a personalidade do wordmark.
- **Corpo / UI:** Inter, tamanho base ~17px para leitura confortável no celular.

## O Selo (elemento-assinatura)

O selo é um **carimbo de confirmação**: anel externo serrilhado (perfuração de
carimbo) + disco sólido cereja + check. Significa "apareceu / horário garantido".
Use-o como marcador de confirmação, bullets e selo de confiança — nunca como mero
enfeite. Componente reutilizável: [`app/components/Seal.tsx`](../app/components/Seal.tsx).

Variantes de logo prontas:

- `logo-principal.svg` — selo cereja + wordmark grafite (sobre fundo claro).
- `logo-mono.svg` — versões mono positiva e negativa.
- `icone-app.svg` — ícone quadrado super-arredondado (favicon / app).

## Produto (para a copy)

- Agenda online com **link próprio** — o cliente não baixa app.
- Sinal via **Pix e cartão**; se o cliente falta, o sinal fica com o profissional.
- Dashboard de faturamento e performance; WhatsApp integrado.
- SaaS com **30 dias grátis**. Planos: **Essencial R$ 49,90/mês** e
  **Pro R$ 89,90/mês** (com dicas de IA).
