export default function Faq() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">FAQ</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Hier findest du häufig gestellte Fragen und Platzhalter-Antworten.
      </p>
      <div className="space-y-8 max-w-2xl">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Frage 1</h2>
          <p className="text-gray-600">Antwort 1: [Platzhalter]</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Frage 2</h2>
          <p className="text-gray-600">Antwort 2: [Platzhalter]</p>
        </section>
      </div>
    </div>
  );
}
