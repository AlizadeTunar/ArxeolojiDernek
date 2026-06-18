const sites = [
  { id: 1, name: "Qobustan Qayaüstü Qazıntıları", region: "Qaradağ", era: "Daş dövrü", latitude: 40.109, longitude: 49.378, description: "Qobustan qədim qaya rəsmləri, yaşayış izləri və arxeoloji tapıntılar ilə Azərbaycanın ən güclü açıq səma irs məkanlarından biridir.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80", highlights: ["Qayaüstü təsvirlər", "Ov səhnələri", "Mikrolit alətlər"] },
  { id: 2, name: "Azıx Mağarası", region: "Xocavənd", era: "Daş dövrü", latitude: 39.619, longitude: 46.967, description: "Qafqazda ən qədim insan məskənlərindən biri sayılan Azıx mağarası paleolit tədqiqatları üçün əsas mənbələrdəndir.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", highlights: ["Paleolit layları", "İnsan çənəsi qalığı", "Mağara stratigrafiyası"] },
  { id: 3, name: "Kültəpə Yaşayış Yeri", region: "Naxçıvan", era: "Tunc dövrü", latitude: 39.327, longitude: 45.431, description: "Kültəpə qədim əkinçilik, keramika və erkən şəhər mədəniyyətinin izlərini daşıyan çoxlaylı abidədir.", image: "https://images.unsplash.com/photo-1589310175050-e7ca560b989b?auto=format&fit=crop&w=1200&q=80", highlights: ["Keramika emalatı", "Dairəvi tikililər", "Tunc dövrü təbəqələri"] },
  { id: 4, name: "Gəncə Qala Qalıqları", region: "Gəncə", era: "Orta əsrlər", latitude: 40.682, longitude: 46.36, description: "Orta əsr şəhərsalma, müdafiə divarları və sənətkarlıq məhəllələrinin izləri ilə seçilən tarixi kompleks.", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80", highlights: ["Qala divarları", "Sənətkarlıq izləri", "Şəhər layları"] },
  { id: 5, name: "Mingəçevir Arxeoloji Kompleksi", region: "Mingəçevir", era: "Antik dövr", latitude: 40.77, longitude: 47.049, description: "Kür çayı vadisində yerləşən kompleks antik və erkən orta əsr yaşayış, qəbir və sənətkarlıq izlərini birləşdirir.", image: "https://images.unsplash.com/photo-1601555818360-7aa51a3817d6?auto=format&fit=crop&w=1200&q=80", highlights: ["Qəbir abidələri", "Şüşə və metal nümunələri", "Kür vadisi marşrutu"] },
  { id: 6, name: "Çıraqqala Ətrafı Qazıntılar", region: "Şabran", era: "Orta əsrlər", latitude: 41.084, longitude: 48.932, description: "Müdafiə sistemi və dağ keçidləri üzərində nəzarət nöqtələri ilə tanınan strateji arxeoloji zona.", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80", highlights: ["Müdafiə qüllələri", "Dağ marşrutu", "Orta əsr təbəqələri"] },
];

const museums = [
  { id: 101, name: "İçərişəhər Arxeoloji Muzeyi", address: "Bakı, İçərişəhər, Qız qalası ətrafı", hours: "Çərşənbə axşamı - Bazar, 10:00 - 18:00", latitude: 40.366, longitude: 49.837, description: "İçərişəhərin antik və orta əsr arxeoloji qatlarını, şəhər mədəniyyətini və gündəlik həyat nümunələrini təqdim edən fokuslu ekspozisiya.", image: "https://images.unsplash.com/photo-1565060169181-25f5f181f06f?auto=format&fit=crop&w=1200&q=80", focus: ["Orta əsr keramika", "Şəhər məişəti", "Numizmatika"] },
  { id: 102, name: "Qala Arxeoloji-Etnoqrafik Kompleksi", address: "Bakı, Qala qəsəbəsi", hours: "Hər gün, 09:00 - 18:00", latitude: 40.442, longitude: 50.168, description: "Abşeronun yaşayış, müdafiə, sənətkarlıq və etnoqrafik ənənələrini açıq səma altında təqdim edən geniş kompleks.", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", focus: ["Açıq səma abidələri", "Daş memarlıq", "Etnoqrafiya"] },
  { id: 103, name: "Azərbaycan Milli Tarix Muzeyi", address: "Bakı, Hacı Zeynalabdin Tağıyev küçəsi 4", hours: "Bazar ertəsi istisna, 10:00 - 17:00", latitude: 40.371, longitude: 49.84, description: "Azərbaycanın qədimdən müasir dövrə qədər maddi mədəniyyət nümunələrini toplayan əsas muzey məkanı.", image: "https://images.unsplash.com/photo-1581526527012-9ffb7b731bc8?auto=format&fit=crop&w=1200&q=80", focus: ["Arxeoloji fond", "Sikkələr", "Qədim silahlar"] },
  { id: 104, name: "Naxçıvan Dövlət Tarix Muzeyi", address: "Naxçıvan şəhəri", hours: "Bazar ertəsi - Şənbə, 10:00 - 17:00", latitude: 39.208, longitude: 45.412, description: "Naxçıvanın qədim yaşayış yerləri, tunc dövrü mədəniyyəti və regional arxeoloji irsini təqdim edir.", image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80", focus: ["Kültəpə materialları", "Tunc artefaktları", "Regional tarix"] },
];

const artifacts = [
  { id: 201, name: "Qayaüstü ov təsviri fraqmenti", category: "Alətlər", image: "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?auto=format&fit=crop&w=1000&q=80", foundAt: "Qobustan", era: "Daş dövrü", material: "Daş səth", explanation: "Ov səhnələri erkən icmaların gündəlik həyatını, kollektiv hərəkətini və simvolik düşüncəsini göstərir." },
  { id: 202, name: "Tunc xəncər", category: "Silahlar", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80", foundAt: "Naxçıvan", era: "Tunc dövrü", material: "Tunc", explanation: "Tunc metallurgiyasının inkişafı döyüş, ov və status simvollarında yeni formalar yaratdı." },
  { id: 203, name: "Şirli keramika qab", category: "Keramika", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80", foundAt: "Gəncə", era: "Orta əsrlər", material: "Keramika", explanation: "Şirli qablar şəhər sənətkarlığının texniki zövqünü və ticarət əlaqələrini nümayiş etdirir." },
  { id: 204, name: "Antik mis sikkə", category: "Sikkələr", image: "https://images.unsplash.com/photo-1621440318464-72633426377b?auto=format&fit=crop&w=1000&q=80", foundAt: "Mingəçevir", era: "Antik dövr", material: "Mis", explanation: "Sikkələr iqtisadi dövriyyə, hakimiyyət simvolikası və regional əlaqələri oxumaq üçün əsas mənbədir." },
  { id: 205, name: "Gümüş sırğa", category: "Bəzək əşyaları", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80", foundAt: "Şabran", era: "Orta əsrlər", material: "Gümüş", explanation: "Bəzək əşyaları həm estetik zövqü, həm də sosial status və identiklik formalarını əks etdirir." },
  { id: 206, name: "Obsidian kəsici", category: "Alətlər", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80", foundAt: "Azıx", era: "Daş dövrü", material: "Obsidian", explanation: "İti kənarlı obsidian alətlər ov, dəri emalı və gündəlik istehsal proseslərində istifadə olunurdu." },
];

const learning = [
  ["Arxeologiya nədir?", "Keçmiş cəmiyyətləri maddi izlər vasitəsilə oxuyan elm.", "Maddi sübut", "Arxeologiya yaşayış yerləri, qəbirlər, alətlər, keramika, memarlıq qalıqları və landşaft izləri ilə insan tarixini bərpa edir."],
  ["Qazıntı necə aparılır?", "Sahə kvadratlara bölünür, hər lay ayrıca sənədləşdirilir.", "Lay-lay analiz", "Qazıntı ölçmə, foto, kontekst qeydiyyatı, nümunə götürmə və laborator analiz ardıcıllığı ilə aparılır."],
  ["Karbon tarixləndirmə", "Orqanik qalıqlarda C-14 izotopunun azalmasına əsaslanır.", "C-14", "Bu metod sümük, ağac, kömür və toxum kimi materialların yaş intervalını hesablamağa kömək edir."],
  ["Azərbaycanın arxeoloji tarixi", "Paleolit mağaralarından orta əsr şəhərlərinə qədər geniş irs.", "Minilliklər", "Qobustan, Azıx, Kültəpə, Mingəçevir və İçərişəhər kimi məkanlar müxtəlif dövrlərin mədəni xəritəsini qurur."],
];

const events = [
  ["Qobustan gecə ekspedisiyası", "2026-07-12", "Qobustan Milli Tarix-Bədii Qoruğu", "Bələdçi ilə qayaüstü təsvirlər marşrutu və mini seminar.", 28],
  ["İçərişəhər qatları üzrə gəzinti", "2026-08-04", "İçərişəhər", "Şəhər arxeologiyası, keramika nümunələri və müdafiə memarlığı.", 18],
  ["Tunc dövrü laboratoriyası", "2026-09-18", "Naxçıvan Dövlət Tarix Muzeyi", "Metallurgiya, keramika və eksponat oxuma məşğələsi.", 22],
];

const news = [
  ["Yeni arxeoloji marşrut xəritəsi hazırlanır", "Dərnək xəbərləri", "2026-06-02", "Muzey və qazıntı məkanlarını birləşdirən təhsil marşrutları yenilənir."],
  ["Keramika kolleksiyası üzrə açıq seminar", "Muzey proqramı", "2026-06-18", "Orta əsr qablarının forması, ornamentləri və istehsal üsulları izah olunacaq."],
  ["Gənclər üçün sahə məktəbi elan edildi", "Təhsil bölməsi", "2026-07-01", "Qazıntı etikası, sənədləşmə və tapıntı qeydiyyatı üzrə praktik proqram."],
];

const quiz = [
  { id: 1, q: "Qobustan qayaüstü təsvirləri əsasən hansı dövrə aid edilir?", options: ["Daş dövrü", "Orta əsrlər", "Antik dövr"], answer: "Daş dövrü", badge: "Qobustan kəşfçisi" },
  { id: 2, q: "Kültəpə hansı regionla daha çox əlaqələndirilir?", options: ["Naxçıvan", "Gəncə", "Şabran"], answer: "Naxçıvan", badge: "İçərişəhər tədqiqatçısı" },
  { id: 3, q: "Karbon tarixləndirmə hansı materiallarda daha uyğundur?", options: ["Orqanik qalıqlar", "Saf metal", "Şüşə"], answer: "Orqanik qalıqlar", badge: "Tapıntı ustası" },
];

const icons = { shield: "◆", map: "⌖", museum: "▣", compass: "✦", trophy: "★", heart: "♡", heartFull: "♥", search: "⌕" };
const favoritesKey = "arxeoloji-dernek:favorites";
const state = { era: "Hamısı", region: "Hamısı", category: "Hamısı", favorites: JSON.parse(localStorage.getItem(favoritesKey) || "[]"), answers: {} };

function h(tag, className, html) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html !== undefined) element.innerHTML = html;
  return element;
}

function sectionHeader(eyebrow, title, description = "", action = "") {
  return `<div class="section-header"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${description ? `<p>${description}</p>` : ""}</div>${action}</div>`;
}

function tags(items) {
  return `<div class="tag-row">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function renderApp() {
  const root = document.getElementById("root");
  const daily = artifacts[new Date().getDate() % artifacts.length];
  root.innerHTML = `
    <div class="app">
      <header class="topbar">
        <a class="brand" href="#home"><span class="brand-mark">${icons.shield}</span><span>Arxeoloji Dərnək</span></a>
        <nav id="mainNav">${["Qazıntılar:#sites", "Xəritə:#map", "Muzeylər:#museums", "Tapıntılar:#artifacts", "Öyrənmə:#learn", "Viktorina:#quiz", "Dərnək:#about"].map((item) => {
          const [label, href] = item.split(":");
          return `<a href="${href}">${label}</a>`;
        }).join("")}</nav>
        <button class="menu-button" id="menuButton" type="button">☰</button>
      </header>
      <main>
        <section class="hero" id="home">
          <div class="hero-media"></div><div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-copy">
              <span class="hero-kicker">Azərbaycan irsi üçün interaktiv kəşf platforması</span>
              <h1>Arxeoloji Dərnək</h1>
              <p>Qazıntı sahələri, muzeylər, tapıntılar, xəritə marşrutları və öyrənmə modulları bir premium təhsil təcrübəsində birləşir.</p>
              <div class="hero-actions"><a href="#map" class="primary-action">Xəritəni aç →</a><a href="#quiz" class="secondary-action">Viktorina başla</a></div>
            </div>
            <div class="daily-card"><span>Günün Tapıntısı</span><img src="${daily.image}" alt="${daily.name}"><div><strong>${daily.name}</strong><p>${daily.era} · ${daily.foundAt} · ${daily.material}</p></div></div>
          </div>
          <nav class="quick-nav"><a href="#museums">${icons.museum}<span>Muzeylər</span></a><a href="#sites">${icons.compass}<span>Qazıntılar</span></a><a href="#map">${icons.map}<span>Xəritə</span></a><a href="#quiz">${icons.trophy}<span>Viktorina</span></a></nav>
        </section>
        <div class="search-wrap"><div class="search-shell"><span>${icons.search}</span><input id="universalSearch" placeholder="Muzey, qazıntı, tapıntı və dövr üzrə axtar..."><span class="search-spark">✦</span><div id="searchResults" class="search-results" hidden></div></div></div>
        <section class="page-section" id="sites">${sectionHeader("Qazıntılar", "Azərbaycanın arxeoloji xəritəsi", "Dövr, region və mətn axtarışı ilə sahələri araşdırın.")}<div id="filters"></div><div class="site-grid" id="siteGrid"></div></section>
        <section class="page-section map-section" id="map">${sectionHeader("Google Maps", "Məkanları xəritədə kəşf et", "Marker kliklənəndə məlumat paneli açılır, naviqasiya Google Maps marşrutuna yönləndirir.", `<button class="utility-button" id="nearbyButton" type="button">⌖ Mənə yaxın abidələr</button>`)}<div class="map-shell"><div class="fallback-map"><div class="azerbaijan-shape" id="mapDots"></div><p class="map-note">Google Maps üçün .env faylında VITE_GOOGLE_MAPS_API_KEY əlavə edin.</p></div><div class="map-info-panel" id="mapPanel"><span class="pill">Seçim</span><h3>Marker seçin</h3><p>Qazıntı və muzey markerləri üzrə detal paneli burada açılacaq.</p></div></div></section>
        <section class="page-section warm-band" id="museums">${sectionHeader("Muzeylər", "Kolleksiyaların canlı ünvanları", "Arxeoloji fondları, ekspozisiya fokusları və xəritə koordinatları ilə.")}<div class="museum-grid">${museums.map(renderMuseum).join("")}</div></section>
        <section class="page-section" id="artifacts"><div id="artifactHeader"></div><div class="artifact-grid" id="artifactGrid"></div></section>
        ${renderLearning()}
        ${renderQuiz()}
        ${renderAbout()}
      </main>
      <footer class="footer"><strong>Arxeoloji Dərnək</strong><span>JSON offline cache · Firebase-ready repository · Google Maps route support</span></footer>
    </div>`;

  bindGlobalEvents();
  renderFilters();
  renderSites();
  renderMapDots();
  renderArtifacts();
  updateQuiz();
}

function renderFilters() {
  const eras = ["Hamısı", ...new Set(sites.map((item) => item.era))];
  const regions = ["Hamısı", ...new Set(sites.map((item) => item.region))];
  document.getElementById("filters").innerHTML = `<div class="filter-bar"><span>☷</span><select id="eraFilter">${eras.map((item) => `<option ${item === state.era ? "selected" : ""}>${item}</option>`).join("")}</select><select id="regionFilter">${regions.map((item) => `<option ${item === state.region ? "selected" : ""}>${item}</option>`).join("")}</select><input id="siteSearch" placeholder="Qazıntı axtar..."></div>`;
  document.getElementById("eraFilter").addEventListener("change", (event) => { state.era = event.target.value; renderSites(); });
  document.getElementById("regionFilter").addEventListener("change", (event) => { state.region = event.target.value; renderSites(); });
  document.getElementById("siteSearch").addEventListener("input", renderSites);
}

function renderSites() {
  const query = (document.getElementById("siteSearch")?.value || "").toLocaleLowerCase("az");
  const filtered = sites.filter((site) => (state.era === "Hamısı" || site.era === state.era) && (state.region === "Hamısı" || site.region === state.region) && [site.name, site.region, site.description].join(" ").toLocaleLowerCase("az").includes(query));
  document.getElementById("siteGrid").innerHTML = filtered.map((site) => `<article class="feature-card site-card"><img src="${site.image}" alt="${site.name}"><div class="card-body"><span class="pill">${icons.compass} ${site.era}</span><h3>${site.name}</h3><p>${site.description}</p><div class="meta-line">⌖ ${site.region} · ${site.latitude.toFixed(3)}, ${site.longitude.toFixed(3)}</div>${tags(site.highlights)}</div></article>`).join("");
}

function renderMuseum(museum) {
  return `<article class="feature-card museum-card"><img src="${museum.image}" alt="${museum.name}"><div class="card-body"><span class="pill bronze">${icons.museum} Muzey</span><h3>${museum.name}</h3><p>${museum.description}</p><div class="museum-facts"><span>⌖ ${museum.address}</span><span>◷ ${museum.hours}</span></div>${tags(museum.focus)}<a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${museum.latitude},${museum.longitude}" target="_blank" rel="noreferrer">Xəritədə göstər ↗</a></div></article>`;
}

function renderMapDots() {
  const items = [...sites.map((item) => ({ ...item, kind: "site" })), ...museums.map((item) => ({ ...item, kind: "museum" }))];
  document.getElementById("mapDots").innerHTML = items.map((item, index) => `<button class="map-dot ${item.kind}" style="left:${18 + (index * 13) % 68}%;top:${24 + (index * 17) % 48}%" data-map-id="${item.kind}-${item.id}" type="button"><span>${item.name}</span></button>`).join("");
  document.querySelectorAll("[data-map-id]").forEach((button) => button.addEventListener("click", () => {
    const [kind, id] = button.dataset.mapId.split("-");
    const item = (kind === "site" ? sites : museums).find((entry) => entry.id === Number(id));
    showMapPanel(item, kind);
  }));
  document.getElementById("nearbyButton").addEventListener("click", () => {
    document.querySelectorAll(".map-dot").forEach((dot, index) => dot.classList.toggle("nearby", index < 2));
    navigator.geolocation?.getCurrentPosition(() => showMapPanel(sites[0], "site"), () => showMapPanel(sites[0], "site"), { timeout: 2500 });
  });
}

function showMapPanel(item, kind) {
  const panel = document.getElementById("mapPanel");
  panel.classList.add("visible");
  panel.innerHTML = `<span class="pill bronze">⌖ ${kind === "museum" ? "Muzey" : "Arxeoloji məkan"}</span><h3>${item.name}</h3><p>${item.description}</p><a class="primary-action compact" href="https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}" target="_blank" rel="noreferrer">Naviqasiya et ↗</a>`;
}

function renderArtifacts() {
  const categories = ["Hamısı", ...new Set(artifacts.map((item) => item.category))];
  document.getElementById("artifactHeader").innerHTML = sectionHeader("Tapıntılar bazası", "Material mədəniyyət kataloqu", "Silahlar, keramika, sikkələr, bəzək əşyaları və alətlər üzrə kurasiya edilmiş baza.", `<div class="segmented">${categories.map((item) => `<button class="${state.category === item ? "active" : ""}" data-category="${item}" type="button">${item}</button>`).join("")}</div>`);
  document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => { state.category = button.dataset.category; renderArtifacts(); }));
  const filtered = artifacts.filter((item) => state.category === "Hamısı" || item.category === state.category);
  document.getElementById("artifactGrid").innerHTML = filtered.map((artifact) => `<article class="feature-card artifact-card"><img src="${artifact.image}" alt="${artifact.name}"><button class="favorite ${state.favorites.includes(artifact.id) ? "active" : ""}" data-favorite="${artifact.id}" type="button">${state.favorites.includes(artifact.id) ? icons.heartFull : icons.heart}</button><div class="card-body"><span class="pill">◈ ${artifact.category}</span><h3>${artifact.name}</h3><p>${artifact.explanation}</p><div class="artifact-specs"><span>Yer: <strong>${artifact.foundAt}</strong></span><span>Dövr: <strong>${artifact.era}</strong></span><span>Material: <strong>${artifact.material}</strong></span></div></div></article>`).join("");
  document.querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.favorite);
    state.favorites = state.favorites.includes(id) ? state.favorites.filter((item) => item !== id) : [...state.favorites, id];
    localStorage.setItem(favoritesKey, JSON.stringify(state.favorites));
    renderArtifacts();
  }));
}

