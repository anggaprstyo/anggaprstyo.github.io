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

  // ---------- Portofolio: kartu ringkas ----------
  var PROJ = (S.portofolio || []).map(function (p, i) {
    var g = p.gambar;
    if (typeof g === "string") g = g ? [{ src: g, ket: "" }] : [];
    g = (g || []).map(function (x) { return typeof x === "string" ? { src: x, ket: "" } : x; });
    return Object.assign({}, p, { gambar: g, id: p.id || "p" + (i + 1) });
  });

  var chips = function (list) {
    return (list || []).length ? '<div class="ptech">' + list.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>" : "";
  };

  fill("[data-portofolio]", PROJ, function (p) {
    var cover = p.gambar[0];
    var thumb = cover
      ? '<img src="' + esc(cover.src) + '" alt="' + esc(p.judul) + '" loading="lazy">' +
        (p.gambar.length > 1 ? '<span class="count">' + p.gambar.length + " gambar</span>" : "")
      : "&lt;/&gt; " + esc(p.kategori || "proyek");
    return '<article class="pcard"><a class="thumb" href="#proyek-' + esc(p.id) + '" aria-label="Detail ' + esc(p.judul) + '">' + thumb + '</a>' +
      '<div class="pbody">' +
      (p.kategori ? '<span class="tag">' + esc(p.kategori) + "</span>" : "") +
      "<h3>" + esc(p.judul) + "</h3>" +
      (p.subjudul ? '<p class="psub">' + esc(p.subjudul) + "</p>" : "") +
      "<p>" + esc(p.ringkas || p.isi) + "</p>" +
      chips(p.teknologi) +
      '<div class="pactions"><a class="btn btn-sm" href="#proyek-' + esc(p.id) + '">Lihat detail</a>' +
      (p.link ? '<a class="plink" href="' + esc(p.link) + '" target="_blank" rel="noopener">Kunjungi website ↗</a>' : "") +
      "</div></div></article>";
  });

  // ---------- Portofolio: filter kategori + "Lihat semua" ----------
  // Baru muncul kalau jumlah proyek lebih dari S.portofolioAwal (default 6).
  (function () {
    var grid = document.querySelector("[data-portofolio]");
    var AWAL = S.portofolioAwal || 6;
    if (!grid || PROJ.length <= AWAL) return;
    var cards = Array.prototype.slice.call(grid.children);
    var kat = "Semua", semua = false;

    var cats = [];
    PROJ.forEach(function (p) { if (p.kategori && cats.indexOf(p.kategori) < 0) cats.push(p.kategori); });

    var bar = null;
    if (cats.length > 1) {
      bar = document.createElement("div");
      bar.className = "pfilter";
      bar.setAttribute("role", "group");
      bar.setAttribute("aria-label", "Filter kategori");
      bar.innerHTML = ["Semua"].concat(cats).map(function (c) {
        var n = c === "Semua" ? PROJ.length : PROJ.filter(function (p) { return p.kategori === c; }).length;
        return '<button type="button" data-kat="' + esc(c) + '">' + esc(c) + " <small>" + n + "</small></button>";
      }).join("");
      grid.parentNode.insertBefore(bar, grid);
      bar.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        kat = b.getAttribute("data-kat");
        semua = false;
        render();
      });
    }

    var more = document.createElement("div");
    more.className = "pmore";
    more.innerHTML = '<button type="button" class="btn btn-ghost"></button>';
    grid.parentNode.insertBefore(more, grid.nextSibling);
    more.firstChild.addEventListener("click", function () { semua = true; render(); });

    function render() {
      var shown = 0, total = 0;
      cards.forEach(function (c, i) {
        var cocok = kat === "Semua" || PROJ[i].kategori === kat;
        if (cocok) total++;
        var tampil = cocok && (semua || shown < AWAL);
        if (tampil) shown++;
        c.hidden = !tampil;
      });
      if (bar) bar.querySelectorAll("button").forEach(function (b) {
        var on = b.getAttribute("data-kat") === kat;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", on);
      });
      more.hidden = total <= shown;
      more.firstChild.textContent = "Lihat semua portofolio (" + total + ")";
    }
    render();
  })();

  // ---------- Portofolio: popup detail + slider ----------
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.hidden = true;
  document.body.appendChild(modal);

  var cur = null, idx = 0, lastHash = "";

  function slide(n) {
    if (!cur || !cur.gambar.length) return;
    idx = (n + cur.gambar.length) % cur.gambar.length;
    var track = modal.querySelector(".track");
    track.style.transform = "translateX(" + (-idx * 100) + "%)";
    modal.querySelectorAll(".dots button").forEach(function (d, i) { d.classList.toggle("on", i === idx); });
    var cap = modal.querySelector(".cap");
    if (cap) cap.textContent = (idx + 1) + " / " + cur.gambar.length + (cur.gambar[idx].ket ? " · " + cur.gambar[idx].ket : "");
  }

  function open(id) {
    cur = PROJ.filter(function (p) { return p.id === id; })[0];
    if (!cur) return close(true);
    idx = 0;
    var g = cur.gambar;
    var gallery = g.length
      ? '<div class="gallery"><div class="viewport"><div class="track">' +
          g.map(function (x) { return '<figure><img src="' + esc(x.src) + '" alt="' + esc(x.ket || cur.judul) + '"></figure>'; }).join("") +
        "</div>" +
        (g.length > 1 ? '<button class="snav prev" aria-label="Sebelumnya">‹</button><button class="snav next" aria-label="Berikutnya">›</button>' : "") +
        '</div><div class="gfoot"><span class="cap"></span>' +
        (g.length > 1 ? '<div class="dots">' + g.map(function (_, i) { return '<button aria-label="Gambar ' + (i + 1) + '"></button>'; }).join("") + "</div>" : "") +
        "</div></div>"
      : '<div class="gallery empty">&lt;/&gt; ' + esc(cur.kategori || "proyek") + "</div>";
    var fitur = (cur.fitur || []).length
      ? '<h4>Fitur utama</h4><ul class="pfitur">' + cur.fitur.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" : "";
    modal.innerHTML =
      '<div class="mbox"><button class="mclose" aria-label="Tutup">×</button>' + gallery +
      '<div class="minfo">' +
      (cur.kategori ? '<span class="tag">' + esc(cur.kategori) + "</span>" : "") +
      "<h3>" + esc(cur.judul) + "</h3>" +
      (cur.subjudul ? '<p class="psub">' + esc(cur.subjudul) + "</p>" : "") +
      (cur.peran ? '<p class="pklien">Lingkup pekerjaan: ' + esc(cur.peran) + "</p>" : "") +
      "<p>" + esc(cur.isi) + "</p>" + fitur + chips(cur.teknologi) +
      (cur.link ? '<a class="btn" href="' + esc(cur.link) + '" target="_blank" rel="noopener">Kunjungi website ↗</a>' : "") +
      "</div></div>";
    modal.hidden = false;
    document.body.classList.add("noscroll");
    slide(0);

    modal.querySelector(".mclose").onclick = function () { close(); };
    var p = modal.querySelector(".prev"), n = modal.querySelector(".next");
    if (p) p.onclick = function () { slide(idx - 1); };
    if (n) n.onclick = function () { slide(idx + 1); };
    modal.querySelectorAll(".dots button").forEach(function (d, i) { d.onclick = function () { slide(i); }; });

    // geser (swipe) di HP
    var vp = modal.querySelector(".viewport"), x0 = null;
    if (vp) {
      vp.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      vp.addEventListener("touchend", function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) slide(idx + (dx < 0 ? 1 : -1));
        x0 = null;
      });
    }
    modal.querySelector(".mclose").focus();
  }

  function close(silent) {
    modal.hidden = true;
    modal.innerHTML = "";
    document.body.classList.remove("noscroll");
    cur = null;
    if (!silent && location.hash.indexOf("#proyek-") === 0) {
      history.replaceState(null, "", lastHash || location.pathname + location.search + "#portofolio");
    }
  }

  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") slide(idx + 1);
    if (e.key === "ArrowLeft") slide(idx - 1);
  });

  function route() {
    var h = location.hash;
    if (h.indexOf("#proyek-") === 0) open(decodeURIComponent(h.slice(8)));
    else { lastHash = h; if (!modal.hidden) close(true); }
  }
  window.addEventListener("hashchange", route);
  route();

  fill("[data-teknologi]", S.teknologi, function (t) { return "<span>" + esc(t) + "</span>"; });

  fill("[data-faq]", S.faq, function (f) {
    return "<details><summary>" + esc(f.tanya) + "</summary><p>" + esc(f.jawab) + "</p></details>";
  });
})();
