#set document(
  title: "Raphael Arun Götz - Lebenslauf",
  author: "Raphael Arun Götz",
)

#set page(
  paper: "a4",
  margin: (x: 17mm, y: 14mm),
  fill: white,
)

#set text(size: 11pt, lang: "de")
#set par(leading: 0.5em, spacing: 0.48em, justify: false)

#let accent = rgb("#0d7a65")
#let ink = rgb("#0f2723")
#let muted = rgb("#5d746e")
#let rule-color = rgb("#c9d8d3")

#let section(title) = [
  #v(1.3em)
  #text(fill: accent, weight: 700, size: 8.6pt, tracking: 0.08em, upper(title))
  #v(0.22em)
  #line(length: 100%, stroke: 0.6pt + rule-color)
  #v(0.48em)
]

#let role(title, org, date, body, stack: none) = [
  #grid(
    columns: (1fr, auto),
    gutter: 12pt,
    [#text(weight: 700, size: 11.2pt, title) #text(fill: muted, " / ") #text(fill: muted, org)],
    [#text(fill: muted, size: 9.2pt, date)],
  )
  #v(0.18em)
  #body
  #if stack != none [
    #v(0.16em)
    #text(fill: muted, size: 9pt, [Stack: #stack])
  ]
]

#let pill(content) = box(
  inset: (x: 6pt, y: 3pt),
  radius: 4pt,
  stroke: 0.5pt + rule-color,
  fill: rgb("#f4fbf8"),
  text(size: 8.4pt, fill: ink, content),
)

#align(center)[
  #text(size: 25.5pt, weight: 700, fill: ink, "Raphael Arun Götz")
  #v(0.22em)
  #text(fill: muted, "Softwareentwickler · Leipzig, Deutschland")
  #v(0.32em)
  #link("mailto:contact@raphael-goetz.de")[contact\@raphael-goetz.de]
  #text(fill: muted, " · ")
  #link("https://raphael-goetz.de")[raphael-goetz.de]
  #text(fill: muted, " · ")
  #link("https://github.com/raphael-goetz")[github.com/raphael-goetz]
]

#v(0.9em)

Backend-fokussierter Softwareentwickler für verteilte Systeme, Automatisierungsplattformen und Entwicklerwerkzeuge mit Rust, Go und TypeScript.

#section("Berufserfahrung")

#role(
  "Softwarearchitekt & technischer Leiter",
  [CodeZero · #link("https://codezero.build")[#text(fill: accent, underline([Website]))]],
  "2023 – heute",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Entwicklung einer No-Code-Plattform für visuelle Workflow-Automatisierung, Backend-APIs und KI-Orchestrierung.
    - Konzeption von Runtime, Rust-basierten Microservices, API-Architektur, Servicegrenzen und ereignisgesteuerter Kommunikation.
    - Verbindung von Produktentwicklung, technischer Planung, Implementierungsaufgaben und GitHub-basierten Teamprozessen.
  ],
  stack: [Rust, TypeScript, Docker, gRPC, GraphQL, Tonic, NATS, Postgres],
)

#v(0.55em)

#role(
  "Technischer Leiter & Softwarearchitekt",
  [o7studios · #link("https://www.o7.studio")[#text(fill: accent, underline([Website]))]],
  "2023 – heute",
  [
    #text(fill: muted)[Minecraft-Entwicklungsstudio für große Server, Live-Events und wiederverwendbare Infrastruktur.]
    #v(0.18em)
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Eigenständige Konzeption und Implementierung von *Octopus*, einer Backend- und CMS-Schicht für Echtzeit-Spielinfrastruktur, Integrationen und serverübergreifende Kommunikation.
    - Eigenständige Konzeption und Implementierung von *Cheetah*, einem Go-basierten Proxy für dynamisches Spieler-Routing und skalierbaren Multi-Server-Betrieb.
    - Verantwortung für die technische Ausrichtung des gesamten Ökosystems, Planung und Delegation weiterer Systeme sowie Unterstützung bei deren Umsetzung.
  ],
  stack: [Go, TypeScript, Java, Kotlin, Docker, gRPC, NATS, MongoDB],
)

#v(0.55em)

#role(
  "Dualer Student / Softwareentwickler",
  [it factum GmbH · #link("https://www.it-factum.de")[#text(fill: accent, underline([Website]))]],
  "2023 – 2026",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Entwicklung von Webanwendungen für externe Kunden mit C\#/.NET-Backends und React-/TypeScript-Frontends.
    - Arbeit an CI/CD-Pipelines mit Azure DevOps.
    - Mitarbeit entlang des Entwicklungsprozesses von Anforderungsaufnahme und Umsetzung bis Review und Wartung.
  ],
  stack: [C\#, .NET, React, TypeScript, Azure DevOps],
)

#section("Skills")

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Systementwicklung")
    #v(0.22em)
    Verteilte Systeme, Microservices, API-Design, Runtime-Infrastruktur, ereignisgesteuerte Architekturen, Backend-Services
  ],
  [
    #text(weight: 700, "Zusammenarbeit")
    #v(0.22em)
    Architekturentscheidungen, technische Planung, Aufgabenzerlegung, Entwicklungskoordination, Abstimmung von Produkt und Technik
  ],
)

#v(0.5em)

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Sprachen & Frameworks")
    #v(0.22em)
    Rust, Go, TypeScript, Java, Kotlin, C\#/.NET, React
  ],
  [
    #text(weight: 700, "Infrastruktur & Daten")
    #v(0.22em)
    Docker, gRPC, GraphQL, NATS, PostgreSQL, MongoDB, GitHub, GitLab
  ],
)

#v(0.45em)
#text(weight: 700, "Arbeitssprachen") Deutsch (Muttersprache), Englisch (C1)

#section("Ausbildung")

#role(
  "Bachelorstudium Informatik",
  "Duale Hochschule Sachsen, Leipzig",
  "2023 – 2026",
  [
    Duales Bachelorstudium parallel zur professionellen Softwareentwicklung.
    #v(0.2em)
    #text(weight: 700, "Bachelorarbeit:") Entwicklung eines Entscheidungsmodells zur Wahl von Web-Rendering-Techniken.
  ],
)

#v(1.05em)

#align(bottom)[#grid(
  columns: (1fr, 150pt),
  gutter: 18pt,
  [
    Leipzig, 16. Juni 2026 \
    Raphael Arun Götz
  ],
  [
    #line(length: 100%, stroke: 0.6pt + rule-color)
    #v(0.18em)
    #text(fill: muted, size: 8.4pt, "Unterschrift")
  ],
)
]