function renderLearning() {
  return `<section class="page-section" id="learn">${sectionHeader("Öyrənmə", "Arxeologiyanı vizual və sadə öyrən")}<div class="learning-grid">${learning.map(([title, summary, metric, detail]) => `<article class="learning-card"><span>${metric}</span><h3>${title}</h3><p>${summary}</p><small>${detail}</small></article>`).join("")}</div></section><section class="page-section split-section" id="events"><div>${sectionHeader("Tədbirlər", "Ekskursiya və sərgilər")}<div class="event-list">${events.map(([title, date, location, description, capacity]) => `<article class="event-card"><span>◷</span><div><strong>${title}</strong><p>${location} · ${new Date(date).toLocaleDateString("az-AZ")} · ${capacity} yer</p><small>${description}</small></div><button type="button">Qeydiyyat</button></article>`).join("")}</div></div><div>${sectionHeader("Son xəbərlər", "Dərnək gündəliyi")}<div class="news-rail">${news.map(([title, source, date, description]) => `<article class="news-card"><span>${source} · ${new Date(date).toLocaleDateString("az-AZ")}</span><h3>${title}</h3><p>${description}</p></article>`).join("")}</div></div></section>`;
}

function renderQuiz() {
  return `<section class="page-section quiz-band" id="quiz"><div id="quizHeader"></div><div class="quiz-grid">${quiz.map((item) => `<article class="quiz-card"><h3>${item.q}</h3><div class="option-list">${item.options.map((option) => `<button data-question="${item.id}" data-answer="${option}" type="button">${option}</button>`).join("")}</div></article>`).join("")}</div><div class="badge-row" id="badgeRow"></div></section>`;
}

