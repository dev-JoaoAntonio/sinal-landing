import { NextResponse } from "next/server";

/**
 * PLACEHOLDER de captura de lead.
 * ------------------------------------------------------------------
 * Hoje este endpoint só valida e responde OK (loga no servidor). Ele NÃO
 * persiste nada. Quando for integrar de verdade, escolha um destino e
 * implemente no ponto marcado com "TODO" abaixo:
 *
 *   • Enviar pro CRM / sistema do Sinal (POST autenticado);
 *   • Gravar numa planilha (Google Sheets), Notion, Airtable;
 *   • Disparar e-mail/WhatsApp de notificação pro time comercial;
 *   • Salvar num banco (Postgres/Supabase) se preferir controlar os leads aqui.
 *
 * Mantenha a validação; troque só o "meio" de salvar.
 */

type Lead = {
  nome?: string;
  telefone?: string;
  email?: string;
  area?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = (await request.json()) as Lead;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corpo inválido." },
      { status: 400 }
    );
  }

  const nome = body.nome?.trim();
  const telefone = body.telefone?.trim();
  const email = body.email?.trim();

  if (!nome || !telefone || !email || !emailRe.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, WhatsApp e um e-mail válido." },
      { status: 422 }
    );
  }

  // TODO(integração): trocar este log pelo destino real do lead.
  console.log("[lead] novo interesse no trial:", {
    nome,
    telefone,
    email,
    area: body.area ?? null,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
