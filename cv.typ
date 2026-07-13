#set document(
  title: "Raphael Arun Götz - CV",
  author: "Raphael Arun Götz",
)

#set page(
  paper: "a4",
  margin: (x: 17mm, y: 14mm),
  fill: white,
)

#set text(size: 11pt, lang: "en")
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
  #text(fill: muted, "Software Engineer · Leipzig, Germany")
  #v(0.32em)
  #link("mailto:contact@raphael-goetz.de")[contact\@raphael-goetz.de]
  #text(fill: muted, " · ")
  #link("https://raphael-goetz.de")[raphael-goetz.de]
  #text(fill: muted, " · ")
  #link("https://github.com/raphael-goetz")[github.com/raphael-goetz]
]

#v(0.9em)

Backend-focused software engineer building distributed systems, automation platforms, and developer tooling with Rust, Go, and TypeScript.

#section("Experience")

#role(
  "Software Architect & Technical Lead",
  [CodeZero · #link("https://codezero.build")[#text(fill: accent, underline([Website]))]],
  "2023 - present",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Built a no-code platform for visual workflow automation, backend APIs, and AI orchestration.
    - Designed its runtime, microservices implemented primarily in Rust, API architecture, service boundaries, and event-driven communication.
    - Connected product direction with technical planning, implementation tasks, and GitHub-based team workflows.
  ],
  stack: [Rust, TypeScript, Docker, gRPC, GraphQL, Tonic, NATS, Postgres],
)

#v(0.55em)

#role(
  "Technical Lead & Software Architect",
  [o7studios · #link("https://www.o7.studio")[#text(fill: accent, underline([Website]))]],
  "2023 - present",
  [
    #text(fill: muted)[Minecraft development studio building large-scale servers, live events, and reusable infrastructure.]
    #v(0.18em)
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Independently designed and implemented *Octopus*, a backend and CMS layer for real-time game infrastructure, integrations, and cross-server communication.
    - Independently designed and implemented *Cheetah*, a Go-based proxy for dynamic player routing and scalable multi-server operation.
    - Owned the technical direction across the wider ecosystem, scoped and delegated work on additional systems, and supported their implementation.
  ],
  stack: [Go, TypeScript, Java, Kotlin, Docker, gRPC, NATS, MongoDB],
)

#v(0.55em)

#role(
  "Dual Student / Software Developer",
  [it factum GmbH · #link("https://www.it-factum.de")[#text(fill: accent, underline([Website]))]],
  "2023 - 2026",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Developed web applications for external clients across C\#/.NET backends and React/TypeScript frontends.
    - Worked on CI/CD pipelines with Azure DevOps.
    - Worked across the delivery cycle from requirements and implementation to review and maintenance.
  ],
  stack: [C\#, .NET, React, TypeScript, Azure DevOps],
)

#section("Skills")

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Systems engineering")
    #v(0.22em)
    Distributed systems, microservices, API design, runtime infrastructure, event-driven architecture, backend services
  ],
  [
    #text(weight: 700, "Collaboration")
    #v(0.22em)
    Architecture decisions, technical planning, task decomposition, engineering coordination, product–engineering alignment
  ],
)

#v(0.5em)

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Languages & frameworks")
    #v(0.22em)
    Rust, Go, TypeScript, Java, Kotlin, C\#/.NET, React
  ],
  [
    #text(weight: 700, "Infrastructure & data")
    #v(0.22em)
    Docker, gRPC, GraphQL, NATS, PostgreSQL, MongoDB, GitHub, GitLab
  ],
)

#v(0.45em)
#text(weight: 700, "Working languages") German (native), English (C1)

#section("Education")

#role(
  "Bachelor's Degree, Computer Science",
  "Duale Hochschule Sachsen, Leipzig",
  "2023 - 2026",
  [
    Dual bachelor's degree program alongside professional software development.
    #v(0.2em)
    #text(weight: 700, "Bachelor's thesis:") Development of a decision model for selecting web rendering techniques.
  ],
)

#v(1.05em)

#align(bottom)[#grid(
  columns: (1fr, 150pt),
  gutter: 18pt,
  [
    Leipzig, June 16, 2026 \
    Raphael Arun Götz
  ],
  [
    #line(length: 100%, stroke: 0.6pt + rule-color)
    #v(0.18em)
    #text(fill: muted, size: 8.4pt, "Signature")
  ],
)
]
