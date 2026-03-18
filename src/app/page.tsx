"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const slidesData = [
  { image: "/images/pexels-alexasfotos-2173872.jpg", icon: "🐕", title: "Egyéni séta teljes figyelemmel", desc: "Személyre szabott séta, minden kutyára külön figyelmet fordítva" },
  { image: "/images/pexels-david-bartus-43782-1510543.jpg", icon: "💚", title: "Gyengéd, figyelmes felügyelet", desc: "Műtét után különösen fontos a nyugalom és a megfigyelés." },
  { image: "/images/pexels-holfotos-3777620.jpg", icon: "🐱", title: "Stresszmentes otthoni gondozás", desc: "A cicák a saját környezetükben érzik magukat a legnagyobb biztonságban." },
  { image: "/images/pexels-kournoutis-9327035.jpg", icon: "🩺", title: "Szakértő egészségügyi támogatás", desc: "Állatorvosi asszisztensi háttérrel a precíz gyógyszerbeadásért." },
  { image: "/images/pexels-bertellifotografia-2376996.jpg", icon: "📸", title: "Folyamatos visszajelzés", desc: "Fotók és videók minden látogatásról, hogy te is nyugodt lehess." },
  { image: "/images/pexels-d123x-2813385.jpg", icon: "🤝", title: "Bizalom és megbízhatóság", desc: "Számomra minden állat családtag, és ennek megfelelően gondoskodom róluk." },
  { image: "/images/pexels-helenalopes-1938123.jpg", icon: "🏠", title: "Biztonság amíg távol vagy", desc: "Hosszabb utazás alatt is teljes körű figyelmet kapnak kedvenceid." },
  { image: "/images/pexels-julkir-3117157.jpg", icon: "🎾", title: "Játék és mentális stimuláció", desc: "Nem csak séta, hanem közös játék és foglalkozás is jár minden alkalommal." },
  { image: "/images/pexels-kate-photo-386050-2814000.jpg", icon: "🚑", title: "Biztonságos állatszállítás", desc: "Ha állatorvoshoz vagy kozmetikába kell menni, számíthatsz rám." },
  { image: "/images/pexels-lucaspezeta-1909008.jpg", icon: "🍗", title: "Személyre szabott étrend", desc: "Pontos etetés és friss víz biztosítása a megszokott rutin szerint." },
  { image: "/images/pexels-pixabay-39283.jpg", icon: "✨", title: "Tiszta környezet", desc: "Az alom tisztítása és a kisebb rendrakás is a feladatom része." },
  { image: "/images/pexels-pixabay-416160.jpg", icon: "🥇", title: "Prémium minőség", desc: "Exkluzív figyelem és szakértelem a legmagasabb szinten." },
  { image: "/images/pexels-vafphotos-18126198.jpg", icon: "💖", title: "Szeretetteljes gondoskodás", desc: "Mert minden tappancsos megérdemli a legjobb törődést." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cookiesAccepted, setCookiesAccepted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reveal logic
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    setIsMobile(window.innerWidth <= 920);
    setCookiesAccepted(!!localStorage.getItem("cookiesAccepted"));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      alert("Köszönöm az üzenetedet! Hamarosan keresni foglak a megadott elérhetőségeken.");
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setFormStatus("idle");
    }, 1500);
  };

  const getImagePath = (path: string) => {
    if (isMobile && !path.includes("/mobile/")) {
      return path.replace("/images/", "/images/mobile/");
    }
    return path;
  };

  return (
    <>
      <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav">
          <Link className="brand" href="#top">
            <div className="mark">
              <Image src="/images/logo.png" alt="Leila Pet Care logo" width={140} height={80} priority />
            </div>
          </Link>

          <nav className="menu" aria-label="Főmenü">
            <Link href="#rolam" className="btn">Rólam</Link>
            <Link href="#szolgaltatasok" className="btn">Szolgáltatások</Link>
            <Link href="#hogyan" className="btn">Hogyan működik</Link>
            <Link href="#kapcsolat" className="btn">Kapcsolat</Link>
          </nav>

          <div className="cta">
            <Link className="btn" href="tel:+36204071644">📞 +36 20 407 1644</Link>
            <Link className="btn primary" href="#kapcsolat">Ajánlatot kérek</Link>
          </div>
        </div>
      </div>

      <main className="container" id="top">
        <section className="hero reveal">
          <div className="hero-grid">
            <div className="panel">
              <div className="pad">
                <h1>Állategészségügyi gondozás az otthon biztonságában</h1>
                <p className="lead">
                  Műtét utáni felügyelet, egészségügyi gondozás, állatszállítás és napi felügyelet —
                  úgy, hogy te nyugodt legyél, ő pedig biztonságban érezze magát.
                </p>
                <div className="cta" style={{ marginTop: "14px" }}>
                  <Link className="btn primary" href="#kapcsolat">📩 Ajánlatot kérek</Link>
                  <Link className="btn" href="#szolgaltatasok">🩺 Szolgáltatások</Link>
                </div>
                <div className="chips">
                  <div className="chip">✅ Fotós/üzenetes beszámoló</div>
                  <div className="chip">🕒 Rugalmas időpontok</div>
                  <div className="chip">🚗 Szállítás egyeztetéssel</div>
                  <div className="chip">🐾 Stresszmentes rutin</div>
                </div>
              </div>
            </div>

            <div className="panel hero-img" aria-label="Kutyás-macskás hero kép">
              <div className="slider-container" id="hero-slider">
                {slidesData.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`slide ${idx === currentSlide ? "active" : ""}`}
                    style={{ backgroundImage: `url('${getImagePath(slide.image)}')` }}
                  ></div>
                ))}
              </div>
              <div className="slider-overlay"></div>
              <div className="caption">
                {slidesData.map((slide, idx) => (
                  <div key={idx} className={`caption-card ${idx === currentSlide ? "active" : ""}`}>
                    <div className="pulse">{slide.icon}</div>
                    <div>
                      <b>{slide.title}</b>
                      <span>{slide.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="rolam" className="reveal">
          <div className="panel">
            <div className="pad about-grid">
              <div className="about-content">
                <h2>Bemutatkozás</h2>
                <p>Az állatok iránti szeretetem már egészen kisgyerekkoromban kezdődött. Gyerekkorom nagy részét egy farmon töltöttem, ahol mindennap állatok vettek körül. Itt tanultam meg igazán, hogy az állatok gondozása nem csak feladat, hanem felelősség és bizalom is.</p>
                <p>Ez a szenvedély később sem múlt el, ezért szakmai irányba indultam és elvégeztem egy állatorvosi asszisztens képzést aminek köszönhetően nem csak szeretettel, hanem szakmai tudással is gondoskodom a rám bízott állatokról.</p>
                <p>A Leila PetCare célja, hogy a gazdik akkor is biztonságban tudhassák kedvenceiket, amikor elfoglaltak vagy nem tudnak otthon lenni. Számomra minden állat egyedi, ezért személyre szabott figyelmet és gondoskodást kapnak.</p>
                <p>Prémium szolgáltatásaim során kiemelten figyelek az állatok jólétére, biztonságára és egészségére. Legyen szó sétáltatásról, otthoni felügyeletről vagy különleges gondoskodást igénylő állatokról, minden esetben a legfontosabb számomra a bizalom és a megbízhatóság.</p>
                <p>Hiszem, hogy az állatok nem csupán kedvencek, hanem családtagok – ezért a gondozásuk is ezt a figyelmet és törődést érdemli.</p>
              </div>
              <div className="about-mosaic">
                <div className="mosaic-item item-1" style={{ backgroundImage: `url('${getImagePath("/images/pexels-vafphotos-18126198.jpg")}')` }} title="Szeretetteljes gondoskodás"></div>
                <div className="mosaic-item item-2" style={{ backgroundImage: `url('${getImagePath("/images/pexels-jozef-feher-356581-7473294.jpg")}')` }} title="Leila munkában"></div>
                <div className="mosaic-item item-3" style={{ backgroundImage: `url('${getImagePath("/images/pexels-leonardo-de-oliveira-872270-2499282.jpg")}')` }} title="Szakértő figyelem"></div>
                <div className="mosaic-item item-4" style={{ backgroundImage: `url('${getImagePath("/images/IMG_7824.JPG")}')` }} title="Boldog pillanatok"></div>
                <div className="mosaic-item item-5" style={{ backgroundImage: `url('${getImagePath("/images/pexels-david-bartus-43782-1510543.jpg")}')` }} title="Biztonság és nyugalom"></div>
                <div className="mosaic-item item-6" style={{ backgroundImage: `url('${getImagePath("/images/pexels-kournoutis-9327035.jpg")}')` }} title="Játékos percek"></div>
                <div className="mosaic-item item-7" style={{ backgroundImage: `url('${getImagePath("/images/pexels-pixabay-39283.jpg")}')` }} title="Közös séta"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="szolgaltatasok" className="reveal">
          <div className="section-head">
            <h2>Szolgáltatások</h2>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Séta csomag – BASIC CARE</h3>
              <div className="price">8 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ alkalom</span></div>
              <ul className="features">
                <li>séta (max 2 kutya)</li>
                <li>friss víz</li>
                <li>etetés ha szükséges</li>
                <li>rövid állapotellenőrzés</li>
                <li>fotó</li>
              </ul>
            </div>

            <div className="pricing-card popular">
              <h3>Prémium gondoskodás – PREMIUM CARE</h3>
              <div className="price">11 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ alkalom</span></div>
              <ul className="features">
                <li>séta (max 2 kutya)</li>
                <li>friss víz</li>
                <li>etetés</li>
                <li>játék és mentális stimuláció</li>
                <li>fotó</li>
                <li>alap egészségfigyelés</li>
              </ul>
            </div>

            <div className="pricing-card">
              <h3>Egészségügyi gondozás – MEDICAL CARE</h3>
              <div className="price">14 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ alkalom</span></div>
              <ul className="features">
                <li>séta (max 2 kutya)</li>
                <li>friss víz</li>
                <li>speciális etetés</li>
                <li>gyógyszer beadása</li>
                <li>műtét utáni felügyelet</li>
                <li>állapotellenőrzés</li>
                <li>részletes beszámoló</li>
              </ul>
            </div>

            <div className="pricing-card">
              <h3>Otthoni felügyelet – HOME CARE</h3>
              <div className="price">18 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ alkalom</span></div>
              <ul className="features">
                <li>1–2 óra otthoni felügyelet</li>
                <li>séta</li>
                <li>friss víz</li>
                <li>etetés</li>
                <li>játék</li>
                <li>fotó</li>
                <li>takarítás (alom / kisebb rendrakás)</li>
              </ul>
            </div>

            <div className="pricing-card">
              <h3>Utazási felügyelet – PET SITTER</h3>
              <div className="price">25 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ nap</span></div>
              <ul className="features">
                <li>napi 2–3 látogatás</li>
                <li>séta</li>
                <li>friss víz</li>
                <li>etetés</li>
                <li>játék</li>
                <li>fotó</li>
                <li>takarítás (alom / kisebb rendrakás)</li>
                <li>gyógyszer, ha szükséges</li>
                <li>napi beszámoló</li>
              </ul>
            </div>
          </div>

          <p className="hint" style={{ textAlign: "center", marginTop: "20px", marginBottom: "24px" }}>*A szolgáltatás nem helyettesíti az állatorvosi ellátást. Sürgős esetben azonnal értesítem az állatorvost.</p>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>Havi gondoskodási csomagok</h2>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Silver tagság</h3>
              <div className="price">60 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ hó</span></div>
              <ul className="features">
                <li>havi 8 séta</li>
                <li>prioritás foglalásnál</li>
                <li>fotós beszámoló minden alkalom után</li>
                <li>10% kedvezmény egyéb szolgáltatásokra</li>
              </ul>
            </div>

            <div className="pricing-card">
              <h3>Gold tagság</h3>
              <div className="price">85 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ hó</span></div>
              <ul className="features">
                <li>havi 12 séta</li>
                <li>prioritás foglalásnál</li>
                <li>fotók és videók</li>
                <li>egészségfigyelés</li>
                <li>gyógyszer beadás ha szükséges</li>
                <li>15% kedvezmény egyéb szolgáltatásokra</li>
              </ul>
            </div>

            <div className="pricing-card">
              <h3>Platinum tagság</h3>
              <div className="price">140 000 Ft <span style={{ fontSize: "14px", fontWeight: 400, color: "var(--muted2)" }}>/ hó</span></div>
              <ul className="features">
                <li>havi 20 séta</li>
                <li>teljes prioritás</li>
                <li>állapotjelentés minden látogatás után</li>
                <li>gyógyszer beadás</li>
                <li>állatorvoshoz szállítás évente 2 alkalommal</li>
                <li>sürgős látogatás lehetősége</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="hogyan" className="reveal">
          <div className="section-head">
            <h2>Hogyan működik?</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <span className="step-icon">📩</span>
              <h3>Kapcsolatfelvétel</h3>
              <p>Írj üzenetet vagy hívj fel! Mesélj egy kicsit a kedvencedről: kihez érkeznék, hol laktok és mikor lenne szükségetek rám.</p>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <span className="step-icon">🤝</span>
              <h3>Ismerkedés</h3>
              <p>Az első találkozó alkalmával megismerem a kedvencedet és átbeszéljük a pontos rutint.</p>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <span className="step-icon">🐾</span>
              <h3>Gondozás</h3>
              <p>A megbeszélt időben érkezem, és szakértő figyelemmel látom el a feladatokat (séta, etetés, gyógyszer).</p>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <span className="step-icon">📱</span>
              <h3>Beszámoló</h3>
              <p>Minden látogatás után fotós/videós jelentést küldök, hogy te is lásd: minden a legnagyobb rendben van.</p>
            </div>
          </div>
        </section>

        <section id="kapcsolat" className="reveal">
          <div className="section-head">
            <h2>Kapcsolat</h2>
          </div>

          <div className="contact">
            <div className="box">
              <div className="box-head">
                <h3>Elérhetőségek</h3>
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <Link className="btn" href="tel:+36204071644">📞 +36 20 407 1644</Link>
                <Link className="btn" href="mailto:info@leilapetcare.hu">✉️ info@leilapetcare.hu</Link>
              </div>
              <div className="contact-info-grid">
                <div className="info-card">
                  <div className="info-text">
                    <h4>Szolgáltatási terület</h4>
                    <p>Budapest teljes területe</p>
                    <span>Budapest minden kerületében szívesen vállalok kisállat-felügyeletet és gondozást, előzetes egyeztetés alapján.</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-text">
                    <h4>Elérhetőség</h4>
                    <p>Hétfő – Péntek</p>
                    <span>08:00 – 16:00 között vagyok elérhető.<br />Hétvégi felügyelet előzetes egyeztetés alapján lehetséges.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-head">
                <h3>Ajánlatkérés</h3>
              </div>
              <form className="form" id="contactForm" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Név" required />
                <input type="tel" name="phone" placeholder="Telefonszám" />
                <input type="email" name="email" placeholder="Email" required />

                <select name="service" required defaultValue="">
                  <option value="" disabled>Válassz szolgáltatást…</option>
                  <option>BASIC CARE (Séta)</option>
                  <option>PREMIUM CARE (Gondoskodás)</option>
                  <option>MEDICAL CARE (Egészségügy)</option>
                  <option>HOME CARE (Otthoni felügyelet)</option>
                  <option>PET SITTER (Utazási felügyelet)</option>
                  <option>Havi gondoskodási csomag érdekel</option>
                </select>

                <input type="text" name="location" placeholder="Helyszín (Budapest / kerület)" />
                <input type="text" name="time" placeholder="Mikor? (pl. 2026-03-10 18:00)" />
                <textarea name="details" placeholder="Mesélj egy kicsit a kedvencedről! Milyen kutyus/cica, mi a rutinja, és pontosan miben segíthetek?"></textarea>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <input type="checkbox" id="privacy" required style={{ width: "auto", marginTop: "5px" }} />
                  <label htmlFor="privacy" style={{ fontSize: "12px", color: "var(--muted2)" }}>
                    Elolvastam és elfogadom az <Link href="/aszf" target="_blank">ÁSZF</Link>-et és az <Link href="/adatkezeles" target="_blank">Adatkezelési tájékoztatót</Link>.
                  </label>
                </div>

                <button className="btn primary" type="submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "Küldés..." : "Küldés"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="copyright" style={{ borderTop: "none", paddingTop: 0, justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
              <div className="copyright-text">© 2026 Leila Pet Care • Minden jog fenntartva</div>
              <div className="copyright-links" style={{ marginTop: "10px" }}>
                <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>
                <Link href="/aszf">ÁSZF</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {!cookiesAccepted && (
        <div id="cookieBanner" className={`cookie-banner ${!cookiesAccepted ? "active" : ""}`}>
          <div className="cookie-content">
            Ez a weboldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében. A weboldal használatával elfogadod a sütik használatát. 
            További információ: <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>.
          </div>
          <div className="cookie-actions">
            <button id="acceptCookies" className="btn primary" onClick={handleAcceptCookies}>Elfogadom</button>
          </div>
        </div>
      )}
    </>
  );
}
