import Link from "next/link";
import Image from "next/image";

export default function Aszf() {
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
          <h1>Általános Szerződési Feltételek (ÁSZF)</h1>
          <p>Frissítve: 2026. március 17.</p>

          <h2>1. Szolgáltató adatai</h2>
          <p>
            <strong>Név:</strong> Szendrő Dorka egyéni vállalkozó (továbbiakban: Szolgáltató)<br />
            <strong>Székhely:</strong> 2330, Dunaharaszti, Rózsa utca 78<br />
            <strong>Nyilvántartási szám:</strong> [Ide írd a nyilvántartási számodat]<br />
            <strong>Adószám:</strong> [Ide írd az adószámodat]<br />
            <strong>E-mail:</strong> info@leilapetcare.hu<br />
            <strong>Telefonszám:</strong> +36 20 407 1644
          </p>
          <p>Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozzák a Szolgáltató által nyújtott állatgondozási és kapcsolódó szolgáltatások igénybevételének feltételeit.</p>
          
          <h2>2. A Szolgáltatás tárgya</h2>
          <p>A Szolgáltató vállalja kisállatok (kutyák, macskák, egyéb háziállatok) szakszerű felügyeletét, sétáltatását, egészségügyi gondozását (gyógyszer beadás, műtét utáni megfigyelés) és állatorvosi vagy egyéb helyszínre történő szállítását a Megrendelő otthonában vagy előre egyeztetett helyszínen.</p>

          <h2>3. Foglalás és a Szerződés létrejötte</h2>
          <ul>
            <li>A szolgáltatások igénybevétele előzetes egyeztetéshez (online űrlap, telefon vagy email) kötött.</li>
            <li>A szerződés a felek közötti írásos (email) vagy szóbeli visszaigazolással jön létre, és <strong>elektronikus úton megkötött szerződésnek minősül</strong>, amely nem kerül iktatásra, de utólag visszakereshető.</li>
            <li>A szerződés nyelve a magyar.</li>
            <li>A Megrendelő köteles a valóságnak megfelelő adatokat szolgáltatni az állat egészségi állapotáról és viselkedéséről.</li>
          </ul>

          <h2>4. Teljesítés feltételei</h2>
          <ul>
            <li>A Szolgáltató a megbeszélt időpontban megjelenik a helyszínen és elvégzi a vállalt feladatokat.</li>
            <li>A Megrendelő köteles biztosítani a szolgáltatás elvégzéséhez szükséges bejutást (kulcs, kapukód) és eszközöket (póráz, élelem, gyógyszerek, tiszta környezet).</li>
          </ul>

          <h2>5. Árak és Fizetés</h2>
          <p>A szolgáltatások díjai a weboldalon (<Link href="/#szolgaltatasok">leilapetcare.hu/#szolgaltatasok</Link>) feltüntetett árakon alapulnak, vagy egyedi ajánlat részét képezik. A fizetés történhet készpénzben vagy banki átutalással, a felek egyedi megállapodása szerint. A Szolgáltató alanyi adómentes (AAM) számlát állít ki.</p>

          <h2>6. Lemondási feltételek</h2>
          <p>A lefoglalt időpont lemondása legalább 24 órával a kezdés előtt díjmentes. 24 órán belüli lemondás esetén a szolgáltatás díjának 50%-a, 12 órán belüli lemondás vagy meg nem jelenés esetén 100%-a fizetendő.</p>

          <h2>7. Felelősségvállalás</h2>
          <p>A Szolgáltató állatorvosi asszisztensi háttérrel rendelkezik, és minden tőle telhetőt megtesz az állatok biztonságáért és egészségéért. A Szolgáltató felelőssége a szándékosan vagy súlyos gondatlanságból okozott károkra korlátozódik. A Szolgáltató nem vállal felelősséget olyan rejtett betegségekért, váratlan egészségügyi eseményekért vagy balesetekért, amelyek a szakszerű gondozás és a legnagyobb gondosság ellenére következnek be. A Megrendelő felelős az állat által harmadik személynek vagy a Szolgáltatónak okozott károkért.</p>

          <h2>8. A szerződés megszűnése és Vis maior</h2>
          <p>A szerződés megszűnik a szolgáltatás teljesítésével, közös megegyezéssel, vagy bármely fél általi felmondással (figyelembe véve a 6. pontban részletezett lemondási feltételeket). Vis maior (pl. hirtelen betegség, baleset, természeti katasztrófa) esetén a felek mentesülnek a teljesítési kötelezettség alól, és kötelesek egymást haladéktalanul tájékoztatni.</p>

          <h2>9. Panaszkezelés és Jogorvoslat</h2>
          <p>A Megrendelő a szolgáltatással kapcsolatos panaszait az <strong>info@leilapetcare.hu</strong> e-mail címen jelezheti. A Szolgáltató törekszik a vitás kérdések békés úton történő rendezésére.</p>
          <p>Fogyasztói jogvita esetén a Megrendelő a lakóhelye szerint illetékes <strong>Békéltető Testülethez</strong> fordulhat. A Budapesti Békéltető Testület elérhetőségei:</p>
          <p>
            <strong>Cím:</strong> 1016 Budapest, Krisztina krt. 99. I. em. 111.<br />
            <strong>E-mail:</strong> bekelteto.testulet@bkik.hu<br />
            <strong>Honlap:</strong> <a href="https://www.bekelteto.hu" target="_blank">www.bekelteto.hu</a>
          </p>

          <h2>10. Záró rendelkezések</h2>
          <p>A jelen ÁSZF-ben nem szabályozott kérdésekben a Ptk. és a vonatkozó magyar jogszabályok rendelkezései az irányadóak. A Szolgáltató fenntartja a jogot az ÁSZF módosítására, melyet a weboldalon tesz közzé. A szolgáltatás területi hatálya Budapest és környéke.</p>
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
