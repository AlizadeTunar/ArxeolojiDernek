const sites = [
  { id: 1, name: "Qobustan Qayaüstü Qazıntıları", region: "Qaradağ", era: "Daş dövrü", latitude: 40.109, longitude: 49.378, description: "Qobustan qədim qaya rəsmləri, yaşayış izləri və arxeoloji tapıntılar ilə Azərbaycanın ən güclü açıq səma irs məkanlarından biridir.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rock%20art%20in%20Gobustan.jpg", highlights: ["Qayaüstü təsvirlər", "Ov səhnələri", "Mikrolit alətlər"] },
  { id: 2, name: "Azıx Mağarası", region: "Xocavənd", era: "Daş dövrü", latitude: 39.619, longitude: 46.967, description: "Qafqazda ən qədim insan məskənlərindən biri sayılan Azıx mağarası paleolit tədqiqatları üçün əsas mənbələrdəndir.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Azykh%20Cave.jpg", highlights: ["Paleolit layları", "İnsan çənəsi qalığı", "Mağara stratiqrafiyası"] },
  { id: 3, name: "Kültəpə Yaşayış Yeri", region: "Naxçıvan", era: "Tunc dövrü", latitude: 39.327, longitude: 45.431, description: "Kültəpə qədim əkinçilik, keramika və erkən şəhər mədəniyyətinin izlərini daşıyan çoxlaylı abidədir.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kultepe%20Nakhchivan.jpg", highlights: ["Keramika emalatı", "Dairəvi tikililər", "Tunc dövrü təbəqələri"] },
  { id: 4, name: "Gəncə Qala Qalıqları", region: "Gəncə", era: "Orta əsrlər", latitude: 40.682, longitude: 46.36, description: "Orta əsr şəhərsalma, müdafiə divarları və sənətkarlıq məhəllələrinin izləri ilə seçilən tarixi kompleks.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ganja%20Fortress%20Gates.jpg", highlights: ["Qala divarları", "Sənətkarlıq izləri", "Şəhər layları"] },
  { id: 5, name: "Mingəçevir Arxeoloji Kompleksi", region: "Mingəçevir", era: "Antik dövr", latitude: 40.77, longitude: 47.049, description: "Kür çayı vadisində yerləşən kompleks antik və erkən orta əsr yaşayış, qəbir və sənətkarlıq izlərini birləşdirir.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mingachevir%20Azerbaijan.jpg", highlights: ["Qəbir abidələri", "Şüşə və metal nümunələri", "Kür vadisi marşrutu"] },
  { id: 6, name: "Çıraqqala Ətrafı Qazıntılar", region: "Şabran", era: "Orta əsrlər", latitude: 41.084, longitude: 48.932, description: "Müdafiə sistemi və dağ keçidləri üzərində nəzarət nöqtələri ilə tanınan strateji arxeoloji zona.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chirag%20Gala.jpg", highlights: ["Müdafiə qüllələri", "Dağ marşrutu", "Orta əsr təbəqələri"] },
];

const museums = [
  { id: 101, name: "İçərişəhər Arxeoloji Muzeyi", address: "Bakı, İçərişəhər, Qoşa Qala qapıları ətrafı", hours: "Çərşənbə axşamı - Bazar, 10:00 - 18:00", latitude: 40.366, longitude: 49.837, description: "İçərişəhərin antik və orta əsr arxeoloji qatlarını, şəhər mədəniyyətini və gündəlik həyat nümunələrini təqdim edən fokuslu ekspozisiya.", image: "https://azerbaijan.travel/resize600/center/pages/1922/293226139-1185235352040238-804952636529028885-n.jpg", focus: ["Orta əsr keramika", "Şəhər məişəti", "Numizmatika"] },
  { id: 102, name: "Qala Arxeoloji-Etnoqrafik Kompleksi", address: "Bakı, Qala qəsəbəsi", hours: "Hər gün, 09:00 - 18:00", latitude: 40.442, longitude: 50.168, description: "Abşeronun yaşayış, müdafiə, sənətkarlıq və etnoqrafik ənənələrini açıq səma altında təqdim edən geniş kompleks.", image: "https://heydar-aliyev-foundation.org/uploads/images/content/2014/09/15/9485172_30.jpg", focus: ["Açıq səma abidələri", "Daş memarlıq", "Etnoqrafiya"] },
  { id: 103, name: "Azərbaycan Milli Tarix Muzeyi", address: "Bakı, Hacı Zeynalabdin Tağıyev küçəsi 4", hours: "Bazar ertəsi istisna, 10:00 - 17:00", latitude: 40.371, longitude: 49.84, description: "Azərbaycanın qədimdən müasir dövrə qədər maddi mədəniyyət nümunələrini toplayan əsas muzey məkanı.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/National%20Museum%20of%20History%20of%20Azerbaijan.jpg", focus: ["Arxeoloji fond", "Sikkələr", "Qədim silahlar"] },
  { id: 104, name: "Naxçıvan Dövlət Tarix Muzeyi", address: "Naxçıvan şəhəri", hours: "Bazar ertəsi - Şənbə, 10:00 - 17:00", latitude: 39.208, longitude: 45.412, description: "Naxçıvanın qədim yaşayış yerləri, tunc dövrü mədəniyyəti və regional arxeoloji irsini təqdim edir.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nakhchivan%20State%20History%20Museum.jpg", focus: ["Kültəpə materialları", "Tunc artefaktları", "Regional tarix"] },
];

