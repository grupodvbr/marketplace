// ============================================================
// config.js — Configurações globais do projeto ZaapDV Marketplace
// ============================================================
//
// Este arquivo lê variáveis do Vercel automaticamente.
// Se não existir, usa os valores locais definidos abaixo.
//
// Não exponha SERVICE_ROLE_KEY aqui. Este arquivo é seguro.
//
// ============================================================

// 1. LER VARIÁVEIS DO VERCEL (caso existam)
const vercelURL = typeof process !== "undefined" ? process.env.SUPABASE_URL : null;
const vercelAnon = typeof process !== "undefined" ? process.env.SUPABASE_ANON_KEY : null;

// 2. VALORES LOCAIS (fallback) — Só usados no modo local
const localURL = "https://ckkqcxbzfkjzicvoeehw.supabase.co";
const localAnon = "sb_publishable_djiQsCSrnLUm0iA_eNjjMw__7rfP11m";

// 3. EXPORTAR CONFIGURAÇÃO FINAL
export const config = {
  SUPABASE_URL: vercelURL || localURL,
  SUPABASE_ANON_KEY: vercelAnon || localAnon
};
