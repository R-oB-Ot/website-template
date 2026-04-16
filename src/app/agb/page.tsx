import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB – Allgemeine Geschäftsbedingungen",
};

export default function AGB() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-gray max-w-3xl">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p>Stand: [Datum]</p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für
        alle über diese Website geschlossenen Verträge zwischen
      </p>
      <p>
        <strong>[Firmenname]</strong>
        <br />
        [Adresse]
        <br />
        [PLZ Ort], Österreich
        <br />
        (nachfolgend „Anbieter")
      </p>
      <p>und dem Nutzer dieser Website (nachfolgend „Kunde").</p>
      <p>
        Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn,
        der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
      </p>

      <h2>2. Vertragsschluss</h2>
      <p>
        Die Darstellung von Dienstleistungen oder Produkten auf der Website
        stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche
        Aufforderung an den Kunden, eine Bestellung aufzugeben. Mit der
        Bestellung erklärt der Kunde verbindlich sein Vertragsangebot.
      </p>
      <p>
        Der Vertrag kommt erst durch die Annahmeerklärung des Anbieters
        zustande, die per E-Mail (Auftragsbestätigung) oder durch Erbringung
        der Leistung erfolgt.
      </p>

      <h2>3. Preise und Zahlungsbedingungen</h2>
      <p>
        Alle angegebenen Preise verstehen sich, sofern nicht anders angegeben,
        inklusive der gesetzlichen Umsatzsteuer. Die Zahlung ist, sofern nicht
        anders vereinbart, sofort nach Rechnungsstellung fällig. Es gelten die
        zum Zeitpunkt der Bestellung auf der Website angegebenen Preise.
      </p>

      <h2>4. Lieferung und Leistungserbringung</h2>
      <p>
        Die Lieferung bzw. Leistungserbringung erfolgt zu den auf der Website
        oder in der Auftragsbestätigung angegebenen Bedingungen. Lieferfristen
        gelten als annähernd vereinbart, es sei denn, es wurde ausdrücklich ein
        fester Liefertermin zugesagt.
      </p>

      <h2>5. Widerrufsrecht für Verbraucher</h2>
      <p>
        Verbraucher im Sinne des § 1 Konsumentenschutzgesetz (KSchG) haben bei
        Fernabsatzverträgen gemäß § 11 Fern- und Auswärtsgeschäfte-Gesetz
        (FAGG) das Recht, binnen 14 Tagen ohne Angabe von Gründen den Vertrag
        zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des
        Vertragsabschlusses bzw. ab dem Tag, an dem der Verbraucher oder ein von
        ihm benannter Dritter die Ware in Besitz genommen hat.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
        eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder
        E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
        informieren:
      </p>
      <p>
        [Firmenname]
        <br />
        [Adresse]
        <br />
        E-Mail: [E-Mail-Adresse]
      </p>
      <p>
        Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen
        Leistungen zurückzugewähren. Die Rückzahlung erfolgt unverzüglich und
        spätestens binnen 14 Tagen unter Verwendung desselben Zahlungsmittels,
        das bei der ursprünglichen Transaktion eingesetzt wurde.
      </p>

      <h2>6. Gewährleistung</h2>
      <p>
        Es gelten die gesetzlichen Gewährleistungsbestimmungen nach dem
        Allgemeinen Bürgerlichen Gesetzbuch (ABGB) und, sofern der Kunde
        Verbraucher ist, die Bestimmungen des Konsumentenschutzgesetzes (KSchG)
        und des Verbrauchergewährleistungsgesetzes (VGG).
      </p>
      <p>
        Die Gewährleistungsfrist beträgt für Verbraucher zwei Jahre ab
        Übergabe der Ware oder Erbringung der Leistung. Innerhalb des ersten
        Jahres wird vermutet, dass ein Mangel bereits bei Übergabe vorgelegen
        hat (Beweislastumkehr gemäß § 9 VGG).
      </p>

      <h2>7. Haftung</h2>
      <p>
        Der Anbieter haftet für Schäden nur bei Vorsatz und grober
        Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist, soweit
        gesetzlich zulässig, ausgeschlossen. Diese Haftungsbeschränkung gilt
        nicht bei Personenschäden oder gegenüber Verbrauchern im Sinne des
        KSchG.
      </p>

      <h2>8. Urheberrecht</h2>
      <p>
        Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder,
        Grafiken, Layouts etc.) unterliegen dem österreichischen Urheberrecht.
        Jede nicht ausdrücklich gestattete Verwertung bedarf der vorherigen
        schriftlichen Zustimmung des Anbieters.
      </p>

      <h2>9. Datenschutz</h2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in
        unserer <a href="/datenschutz/">Datenschutzerklärung</a>.
      </p>

      <h2>10. Anwendbares Recht und Gerichtsstand</h2>
      <p>
        Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts
        (CISG). Für Verbraucher im Sinne des KSchG gelten darüber hinaus die
        zwingenden Bestimmungen des Rechts des Staates, in dem der Verbraucher
        seinen gewöhnlichen Aufenthalt hat.
      </p>
      <p>
        Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit
        diesem Vertrag ist [Ort], Österreich. Gegenüber Verbrauchern gilt
        diese Gerichtsstandsvereinbarung nur, soweit gesetzlich zulässig. Der
        allgemeine Gerichtsstand des Verbrauchers gemäß § 14 KSchG bleibt
        unberührt.
      </p>

      <h2>11. Streitschlichtung</h2>
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
        .
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>12. Salvatorische Klausel</h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so
        bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. An
        die Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem
        wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
      </p>
    </div>
  );
}