function updateQuiz() {
  const score = quiz.filter((item) => state.answers[item.id] === item.answer).length;
  const level = score >= 3 ? "Arxeoloq" : score >= 2 ? "Tədqiqatçı" : "Başlanğıc";
  document.getElementById("quizHeader").innerHTML = sectionHeader("Viktorina", "Bilik səviyyəni yoxla", "Düzgün cavablar nişan və səviyyə açır.", `<div class="score-chip">★ ${score * 10} xal · ${level}</div>`);
  document.querySelectorAll("[data-question]").forEach((button) => {
    const question = quiz.find((item) => item.id === Number(button.dataset.question));
    const selected = state.answers[question.id] === button.dataset.answer;
    button.className = selected ? (button.dataset.answer === question.answer ? "correct" : "wrong") : "";
    button.onclick = () => { state.answers[question.id] = button.dataset.answer; updateQuiz(); };
  });
  const earned = quiz.filter((item) => state.answers[item.id] === item.answer).map((item) => item.badge);
  document.getElementById("badgeRow").innerHTML = ["Qobustan kəşfçisi", "İçərişəhər tədqiqatçısı", "Tapıntı ustası"].map((badge) => `<span class="${earned.includes(badge) ? "earned" : ""}">★ ${badge}</span>`).join("");
}

