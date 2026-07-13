import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/* Fonte de display da marca (wordmark + títulos) */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display-var",
  display: "swap",
});

/* Fonte de corpo/UI — legível no celular */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} Cobre o sinal, garanta o comparecimento.`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "agendamento",
    "sinal",
    "no-show",
    "salão de beleza",
    "manicure",
    "cabeleireiro",
    "barbeiro",
    "esteticista",
    "agenda online",
    "Pix",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline} Cobre o sinal, garanta o comparecimento.`,
    description: site.description,
    // A imagem é gerada por app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — agenda protegida contra o no-show`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#8e1f3b",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que há JS antes do primeiro paint: habilita as animações de
            entrada sem esconder conteúdo de quem está sem script. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
