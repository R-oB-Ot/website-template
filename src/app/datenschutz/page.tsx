import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO",
};

export default function Datenschutz() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-gray max-w-3xl">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        <strong>[Firmenname / Vor- und Nachname]</strong>
        <br />
        [Adresse]
        <br />
        [PLZ Ort], Österreich
        <br />
        E-Mail: [E-Mail-Adresse]
        <br />
        Telefon: [Telefonnummer]
      </p>

      <h2>2. Rechtsgrundlagen</h2>
      <p>
        Wir verarbeiten Ihre personenbezogenen Daten auf Grundlage der
        Datenschutz-Grundverordnung (DSGVO), des österreichischen
        Datenschutzgesetzes (DSG) in der geltenden Fassung sowie des
        Telekommunikationsgesetzes 2021 (TKG 2021). Die Verarbeitung erfolgt je
        nach Sachverhalt auf Basis folgender Rechtsgrundlagen:
      </p>
      <ul>
        <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
        <li>
          Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung bzw. vorvertragliche
          Maßnahmen
        </li>
        <li>Art. 6 Abs. 1 lit. c DSGVO – Rechtliche Verpflichtung</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse</li>
      </ul>

      <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
      <h3>3.1 Beim Besuch der Website</h3>
      <p>
        Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum
        Einsatz kommenden Browser automatisch folgende Informationen an den
        Server unserer Website gesendet:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
        <li>
          Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie
          der Name Ihres Access-Providers
        </li>
      </ul>
      <p>
        Die genannten Daten werden zu folgenden Zwecken verarbeitet:
        Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
        Gewährleistung einer komfortablen Nutzung unserer Website,
        Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
        administrativen Zwecken.
      </p>
      <p>
        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
        DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten
        Zwecken zur Datenerhebung.
      </p>

      <h3>3.2 Bei Nutzung unseres Kontaktformulars</h3>
      <p>
        Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über
        ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei
        ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir
        wissen, von wem die Anfrage stammt und um diese beantworten zu können.
        Weitere Angaben können freiwillig getätigt werden. Die
        Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach
        Art. 6 Abs. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten
        Einwilligung.
      </p>

      <h2>4. Weitergabe von Daten</h2>
      <p>
        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den
        im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre
        persönlichen Daten nur an Dritte weiter, wenn:
      </p>
      <ul>
        <li>
          Sie Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche Einwilligung
          dazu erteilt haben
        </li>
        <li>
          die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
          überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
          Daten haben
        </li>
        <li>
          für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO
          eine gesetzliche Verpflichtung besteht
        </li>
        <li>
          dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO für die
          Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um
        kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem
        Endgerät gespeichert werden, wenn Sie unsere Seite besuchen. Weitere
        Informationen finden Sie in unserer{" "}
        <a href="/cookie-richtlinie/">Cookie-Richtlinie</a>.
      </p>
      <p>
        Gemäß § 165 Abs. 3 TKG 2021 ist für technisch nicht notwendige Cookies
        Ihre vorherige Einwilligung erforderlich.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben das Recht:</p>
      <ul>
        <li>
          gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
          personenbezogenen Daten zu verlangen
        </li>
        <li>
          gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
          Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten
          zu verlangen
        </li>
        <li>
          gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
          personenbezogenen Daten zu verlangen
        </li>
        <li>
          gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen
        </li>
        <li>
          gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem
          strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder
          die Übermittlung an einen anderen Verantwortlichen zu verlangen
          (Datenübertragbarkeit)
        </li>
        <li>
          gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit
          gegenüber uns zu widerrufen
        </li>
        <li>
          gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In
          der Regel können Sie sich hierfür an die Österreichische
          Datenschutzbehörde (DSB), Barichgasse 40–42, 1030 Wien, wenden.
        </li>
      </ul>

      <h2>7. Widerspruchsrecht</h2>
      <p>
        Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
        Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben
        Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung
        Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe
        vorliegen, die sich aus Ihrer besonderen Situation ergeben.
      </p>

      <h2>8. Datensicherheit</h2>
      <p>
        Wir verwenden innerhalb des Website-Besuchs das verbreitete
        SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
        höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
        Wir bedienen uns geeigneter technischer und organisatorischer
        Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche
        Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder
        gegen den unbefugten Zugriff Dritter zu schützen.
      </p>

      <h2>9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Datum].
        Durch die Weiterentwicklung unserer Website und Angebote darüber oder
        aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
        kann es notwendig werden, diese Datenschutzerklärung zu ändern.
      </p>
    </div>
  );
}
