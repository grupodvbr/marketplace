import { supa } from "../supabase.js";

export async function getUser() {
  const { data } = await supa.auth.getSession();
  return data?.session?.user || null;
}

export async function getUserProfile() {
  const user = await getUser();
  if (!user) return null;

  const { data } = await supa
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  return data;
}

export async function updateProfile(info) {
  const user = await getUser();
  if (!user) return null;

  const { error } = await supa
    .from("users")
    .update(info)
    .eq("id", user.id);

  return !error;
}

export async function logout() {
  await supa.auth.signOut();
}
