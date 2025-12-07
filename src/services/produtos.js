import { supa } from "../supabase.js";

export async function produtosDaLoja(lojaId) {
  const { data } = await supa
    .from("produtos")
    .select("*")
    .eq("loja_id", lojaId)
    .order("criado_em", { ascending: false });

  return data || [];
}

export async function produtoPorId(id) {
  const { data } = await supa
    .from("produtos")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}

export async function criarProduto(info) {
  const { data, error } = await supa
    .from("produtos")
    .insert(info)
    .select()
    .single();

  if (error) return null;
  return data;
}

export async function atualizarProduto(id, info) {
  const { error } = await supa
    .from("produtos")
    .update(info)
    .eq("id", id);

  return !error;
}