function renderAbout() {
  return `<section class="page-section about-section" id="about">${sectionHeader("Haqqımızda", "Dərnəyin missiyası")}<div class="about-grid"><div class="mission-panel"><h3>İrsi görünən, öyrənilən və ziyarət edilən etmək</h3><p>Arxeoloji Dərnək Azərbaycan ərazisindəki arxeoloji irsi rəqəmsal xəritə, təhsil modulları və kurasiya edilmiş tapıntı kataloqu ilə birləşdirir.</p><div class="team-row"><span>Sahə tədqiqatçısı</span><span>Muzey kuratoru</span><span>Rəqəmsal xəritəçi</span></div></div><form class="contact-form"><label>Adınız<input placeholder="Ad və soyad"></label><label>Email<input placeholder="email@example.com" type="email"></label><label>Mesaj<textarea placeholder="Dərnəyə yazın" rows="4"></textarea></label><button type="button">Göndər</button><div class="social-row"><a href="mailto:info@arxeoloji-dernek.az">Email</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></div></form></div></section>`;
}

function bindGlobalEvents() {
  document.getElementById("menuButton").addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
  document.getElementById("universalSearch").addEventListener("input", (event) => {
    const needle = event.target.value.trim().toLocaleLowerCase("az");
    const box = document.getElementById("searchResults");
    if (!needle) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }
    const results = [
      ...sites.filter((item) => [item.name, item.region, item.era, item.description].join(" ").toLocaleLowerCase("az").includes(needle)).map((item) => ["Qazıntı", item.name, `${item.region} · ${item.era}`]),
      ...museums.filter((item) => [item.name, item.address, item.description].join(" ").toLocaleLowerCase("az").includes(needle)).map((item) => ["Muzey", item.name, item.address]),
      ...artifacts.filter((item) => [item.name, item.category, item.foundAt, item.era].join(" ").toLocaleLowerCase("az").includes(needle)).map((item) => ["Tapıntı", item.name, `${item.category} · ${item.foundAt}`]),
    ].slice(0, 8);
    box.hidden = results.length === 0;
    box.innerHTML = results.map(([type, title, subtitle]) => `<button type="button"><span>${type}</span><strong>${title}</strong><small>${subtitle}</small></button>`).join("");
  });
}

renderApp();
