import { supa } from "../supabase.js";

export async function carregarHome() {

  // BANNERS
  const { data: banners } = await supa
    .from("anuncios_home")
    .select("*")
    .order("ordem", { ascending: true });

  const bannerArea = document.getElementById("bannerArea");
  bannerArea.innerHTML = banners.map(b => `
    <div class="banner-box">
      <img src="${b.referencia_id}" />
    </div>
  `).join("");

  // LOJAS
  const { data: lojas } = await supa
    .from("lojas")
    .select("*")
    .order("criado_em", { ascending: false })
    .limit(10);

  const lojasArea = document.getElementById("lojasArea");
  lojasArea.innerHTML = `
    <div class="section-title">Lojas em destaque</div>
    <div class="lojas-row">
      ${lojas.map(loja => `
        <div class="loja-card" onclick="window.location='loja.html?id=${loja.id}'">
          <img src="${loja.logo || 'icons/loja.png'}">
          <div class=loja-nome>${loja.nome}</div>
        </div>
      `).join("")}
    </div>
  `;

  // PRODUTOS RECENTES
  const { data: produtos } = await supa
    .from("produtos")
    .select("*")
    .order("criado_em", { ascending: false })
    .limit(20);

  const produtosArea = document.getElementById("produtosArea");
  produtosArea.innerHTML = `
    <div class="section-title">Produtos recentes</div>
    <div class="produtos-grid">
      ${produtos.map(p => `
        <div class="produto-card"
          onclick="window.location='produto.html?id=${p.id}'">
          <img src="${p.imagens?.[0] || 'icons/noimage.png'}">
          <div class="produto-info">
            <div class="produto-nome">${p.nome}</div>
            <div class="produto-preco">R$ ${Number(p.preco).toFixed(2)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
