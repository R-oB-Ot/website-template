import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meine Website",
  description: "Beschreibung der Website",
  openGraph: {
    title: "Meine Website",
    description: "Beschreibung der Website",
    type: "website",
    locale: "de_AT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              Logo
            </a>
            <ul className="flex gap-6">
              <li>
                <a href="/" className="hover:underline">
                  Startseite
                </a>
              </li>
              <li>
                <a href="/ueber-uns/" className="hover:underline">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/kontakt/" className="hover:underline">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq/" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8">
          <div className="container mx-auto px-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="/impressum/" className="hover:underline">
              Impressum
            </a>
            <a href="/datenschutz/" className="hover:underline">
              Datenschutz
            </a>
            <a href="/agb/" className="hover:underline">
              AGB
            </a>
            <a href="/cookie-richtlinie/" className="hover:underline">
              Cookie-Richtlinie
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
