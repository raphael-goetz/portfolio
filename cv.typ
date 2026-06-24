#set document(
  title: "Raphael Arun Götz - CV",
  author: "Raphael Arun Götz",
)

#set page(
  paper: "a4",
  margin: (x: 18mm, y: 16mm),
)

#set text(size: 9.7pt, lang: "en")
#set par(leading: 0.58em, spacing: 0.58em, justify: false)

#let accent = rgb("#0d7a65")
#let ink = rgb("#0f2723")
#let muted = rgb("#5d746e")
#let rule-color = rgb("#c9d8d3")

#let section(title) = [
  #v(0.9em)
  #text(fill: accent, weight: 700, size: 8.6pt, tracking: 0.08em, upper(title))
  #v(0.22em)
  #line(length: 100%, stroke: 0.6pt + rule-color)
  #v(0.48em)
]

#let role(title, org, date, body, stack: none) = [
  #grid(
    columns: (1fr, auto),
    gutter: 12pt,
    [#text(weight: 700, size: 10.8pt, title) #text(fill: muted, " / " + org)],
    [#text(fill: muted, size: 8.7pt, date)],
  )
  #v(0.18em)
  #body
  #if stack != none [
    #v(0.16em)
    #text(fill: muted, size: 8.6pt, [Stack: #stack])
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

Backend-focused software engineer specializing in distributed systems, automation platforms, and developer tooling. Experienced in designing microservice architectures, runtime systems, and event-driven infrastructure using Rust, Go, and TypeScript.

#section("Experience")

#role(
  "Founder & Software Architect",
  "CodeZero / Code0 UG",
  "2023 - present",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Founded and built CodeZero, a no-code automation platform enabling teams to create workflow automations and backend APIs without writing code.
    - Designed and implemented the runtime, Rust-first microservices, API architecture, repository ownership, and GitHub-based team workflows.
  ],
  stack: [Rust, Ruby, TypeScript, Docker, gRPC, GraphQL, Tonic, Rails, NATS, Postgres],
)

#v(0.55em)

#role(
  "Technical Lead & Software Architect",
  "o7 Studio OOD",
  "2023 - present",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Planned and developed Octopus independently, an interconnected backend/CMS layer for real-time game infrastructure, service integrations, and cross-server communication.
    - Worked on distributed infrastructure, Go-based proxy systems, event-driven communication, storage, service tooling, and developer-facing platform APIs.
  ],
  stack: [Go, TypeScript, Java, Kotlin, Docker, gRPC, NATS, MongoDB],
)

#v(0.55em)

#role(
  "Dual Student / Software Developer",
  "it factum GmbH",
  "2023 - 2026",
  [
    #set list(marker: [–], indent: 0.85em, body-indent: 0.35em)
    - Developed web applications for external clients across client and server code.
    - Worked across C\#/.NET backends and React/TypeScript frontends.
  ],
  stack: [C\#, .NET, React, TypeScript],
)

#section("Projects")

#role(
  "CodeZero",
  "No-code automation platform",
  "Rust-first",
  [
    Runtime system, microservice architecture, GraphQL APIs, event-driven service communication, workflow execution, and backend endpoint generation.
  ],
)

#v(0.45em)

#role(
  "Octopus",
  "Backend/CMS platform",
  "Go-first",
  [
    Interconnected backend layer for shared game data, cross-server communication, Discord integrations, websites, and service orchestration across the o7 ecosystem.
  ],
)

#section("Skills")

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Core")
    #v(0.3em)
    #pill[Rust]
    #h(4pt)
    #pill[Go]
    #h(4pt)
    #pill[TypeScript]
    #h(4pt)
    #pill[Docker]
    #h(4pt)
    #pill[Postgres]
    #h(4pt)
    #pill[gRPC]
  ],
  [
    #text(weight: 700, "Experienced")
    #v(0.3em)
    #pill[Ruby]
    #h(4pt)
    #pill[Java]
    #h(4pt)
    #pill[Kotlin]
    #h(4pt)
    #pill[GraphQL]
    #h(4pt)
    #pill[MongoDB]
    #h(4pt)
    #pill[C\#/.NET]
  ],
)

#v(0.62em)

#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  [
    #text(weight: 700, "Specializations")
    #v(0.25em)
    Distributed systems, microservices, API design, runtime infrastructure, event-driven architecture, backend services, CLI tools, TUIs.
  ],
  [
    #text(weight: 700, "Other")
    #v(0.25em)
    Docker, NATS, Postgres, MongoDB, GitHub, GitLab. OS: Windows, macOS, Linux. Languages: German L1, English C1.
  ],
)

#section("Education")

#role(
  "Bachelor's Degree, Computer Science",
  "DHSN, Leipzig",
  "2023 - 2026",
  [
    Dual bachelor's degree program alongside professional software development.
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