const artifacts = [
  { id: 201, name: "Qayaüstü ov təsviri fraqmenti", category: "Alətlər", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Petroglyph%20of%20a%20aurochs%20from%20Gobustan.jpg", foundAt: "Qobustan", era: "Daş dövrü", material: "Daş səth", explanation: "Ov səhnələri erkən icmaların gündəlik həyatını, kollektiv hərəkətini və simvolik düşüncəsini göstərir." },
  { id: 202, name: "Tunc xəncər", category: "Silahlar", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bronze%20dagger.jpg", foundAt: "Naxçıvan", era: "Tunc dövrü", material: "Tunc", explanation: "Tunc metallurgiyasının inkişafı döyüş, ov və status simvollarında yeni formalar yaratdı." },
  { id: 203, name: "Şirli keramika qab", category: "Keramika", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Glazed%20ceramic%20bowl.jpg", foundAt: "Gəncə", era: "Orta əsrlər", material: "Keramika", explanation: "Şirli qablar şəhər sənətkarlığının texniki zövqünü və ticarət əlaqələrini nümayiş etdirir." },
  { id: 204, name: "Antik mis sikkə", category: "Sikkələr", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Copper%20coin.jpg", foundAt: "Mingəçevir", era: "Antik dövr", material: "Mis", explanation: "Sikkələr iqtisadi dövriyyə, hakimiyyət simvolikası və regional əlaqələri oxumaq üçün əsas mənbədir." },
  { id: 205, name: "Gümüş sırğa", category: "Bəzək əşyaları", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Silver%20earrings.jpg", foundAt: "Şabran", era: "Orta əsrlər", material: "Gümüş", explanation: "Bəzək əşyaları həm estetik zövqü, həm də sosial status və identiklik formalarını əks etdirir." },
  { id: 206, name: "Obsidian kəsici", category: "Alətlər", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Obsidian%20blade.jpg", foundAt: "Azıx", era: "Daş dövrü", material: "Obsidian", explanation: "İti kənarlı obsidian alətlər ov, dəri emalı və gündəlik istehsal proseslərində istifadə olunurdu." },
];

const insightCards = [
  { label: "Arxeoloji bilgi", title: "Stratiqrafiya arxeologiyanın vaxt xəritəsidir", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rock%20art%20in%20Gobustan.jpg", text: "Qazıntıda torpaq layları adi torpaq kimi görünə bilər, amma hər lay ayrıca hadisədir: yaşayış, yanğın, təmir, tərk edilmə və ya yeni məskunlaşma. Arxeoloqlar bu layların ardıcıllığını pozmadan oxuyanda məkanın tarixini kontekst-kontekst bərpa edirlər." },
  { label: "Etnoqrafik bilgi", title: "Əşyanın forması qədər istifadəsi də tarix danışır", image: "https://azerbaijan.travel/resize600/center/pages/1922/293226139-1185235352040238-804952636529028885-n.jpg", text: "Etnoqrafiya gündəlik həyatın yaddaşını öyrənir: qabın necə tutulması, xalçanın hansı mərasimdə sərilməsi, mis qabın hansı yemək üçün seçilməsi. Buna görə muzeydəki sadə görünən əşya ailə, peşə, mərasim və sosial status haqqında bütöv hekayəyə çevrilir." },
  { label: "Arxeoloji metod", title: "Karbon tarixləndirmə dəqiq tarix yox, etibarlı interval verir", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Azykh%20Cave.jpg", text: "C-14 metodu kömür, toxum, sümük və ağac kimi orqanik qalıqlarda radioaktiv karbonun azalmasını ölçür. Nəticə tək bir gün kimi deyil, ehtimal intervalı kimi oxunur və ən sağlam nəticə kontekst, keramika tipologiyası və digər analizlərlə birlikdə alınır." },
  { label: "Etnoqrafik yaddaş", title: "Açıq səma muzeyləri landşaftı da eksponata çevirir", image: "https://heydar-aliyev-foundation.org/uploads/images/content/2014/09/15/9485172_30.jpg", text: "Qala tipli komplekslərdə ev, həyət, quyu, təndir, daş hasar və yol bir yerdə göstəriləndə istifadəçi yalnız əşyaya baxmır, həmin əşyanın yaşadığı mühiti hiss edir. Bu yanaşma arxeologiya ilə etnoqrafiya arasında körpü yaradır." },
];

const learning = [
  ["Arxeologiya nedir?", "Kecmis cemiyyetleri maddi izler vasitesile oxuyan elm.", "Maddi subut", "Arxeologiya yasayis yerleri, qebirler, aletler, keramika, memarliq qaliqlari ve landsaft izleri ile insan tarixini berpa edir."],
  ["Qazıntı necə aparılır?", "Sahə kvadratlara bölünür, hər lay ayrıca sənədləşdirilir.", "Lay-lay analiz", "Qazıntı ölçmə, foto, kontekst qeydiyyatı, nümunə götürmə və laborator analiz ardıcıllığı ilə aparılır."],
  ["Karbon tarixlendirme", "Orqanik qaliqlarda C-14 izotopunun azalmasina esaslanir.", "C-14", "Bu metod sumuk, agac, komur ve toxum kimi materiallarin yas intervalini hesablamaqa komek edir."],
  ["Azerbaycanin arxeoloji tarixi", "Paleolit magaralarindan orta esr seherlerine qeder genis irs.", "Minillikler", "Qobustan, Azix, Kultepe, Mingecevir ve Iceriseher kimi mekanlar muxtelif dovrlerin medeni xeritesini qurur."],
];

const events = [
  ["Qobustan gece ekspedisiyasi", "2026-07-12", "Qobustan Milli Tarix-Bedii Qorugu", "Beledci ile qayaustu tesvirler marsrutu ve mini seminar.", 28],
  ["Iceriseher qatlari uzre gezinti", "2026-08-04", "Iceriseher", "Seher arxeologiyasi, keramika numuneleri ve mudafie memarligi.", 18],
  ["Tunc dovru laboratoriyasi", "2026-09-18", "Naxcivan Dovlet Tarix Muzeyi", "Metallurgiya, keramika ve eksponat oxuma mesgelesi.", 22],
];

const news = [
  { id: 1, title: "Stonehenge yaxınlığında geniş Neolit landşaftı yenidən gündəmdədir", source: "Dünya arxeologiyası", date: "2026-05-27", summary: "Britaniyada Stonehenge abidəsinin yalnız daş dairə kimi yox, ətraf ritual və yaşayış izləri ilə birlikdə oxunmalı olduğu vurğulanır.", image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=1200&q=80", body: ["Stonehenge ətrafında aparılan araşdırmalar göstərir ki, böyük abidələri tək obyekt kimi deyil, geniş landşaft sistemi kimi araşdırmaq lazımdır. Daş dairə, yaxınlıqdakı çuxurlar, yol izləri, kurqanlar və yaşayış sahələri birlikdə Neolit dövrü icmalarının mərasim və hərəkət xəritəsini qurur.", "Bu tip tədqiqatlarda geofiziki skan, torpaq nümunələri və dəqiq koordinatlandırma xüsusi rol oynayır. Arxeoloqlar qazıntı aparmadan öncə yeraltı anomaliyaları müəyyən edir, sonra yalnız elmi baxımdan vacib nöqtələrdə müdaxilə edirlər.", "Xəbərin əsas dərsi budur: qədim abidənin mənası çox vaxt onun ətrafındakı görünməyən izlərdə gizlənir. Azərbaycan üçün də Qobustan, Qala və İçərişəhər kimi məkanlar geniş mədəni landşaft kimi oxunanda daha güclü anlaşılır."], sourceUrl: "https://apnews.com/" },
  { id: 2, title: "Pompeydə ev məkanları gündəlik həyatın daha incə qatlarını açır", source: "Dunya arxeologiyasi", date: "2026-04-14", summary: "Roma dovru seher arxeologiyasi yalniz freska ve monumental binalari yox, metbex, anbar ve xidmet mekanlarini da merkeze cekir.", image: "https://images.unsplash.com/photo-1566381768406-31a4dd20e744?auto=format&fit=crop&w=1200&q=80", body: ["Pompeyde aparilan muasir tedqiqatlarin deyeri ondadir ki, arxeologiya elit mekanlarla yanası gundelik emeyin izlerini de gorunen edir. Metbexler, kicik otaqlar, qab qaliqlari, yaniq izleri ve divar yazilari seherde yasayan muxtelif sosial qruplarin heyatini daha real gosterir.", "Bu yanasma etnoqrafiya ile de yaxindan baglidir. Cunki evin plani, yemek hazirlanma yeri, saxlama qablari ve is bolgusu yalniz memarliq fakti deyil; aile modeli, iqtisadi veziyyet ve sosial munasibetler haqqinda melumatdir.", "Bele xeberler muzey teqdimati ucun de vacibdir. Eksponat vitrinde tek dayananda gozel gorunur, amma onun istifade edildiyi otaq, is prosesi ve insan hekayesi gosterilende ziyaretci kecmisi daha yaxsi qavrayir."], sourceUrl: "https://www.britannica.com/place/Pompeii" },
  { id: 3, title: "Misir mumiyaları üzərində yeni analizlər qədim sağlamlıq tarixini genişləndirir", source: "Dunya arxeologiyasi", date: "2026-03-09", summary: "Bioarxeologiya skelet ve toxuma qaliqlarini oyrenerek xestelik, qidalanma ve sosial ferqler haqqinda daha dolgun neticeler verir.", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80", body: ["Mumiyalar uzerinde aparilan qeyri-destruktiv analizler, xususile KT skan ve kimyevi testler, qedim insanlarin saglamliq tarixini daha ehtiyatli formada oyrenmeye imkan verir. Esas ustunluk odur ki, numune zedelenmeden daxili qurulus, xestelik izleri ve mumiyalama texnikasi arasdirilir.", "Bioarxeologiya bu gun arxeologiyanin en vacib istiqametlerinden biridir. Skelet qaliqlari yalniz olum haqqinda deyil, qidalanma, agir fiziki is, travma, infeksiya ve hetta miqrasiya haqqinda melumat vere biler.", "Muzeyler ucun bu sahe etik mesuliyyet de yaradir. Insan qaliqlari sensasiya kimi yox, elmi ve medeni hormetle teqdim edilmelidir. Yaxsi ekspozisiya hem fakt verir, hem de kecmis insanin leyaqetini qoruyur."], sourceUrl: "https://www.nationalgeographic.com/history/" },
];

const icons = { shield: "◆", map: "⌖", museum: "▣", compass: "✦", heart: "♡", heartFull: "♥", search: "⌕" };
const favoritesKey = "arxeoloji-dernek:favorites";
const randomInsight = insightCards[Math.floor(Math.random() * insightCards.length)];
const state = { era: "Hamısı", region: "Hamısı", category: "Hamısı", favorites: JSON.parse(localStorage.getItem(favoritesKey) || "[]") };

function sectionHeader(eyebrow, title, description = "", action = "") {
  return `<div class="section-header"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${description ? `<p>${description}</p>` : ""}</div>${action}</div>`;
}

function tags(items) {
  return `<div class="tag-row">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function renderTopbar() {
  return `<header class="topbar"><a class="brand" href="#home"><span class="brand-mark">${icons.shield}</span><span>Arxeoloji Dərnək</span></a><nav id="mainNav">${["Qazıntılar:#sites", "Xəritə:#map", "Muzeylər:#museums", "Tapıntılar:#artifacts", "Öyrənmə:#learn", "Dərnək:#about"].map((item) => { const [label, href] = item.split(":"); return `<a href="${href}">${label}</a>`; }).join("")}</nav><button class="menu-button" id="menuButton" type="button">☰</button></header>`;
}

function renderSearch() {
  return `<div class="search-wrap"><div class="search-shell"><span>${icons.search}</span><input id="universalSearch" placeholder="Muzey, qazıntı, tapıntı və dövr üzrə axtar..."><span class="search-spark">✦</span><div id="searchResults" class="search-results" hidden></div></div></div>`;
}

function renderApp() {
  const newsMatch = window.location.hash.match(/^#news-(\d+)/);
  if (newsMatch) {
    renderNewsDetail(Number(newsMatch[1]));
    return;
  }

  document.getElementById("root").innerHTML = `
    <div class="app">
      ${renderTopbar()}
      <main>
        <section class="hero" id="home">
          <div class="hero-media"></div><div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-copy">
              <span class="hero-kicker">Azərbaycan irsi üçün interaktiv kəşf platforması</span>
              <h1>Arxeoloji Dərnək</h1>
              <p>Qazıntı sahələri, muzeylər, tapıntılar, xəritə marşrutları və öyrənmə modulları bir premium təhsil təcrübəsində birləşir.</p>
              <div class="hero-actions"><a href="#map" class="primary-action">Xəritəni aç</a><a href="#artifacts" class="secondary-action">Tapıntılara bax</a></div>
            </div>
            <article class="daily-card insight-card"><span>${randomInsight.label}</span><img src="${randomInsight.image}" alt="${randomInsight.title}"><div><strong>${randomInsight.title}</strong><p>${randomInsight.text}</p></div></article>
          </div>
          <nav class="quick-nav"><a href="#museums">${icons.museum}<span>Muzeylər</span></a><a href="#sites">${icons.compass}<span>Qazıntılar</span></a><a href="#map">${icons.map}<span>Xəritə</span></a><a href="#artifacts">◈<span>Tapıntılar</span></a></nav>
        </section>
        ${renderSearch()}
        <section class="page-section" id="sites">${sectionHeader("Qazıntılar", "Azərbaycan arxeologiyası", "Dövr, region və mətn axtarışı ilə sahələri araşdırın. Kartlara klikləyəndə həmin məkan haqqında pəncərə açılır.")}<div id="filters"></div><div class="site-grid" id="siteGrid"></div></section>
        <section class="page-section map-section" id="map">${sectionHeader("Google Maps", "Yaxınlıqdakı muzeylər", "Konumunuz mavi nöqtə, yaxın muzeylər isə qırmızı marker kimi görünür. Markerə klikləyəndə muzey məlumatı açılır.", `<button class="utility-button" id="nearbyButton" type="button">⌖ Konumumu göstər</button>`)}<div class="map-shell"><div class="fallback-map"><div class="azerbaijan-shape" id="mapDots"></div><p class="map-note">Konum icazəsi verilməsə Bakı mərkəzi göstərilir.</p></div><div class="map-info-panel" id="mapPanel"><span class="pill">Seçim</span><h3>Muzey seçin</h3><p>Qırmızı nöqtəyə basanda muzey haqqında məlumat burada açılacaq.</p></div></div></section>
        <section class="page-section warm-band" id="museums">${sectionHeader("Muzeylər", "Muzeylərin ünvanları", "Arxeoloji fondları, ekspozisiya fokusları və xəritə koordinatları ilə.")}<div class="museum-grid">${museums.map(renderMuseum).join("")}</div></section>
        <section class="page-section" id="artifacts"><div id="artifactHeader"></div><div class="artifact-grid" id="artifactGrid"></div></section>
        ${renderLearning()}
        ${renderAbout()}
      </main>
      <footer class="footer"><strong>Arxeoloji Dərnək</strong><span>JSON offline cache · Firebase-ready repository · Google Maps route support</span></footer>
    </div>`;

  bindGlobalEvents();
  bindRegistrations();
  bindImageFallbacks();
  renderFilters();
  renderSites();
  renderMapDots();
  renderArtifacts();
  bindImageFallbacks();
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
  document.getElementById("siteGrid").innerHTML = filtered.map((site) => `<button class="feature-card site-card interactive-card" data-site-id="${site.id}" type="button"><img src="${site.image}" alt="${site.name}"><div class="card-body"><span class="pill">${icons.compass} ${site.era}</span><h3>${site.name}</h3><p>${site.description}</p><div class="meta-line">⌖ ${site.region} · ${site.latitude.toFixed(3)}, ${site.longitude.toFixed(3)}</div>${tags(site.highlights)}</div></button>`).join("");
  document.querySelectorAll("[data-site-id]").forEach((card) => card.addEventListener("click", () => {
    const site = sites.find((item) => item.id === Number(card.dataset.siteId));
    openInfoModal(site.name, site.description, site.image, `${site.region} · ${site.era}`, site.highlights);
  }));
}

function renderMuseum(museum) {
  return `<article class="feature-card museum-card"><img src="${museum.image}" alt="${museum.name}"><div class="card-body"><span class="pill bronze">${icons.museum} Muzey</span><h3>${museum.name}</h3><p>${museum.description}</p><div class="museum-facts"><span>⌖ ${museum.address}</span><span>◷ ${museum.hours}</span></div>${tags(museum.focus)}<a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${museum.latitude},${museum.longitude}" target="_blank" rel="noreferrer">Xəritədə göstər</a></div></article>`;
}

function renderMapDots() {
  document.getElementById("mapDots").innerHTML = `<span class="user-dot" id="userDot"><b>Siz</b></span>` + museums.map((item, index) => `<button class="map-dot museum-dot" style="left:${24 + (index * 17) % 62}%;top:${28 + (index * 19) % 46}%" data-museum-id="${item.id}" type="button"><span>${item.name}</span></button>`).join("");
  document.querySelectorAll("[data-museum-id]").forEach((button) => button.addEventListener("click", () => {
    const item = museums.find((entry) => entry.id === Number(button.dataset.museumId));
    showMapPanel(item);
  }));
  document.getElementById("nearbyButton").addEventListener("click", locateUser);
  locateUser();
}

function locateUser() {
  const dot = document.getElementById("userDot");
  const placeDot = (left, top) => {
    dot.style.left = `${left}%`;
    dot.style.top = `${top}%`;
    dot.classList.add("visible");
  };
  navigator.geolocation?.getCurrentPosition(
    () => placeDot(48, 46),
    () => placeDot(43, 44),
    { timeout: 3000 },
  );
}

function showMapPanel(item) {
  const panel = document.getElementById("mapPanel");
  panel.classList.add("visible");
  panel.innerHTML = `<span class="pill bronze">⌖ Muzey</span><h3>${item.name}</h3><p>${item.description}</p><div class="museum-facts"><span>Ünvan: ${item.address}</span><span>İş saatları: ${item.hours}</span></div><a class="primary-action compact" href="https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}" target="_blank" rel="noreferrer">Naviqasiya et</a>`;
}

function renderArtifacts() {
  const categories = ["Hamısı", ...new Set(artifacts.map((item) => item.category))];
  document.getElementById("artifactHeader").innerHTML = sectionHeader("Tapıntılar bazası", "Arxeoloji və Etnoqrafik kəşflər", "Silahlar, keramika, sikkələr, bəzək əşyaları və alətlər üzrə kurasiya edilmiş baza.", `<div class="segmented">${categories.map((item) => `<button class="${state.category === item ? "active" : ""}" data-category="${item}" type="button">${item}</button>`).join("")}</div>`);
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
  return `<section class="page-section" id="learn">${sectionHeader("Öyrənmə", "Arxeologiyanı vizual və sadə öyrən")}<div class="learning-grid">${learning.map(([title, summary, metric, detail]) => `<article class="learning-card"><span>${metric}</span><h3>${title}</h3><p>${summary}</p><small>${detail}</small></article>`).join("")}</div></section><section class="page-section split-section" id="events"><div>${sectionHeader("Tədbirlər", "Ekskursiya və sərgilər")}<div class="event-list">${events.map(([title, date, location, description, capacity], index) => `<article class="event-card"><span>◷</span><div><strong>${title}</strong><p>${location} · ${new Date(date).toLocaleDateString("az-AZ")} · ${capacity} yer</p><small>${description}</small></div><button data-register="${index}" type="button">Qeydiyyat</button></article>`).join("")}</div></div><div>${sectionHeader("Dünya xəbərləri", "Arxeologiya gündəliyi")}<div class="news-rail">${news.map((item) => `<a class="news-card clickable" href="#news-${item.id}"><span>${item.source} · ${new Date(item.date).toLocaleDateString("az-AZ")}</span><h3>${item.title}</h3><p>${item.summary}</p><strong>Ətraflı oxu</strong></a>`).join("")}</div></div></section>`;
}

function renderAbout() {
  return `<section class="page-section about-section" id="about">${sectionHeader("Haqqımızda", "Dərnəyin missiyası")}<div class="about-grid"><div class="mission-panel"><h3>İrsi görünən, öyrənilən və ziyarət edilən etmək</h3><p>Arxeoloji Dərnək Azərbaycan ərazisindəki arxeoloji irsi rəqəmsal xəritə, təhsil modulları və kurasiya edilmiş tapıntı kataloqu ilə birləşdirir.</p><div class="team-row"><span>Sahə tədqiqatçısı</span><span>Muzey kuratoru</span><span>Rəqəmsal xəritəçi</span></div></div><form class="contact-form"><label>Adınız<input placeholder="Ad və soyad"></label><label>Email<input placeholder="email@example.com" type="email"></label><label>Mesaj<textarea placeholder="Dərnəyə yazın" rows="4"></textarea></label><button type="button">Göndər</button><div class="social-row"><a href="mailto:info@arxeoloji-dernek.az">Email</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></div></form></div></section>`;
}

function openInfoModal(title, description, image, meta, items = []) {
  closeInfoModal();
  document.body.insertAdjacentHTML("beforeend", `<div class="modal-backdrop" id="infoModal"><article class="info-modal"><button class="modal-close" type="button" aria-label="Bağla">×</button><img src="${image}" alt="${title}"><div class="article-body"><span class="eyebrow">${meta}</span><h1>${title}</h1><p class="lead">${description}</p>${items.length ? tags(items) : ""}</div></article></div>`);
  document.querySelector(".modal-close").addEventListener("click", closeInfoModal);
  document.getElementById("infoModal").addEventListener("click", (event) => {
    if (event.target.id === "infoModal") closeInfoModal();
  });
}

function closeInfoModal() {
  document.getElementById("infoModal")?.remove();
}

function bindRegistrations() {
  document.querySelectorAll("[data-register]").forEach((button) => button.addEventListener("click", () => {
    button.textContent = "Qeydiyyat uğurla başa çatdı";
    button.classList.add("registered");
    button.disabled = true;
  }));
}

function bindImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "https://commons.wikimedia.org/wiki/Special:FilePath/Rock%20art%20in%20Gobustan.jpg";
    }, { once: true });
  });
}

function renderNewsDetail(id) {
  const item = news.find((entry) => entry.id === id) || news[0];
  document.getElementById("root").innerHTML = `<div class="app article-app">${renderTopbar()}${renderSearch()}<main class="article-page"><a class="text-link back-link" href="#events">Geri qayıt</a><article class="article-shell"><img src="${item.image}" alt="${item.title}"><div class="article-body"><span class="eyebrow">${item.source} · ${new Date(item.date).toLocaleDateString("az-AZ")}</span><h1>${item.title}</h1><p class="lead">${item.summary}</p>${item.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}<a class="primary-action compact" href="${item.sourceUrl}" target="_blank" rel="noreferrer">Mənbəyə bax</a></div></article></main></div>`;
  bindGlobalEvents();
  bindImageFallbacks();
}

function bindGlobalEvents() {
  document.getElementById("menuButton")?.addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
  document.getElementById("universalSearch")?.addEventListener("input", (event) => {
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
      ...news.filter((item) => [item.title, item.summary, item.source].join(" ").toLocaleLowerCase("az").includes(needle)).map((item) => ["Xəbər", item.title, item.source]),
    ].slice(0, 8);
    box.hidden = results.length === 0;
    box.innerHTML = results.map(([type, title, subtitle]) => `<button type="button"><span>${type}</span><strong>${title}</strong><small>${subtitle}</small></button>`).join("");
  });
}

window.addEventListener("hashchange", renderApp);
renderApp();
