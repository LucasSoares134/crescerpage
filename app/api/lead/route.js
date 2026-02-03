export async function POST(req) {
  const data = await req.json().catch(() => null);

  if (!data?.nome || !data?.empresa || !data?.email || !data?.telefone || !data?.segmento) {
    return Response.json({ ok: false, error: "Campos obrigatórios faltando" }, { status: 400 });
  }

  // por enquanto só loga no server (Vercel -> Logs)
  console.log("NEW_LEAD", data);

  return Response.json({ ok: true });
}