# Sinal — Landing Page

Site institucional/de conversão do **Sinal**: agendamento com sinal antecipado
para prestadores de serviço de beleza. Objetivo: converter em cadastros para o
trial de 30 dias.

> Repositório **separado** do sistema/produto. Aqui é só a landing.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) — ótimo para SEO e deploy na Vercel
- React 19 + TypeScript
- CSS Modules + tokens de design em CSS custom properties (sem framework de UI)
- Fontes via `next/font` (Bricolage Grotesque + Inter)
- Open Graph gerado dinamicamente com `next/og`

## Rodar localmente

Requer Node 18.18+ (recomendado Node 20+) e [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000.

Outros scripts:

```bash
pnpm build   # build de produção
pnpm start   # roda o build de produção localmente
pnpm lint    # ESLint
```

## Estrutura

```
brand/                     Fonte de verdade da MARCA (aparência)
  design-system.md         Resumo de voz, cor, tipografia e o "selo"
  tokens.css               Design tokens (cor, tipo, espaço, raios…)
  *.svg                    Logo principal, mono e ícone do app
app/
  layout.tsx               Fontes, metadados SEO, Open Graph, favicon
  page.tsx                 Monta as seções + JSON-LD (SoftwareApplication + FAQ)
  globals.css              Reset, base e primitivos (.container, .btn, .eyebrow…)
  opengraph-image.tsx      Card de compartilhamento (PNG 1200x630)
  icon.svg                 Favicon (ícone do app)
  robots.ts / sitemap.ts   SEO
  api/lead/route.ts        Placeholder de captura de lead (ver abaixo)
  components/              Seal, Logo, Header, LeadForm, PhoneMockup, icons…
    sections/             Hero, Problem, HowItWorks, Features, Pricing,
                          SocialProof, Faq, FinalCta, Footer
lib/site.ts                Config central (URL, preços, links, CTA)
```

## Onde plugar o cadastro real

Todos os botões "Começar grátis" usam `CTA_HREF` em
[`lib/site.ts`](lib/site.ts). Hoje aponta para a âncora `#cadastro` (o formulário
de captura no fim da página). Duas opções quando o sistema estiver pronto:

1. **Levar direto pro produto:** troque `CTA_HREF` por algo como
   `https://app.sinal.app/signup`. Os botões passam a levar ao cadastro real.
2. **Continuar capturando lead aqui:** o formulário envia para
   [`app/api/lead/route.ts`](app/api/lead/route.ts), que hoje só valida e loga.
   Troque o `TODO(integração)` pelo destino real (CRM, planilha, e-mail,
   Supabase, etc.). A validação já está pronta.

Outros placeholders a revisar antes de publicar: WhatsApp, e-mail, Instagram e os
links de Termos/Privacidade em `lib/site.ts` e no rodapé; e o domínio real em
`NEXT_PUBLIC_SITE_URL`.

## Conteúdo honesto

Os depoimentos são **placeholders** claramente marcados como "Exemplo" e não há
números/logos inventados. Substitua por prova social real (com autorização) antes
de divulgar.

## Deploy na Vercel

1. Suba o repositório no GitHub/GitLab/Bitbucket.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel
   detecta Next.js automaticamente — não precisa configurar build.
3. (Opcional) Em **Settings → Environment Variables**, defina
   `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://sinal.app`) para os
   metadados de SEO/OG usarem URLs absolutas corretas.
4. Deploy. Cada push na branch `main` publica em produção; PRs ganham preview.

Via CLI, alternativamente:

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod # produção
```
