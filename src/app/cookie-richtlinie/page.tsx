import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie gemäß TKG 2021 und DSGVO",
};

export default function CookieRichtlinie() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-gray max-w-3xl">
      <h1>Cookie-Richtlinie</h1>
      <p>Stand: [Datum]</p>

      <h2>1. Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die von einer Website auf Ihrem
        Computer oder mobilen Gerät gespeichert werden, wenn Sie die Website
        besuchen. Sie ermöglichen es der Website, sich an Ihre Aktionen und
        Einstellungen (wie Anmeldedaten, Sprache, Schriftgröße und andere
        Anzeigeeinstellungen) über einen bestimmten Zeitraum hinweg zu erinnern,
        damit Sie diese nicht bei jedem erneuten Besuch oder beim Navigieren von
        einer Seite zur anderen erneut eingeben müssen.
      </p>

      <h2>2. Rechtsgrundlage</h2>
      <p>
        Die Verwendung von Cookies auf dieser Website erfolgt auf Grundlage von:
      </p>
      <ul>
        <li>
          <strong>§ 165 Abs. 3 TKG 2021</strong> (Telekommunikationsgesetz
          2021) – technisch notwendige Cookies dürfen ohne Einwilligung
          gesetzt werden; für alle anderen Cookies ist die vorherige informierte
          Einwilligung des Nutzers erforderlich.
        </li>
        <li>
          <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung des
          Nutzers für nicht-notwendige Cookies.
        </li>
        <li>
          <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Berechtigtes Interesse
          für technisch notwendige Cookies.
        </li>
      </ul>

      <h2>3. Arten von Cookies, die wir verwenden</h2>

      <h3>3.1 Technisch notwendige Cookies</h3>
      <p>
        Diese Cookies sind für das Funktionieren der Website unerlässlich. Sie
        ermöglichen grundlegende Funktionen wie Seitennavigation und Zugang zu
        geschützten Bereichen der Website. Die Website kann ohne diese Cookies
        nicht ordnungsgemäß funktionieren.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Zweck</th>
            <th>Speicherdauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[Cookie-Name]</td>
            <td>[Zweck des Cookies]</td>
            <td>[Dauer, z.B. Sitzung / 30 Tage]</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Analyse-/Statistik-Cookies</h3>
      <p>
        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
        interagieren, indem sie Informationen sammeln und melden. Alle
        Informationen, die diese Cookies sammeln, sind aggregiert und daher
        anonym. Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung
        gesetzt.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Speicherdauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[z.B. _ga]</td>
            <td>[z.B. Google Analytics]</td>
            <td>[Zweck]</td>
            <td>[z.B. 2 Jahre]</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Marketing-Cookies</h3>
      <p>
        Marketing-Cookies werden verwendet, um Besuchern auf Websites zu folgen.
        Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für
        den einzelnen Benutzer sind. Diese Cookies werden nur mit Ihrer
        ausdrücklichen Einwilligung gesetzt.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Speicherdauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[Cookie-Name]</td>
            <td>[Anbieter]</td>
            <td>[Zweck]</td>
            <td>[Dauer]</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Cookie-Einwilligung und -Verwaltung</h2>
      <p>
        Beim ersten Besuch unserer Website werden Sie über ein Cookie-Banner
        um Ihre Einwilligung für nicht-notwendige Cookies gebeten. Sie können
        Ihre Einstellungen jederzeit ändern oder Ihre Einwilligung widerrufen.
      </p>
      <p>
        Sie können Cookies auch direkt in Ihrem Browser verwalten oder löschen.
        Beachten Sie, dass das Deaktivieren bestimmter Cookies die
        Funktionalität der Website beeinträchtigen kann. Anleitungen zur
        Cookie-Verwaltung in gängigen Browsern:
      </p>
      <ul>
        <li>
          <strong>Chrome:</strong> Einstellungen → Datenschutz und
          Sicherheit → Cookies und andere Websitedaten
        </li>
        <li>
          <strong>Firefox:</strong> Einstellungen → Datenschutz &
          Sicherheit → Cookies und Website-Daten
        </li>
        <li>
          <strong>Safari:</strong> Einstellungen → Datenschutz →
          Cookies und Website-Daten verwalten
        </li>
        <li>
          <strong>Edge:</strong> Einstellungen → Cookies und
          Websiteberechtigungen → Cookies und gespeicherte Daten
        </li>
      </ul>

      <h2>5. Datenübermittlung in Drittländer</h2>
      <p>
        Bei der Verwendung von Cookies von Drittanbietern (z.B. Google
        Analytics) kann es zu einer Übermittlung von Daten in Drittländer
        (insbesondere die USA) kommen. In diesem Fall stellen wir sicher, dass
        angemessene Garantien gemäß Art. 46 DSGVO bestehen (z.B.
        Standardvertragsklauseln der EU-Kommission) oder ein
        Angemessenheitsbeschluss gemäß Art. 45 DSGVO vorliegt.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Bezüglich der durch Cookies erhobenen personenbezogenen Daten stehen
        Ihnen die in unserer{" "}
        <a href="/datenschutz/">Datenschutzerklärung</a> beschriebenen Rechte
        zu (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch,
        Datenübertragbarkeit, Beschwerde bei der Datenschutzbehörde).
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Bei Fragen zu dieser Cookie-Richtlinie kontaktieren Sie uns bitte unter:
        <br />
        E-Mail: [E-Mail-Adresse]
      </p>
    </div>
  );
}
