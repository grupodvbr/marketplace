import { supa } from "../supabase.js";

export async function uploadImagem(bucket, file, prefix) {
  const filePath = `${prefix}/${Date.now()}_${file.name}`;
  
  const { error } = await supa.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) return null;

  const { data } = supa.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
