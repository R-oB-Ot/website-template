import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum gemäß § 5 ECG und § 25 MedienG",
};

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-gray max-w-3xl">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 ECG und § 25 MedienG</h2>

      <p>
        <strong>[Firmenname / Vor- und Nachname]</strong>
        <br />
        [Rechtsform, z.B. Einzelunternehmen / GmbH / etc.]
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ Ort], Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: [Telefonnummer]
        <br />
        E-Mail: [E-Mail-Adresse]
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>[Beschreibung des Unternehmensgegenstands]</p>

      <h2>UID-Nummer</h2>
      <p>ATU [Nummer]</p>

      <h2>Firmenbuchnummer</h2>
      <p>FN [Nummer] beim Landesgericht [Ort]</p>

      <h2>Aufsichtsbehörde / Gewerbebehörde</h2>
      <p>Bezirkshauptmannschaft [Ort] / Magistrat [Stadt]</p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Berufsbezeichnung: [Berufsbezeichnung]
        <br />
        Verleihungsstaat: Österreich
        <br />
        Zuständige Kammer: [Kammer]
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
        Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit,
        Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung
        der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem österreichischen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  );
}
