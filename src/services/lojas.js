import { supa } from "../supabase.js";
import { getUser } from "./auth.js";

export async function minhasLojas() {
  const user = await getUser();
  if (!user) return [];

  const { data } = await supa
    .from("lojas")
    .select("*")
    .eq("dono_id", user.id)
    .order("criado_em", { ascending: false });

  return data || [];
}

export async function criarLoja(nome) {
  const user = await getUser();
  if (!user) return null;

  const { data, error } = await supa
    .from("lojas")
    .insert({
      nome,
      dono_id: user.id,
      descricao: "",
      tema: { cor: "#007aff" }
    })
    .select()
    .single();

  if (error) return null;

  return data;
}

export async function lojaPorId(id) {
  const { data } = await supa
    .from("lojas")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}

export async function atualizarLoja(id, info) {
  const { error } = await supa
    .from("lojas")
    .update(info)
    .eq("id", id);

  return !error;
}
