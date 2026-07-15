import { ImageResponse } from "next/og";

/* Card de compartilhamento (WhatsApp, redes). Gerado como PNG 1200x630. */

export const runtime = "edge";
export const alt =
  "Sinal — Chega de cadeira vazia. Cobre o sinal, garanta o comparecimento.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CEREJA = "#8e1f3b";
const CREME = "#f6f1ea";

/* Selo desenhado como SVG e embutido como imagem (Satori renderiza data-URI). */
const seloSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
  <circle cx="110" cy="110" r="100" fill="none" stroke="${CREME}" stroke-width="7" stroke-dasharray="4.5 15" stroke-linecap="round"/>
  <circle cx="110" cy="110" r="74" fill="${CREME}"/>
  <path d="M 76 112 L 100 136 L 148 84" fill="none" stroke="${CEREJA}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/** Baixa uma fonte do Google Fonts como TTF (sem UA → Google devolve truetype). */
async function loadFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const src = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  );
  if (!src) throw new Error(`Fonte não encontrada: ${family}`);
  return fetch(src[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const headline = "Chega de cadeira vazia.";
  const sub =
    "Cobre o sinal, garanta o comparecimento. 30 dias grátis.";
  const wordmark = "sinal";

  const [displayFont, sansFont] = await Promise.all([
    loadFont("Bricolage+Grotesque", 800, headline + wordmark + "."),
    loadFont("Inter", 500, sub),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CEREJA,
          padding: "72px 80px",
          color: CREME,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={92}
            height={92}
            src={`data:image/svg+xml;base64,${btoa(seloSvg)}`}
            alt=""
          />
          <span
            style={{
              fontFamily: "Bricolage",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            {wordmark}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-4px",
              maxWidth: 900,
            }}
          >
            {headline}
          </div>
          <div style={{ fontSize: 40, lineHeight: 1.3, opacity: 0.92 }}>
            {sub}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: CREME,
              color: CEREJA,
              fontSize: 28,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 999,
            }}
          >
            Pix e cartão · sem baixar app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: displayFont, weight: 800, style: "normal" },
        { name: "Inter", data: sansFont, weight: 500, style: "normal" },
      ],
    }
  );
}
