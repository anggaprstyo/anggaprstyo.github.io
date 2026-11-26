// Mengisi halaman dari content.js. Biasanya tidak perlu diubah.
(function () {
  var S = window.SITE || {};
  var $ = function (sel) { return document.querySelectorAll(sel); };
  var esc = function (t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var each = function (sel, fn) { Array.prototype.forEach.call($(sel), fn); };

  var ICONS = {
    profil: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8"/>',
    sistem: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    toko: '<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
    domain: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    skripsi: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/><path d="M22 9v6"/>',
    mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'
  };
  var icon = function (n) { return '<svg viewBox="0 0 24 24">' + (ICONS[n] || ICONS.profil) + "</svg>"; };

  // Brand: "RAMPUNGCODE" -> RAMPUNG + CODE berwarna
  var brand = S.brand || "";
  var cut = brand.toUpperCase().lastIndexOf("CODE");
  var brandHtml = cut > 0 ? esc(brand.slice(0, cut)) + "<em>" + esc(brand.slice(cut)) + "</em>" : esc(brand);
  each("[data-brand]", function (el) { el.innerHTML = brandHtml; });
  each("[data-brand-plain]", function (el) { el.textContent = brand; });
  each("[data-tahun]", function (el) { el.textContent = new Date().getFullYear(); });

  // Kontak
  var wa = "https://wa.me/" + encodeURIComponent(S.whatsapp || "") + "?text=" + encodeURIComponent(S.pesanWA || "");
  each("[data-wa]", function (el) { el.href = wa; });
  each("[data-wa-tampil]", function (el) { el.textContent = S.whatsappTampil || S.whatsapp || ""; });
  each("[data-ig]", function (el) {
    if (S.instagram) { el.href = "https://instagram.com/" + encodeURIComponent(S.instagram); el.textContent = "Instagram @" + S.instagram; }
  });
  each("[data-email]", function (el) {
    if (S.email) { el.href = "mailto:" + S.email; el.textContent = S.email; }
  });

  // Hero
  var h = S.hero || {};
  each("[data-hero-judul]", function (el) { el.textContent = h.judul || ""; });
  each("[data-hero-sorot]", function (el) { el.textContent = h.judulSorot || ""; });
  each("[data-hero-desk]", function (el) { el.textContent = h.deskripsi || ""; });

  var fill = function (sel, list, tpl) {
    each(sel, function (el) { el.innerHTML = (list || []).map(tpl).join(""); });
  };

  fill("[data-layanan]", S.layanan, function (l) {
    return '<article class="card"><div class="ico">' + icon(l.ikon) + "</div><h3>" + esc(l.judul) + "</h3><p>" + esc(l.isi) + "</p></article>";
  });

  fill("[data-alur]", S.alur, function (a) {
    return "<li><h3>" + esc(a.judul) + "</h3><p>" + esc(a.isi) + "</p></li>";
  });

  fill("[data-portofolio]", S.portofolio, function (p) {
    var thumb = p.gambar
      ? '<img src="' + esc(p.gambar) + '" alt="' + esc(p.judul) + '" loading="lazy">'
      : "&lt;/&gt; " + esc(p.kategori || "proyek");
    var link = p.link ? '<a class="plink" href="' + esc(p.link) + '" target="_blank" rel="noopener">Lihat website →</a>' : "";
    return '<article class="pcard"><div class="thumb">' + thumb + '</div><div class="pbody">' +
      (p.kategori ? '<span class="tag">' + esc(p.kategori) + "</span>" : "") +
      "<h3>" + esc(p.judul) + "</h3><p>" + esc(p.isi) + "</p>" + link + "</div></article>";
  });

  fill("[data-teknologi]", S.teknologi, function (t) { return "<span>" + esc(t) + "</span>"; });

  fill("[data-faq]", S.faq, function (f) {
    return "<details><summary>" + esc(f.tanya) + "</summary><p>" + esc(f.jawab) + "</p></details>";
  });
})();
