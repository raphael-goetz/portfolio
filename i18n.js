(function () {
    "use strict";

    const translations = {
        "Portfolio of Raphael Götz, a software engineer focused on backend, services, and product-minded engineering.": "Portfolio von Raphael Götz, einem Softwareentwickler mit Fokus auf Backend-Systeme, Services und produktorientierte Entwicklung.",
        "Portrait of Raphael Götz": "Porträt von Raphael Götz",
        "Dual computer science student at Duale Hochschule Sachsen and software engineer focused on backend systems, services, and practical software development.": "Dualer Informatikstudent an der Dualen Hochschule Sachsen und Softwareentwickler mit Fokus auf Backend-Systeme, Services und praxisnahe Softwareentwicklung.",
        "Primary links": "Wichtige Links",
        "Download CV": "Lebenslauf herunterladen",
        "Contact": "Kontakt",
        "Send email": "E-Mail senden",
        "GitHub profile": "GitHub-Profil",
        "Selected work": "Ausgewählte Arbeiten",
        "Projects": "Projekte",
        "2023 - present": "2023 – heute",
        "2021 - 2023, discontinued": "2021 – 2023, eingestellt",
        "CodeZero is an open-source no-code automation and AI orchestration platform.": "CodeZero ist eine Open-Source-Plattform für No-Code-Automatisierung und KI-Orchestrierung.",
        "o7studios builds large-scale Minecraft servers, events, and reusable developer tooling.": "o7studios entwickelt große Minecraft-Server, Events und wiederverwendbare Werkzeuge für Entwickler.",
        "Uroria Network was a Minecraft server project focused on user experience.": "Uroria Network war ein Minecraft-Serverprojekt mit Fokus auf Benutzererlebnis.",
        "Read project notes": "Projekt ansehen",
        "View project": "Projekt ansehen",
        "About": "Über mich",
        "I got into programming through Minecraft projects because they made ideas feel immediate. I could build something, let people use it, and quickly see what worked. That practical way of learning still shapes how I approach backend services, tools, and project work today.": "Durch Minecraft-Projekte bin ich zum Programmieren gekommen, weil sich Ideen damit unmittelbar umsetzen ließen. Ich konnte etwas entwickeln, Menschen konnten es nutzen und ich sah schnell, was funktionierte. Diese praktische Art zu lernen prägt bis heute, wie ich Backend-Services, Werkzeuge und Projekte angehe.",
        "Location and tech stack": "Standort und Tech-Stack",
        "Based in Leipzig, Germany": "In Leipzig zuhause",
        "Map centered on Leipzig": "Karte mit Leipzig im Zentrum",
        "Core stack": "Kerntechnologien",
        "Core stack ranking": "Rangfolge der Kerntechnologien",
        "Second-place pillar": "Säule für den zweiten Platz",
        "First-place pillar": "Säule für den ersten Platz",
        "Third-place pillar": "Säule für den dritten Platz",
        "Legal and copyright": "Rechtliches und Copyright",
        "Legal": "Rechtliches",
        "Imprint": "Impressum",
        "Privacy Policy": "Datenschutz",
        "Home": "Startseite",
        "Project navigation": "Projektnavigation",
        "Back to projects": "Zurück zu den Projekten",
        "Back to home": "Zurück zur Startseite",
        "Go back": "Zurück",
        "Visit site": "Website besuchen",
        "Visit website": "Website besuchen",
        "General project infos": "Projektüberblick",
        "My role": "Meine Rolle",
        "Details": "Details",
        "Role": "Rolle",
        "Product surface": "Produktumfang",
        "Deployment": "Bereitstellung",
        "Work": "Aufgaben",
        "Source": "Quelle",
        "Status": "Status",
        "Scale": "Größe",

        "Project notes for CodeZero, an open-source no-code automation and AI orchestration platform.": "Projektbeschreibung zu CodeZero, einer Open-Source-Plattform für No-Code-Automatisierung und KI-Orchestrierung.",
        "CodeZero is an open-source no-code automation platform for building workflows, backend endpoints, and AI orchestration without writing every integration from scratch.": "CodeZero ist eine Open-Source-No-Code-Plattform, mit der sich Workflows, Backend-Endpunkte und KI-Orchestrierungen erstellen lassen, ohne jede Integration von Grund auf programmieren zu müssen.",
        "CodeZero landing page preview": "Vorschau der CodeZero-Startseite",
        "CodeZero is an open-source no-code automation and AI orchestration platform. The project is built around visual flows that can connect integrations, automate operational work, and expose backend logic without requiring every workflow to be implemented by hand.": "CodeZero ist eine Open-Source-Plattform für No-Code-Automatisierung und KI-Orchestrierung. Im Mittelpunkt stehen visuelle Abläufe, die Integrationen verbinden, operative Aufgaben automatisieren und Backend-Logik bereitstellen, ohne jeden Workflow von Hand implementieren zu müssen.",
        "The product direction is broader than a simple flow editor. CodeZero includes projects and organizations, custom roles, runtime types, nodes, variables, actions, and multiple deployment models: managed cloud hosting, self-hosting, and dynamic hosting where the editor and runtime can be separated.": "Das Produkt geht über einen einfachen Flow-Editor hinaus. CodeZero umfasst Projekte und Organisationen, individuelle Rollen, Runtime-Typen, Nodes, Variablen, Aktionen sowie mehrere Bereitstellungsmodelle: verwaltetes Cloud-Hosting, Self-Hosting und dynamisches Hosting mit getrenntem Editor und Runtime.",
        "Typical use cases include logistics automation, Discord chatbot building, AI automation, and custom integrations. The platform is meant to make complex automation approachable while still leaving room for teams to run and scale workflows in a controlled environment.": "Typische Anwendungsfälle sind Logistikautomatisierung, Discord-Chatbots, KI-Automatisierung und individuelle Integrationen. Die Plattform macht komplexe Automatisierungen zugänglich und gibt Teams gleichzeitig die Kontrolle, Workflows zuverlässig zu betreiben und zu skalieren.",
        "I am a co-founder and co-CEO of CodeZero. My work combines product direction, technical architecture, backend engineering, and coordination of engineering tasks across the team.": "Ich bin Mitgründer und Co-CEO von CodeZero. Meine Arbeit verbindet Produktentwicklung, technische Architektur, Backend-Engineering und die Koordination der Entwicklungsaufgaben im Team.",
        "On the technical side, I plan services and APIs, define implementation work, review technical direction, and keep the engineering workflow organized through GitHub. The goal is to keep product decisions, architecture, and concrete development tasks connected instead of treating them as separate layers.": "Auf technischer Seite plane ich Services und APIs, definiere Implementierungsaufgaben, prüfe die technische Ausrichtung und organisiere den Entwicklungsprozess über GitHub. Ziel ist es, Produktentscheidungen, Architektur und konkrete Entwicklungsaufgaben eng miteinander zu verbinden.",
        "Co-founder, co-CEO, technical architect, software engineer": "Mitgründer, Co-CEO, technischer Architekt, Softwareentwickler",
        "Primarily Rust; secondarily Ruby and TypeScript. Docker, gRPC, GraphQL, Tonic, Rails, NATS, Postgres.": "Primär Rust, ergänzend Ruby und TypeScript. Docker, gRPC, GraphQL, Tonic, Rails, NATS und Postgres.",
        "Visual workflow building, backend endpoints, AI orchestration, integrations, projects, organizations, custom roles, runtime types, nodes, variables, and actions.": "Visuelle Workflows, Backend-Endpunkte, KI-Orchestrierung, Integrationen, Projekte, Organisationen, individuelle Rollen, Runtime-Typen, Nodes, Variablen und Aktionen.",
        "Managed cloud hosting, self-hosting, and dynamic hosting with separate editor and runtime responsibilities.": "Verwaltetes Cloud-Hosting, Self-Hosting und dynamisches Hosting mit getrennten Verantwortlichkeiten für Editor und Runtime.",
        "Technical architecture, service planning, API planning, runtime infrastructure, backend engineering, engineering task coordination, and GitHub-based planning workflows.": "Technische Architektur, Service- und API-Planung, Runtime-Infrastruktur, Backend-Engineering, Aufgabenkoordination und GitHub-basierte Planungsprozesse.",

        "Project notes for o7studios, a Minecraft development studio for large-scale servers, live events, and developer tooling.": "Projektbeschreibung zu o7studios, einem Minecraft-Entwicklungsstudio für große Server, Live-Events und Entwicklerwerkzeuge.",
        "o7studios is a Minecraft development studio building large-scale servers, live events, creator experiences, and an ecosystem of tools for professional Minecraft development.": "o7studios ist ein Minecraft-Entwicklungsstudio für große Server, Live-Events, Creator-Erlebnisse und ein Ökosystem professioneller Entwicklungswerkzeuge.",
        "o7studios landing page preview": "Vorschau der o7studios-Startseite",
        "o7studios is a Minecraft development studio focused on large-scale servers, live events, creator experiences, and reusable infrastructure for professional Minecraft projects. The work is not only about individual plugins; the studio also builds the surrounding ecosystem needed to develop, run, and scale servers faster.": "o7studios ist ein Minecraft-Entwicklungsstudio mit Fokus auf große Server, Live-Events, Creator-Erlebnisse und wiederverwendbare Infrastruktur für professionelle Minecraft-Projekte. Neben einzelnen Plugins entsteht das gesamte Ökosystem, das benötigt wird, um Server schneller zu entwickeln, zu betreiben und zu skalieren.",
        "The ecosystem consists of several technical products. Octopus is a backend and cross-server communication layer for Minecraft networks and related services such as websites or Discord bots. Megalodon is a Paper plugin development framework with game-state, GUI, messaging, border, storage, spectator, addon, and ecosystem-integration tooling. Cheetah is a cloud-native Minecraft reverse proxy for dynamic player routing, Kubernetes-oriented operation, multi-server setups, and crossplay.": "Das Ökosystem besteht aus mehreren technischen Produkten. Octopus ist eine Backend- und serverübergreifende Kommunikationsschicht für Minecraft-Netzwerke und angebundene Dienste wie Websites oder Discord-Bots. Megalodon ist ein Paper-Plugin-Framework mit Werkzeugen für Spielzustände, GUIs, Messaging, Begrenzungen, Speicher, Zuschauersysteme, Add-ons und Ökosystem-Integrationen. Cheetah ist ein cloudnativer Minecraft-Reverse-Proxy für dynamisches Spieler-Routing, Kubernetes-orientierten Betrieb, Multi-Server-Setups und Crossplay.",
        "Together these tools reduce repeated infrastructure work. Server teams can focus more on gameplay, events, and creator-specific features instead of rebuilding backend communication, plugin foundations, and routing logic for every project.": "Zusammen reduzieren diese Werkzeuge wiederkehrende Infrastrukturarbeit. Serverteams können sich stärker auf Gameplay, Events und Creator-spezifische Funktionen konzentrieren, statt Backend-Kommunikation, Plugin-Grundlagen und Routing-Logik für jedes Projekt neu aufzubauen.",
        "Backend and cross-server communication layer for shared game data, real-time events, mTLS-secured clients, backups, Kubernetes deployment, and SDK usage across Java, Go, and TypeScript.": "Backend- und serverübergreifende Kommunikationsschicht für gemeinsame Spieldaten, Echtzeit-Events, mTLS-gesicherte Clients, Backups, Kubernetes-Deployments und SDKs für Java, Go und TypeScript.",
        "Paper plugin development framework with tooling for game states, GUIs, messaging, storage, borders, spectator systems, addons, and ecosystem integration.": "Paper-Plugin-Framework mit Werkzeugen für Spielzustände, GUIs, Messaging, Speicher, Begrenzungen, Zuschauersysteme, Add-ons und Ökosystem-Integration.",
        "Go-based Minecraft proxy for dynamic player routing, live transfers, Kubernetes-native scaling, multi-server operation, and Java/Bedrock crossplay.": "Go-basierter Minecraft-Proxy für dynamisches Spieler-Routing, Live-Transfers, Kubernetes-native Skalierung, Multi-Server-Betrieb und Java-/Bedrock-Crossplay.",
        "I led the technical engineering work for the o7studios ecosystem. That included the full planning, concept, and engineering direction for Octopus and Cheetah, as well as managing and planning the work around Megalodon.": "Ich leitete die technische Entwicklung des o7studios-Ökosystems. Dazu gehörten die vollständige Planung, Konzeption und technische Ausrichtung von Octopus und Cheetah sowie die Planung und Koordination der Arbeiten an Megalodon.",
        "Compared to CodeZero, where I planned selected services, o7 required full technical ownership of the engineering track. I planned the architecture, broke down implementation tasks, coordinated the work of my developer partners, and kept the backend, proxy, and Minecraft tooling pieces aligned as one system.": "Im Gegensatz zu CodeZero, wo ich ausgewählte Services plante, erforderte o7 die vollständige technische Verantwortung für die Entwicklung. Ich entwarf die Architektur, zerlegte sie in Implementierungsaufgaben, koordinierte meine Entwicklungspartner und hielt Backend, Proxy und Minecraft-Werkzeuge als Gesamtsystem aufeinander abgestimmt.",
        "Technical engineering lead, software engineer": "Technischer Entwicklungsleiter, Softwareentwickler",
        "Primarily Go; also TypeScript and Java/Kotlin. Docker, gRPC, NATS, MongoDB.": "Primär Go, außerdem TypeScript und Java/Kotlin. Docker, gRPC, NATS und MongoDB.",
        "Large-scale Minecraft servers, live events, backend services, cross-server communication, Paper plugin tooling, reverse proxy infrastructure, and creator-facing development work.": "Große Minecraft-Server, Live-Events, Backend-Services, serverübergreifende Kommunikation, Paper-Plugin-Werkzeuge, Reverse-Proxy-Infrastruktur und Entwicklung für Creator.",
        "Technical planning and architecture for Octopus and Cheetah, Megalodon planning and task management, engineering-team coordination, Go services, Java/Kotlin Minecraft tooling, service communication, CLI tools, and TUIs.": "Technische Planung und Architektur für Octopus und Cheetah, Planung und Aufgabenverwaltung für Megalodon, Teamkoordination, Go-Services, Minecraft-Werkzeuge mit Java/Kotlin, Servicekommunikation, CLI-Werkzeuge und TUIs.",

        "Project notes for Uroria Network, a discontinued Minecraft server project.": "Projektbeschreibung zu Uroria Network, einem eingestellten Minecraft-Serverprojekt.",
        "Uroria was a Minecraft server project focused on user experience, original game concepts, and learning the fundamentals of Java-based server development.": "Uroria war ein Minecraft-Serverprojekt mit Fokus auf Benutzererlebnis, eigenen Spielkonzepten und dem Erlernen der Grundlagen Java-basierter Serverentwicklung.",
        "Uroria Network was a Minecraft server project focused on custom game concepts, player experience, and learning how to run a small online project with real users. It was not a polished commercial product, but it was the first environment where programming became practical for me.": "Uroria Network war ein Minecraft-Serverprojekt mit eigenen Spielkonzepten, Fokus auf das Spielerlebnis und der Herausforderung, ein kleines Onlineprojekt mit echten Nutzern zu betreiben. Es war kein ausgereiftes kommerzielles Produkt, aber das erste Umfeld, in dem Programmieren für mich praktisch wurde.",
        "The project involved Java-based server development, plugin work, server operation, and early product thinking around how players discover, understand, and keep using a game mode. It is the starting point for the later backend and infrastructure work in this portfolio.": "Das Projekt umfasste Java-basierte Serverentwicklung, Plugin-Arbeit, Serverbetrieb und erste Produktüberlegungen dazu, wie Spieler einen Spielmodus entdecken, verstehen und dauerhaft nutzen. Es bildet den Ausgangspunkt für die spätere Backend- und Infrastrukturarbeit in diesem Portfolio.",
        "At its largest point, the project had a team of up to 22 people, reached a record of 100 concurrent players, and accumulated multiple thousands of individual registrations.": "In seiner größten Phase bestand das Team aus bis zu 22 Personen, erreichte einen Höchststand von 100 gleichzeitigen Spielern und mehrere tausend individuelle Registrierungen.",
        "I founded and developed the project. That meant turning game ideas into playable server features, coordinating a small team, working with Java plugins, and learning how technical decisions affect the player experience directly.": "Ich gründete und entwickelte das Projekt. Dazu gehörten die Umsetzung von Spielideen in spielbare Serverfunktionen, die Koordination eines kleinen Teams, die Arbeit mit Java-Plugins und die Erfahrung, wie sich technische Entscheidungen direkt auf das Spielerlebnis auswirken.",
        "Uroria was also where I first had to think beyond code: planning features, managing the server, reacting to feedback, and keeping a project organized enough that other people could contribute.": "Bei Uroria musste ich erstmals über den Code hinausdenken: Funktionen planen, den Server verwalten, auf Feedback reagieren und das Projekt so organisieren, dass andere daran mitarbeiten konnten.",
        "Founder / developer": "Gründer / Entwickler",
        "Java-based Minecraft server development.": "Java-basierte Minecraft-Serverentwicklung.",
        "Discontinued. The project ran from 2021 to 2023.": "Eingestellt. Das Projekt lief von 2021 bis 2023.",
        "Up to 22 team members, 100 concurrent players at peak, and multiple thousands of individual registrations.": "Bis zu 22 Teammitglieder, 100 gleichzeitige Spieler in der Spitze und mehrere tausend individuelle Registrierungen.",
        "Game concepts, plugin development, server operation, project planning, feedback handling, and team coordination.": "Spielkonzepte, Plugin-Entwicklung, Serverbetrieb, Projektplanung, Feedbackbearbeitung und Teamkoordination."
    };

    const normalize = (value) => value.replace(/\s+/g, " ").trim();
    const originals = new WeakMap();

    function translateTextNodes(locale) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && node.parentElement.closest(".language-switch")) continue;
            if (!originals.has(node)) originals.set(node, node.nodeValue);
            const original = originals.get(node);
            const key = normalize(original);
            if (!key || !translations[key]) {
                node.nodeValue = original;
                continue;
            }
            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];
            node.nodeValue = locale === "de" ? leading + translations[key] + trailing : original;
        }
    }

    function translateAttributes(locale) {
        ["aria-label", "alt", "title"].forEach((attribute) => {
            document.querySelectorAll("[" + attribute + "]").forEach((element) => {
                const storageAttribute = "data-i18n-" + attribute;
                if (!element.hasAttribute(storageAttribute)) {
                    element.setAttribute(storageAttribute, element.getAttribute(attribute));
                }
                const original = element.getAttribute(storageAttribute);
                element.setAttribute(attribute, locale === "de" && translations[original] ? translations[original] : original);
            });
        });
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            if (!description.dataset.i18nContent) description.dataset.i18nContent = description.content;
            description.content = locale === "de" && translations[description.dataset.i18nContent]
                ? translations[description.dataset.i18nContent]
                : description.dataset.i18nContent;
        }
    }

    function setLocale(locale, persist) {
        locale = locale === "de" ? "de" : "en";
        if (persist) localStorage.setItem("portfolio-locale", locale);
        document.documentElement.lang = locale;
        window.portfolioLocale = locale;
        translateTextNodes(locale);
        translateAttributes(locale);
        document.querySelectorAll(".language-switch__option").forEach((button) => {
            const active = button.dataset.locale === locale;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
        const cv = document.querySelector('a[download][href*="cv-raphael-goetz"]');
        if (cv) cv.href = locale === "de"
            ? cv.getAttribute("href").replace(/(?:-de)?\.pdf$/, "-de.pdf")
            : cv.getAttribute("href").replace(/-de\.pdf$/, ".pdf");
        window.dispatchEvent(new CustomEvent("portfolio:locale", { detail: { locale } }));
    }

    function createSwitch() {
        const nav = document.createElement("nav");
        nav.className = "language-switch";
        nav.setAttribute("aria-label", "Language / Sprache");
        nav.innerHTML = '<button class="language-switch__option" type="button" data-locale="en">EN</button><span aria-hidden="true">/</span><button class="language-switch__option" type="button" data-locale="de">DE</button>';
        nav.addEventListener("click", (event) => {
            const button = event.target.closest("[data-locale]");
            if (button) setLocale(button.dataset.locale, true);
        });
        const skipLink = document.querySelector(".skip-link");
        if (skipLink) {
            skipLink.after(nav);
        } else {
            document.body.prepend(nav);
        }
    }

    function prepareExternalLinks() {
        document.querySelectorAll("a[href]").forEach((link) => {
            const url = new URL(link.href, window.location.href);
            if ((url.protocol === "http:" || url.protocol === "https:") && url.origin !== window.location.origin) {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }
        });
    }

    function setupPagePreviews() {
        const prepared = new Set();
        document.querySelectorAll("[data-prefetch]").forEach((link) => {
            link.addEventListener("pointerenter", () => {
                const url = new URL(link.href, window.location.href);
                if (prepared.has(url.href)) return;
                prepared.add(url.href);

                if (HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
                    const rules = document.createElement("script");
                    rules.type = "speculationrules";
                    rules.textContent = JSON.stringify({
                        prerender: [{ urls: [url.href], eagerness: "immediate" }],
                    });
                    document.head.appendChild(rules);
                } else {
                    fetch(url.href, { priority: "low" }).catch(() => {});
                }
            }, { once: true });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        createSwitch();
        prepareExternalLinks();
        setupPagePreviews();
        const saved = localStorage.getItem("portfolio-locale");
        const initial = saved || (navigator.language.toLowerCase().startsWith("de") ? "de" : "en");
        setLocale(initial, false);
    });
})();
