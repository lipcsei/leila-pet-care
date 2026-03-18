import Link from "next/link";
import Image from "next/image";

export default function Adatkezeles() {
  return (
    <>
      <div className="topbar">
        <div className="container nav">
          <Link className="brand" href="/">
            <div className="mark">
              <Image src="/images/logo.png" alt="Leila Pet Care logo" width={140} height={80} />
            </div>
          </Link>
          <nav className="menu" aria-label="Főmenü">
            <Link href="/" className="btn">Vissza a főoldalra</Link>
          </nav>
        </div>
      </div>

      <main className="container">
        <article className="content-panel" style={{ background: "var(--card)", padding: "40px", borderRadius: "var(--radius)", border: "1px solid var(--stroke)", marginTop: "20px" }}>
          <h1>Adatkezelési tájékoztató</h1>
          <p>Frissítve: 2026. március 17.</p>

          <h2>1. Adatkezelő adatai</h2>
          <p>
            <strong>Név:</strong> Szendrő Dorka egyéni vállalkozó<br />
            <strong>Székhely:</strong> 2330, Dunaharaszti, Rózsa utca 78<br />
            <strong>Nyilvántartási szám:</strong> [Ide írd a nyilvántartási számodat]<br />
            <strong>Adószám:</strong> [Ide írd az adószámodat]<br />
            <strong>E-mail:</strong> info@leilapetcare.hu<br />
            <strong>Telefonszám:</strong> +36 20 407 1644<br />
          </p>
          
          <h2>2. A kezelt adatok köre és az adatkezelés célja</h2>
          <p>A weboldalon található ajánlatkérő űrlap kitöltésekor az alábbi adatokat kezeljük:</p>
          <ul>
            <li><strong>Név:</strong> Azonosításhoz és megszólításhoz szükséges.</li>
            <li><strong>Telefonszám:</strong> Gyors egyeztetéshez és kapcsolattartáshoz.</li>
            <li><strong>Email cím:</strong> Írásos ajánlattételhez és visszaigazoláshoz.</li>
            <li><strong>Helyszín (kerület):</strong> A kiszállási lehetőség ellenőrzéséhez.</li>
            <li><strong>Kedvencre vonatkozó adatok:</strong> A szolgáltatás testreszabásához és az állat igényeinek megismeréséhez.</li>
          </ul>

          <h2>3. Az adatkezelés jogalapja</h2>
          <p>Az adatkezelés az érintett (Ön) önkéntes hozzájárulásán alapul (GDPR 6. cikk (1) bekezdés a) pont), valamint a szerződéskötést megelőző lépések megtételéhez szükséges (GDPR 6. cikk (1) bekezdés b) pont).</p>

          <h2>4. Adatfeldolgozók</h2>
          <p>Adatai tárolása és kezelése során az alábbi szolgáltatókat vesszük igénybe:</p>
          <ul>
            <li><strong>Tárhely-szolgáltató:</strong> Rackforest Kft. (1132 Budapest, Victor Hugo utca 11. 5. em. B05001., info@rackforest.hu)</li>
            <li><strong>Email küldő szolgáltatás:</strong> Mailjet (Sinch France SAS, 4 square de la Défense, 92400 Courbevoie, Franciaország) - az üzenetek továbbításához.</li>
          </ul>

          <h2>5. Az adatkezelés időtartama</h2>
          <p>A személyes adatokat az ajánlatadástól számított 1 éven belül, vagy ha szerződés jön létre, a számviteli kötelezettségeknek megfelelően legalább 8 évig kezeljük, kivéve ha Ön korábban kéri azok törlését.</p>

          <h2>6. Az Ön jogai</h2>
          <p>Ön kérelmezheti az Adatkezelőtől az Önre vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és tiltakozhat a személyes adatok kezelése ellen, valamint joga van az adathordozhatósághoz.</p>
          <p>Panaszával fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) is (www.naih.hu).</p>

          <h2>7. Adatbiztonsági intézkedések</h2>
          <p>Az Adatkezelő minden tőle telhetőt megtesz annak érdekében, hogy a kezelt adatok védelmét biztosítsa. Az adatokhoz való hozzáférést jelszóval védett rendszerekkel és korlátozott jogosultságokkal biztosítjuk. Az online űrlapon keresztül érkező adatokat biztonságos (SSL/TLS) kapcsolaton keresztül továbbítjuk.</p>

          <h2>8. Sütik (Cookie-k)</h2>
          <p>A weboldal az alábbi típusú sütiket használja:</p>
          <ul>
            <li><strong>Alapműködést biztosító sütik:</strong> Elengedhetetlenek a weboldal navigációjához és funkcióinak használatához (pl. süti-sáv elfogadása). Időtartam: a munkamenet végéig vagy max. 1 évig.</li>
            <li><strong>Statisztikai sütik (opcionális):</strong> Segítenek megérteni, hogyan használják a látogatók az oldalt (pl. Google Analytics). Ezeket csak az Ön hozzájárulásával aktiváljuk.</li>
          </ul>
          <p>A sütiket bármikor törölheti vagy letilthatja a böngészője beállításaiban.</p>

          <h2>9. Jogorvoslati lehetőségek</h2>
          <p>Amennyiben úgy érzi, hogy adatait nem megfelelően kezeljük, kérjük, először vegye fel velünk a kapcsolatot az <strong>info@leilapetcare.hu</strong> címen.</p>
          <p>Panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) is:</p>
          <p>
            <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.<br />
            <strong>Postacím:</strong> 1363 Budapest, Pf. 9.<br />
            <strong>Honlap:</strong> <a href="https://www.naih.hu" target="_blank">www.naih.hu</a><br />
            <strong>E-mail:</strong> ugyfelszolgalat@naih.hu
          </p>
        </article>

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
    </>
  );
}
