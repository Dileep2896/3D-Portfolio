import { FaCode, FaRocket, FaClock } from "react-icons/fa";
import {
  FaUniversity,
  FaBrain,
  FaVrCardboard,
  FaBolt,
  FaChargingStation,
  FaGamepad,
  FaMobileAlt,
  FaChartLine,
  FaRunning,
  FaAndroid,
  FaHeart,
  FaUsers,
  FaLaptopCode,
  FaRobot,
  FaCogs,
  FaMobile,
} from "react-icons/fa";

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const words = [
  "Full-Stack Web Apps",
  "Flutter Applications",
  "Modern Android Apps",
  "Production-Ready Code",
  "Full-Stack Web Apps",
  "Flutter Applications",
  "Modern Android Apps",
  "Production-Ready Code",
];

const counterItems = [
  { value: 8, suffix: "", label: "Years of Development" },
  {
    value: 1.5,
    suffix: "M",
    prefix: "$",
    label: "Startup Valuation",
  },
  { value: 3, suffix: "", label: "Internship Experience" },
  { value: 50, suffix: "+", label: "Projects Built" },
  { value: 12, suffix: "x", label: "Hackathon Winner" },
];

const projects = [
  {
    title: "Reveria — Voice-Driven AI Storybook Generator",
    slug: "reveria",
    description:
      "A real-time AI storybook platform where you co-direct illustrated stories with a Gemini Live voice agent — narration, art, and audio stream in scene-by-scene.",
    fullDescription:
      "Reveria turns a single prompt into a fully illustrated, multi-voice audiobook in seconds. Built on Google Gemini 2.x with native interleaved text-and-image output, the platform streams each scene as it's written — image, narration, and audio generated in parallel. A voice-first Director Chat powered by the Gemini Live API lets you brainstorm and steer the story mid-flight through natural conversation. Under the hood: a Google ADK agent pipeline, Vertex AI Imagen, multi-voice TTS, visual-DNA character anchoring for cross-scene consistency, and a resilient FastAPI WebSocket backend deployed on Cloud Run.",
    features: [
      "Voice-driven Director Chat — brainstorm with Gemini Live native audio, with native tool calling so the model decides when to start generating",
      "Native interleaved text + image generation (Gemini 2.x TEXT+IMAGE modality) with Imagen fallback",
      "Per-scene streaming pipeline — images, narration, and TTS audio fire in parallel as each scene completes",
      "Visual DNA character anchoring keeps faces, outfits, and color palettes consistent across scenes",
      "Multi-voice TTS narration with per-character voices and proportional silence on segment failure",
      "Real-time WebSocket session with mid-generation steering and live Director commentary",
      "Social features: public Explore feed, ratings, comments, likes, and PDF export",
      "Production resilience: per-user circuit breakers, atomic Firestore transactions, retry-with-jitter, GCS signed-URL fallback",
    ],
    image: "/images/projects/reveria.jpg",
    video: "https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID",
    gallery: [
      "/images/projects/reveria/02-story-generation.jpg",
      "/images/projects/reveria/04-director-chat.jpg",
      "/images/projects/reveria/01-template-chooser.jpg",
      "/images/projects/reveria/03-book-details.jpg",
      "/images/projects/reveria/06-explore-page.jpg",
      "/images/projects/reveria/05-subscription-usage.jpg",
      "/images/projects/reveria/07-settings-dialog.jpg",
      "/images/projects/reveria/system-architecture.jpg",
      "/images/projects/reveria/director-chat-flow.jpg",
    ],
    github: "https://github.com/Dileep2896/reveria",
    demo: null,
    tech: [
      "React",
      "FastAPI",
      "Gemini Live API",
      "Vertex AI (Imagen)",
      "Google ADK",
      "Firestore",
      "Cloud Run",
      "WebSockets",
    ],
    metrics: "Built for the Gemini Live Agent Hackathon",
    bg: "bg-[#ede2ff]",
    gridSize: "large",
  },
  {
    title: "Protégé — The Classmate You Have to Teach",
    slug: "protege",
    description:
      "An AI classmate with real misconceptions that students must teach — a hidden evaluator only marks understanding 'resolved' when the explanation contains an actual causal mechanism.",
    fullDescription:
      "Protégé flips assessment on its head: instead of quizzing students, it gives every student an AI protégé (like Maya Chen, a 7th grader with authentic misconceptions and long-term memory) whom they must teach. A hidden strict evaluator only marks a misconception resolved when the student's explanation contains a real causal mechanism — and every resolution is receipted with a verbatim quote of the student's own words. Teachers get a self-filling gradebook with misconception-level evidence, mastery bars, and reteach lists. Built for the Reinvented Education hackathon (TAL × EverMind) with live voice calls, a vision-enabled whiteboard, AI-generated illustrated courses, and a Neo4j prerequisite knowledge graph.",
    features: [
      "AI classmate personas with persistent memory and authentic, curriculum-mapped misconceptions",
      "Strict hidden evaluator — misconceptions only resolve on causal-mechanism explanations, never sweet-talk",
      "Evidence receipts: every resolved misconception cites the student's verbatim explanation",
      "Self-filling teacher gradebook with class mastery, teaching-skill estimates, and reteach lists",
      "Live voice teaching calls with whiteboard and vision understanding",
      "AI-generated illustrated courses and learn decks for any curiosity topic",
      "Neo4j prerequisite knowledge graph drives what the protégé is ready to learn next",
    ],
    image: "/images/projects/protege.webp",
    gallery: [
      "/images/projects/protege/01-landing.webp",
      "/images/projects/protege/02-classroom.webp",
      "/images/projects/protege/03-course.webp",
      "/images/projects/protege/04-teach.webp",
      "/images/projects/protege/05-gradebook.webp",
    ],
    github: "https://github.com/Dileep2896/protege",
    demo: "https://milo.butterbase.dev",
    tech: [
      "React",
      "Vite",
      "Claude Sonnet",
      "Butterbase",
      "Neo4j",
      "EverMind Memory",
      "Voice AI",
    ],
    metrics: "Built for the Reinvented Education Hackathon (TAL × EverMind)",
    bg: "bg-[#fdf3d8]",
    gridSize: "large",
  },
  {
    title: "Sub Rosa — On-Device AI Legal Consultation Notes",
    slug: "subrosa",
    description:
      "A fully offline Android app that records a lawyer's client consultation, transcribes and diarizes it on-device, and runs a local LLM on the Snapdragon NPU to extract facts with verbatim supporting quotes.",
    fullDescription:
      "Sub Rosa is an on-device AI note-taker for a lawyer's first client consultation, built for the Qualcomm × Meta ExecuTorch Hackathon. It records the conversation, transcribes it locally with Whisper, separates speakers, and runs Qwen3-1.7B via ExecuTorch on the Snapdragon Hexagon NPU to produce three outputs: extracted facts each paired with a verbatim supporting quote, a set-difference of missing information against a human-authored intake checklist, and neutral follow-up questions. Privacy is structural, not a promise — the app declares no INTERNET permission, never persists audio, and encrypts everything at rest with AES-256-GCM. The model is treated as a reasoning engine over provided text, never a knowledge source: all legal scaffolding lives in auditable checklist files.",
    features: [
      "100% on-device pipeline — the app has no INTERNET permission, so nothing can leave the phone",
      "Qwen3-1.7B running on the Snapdragon Hexagon NPU via ExecuTorch + Qualcomm QNN (~30 tokens/sec)",
      "On-device Whisper transcription with speaker diarization (lawyer vs. client sorted automatically)",
      "Every extracted fact is paired with a verbatim quote from the transcript — no hallucinated facts",
      "Intake-gap analysis: computes what's still missing against an auditable legal checklist",
      "Sealed, encrypted case records (AES-256-GCM) with PDF report export",
      "Model as reasoning engine, never knowledge source — legal logic lives in reviewable data files",
    ],
    image: "/images/projects/subrosa.webp",
    gallery: [
      "/images/projects/subrosa/01-cover.webp",
      "/images/projects/subrosa/04-sealing-npu.webp",
      "/images/projects/subrosa/05-transcript.webp",
      "/images/projects/subrosa/06-first-pass.webp",
      "/images/projects/subrosa/07-record-complete.webp",
      "/images/projects/subrosa/08-pdf-report.webp",
      "/images/projects/subrosa/03-client-detail.webp",
      "/images/projects/subrosa/02-clients.webp",
    ],
    github: "https://github.com/Dileep2896/sub-rosa-executorch",
    demo: null,
    tech: [
      "Android (Kotlin)",
      "Jetpack Compose",
      "ExecuTorch",
      "Qualcomm QNN / Hexagon NPU",
      "Whisper.cpp",
      "sherpa-onnx",
    ],
    metrics: "Built for the Qualcomm × Meta ExecuTorch Hackathon",
    bg: "bg-[#f3e7e4]",
    gridSize: "large",
  },
  {
    title: "Arbiter — Fine-Grained Authorization for AI Agents",
    slug: "arbiter",
    description:
      "A policy proxy that sits between AI agents and real APIs — allowing, denying, or escalating every action to human step-up approval, with a live audit dashboard.",
    fullDescription:
      "Arbiter answers a question OAuth can't: your agent has a token with repo scope, but should it be allowed to force-push to main at 2am? Built for the Auth0 'Authorized to Act' hackathon, Arbiter sits as a proxy between AI agents and downstream APIs (GitHub, Slack, Jira, Gmail) and enforces per-agent YAML policies on top of broad OAuth scopes. Safe reads pass through, destructive actions are denied outright, and high-risk actions trigger an Auth0 CIBA step-up request that a human approves or denies from a real-time dashboard. Agents retrieve tokens through Auth0 Token Vault so they never see raw credentials, and every decision lands in an append-only audit log streamed live over WebSockets.",
    features: [
      "Policy engine with deny → step-up → allow evaluation and default-deny for unmatched actions",
      "Human-in-the-loop step-up approvals (Auth0 CIBA) with live countdown and one-click approve/deny",
      "Auth0 Token Vault integration — agents act with real tokens they never get to see",
      "Live audit feed dashboard streaming every agent action over WebSockets",
      "Works as an MCP server or plain HTTP proxy, so any agent framework can plug in",
      "Append-only SQLite audit log with decision, outcome, and CIBA request ID per action",
    ],
    image: "/images/projects/arbiter.webp",
    gallery: [
      "/images/projects/arbiter/02-feed.webp",
      "/images/projects/arbiter/01-agents.webp",
      "/images/projects/arbiter/03-approvals.webp",
    ],
    github: null,
    demo: null,
    tech: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "Auth0 Token Vault",
      "Auth0 CIBA",
      "MCP",
      "WebSockets",
      "SQLite",
    ],
    metrics: "Built for the Auth0 'Authorized to Act' Hackathon",
    bg: "bg-[#e6e0f5]",
    gridSize: "medium",
  },
  {
    title: "VisaPath — AI Immigration Timeline Planner",
    slug: "visapath",
    description:
      "A personalized immigration roadmap for international students — 56 hardcoded USCIS rules + Gemini turn your exact situation into a deadline-aware timeline with risk alerts.",
    fullDescription:
      "VisaPath helps the 1M+ international students in the US track every visa deadline, risk, and milestone in one personalized timeline. After a 4-step onboarding (visa type, degree, STEM status, grad date, country, career goal), the backend combines 56 hardcoded USCIS rules, filing fees, H-1B lottery statistics, and country-specific green-card backlogs into a prompt, and Gemini 2.5 Flash returns a structured JSON roadmap from OPT through STEM OPT, H-1B, and green card. A Risk Analyzer warns about CPT overuse, wage-level lottery odds, and India/China backlogs; an AI chat grounded in 8 USCIS documents via RAG (ChromaDB + LangChain) answers questions with citations; and a What-If Simulator replays the timeline under different choices. Built solo for DevDash 2026.",
    features: [
      "AI-generated personalized timeline with urgency-coded milestones and day-countdown ring",
      "Risk Analyzer: wage-level H-1B lottery odds, CPT overuse, and per-country green-card backlog warnings",
      "RAG-grounded AI chat over embedded USCIS documentation (ChromaDB + Gemini embeddings)",
      "What-If Simulator to replay the roadmap under different degree/employer/country choices",
      "Document tracker and AI tax guide tailored to visa status",
      "JWT auth, demo mode for instant exploration, and cached timelines for instant return visits",
    ],
    image: "/images/projects/visapath.webp",
    video: "https://www.youtube.com/embed/ejIOkEDnoI4",
    gallery: [
      "/images/projects/visapath/timeline.webp",
      "/images/projects/visapath/risk-alerts.webp",
      "/images/projects/visapath/ai-chat.webp",
      "/images/projects/visapath/action-items.webp",
      "/images/projects/visapath/documents.webp",
      "/images/projects/visapath/tax-guide.webp",
      "/images/projects/visapath/login.webp",
      "/images/projects/visapath/architecture.webp",
    ],
    github: "https://github.com/Dileep2896/visapath",
    demo: null,
    tech: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "Gemini 2.5 Flash",
      "ChromaDB",
      "LangChain",
      "Azure",
    ],
    metrics: "Built solo for DevDash 2026",
    bg: "bg-[#d8f0e8]",
    gridSize: "large",
  },
  {
    title: "PromptDeck — AI Command Center for Logitech MX",
    slug: "promptdeck",
    description:
      "Turns the Logitech MX Creative Console into a context-aware AI controller — 9 LCD keys repopulate with app-specific AI actions, and the dial becomes analog control over AI output depth.",
    fullDescription:
      "PromptDeck reimagines the Logitech MX Creative Console as an AI command center. It detects your active desktop app and repopulates the console's 9 LCD buttons with app-specific AI actions — refactor and test in VS Code, summarize in Chrome, generate variants in Figma, draft replies in Slack, explain formulas in Excel. The MX dial becomes something new: continuous analog control over how deep the AI goes, from one-liner to exhaustive analysis. The MX Master4 Actions Ring triggers select-and-transform on any highlighted text, and one press can run an entire macro chain (capture → analyze → report → send). Built for the Logitech Hackathon 2026 as a fully interactive simulation with 135 pre-authored AI outputs across 5 apps × 9 buttons × 3 dial depths.",
    features: [
      "Context-aware button grid — 9 LCD keys swap AI actions the moment you switch apps",
      "AI dial: analog control over output depth (quick → standard → maximum detail)",
      "Actions Ring select-and-transform on any highlighted text",
      "One-press macro chains that pipeline multiple AI steps",
      "5 app profiles: VS Code, Chrome, Figma, Slack, Excel",
      "Interactive hardware simulation in the browser — no console required to try it",
    ],
    image: "/images/projects/promptdeck.webp",
    gallery: [
      "/images/projects/promptdeck/dashboard-vscode.webp",
      "/images/projects/promptdeck/dashboard-figma.webp",
      "/images/projects/promptdeck/tour-smart-buttons.webp",
      "/images/projects/promptdeck/tour-ai-dial.webp",
      "/images/projects/promptdeck/tour-macro-chain.webp",
      "/images/projects/promptdeck/tour-actions-ring.webp",
      "/images/projects/promptdeck/tour-ai-results.webp",
      "/images/projects/promptdeck/tour-active-app.webp",
    ],
    github: "https://github.com/Dileep2896/dev-studio-hack",
    demo: "https://dev-studio-hack.vercel.app",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Vercel"],
    metrics: "Built for the Logitech Hackathon 2026",
    bg: "bg-[#dde7f7]",
    gridSize: "medium",
  },
  {
    title: "VeriGraph — Papers to Executable Evidence",
    slug: "verigraph",
    description:
      "Reads research papers into a Neo4j knowledge graph, surfaces where they contradict each other, then actually runs the experiments in cloud sandboxes to validate or refute claims.",
    fullDescription:
      "VeriGraph (Paper→Results Graph) turns research papers into executable evidence. It ingests papers from arXiv links or PDFs, extracts claims, methods, and experiment parameters into a Neo4j knowledge graph, and draws CONTRADICTS edges where papers disagree. The novel part: press RUN on any method and the system writes the experiment code itself, executes it in an isolated Daytona cloud sandbox, measures the results, and writes the outcome back as a Run node with a VALIDATES or REFUTES verdict computed against explicit thresholds. An AI agent answers questions like 'which claims have executable evidence?' by querying the live graph and citing real run IDs. A core invariant keeps it honest: only deterministic Python ever writes evidence to the graph — agents can only read. Built for HackWithBay 3.0.",
    features: [
      "Paper ingestion from arXiv or PDF with claim/method/parameter extraction into Neo4j",
      "Contradiction detection — dashed CONTRADICTS edges surface where papers disagree",
      "One-click experiment execution: AI-written code runs in isolated Daytona sandboxes",
      "VALIDATES/REFUTES verdicts computed from measured metrics against explicit thresholds",
      "Agent Q&A over the live graph, citing real run IDs as evidence",
      "Write-safety invariant: only deterministic code writes to the graph; AI agents are read-only",
    ],
    image: "/images/projects/verigraph.webp",
    gallery: [
      "/images/projects/verigraph/main.webp",
      "/images/projects/verigraph/landing.webp",
      "/images/projects/verigraph/add-paper.webp",
    ],
    github: null,
    demo: "https://paper2result.butterbase.dev",
    tech: [
      "Python",
      "FastAPI",
      "Neo4j",
      "Daytona Sandboxes",
      "Claude Sonnet",
      "Butterbase",
    ],
    metrics: "Built for HackWithBay 3.0 (AWS Builder Loft SF)",
    bg: "bg-[#e0ecdd]",
    gridSize: "medium",
  },
  {
    title: "Unpriced — Tariff Exposure Screener",
    slug: "unpriced",
    description:
      "A three-signal composite screener that surfaces S&P 500 companies with hidden tariff exposure by mining 10-K filings, market data, and prediction markets.",
    fullDescription:
      "Unpriced screens S&P 500 companies for tariff exposure the market may not have priced in. It combines three independent signals into one composite score: geographic revenue exposure parsed from 10-K XBRL segment data, disclosed exposure from keyword-mining Item 1A risk factors, and supply-chain origin exposure from customs data. The dashboard renders a sector risk treemap, per-company deep-dives with the actual 10-K language management used, and a screening view that crosses exposure against 3-month sector-relative performance to flag companies that score high yet recently outperformed — candidates for closer research, explicitly not trading signals. Built for ZerveHack 2026 on free public data (SEC EDGAR, FRED, Yahoo Finance, Polymarket) with a strict cache-first architecture: models never make HTTP calls, and the dashboard reads only precomputed scores.",
    features: [
      "Three-signal composite score: revenue geography, 10-K disclosed risk language, supply-chain origin",
      "Sector risk treemap across 80+ screened companies",
      "Company deep-dives quoting the exact tariff language from each 10-K filing",
      "Screening view crossing exposure scores against 3-month sector-relative returns",
      "Polymarket prediction-market overlay for tariff-event probabilities",
      "Cache-first layered architecture — fetchers do I/O, models are pure logic, UI reads cache only",
    ],
    image: "/images/projects/unpriced.webp",
    gallery: [
      "/images/projects/unpriced/02-riskmap.webp",
      "/images/projects/unpriced/01-hero.webp",
      "/images/projects/unpriced/03-deepdive.webp",
      "/images/projects/unpriced/04-screening.webp",
    ],
    github: null,
    demo: null,
    tech: [
      "Python",
      "Streamlit",
      "FastAPI",
      "pandas",
      "SEC EDGAR",
      "Plotly",
    ],
    metrics: "Built for ZerveHack 2026",
    bg: "bg-[#fbe9d7]",
    gridSize: "medium",
  },
  {
    title: "PolyChat — Language Learning Social Platform",
    slug: "polychat",
    description:
      "PolyChat helps users connect globally to practice languages via real-time chat and video, enabling authentic conversations with native speakers.",
    fullDescription:
      "PolyChat is a full-stack language learning social platform that connects users worldwide for real-time language practice. Built with React 19, Express, and MongoDB, it features intelligent profile matching based on language preferences, real-time messaging and video calls powered by Stream SDK, JWT authentication, live notifications, and a polished dark-mode UI. Zustand handles global state for snappy, responsive interactions across the entire platform.",
    features: [
      "Real-time chat and video calling with Stream Chat/Video SDK",
      "Intelligent user matching based on language preferences and proficiency",
      "JWT-based authentication with secure session management",
      "Live notification system for friend requests and messages",
      "Global state management with Zustand for responsive UI",
      "RESTful API backend built with Express and MongoDB",
      "Dark mode UI with Tailwind CSS and DaisyUI components",
    ],
    image: "/images/projects/polyproject.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/polychat.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/home.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/chat.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/call.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/onboarding.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/notification.png",
      "https://raw.githubusercontent.com/Dileep2896/PolyChat/main/screenshots/signup.png",
    ],
    github: "https://github.com/Dileep2896/PolyChat",
    demo: null,
    tech: ["React", "Express", "MongoDB", "Zustand", "Stream SDK"],
    metrics: "Real-time chat with 10+ language pairs",
    bg: "bg-[#fff]",
    gridSize: "large",
  },
  {
    title: "Soocily — Social Media App (Flutter)",
    slug: "soocily",
    description:
      "A fully functional social media application built with Flutter to explore advanced architecture and state management.",
    fullDescription:
      "Soocily is a comprehensive social media application built with Flutter that demonstrates advanced mobile architecture patterns. Using Clean Architecture with BLoC state management, the app features a full social experience including user profiles, post creation with media, real-time feeds, likes, comments, and follower systems. Firebase handles backend services including authentication, Firestore for data, and Cloud Storage for media.",
    features: [
      "Clean Architecture with BLoC pattern for scalable state management",
      "Real-time social feed with post creation, likes, and comments",
      "User profile management with follower/following system",
      "Media upload and display with Firebase Cloud Storage",
      "Material 3 design system for modern, consistent UI",
      "Firebase Authentication for secure user management",
    ],
    image: "/images/projects/soocily.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%201.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%202.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%203.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%204.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%205.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%206.png",
      "https://raw.githubusercontent.com/Dileep2896/soocily/main/public/img%207.png",
    ],
    github: "https://github.com/Dileep2896/soocily",
    demo: "https://soocily-affd3.web.app/",
    tech: ["Flutter", "Firebase", "Bloc", "Material 3", "Clean Architecture"],
    metrics: "Social platform — $1.5M valuation startup",
    bg: "bg-[#e5f2fc]",
    gridSize: "large",
  },
  {
    title: "Interviewer — Real-Time Interview Practice Tool",
    slug: "interviewer",
    description:
      "A web tool for simulating technical interviews with timed, randomized questions and real-time feedback.",
    fullDescription:
      "Interviewer is a web-based technical interview simulation tool designed to help developers prepare for coding interviews. It features timed sessions with randomized questions from various categories, real-time feedback on answers, and performance analytics. Built with Next.js and MongoDB, it provides a realistic interview experience with customizable difficulty levels and topic selection.",
    features: [
      "Timed interview sessions with randomized technical questions",
      "Multiple question categories and difficulty levels",
      "Real-time feedback and answer evaluation",
      "Performance analytics and progress tracking",
      "Full-stack implementation with Next.js and MongoDB",
      "Responsive design for practice on any device",
    ],
    image: "/images/projects/interviewer.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%201.png",
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%202.png",
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%203.png",
    ],
    github: "https://github.com/Dileep2896/interviewer",
    demo: "https://interviewer-demo.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    metrics: "AI-powered mock interviews with GPT-4",
    bg: "bg-[#b8bfdd]",
    gridSize: "medium",
  },
  {
    title: "Good Deeds — Community-Focused Marketplace",
    slug: "good-deeds",
    description:
      "A marketplace connecting newcomers and locals to build trust-based service networks.",
    fullDescription:
      "Good Deeds is a community-focused marketplace app built during a hackathon to help newcomers integrate into local communities. The platform connects people who need help with those willing to offer services, building trust-based networks. Built with Flutter and Firebase, it features user verification, service listings, real-time messaging, and a reputation system.",
    features: [
      "Community marketplace for connecting newcomers with locals",
      "Trust-based reputation and review system",
      "Service listing creation and discovery",
      "Real-time messaging between service providers and seekers",
      "User verification and profile management",
      "BLoC state management for clean separation of concerns",
    ],
    image: "/images/projects/gooddeeds.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/1.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/2.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/3.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/4.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/5.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/6.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/7.png",
      "https://raw.githubusercontent.com/Dileep2896/Hackathon/main/screenshots/8.png",
    ],
    github: "https://github.com/Dileep2896/Hackathon",
    demo: null,
    tech: ["Flutter", "Firebase", "Bloc"],
    bg: "bg-[#bed5f0]",
    gridSize: "medium",
  },
  {
    title: "Spotify Clone — Flutter Mobile Application",
    slug: "spotify-clone",
    description:
      "A cross-platform clone of Spotify demonstrating media streaming, backend APIs, and mobile UI.",
    fullDescription:
      "A full-stack Spotify clone built with Flutter and FastAPI featuring JWT authentication, a music library with background audio playback and waveform visualization, song uploads, favorites management, and flexible color theming. The custom backend uses FastAPI with PostgreSQL and Cloudinary for media storage and CDN delivery, delivering a production-quality streaming experience.",
    features: [
      "Music streaming with background audio and waveform visualization",
      "JWT authentication with secure user sessions",
      "Song upload functionality with Cloudinary media storage",
      "Favorites management and music library organization",
      "Flexible color theming system for personalization",
      "Custom FastAPI backend with PostgreSQL and SQLAlchemy",
      "Cloudinary CDN for optimized media delivery",
    ],
    image: "/images/projects/spotify_clone.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/spotify_clone/main/project_assets/home.png",
      "https://raw.githubusercontent.com/Dileep2896/spotify_clone/main/project_assets/fav.png",
      "https://raw.githubusercontent.com/Dileep2896/spotify_clone/main/project_assets/upload.png",
      "https://raw.githubusercontent.com/Dileep2896/spotify_clone/main/project_assets/user.png",
      "https://raw.githubusercontent.com/Dileep2896/spotify_clone/main/project_assets/signup.png",
    ],
    github: "https://github.com/Dileep2896/spotify_clone",
    demo: null,
    tech: [
      "Flutter",
      "FastAPI",
      "REST APIs",
      "Cloudinary",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    bg: "bg-[#f2f2f2]",
    gridSize: "medium",
  },
  {
    title: "TaskNexus — Project Management Application",
    slug: "tasknexus",
    description:
      "A full-featured platform for tracking and managing collaborative projects efficiently.",
    fullDescription:
      "TaskNexus is a comprehensive project management platform with drag-and-drop task management, priority categorization (Urgent through Backlog), and multiple views including Kanban board, list, timeline, and table. Built with Next.js, React, Redux, Node.js/Express, and PostgreSQL, it features dark/light theme toggling, team management, and a full analytics dashboard. Deployed on AWS (EC2, RDS, Amplify, S3, API Gateway) for production-grade reliability.",
    features: [
      "Drag-and-drop Kanban board with priority categorization",
      "Multiple views: board, list, timeline, and table",
      "Team management with role-based access control",
      "Dark/light theme toggle for user preference",
      "Analytics dashboard with project health metrics",
      "Redux state management for complex UI interactions",
      "AWS deployment (EC2, RDS, Amplify, S3, API Gateway)",
    ],
    image: "/images/projects/project.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/TaskNexus/main/project_screenshot/home.png",
      "https://raw.githubusercontent.com/Dileep2896/TaskNexus/main/project_screenshot/project.png",
      "https://raw.githubusercontent.com/Dileep2896/TaskNexus/main/project_screenshot/timeline.png",
      "https://raw.githubusercontent.com/Dileep2896/TaskNexus/main/project_screenshot/user.png",
    ],
    github: "https://github.com/Dileep2896/TaskNexus",
    demo: null,
    tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
    bg: "bg-[#e9ecf5]",
    gridSize: "large",
  },
  {
    title: "DocuMate — Collaborative Doc Editor",
    slug: "documate",
    description:
      "Real-time collaborative document editing platform with live updates and multi-user support.",
    fullDescription:
      "DocuMate is a real-time collaborative document editor inspired by Google Docs, built with Next.js, TypeScript, and Liveblocks. It supports simultaneous multi-user editing with live cursors and conflict resolution, a Lexical-powered rich-text editor, granular access control (view/edit permissions), inline and threaded comments, GitHub authentication, real-time notifications, and a fully responsive design.",
    features: [
      "Real-time collaborative editing with live cursors via Liveblocks",
      "Lexical-powered rich-text editor with full formatting",
      "Granular access control — view and edit permissions per document",
      "Inline and threaded comments for team collaboration",
      "GitHub authentication for seamless sign-in",
      "Real-time notifications for document activity",
      "TypeScript throughout for type-safe development",
    ],
    image: "/images/projects/documate.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/documate/main/public/login.png",
      "https://raw.githubusercontent.com/Dileep2896/documate/main/public/home.png",
      "https://raw.githubusercontent.com/Dileep2896/documate/main/public/document.png",
      "https://raw.githubusercontent.com/Dileep2896/documate/main/public/invite.png",
    ],
    github: "https://github.com/Dileep2896/documate",
    demo: "https://documate-swart.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Liveblocks",
      "Lexical Editor",
      "ShadCN",
      "TailwindCSS",
    ],
    bg: "bg-[#f7faff]",
    gridSize: "medium",
  },
  {
    title: "GadgetBay — Inventory Management System",
    slug: "gadgetbay",
    description:
      "Web application for managing gadgets inventory, including analytics, purchases, and expenses.",
    fullDescription:
      "GadgetBay is a full-stack inventory management system designed for tracking gadgets, purchases, and expenses. Built with Next.js and deployed on AWS, it features a comprehensive dashboard with analytics, inventory CRUD operations, expense tracking, and purchase management. The backend uses Prisma ORM with PostgreSQL for reliable data persistence and Axios for API communication.",
    features: [
      "Comprehensive dashboard with inventory analytics and charts",
      "Full CRUD operations for gadget inventory management",
      "Purchase tracking and expense management",
      "Prisma ORM with PostgreSQL for reliable data modeling",
      "AWS deployment for production-grade hosting",
      "Responsive TailwindCSS design for desktop and mobile use",
    ],
    image: "/images/projects/gadgetbay.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/GadgetBay/main/public/dashboard.png",
      "https://raw.githubusercontent.com/Dileep2896/GadgetBay/main/public/inventory.png",
      "https://raw.githubusercontent.com/Dileep2896/GadgetBay/main/public/expenses.png",
      "https://raw.githubusercontent.com/Dileep2896/GadgetBay/main/public/settings.png",
    ],
    github: "https://github.com/Dileep2896/GadgetBay",
    demo: null,
    tech: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Axios",
      "AWS",
    ],
    metrics: "Inventory for 500+ products",
    bg: "bg-[#edf1f6]",
    gridSize: "medium",
  },
  {
    title: "Split — Full-Stack Expense Splitter",
    slug: "split",
    description:
      "Flutter-based mobile app for splitting expenses among friends using Firebase.",
    fullDescription:
      "Split is a Flutter mobile expense-sharing platform with secure Firebase Authentication, real-time expense tracking within groups, and a custom optimization algorithm that minimizes the number of settlement transactions among friends. It uses the Provider package for state management, Cloud Firestore for real-time sync, and Cloud Messaging for push notifications. Cross-platform support for iOS and Android.",
    features: [
      "Custom optimization algorithm to minimize settlement transactions",
      "Real-time expense tracking within groups via Cloud Firestore",
      "Secure authentication with Firebase Authentication",
      "Push notifications via Firebase Cloud Messaging",
      "Provider state management for clean architecture",
      "Cross-platform iOS and Android support",
    ],
    image: "/images/projects/split.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image1.png",
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image2.png",
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image3.png",
    ],
    github: "https://github.com/Dileep2896/split",
    demo: null,
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    metrics: "Expense splitting for group trips",
    bg: "bg-[#e0f4f8]",
    gridSize: "medium",
  },
  {
    title: "TalkBot — OpenAI Chatbot App",
    slug: "talkbot",
    description:
      "A full-stack MERN chatbot that integrates OpenAI's API for intelligent conversations.",
    fullDescription:
      "TalkBot is a full-stack MERN chatbot integrating OpenAI's API for intelligent, context-aware conversations. It features secure login/registration with JWT, a dynamic chat interface with real-time updates, persistent conversation history stored in MongoDB, and a mobile-friendly responsive design. Docker containerization ensures consistent deployment across environments.",
    features: [
      "Intelligent conversational AI powered by OpenAI's GPT API",
      "Secure login and registration with JSON Web Tokens (JWT)",
      "Persistent conversation history stored in MongoDB",
      "Dynamic chat interface with real-time updates",
      "Mobile-friendly responsive design",
      "Docker containerization for consistent deployment",
      "Scalable Node.js/Express backend architecture",
    ],
    image: "/images/projects/talkbot.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/ai-chat-bot/main/assets/image1.png",
      "https://raw.githubusercontent.com/Dileep2896/ai-chat-bot/main/assets/image2.png",
      "https://raw.githubusercontent.com/Dileep2896/ai-chat-bot/main/assets/image3.png",
    ],
    github: "https://github.com/Dileep2896/ai-chat-bot",
    demo: null,
    tech: ["React", "Express", "MongoDB", "OpenAI API", "Docker", "Axios"],
    bg: "bg-[#cde2f3]",
    gridSize: "medium",
  },
  {
    title: "The Almost Final Countdown — Timer Game",
    slug: "timer-game",
    description:
      "A simple React game that tests your timing precision against countdowns.",
    fullDescription:
      "The Almost Final Countdown is a fun React-based timing precision game where players must stop a countdown timer as close to zero as possible. Built to explore React hooks and state management patterns, it features multiple difficulty levels, a scoring system, and smooth animations. A lightweight project that demonstrates clean React fundamentals.",
    features: [
      "Multiple difficulty levels with varying countdown speeds",
      "Precision scoring system based on timing accuracy",
      "Built entirely with React hooks and functional components",
      "Smooth animations and responsive UI",
    ],
    image: "/images/projects/timer_game.webp",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/react-timer-game/main/public/project.png",
    ],
    github: "https://github.com/Dileep2896/react-timer-game",
    demo: null,
    tech: ["React", "JavaScript", "Hooks"],
    bg: "bg-[#e4ebfa]",
    gridSize: "small",
  },
  {
    title: "GymGrit — Fitness Web App",
    slug: "gymgrit",
    description:
      "A modern platform for gym enthusiasts and trainers to manage workouts and schedules.",
    fullDescription:
      "GymGrit is a fitness web application built with React and Tailwind CSS that helps gym enthusiasts discover and plan workouts. It integrates with the ExerciseDB API to provide a comprehensive exercise database with muscle group targeting, video demonstrations, and workout planning features. The clean, modern UI makes it easy to browse exercises and build custom routines.",
    features: [
      "Comprehensive exercise database via ExerciseDB API integration",
      "Search and filter exercises by muscle group, equipment, and type",
      "Workout plan builder with custom routines",
      "Modern responsive UI with Tailwind CSS",
    ],
    image: "/images/projects/gymgrit.webp",
    gallery: ["/images/projects/gymgrit.webp"],
    github: "https://github.com/Dileep2896/react-gymgrit",
    demo: null,
    tech: ["React", "Tailwind CSS", "ExerciseDB API"],
    metrics: "Fitness tracking with workout analytics",
    bg: "bg-[#f0f4f9]",
    gridSize: "small",
  },
  {
    title: "Flutter Chat App",
    slug: "flutter-chat-app",
    description:
      "A real-time Flutter + Firebase chat app with bonus features like music sync during chats.",
    fullDescription:
      "A real-time chat application built with Flutter and Firebase that goes beyond basic messaging. Features include real-time message delivery via Firebase Realtime Database, user authentication, and a unique music sync feature that lets chat participants listen to the same music simultaneously. The app demonstrates Flutter's capabilities for building rich, interactive communication tools.",
    features: [
      "Real-time messaging with Firebase Realtime Database",
      "User authentication and profile management",
      "Synchronized music playback during chats",
      "Push notifications for new messages",
    ],
    image: "/images/projects/flutter_chat_app.webp",
    gallery: [
      "https://user-images.githubusercontent.com/55010518/148784193-e74b8328-be11-4088-ac1b-a9003d0aacc3.png",
      "https://user-images.githubusercontent.com/55010518/148784750-a6cd8828-03e9-4443-941a-fc947e92eda8.png",
      "https://user-images.githubusercontent.com/55010518/148784487-0a69e8a4-d4c7-4c32-8787-940f9a7e6c91.png",
    ],
    github: "https://github.com/Dileep2896/chat_app",
    demo: null,
    tech: ["Flutter", "Firebase", "Realtime Database"],
    bg: "bg-[#e2f0ff]",
    gridSize: "small",
  },
  {
    title: "NASA Astronomy Picture of the Day",
    slug: "nasa-apod",
    description:
      "Displays NASA's daily APOD with descriptions using their public API.",
    fullDescription:
      "A React web application that fetches and displays NASA's Astronomy Picture of the Day using their public API. Each day features a stunning space photograph or video along with a detailed explanation written by a professional astronomer. The app includes date navigation to browse past entries and a clean, responsive layout built with Tailwind CSS.",
    features: [
      "Daily astronomy picture and explanation from NASA's API",
      "Date navigation to browse past APOD entries",
      "Responsive image display with loading states",
      "Clean Tailwind CSS layout optimized for all screen sizes",
    ],
    image: "/images/projects/Nasa.webp",
    gallery: ["/images/projects/Nasa.webp"],
    github: "https://github.com/Dileep2896/reactjs-nasa",
    demo: null,
    tech: ["React", "NASA API", "Tailwind"],
    bg: "bg-[#dbe8ff]",
    gridSize: "small",
  },
];

const abilities = [
  {
    icon: FaCode,
    title: "Engineering Precision",
    desc: "Writing clean, scalable code across web and mobile, with performance and readability in mind.",
    iconColor: "text-sky-300",
  },
  {
    icon: FaRocket,
    title: "Builder Mentality",
    desc: "From hackathons to startups — I take full ownership and turn ideas into real, working products.",
    iconColor: "text-rose-300",
  },
  {
    icon: FaClock,
    title: "Consistent Delivery",
    desc: "I ship fast, iterate quickly, and always meet deadlines without compromising quality.",
    iconColor: "text-amber-300",
  },
];

const hackathonImgList = [
  {
    imgPath: "/achievements/hackathon/1.webp",
  },
  {
    imgPath: "/achievements/hackathon/2.webp",
  },
  {
    imgPath: "/achievements/hackathon/3.webp",
  },
  {
    imgPath: "/achievements/hackathon/4.webp",
  },
  {
    imgPath: "/achievements/hackathon/5.webp",
  },
  {
    imgPath: "/achievements/hackathon/6.webp",
  },
  {
    imgPath: "/achievements/hackathon/7.webp",
  },
  {
    imgPath: "/achievements/hackathon/8.webp",
  },
  {
    imgPath: "/achievements/hackathon/9.webp",
  },
  {
    imgPath: "/achievements/hackathon/10.webp",
  },
  {
    imgPath: "/achievements/hackathon/11.webp",
  },
  {
    imgPath: "/achievements/hackathon/12.webp",
  },
];

const examsImgList = [
  {
    imgPath: "/achievements/exams/1.webp",
  },
  {
    imgPath: "/achievements/exams/2.webp",
  },
  {
    imgPath: "/achievements/exams/3.webp",
  },
  {
    imgPath: "/achievements/exams/4.webp",
  },
  {
    imgPath: "/achievements/exams/5.webp",
  },
  {
    imgPath: "/achievements/exams/6.webp",
  },
];

const techImgList = [
  {
    imgPath: "/achievements/technical/1.webp",
  },
  {
    imgPath: "/achievements/technical/2.webp",
  },
  {
    imgPath: "/achievements/technical/3.webp",
  },
  {
    imgPath: "/achievements/technical/4.webp",
  },
  {
    imgPath: "/achievements/technical/5.webp",
  },
  {
    imgPath: "/achievements/technical/6.webp",
  },
];

const techStackIcons = [
  {
    name: "Frontend",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Cross-Platform",
    modelPath: "/models/Flutter.glb",
    scale: 30,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    position: [0, 0, 0],
  },
  {
    name: "Native",
    modelPath: "/models/android_logo.glb",
    scale: 2,
    rotation: [0.3, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Cloud",
    modelPath: "/models/aws.glb",
    scale: 0.4,
    rotation: [0, 0, 0],
    position: [0, -2, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0.3, -Math.PI / 2, 0],
    position: [0, 0, 0],
  },
  {
    name: "Scripting",
    modelPath: "/models/python-transformed.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Type Safety",
    modelPath: "/models/typescript-transformed.glb",
    scale: 35,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Containers",
    modelPath: "/models/docker-transformed.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
  {
    name: "Database",
    modelPath: "/models/mongodb-transformed.glb",
    scale: 55,
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Metis AI is an industrial AI startup revolutionizing equipment maintenance through intelligent automation, real-time diagnostics, and AI-driven troubleshooting workflows.",
    logoPath: "/images/logo-metis.svg",
    title: "Software Engineer (Co-Op), Metis AI Inc.",
    date: "Jul 2025 – Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Architected a modular React and React Native ecosystem enabling real-time equipment telemetry, AI-driven fault diagnosis, and conversational maintenance workflows across web and mobile.",
      "Engineered an offline-first React Native application for field technicians with bidirectional sync and optimistic UI patterns.",
      "Designed an AI-augmented drag-and-drop scheduling system with multi-view calendar interfaces and intelligent maintenance summarization.",
    ],
    metrics: [
      { value: "3×", label: "Feature Velocity" },
      { value: "30%", label: "Less Downtime" },
      { value: "15+", label: "Components Built" },
    ],
    icons: [FaRobot, FaCogs, FaMobile],
  },
  {
    review:
      "RIT (Rochester Institute of Technology) is a renowned research university recognized for its innovation in computing, engineering, and immersive technologies.",
    logoPath: "/images/logo1.webp",
    title: "Research Assistant, RIT",
    date: "Aug 2024 – Present",
    location: "Rochester, NY",
    responsibilities: [
      "Built immersive VR simulations in Unity with C#, increasing interactivity by 35%.",
      "Reduced feedback processing latency by 40% via real-time analytics pipelines.",
      "Developed a reinforcement learning-powered adaptive training module.",
    ],
    metrics: [
      { value: "35%", label: "More Interactive" },
      { value: "40%", label: "Faster Processing" },
      { value: "25%", label: "Better Retention" },
    ],
    icons: [FaUniversity, FaBrain, FaVrCardboard],
  },
  {
    review:
      "EVon Energy is a mobility-tech startup focused on simplifying electric vehicle charging by building scalable infrastructure and real-time navigation tools.",
    logoPath: "/images/logo2.webp",
    title: "Founder – Software Engineer, EVon Energy",
    date: "Aug 2022 – Jul 2023",
    location: "Bangalore, India",
    responsibilities: [
      "Spearheaded a 6-member team to build a unified EV charging app, expanding access by 30%.",
      "Raised $15K and achieved a $1.5M valuation during MVP launch.",
      "Built the app using Flutter, AWS Amplify, and PostgreSQL/PostGIS.",
    ],
    metrics: [
      { value: "$1.5M", label: "Valuation" },
      { value: "30%", label: "More Access" },
      { value: "6", label: "Team Members" },
    ],
    icons: [FaBolt, FaChargingStation, FaRocket],
  },
  {
    review:
      "Impactional Games is a software development company specializing in building interactive gaming applications and digital products for external clients.",
    logoPath: "/images/logo3.webp",
    title: "Flutter Developer Intern, Impactional",
    date: "Jan 2022 – Apr 2022",
    location: "Remote",
    responsibilities: [
      "Integrated Chess.com API with BLoC-managed UI, increasing responsiveness by 40%.",
      "Ported Unity apps to Flutter via Dart FFI, reducing build times by 60%.",
      "Enhanced UX across products, resulting in a 25% boost in user retention.",
    ],
    metrics: [
      { value: "60%", label: "Faster Builds" },
      { value: "40%", label: "More Responsive" },
      { value: "25%", label: "User Retention" },
    ],
    icons: [FaGamepad, FaMobileAlt, FaCode],
  },
  {
    review:
      "Hilspade is a sports analytics startup delivering real-time statistical insights for badminton players, enhancing gameplay analysis and performance tracking.",
    logoPath: "/images/logo4.webp",
    title: "Android Developer Intern, Hilspade",
    date: "Sept 2021 – Jan 2022",
    location: "Bangalore, India",
    responsibilities: [
      "Built a real-time sports tracking Android app using Java, Room DB, and RxJava.",
      "Improved app performance by 20% and supported gameplay data from camera sensors.",
      "Helped secure funding with a working MVP demonstrating player tracking.",
    ],
    metrics: [
      { value: "20%", label: "Performance Boost" },
      { value: "MVP", label: "Secured Funding" },
      { value: "Real-time", label: "Tracking" },
    ],
    icons: [FaChartLine, FaRunning, FaAndroid],
  },
  {
    review:
      "Pranamitra Consulting is a matchmaking startup offering matrimonial web platforms that connect individuals across India through data-driven compatibility systems.",
    logoPath: "/images/logo5.webp",
    title: "Software Engineering Intern, Pranamitra Consulting",
    date: "Jul 2021 – Nov 2021",
    location: "Remote",
    responsibilities: [
      "Automated AWS Lambda-based profile workflows, cutting manual tasks by 40%.",
      "Improved Elasticsearch query performance by 25% via API and backend tuning.",
      "Collaborated with designers to revamp the frontend using React, Redux, and Material-UI.",
    ],
    metrics: [
      { value: "40%", label: "Less Manual Work" },
      { value: "25%", label: "Query Speed" },
      { value: "React", label: "Frontend Revamp" },
    ],
    icons: [FaHeart, FaUsers, FaLaptopCode],
  },
];


const blogPosts = [
  {
    slug: "building-storyforge",
    title:
      "Building Reveria: An AI Story Engine with Gemini",
    date: "2026-03-14",
    category: "Hackathon",
    tags: ["AI", "Gemini", "Google Cloud", "Hackathon", "ADK", "Imagen", "Live API"],
    image: "/images/blog/02-story-generation.jpg",
    readTime: 20,
    excerpt:
      "How I built Reveria for the Gemini Live Agent Challenge: a multimodal AI story engine where you brainstorm with a voice Director, watch four agents generate illustrated storybooks in real time, and steer the narrative as it unfolds.",
    github: "https://github.com/Dileep2896/storyforge",
    devpost: "",
    demo: "",
    sections: [
      // --- What is Reveria? ---
      {
        type: "text",
        content:
          "Describe a story. Watch it come alive. That's the pitch. Here's how I actually built it.",
      },
      {
        type: "heading",
        content: "What is Reveria?",
      },
      {
        type: "text",
        content:
          'Reveria is an interactive story engine. You type (or say) something like "a noir detective story in a rain-soaked city at midnight," and it generates an illustrated storybook in real time: narrative text, scene illustrations, voice narration, and an interactive flipbook you can page through. Everything streams in live as four AI agents work in parallel.',
      },
      {
        type: "stats",
        items: [
          { value: "4", label: "AI Agents" },
          { value: "30+", label: "Art Styles" },
          { value: "9", label: "Story Templates" },
          { value: "8", label: "Languages" },
        ],
      },
      {
        type: "text",
        content:
          'What makes it different from "give me a story" ChatGPT wrappers is the Director Chat. You open a voice conversation with an AI Director character, brainstorm your story idea out loud, and when the Director decides you\'re ready, it triggers generation automatically. During generation, the Director watches each scene and offers creative analysis in real time. It suggests what should happen next, and the Narrator picks up that suggestion in the following scene. Two agents shaping a story together, with you steering.',
      },
      {
        type: "text",
        content:
          "Beyond generation, Reveria is a full application: a Library for your saved stories, an Explore page for discovering published work from other users, Reading Mode with karaoke-style narration, PDF export, 8-language support, 9 story templates, 30+ art styles, social features (likes, ratings, comments), and share links for public viewing.",
      },
      {
        type: "quote",
        content:
          "This isn't a single API call. It's a multi-agent pipeline built on Google's ADK, with Gemini 2.0 Flash for text, Imagen 3 for illustrations, Gemini Live API for voice, and Gemini Native Audio for narration. Each agent runs at a different temperature tuned for its task.",
      },
      {
        type: "image",
        src: "/images/blog/01-template-chooser.jpg",
        alt: "Reveria template chooser with 9 story templates",
        caption: "9 story templates, from Storybook to Manga to Noir Detective",
      },

      // --- System Architecture ---
      {
        type: "heading",
        content: "System Architecture",
      },
      {
        type: "text",
        content:
          "Reveria runs four specialist agents coordinated by ADK's SequentialAgent. The key design decision: different temperatures for different tasks. Story writing needs high creativity (temp 0.9). Image prompts need precision (temp 0.3). Character extraction needs determinism (temp 0.1). Director analysis needs structured JSON output (temp 0.3). A single Gemini call can't do all of these well.",
      },
      {
        type: "architecture",
      },
      {
        type: "list",
        items: [
          "Narrator Agent (Gemini 2.0 Flash, temp 0.9): writes each scene with consistent characters and plot threads, streams text chunk-by-chunk over WebSocket. Checks a steering queue between scenes for user direction changes.",
          "Illustrator Agent (Gemini + Imagen 3, temp 0.1-0.3): four-stage hybrid prompt pipeline. Character sheet extraction, character identification, scene composition, then programmatic assembly. Produces visually consistent illustrations across scenes.",
          "TTS Agent (Gemini Native Audio): audiobook-quality narration that varies tone with mood. Each language gets a voice suited to it. Replaced Cloud TTS for dramatically better expressiveness.",
          "Director Agent (Gemini Flash, temp 0.3): per-scene live commentary during generation (mood, tension, craft notes, creative suggestions), plus full post-batch analysis of story health, characters, visual style, themes, and emotional arc.",
        ],
      },
      {
        type: "text",
        content:
          "Each prompt generates exactly one scene. This keeps the feedback loop tight: describe what you want, watch it materialize, steer, repeat. No batch of five scenes where the third one goes off the rails. Everything streams over a single WebSocket. Text arrives chunk-by-chunk, images arrive as each Imagen call completes, audio arrives per-scene, and Director analysis arrives as structured JSON.",
      },
      {
        type: "image",
        src: "/images/blog/system-architecture.svg",
        alt: "Reveria system architecture diagram",
        caption: "Four agents coordinated by ADK's SequentialAgent, with per-scene parallelism",
      },

      // --- The Build ---
      {
        type: "heading",
        content: "The Build",
      },
      {
        type: "text",
        content:
          "Week 1 was about proving the core pipeline. Day 1: can we get Gemini to generate story text, stream it over WebSocket, split it into scenes, and render it in a flipbook? The answer was yes. Day 2 brought the first big challenge: image generation. Imagen 3 produces stunning illustrations, but characters looked completely different across scenes. Day 3 was the Firebase integration marathon: auth, Firestore persistence, save flows, Library, URL routing.",
      },
      {
        type: "text",
        content:
          "Week 2 was about solving character consistency (described below), building Director Mode with live commentary, adding templates and art styles, and getting per-scene streaming working so the experience felt truly live.",
      },
      {
        type: "text",
        content:
          "Week 3 was the Director Chat integration with the Gemini Live API, the safety and content filtering system, social features, multi-language support, Reading Mode, the CI/CD pipeline, and a lot of polish. The interaction-flow audit at the end caught 9 bugs that would have been embarrassing in production, including silently dropping Live API tool calls and losing user quota on WebSocket disconnects.",
      },

      // --- Character Consistency ---
      {
        type: "heading",
        content: "The Biggest Challenge: Character Consistency",
      },
      {
        type: "text",
        content:
          'This was the hardest technical problem I solved. The naive approach: send scene text to Gemini ("write an image prompt"), get a 100-word prompt, send to Imagen. The problem? Gemini would receive a scene about "Elena, a woman in her late 20s with pale skin, long dark wavy hair, green eyes, wearing a high-collar black Victorian dress" and compress it to "woman in dark dress." Characters changed faces, hair color, and outfits between every scene.',
      },
      {
        type: "text",
        content:
          "The fix was a four-stage hybrid prompt pipeline. First, Gemini extracts a structured character sheet with hex color codes, face shapes, and signature items (temp 0.1). Second, it identifies which characters appear in each scene (temp 0.0). Third, it writes ONLY the setting, lighting, and camera angle (temp 0.3), explicitly told not to describe characters. Fourth, we programmatically concatenate character descriptions + anti-drift anchor + scene composition + art style suffix.",
      },
      {
        type: "code",
        content:
          'Elena: [gender: woman], [age: late 20s], [skin: pale ivory #F5E6D3],\n[hair: dark wavy #2A1810 shoulder-length], [face: oval, green #4A7C59 eyes,\nhigh cheekbones], [outfit: black #1A1A2E Victorian dress, silver moon pendant],\n[signature items: silver moon pendant, lace gloves],\n[palette: #1A1A2E, #F5E6D3, #4A7C59, #C0C0C0]\n\nIMPORTANT: Render each character EXACTLY as described above.\n\nElena stands at the edge of a moonlit cliff, wind catching her dress.\nFog rolls below, a distant lighthouse beam sweeps across the water.\nLow angle, dramatic backlighting, cinematic digital painting,\nhighly detailed, dramatic volumetric lighting, depth of field.',
      },
      {
        type: "text",
        content:
          "The breakthrough moment: characters suddenly looked consistent across 4, 6, 8 scenes. The hex color codes give Imagen specific, unambiguous visual targets instead of subjective descriptions like \"pretty woman in dark clothing.\" We pushed this further with anchor portraits: before generating any scene images, the Illustrator creates a 1:1 close-up portrait of each character via Imagen 3, then feeds it to Gemini Vision for visual DNA extraction (a 100-150 word description of exactly what was rendered). Subsequent scene prompts reference this visual DNA instead of the original text description.",
      },

      // --- Director Chat ---
      {
        type: "heading",
        content: "Director Chat: Talking to Your Story's AI Director",
      },
      {
        type: "text",
        content:
          "This is the feature I'm most excited about. Director Chat is a real-time voice conversation with an AI Director character, built on the Gemini Live API (gemini-live-2.5-flash-native-audio). You speak (or type, for accessibility), the Director responds with personality, and when brainstorming is done, the model calls a generate_story tool with a vivid prompt distilled from your conversation. Both voice and text input are supported seamlessly \u2014 users can switch between them at any time.",
      },
      {
        type: "text",
        content:
          "The previous architecture made 3-5 separate Gemini calls per user interaction: one for conversation, one for user speech transcription, one for Director speech transcription, one for intent detection, one for prompt suggestion. The rewrite eliminated all extra calls by using three native Live API features: input/output audio transcription (no separate STT calls), function calling (the model decides when to generate, replacing an external classifier), and context window compression (sliding window handles long brainstorming sessions).",
      },
      {
        type: "text",
        content:
          "Voice activity detection was the UX breakthrough. Without it, users had to tap twice per turn (record, then send). With Web Audio's AnalyserNode computing RMS from getFloatTimeDomainData(), we detect speech-to-silence transitions and auto-stop the recorder. The conversation becomes: speak, pause, Director responds, speak again. One tap to start, zero taps per subsequent turn.",
      },
      {
        type: "image",
        src: "/images/blog/04-director-chat.jpg",
        alt: "Voice brainstorming with the AI Director",
        caption: "Voice brainstorming with the Director, then watching generation unfold",
      },
      {
        type: "image",
        src: "/images/blog/director-chat-flow.svg",
        alt: "Director Chat flow diagram",
        caption: "Director Chat uses native Live API features: transcription, tool calling, and context compression",
      },
      {
        type: "heading",
        level: 3,
        content: "Streaming Audio: Eliminating the Thinking Gap",
      },
      {
        type: "text",
        content:
          "The original Director Chat had a noticeable delay between when you stopped speaking and when the Director started responding \u2014 the full audio response had to be collected, encoded as WAV, and sent as a data URL. We fixed this by streaming raw PCM chunks incrementally via WebSocket. A useStreamingAudio hook feeds each chunk into Web Audio API AudioBufferSource nodes scheduled for gapless playback. The Director's voice now starts within 200\u2013400ms instead of 1\u20132 seconds.",
      },
      {
        type: "heading",
        level: 3,
        content: "Voice-Reactive Orb & Text Input",
      },
      {
        type: "text",
        content:
          "The voice orb is a canvas-based organic visualization \u2014 four overlapping soft blobs blend Dream Violet and Story Amber with gaussian blur, driven by real-time audio amplitude via Web Audio's AnalyserNode. Six visual modes (idle, recording, speaking, loading, watching, waiting) transition smoothly via per-frame color and speed lerping. Asymmetric smoothing (fast attack, slow decay) makes it feel alive. For accessibility, a text input mode lets deaf or hard-of-hearing users type messages to the Director instead of speaking \u2014 seamlessly switching between voice and text at any time. The transcript thread shows all voice interactions as styled chat bubbles, with a toggle to show or hide them.",
      },

      // --- Per-Scene Streaming ---
      {
        type: "heading",
        content: "Per-Scene Streaming: Making It Feel Alive",
      },
      {
        type: "text",
        content:
          "The original pipeline was batch-sequential: Narrator generates ALL scene text, then Illustrator generates ALL images, then TTS generates ALL audio, then Director analyzes. Users stared at a spinner for 15-30 seconds. The rewrite fires image, audio, and Director commentary tasks per-scene as each scene's text completes inside the Narrator loop. Scene 1's image paints in while Scene 2's text is still streaming.",
      },
      {
        type: "interleave",
      },
      {
        type: "text",
        content:
          "A module-level asyncio.Semaphore(1) serializes Imagen calls for rate limiting, but they start as soon as each scene's text is ready. The handle_generate runs as asyncio.create_task() so the WebSocket loop stays responsive, and users can send steer messages (\"make it scarier\") during generation. The steering text is pushed to a queue, checked between scenes in the Narrator loop, and injected as a user message so the next scene naturally picks up the new direction.",
      },
      {
        type: "text",
        content:
          "The Director's live commentary includes a suggestion field that proposes what should happen next. This is stored on shared state and prepended to the Narrator's input for the next scene. The Director doesn't just observe. It drives. It spots an opportunity (\"Reveal that the stranger is her long-lost sister\"), and the Narrator runs with it. A reactive analyst becomes an active creative partner.",
      },
      {
        type: "image",
        src: "/images/blog/02-story-generation.jpg",
        alt: "Live story generation with Director analysis panel",
        caption: "Live story generation with Director analysis panel showing characters, visual style, and creative suggestions",
      },

      // --- Visual Narratives ---
      {
        type: "heading",
        content: "Visual Narratives: Comics, Manga, and Webtoons",
      },
      {
        type: "text",
        content:
          "Templates aren't skins. Each one reshapes the entire pipeline. A Manga template doesn't just swap the art style suffix. It changes the scene composer to use character-dominant framing, activates the text-free image defense, adjusts TTS to narrate only overlay text (not full prose), and shifts the Narrator toward visual storytelling with shorter scene descriptions.",
      },
      {
        type: "text",
        content:
          "Comic art styles triggered Imagen to render speech bubbles and garbled AI text into images. Our fix is a triple-layer defense: a positive \"Text-free panel art:\" prefix at the start of the Imagen prompt (where attention weight is highest), explicit composer instructions, and negative constraints at the end. We learned the hard way that putting negative constraints first consumed Imagen's attention budget and pushed character descriptions too far down, degrading consistency. All text overlay is handled by the app itself.",
      },

      // --- The UI ---
      {
        type: "heading",
        content: "The UI: Glassmorphism Meets Interactive Fiction",
      },
      {
        type: "text",
        content:
          "The flipbook uses react-pageflip for realistic page-turn animations in always-spread mode. New stories trigger a choreographed entrance sequence: the book materializes with a brightness bloom at 60%, then the cover flips open in an overlapping motion that starts at 350ms (before the entrance finishes). Earlier iterations had a visible pause between entrance and flip that broke the illusion. The overlap creates one fluid motion.",
      },
      {
        type: "text",
        content:
          "We replaced Cloud TTS with Gemini's native audio output for narration. The difference is striking: audiobook-quality narration that varies tone with mood instead of robotic Wavenet voices. Reading Mode adds word-by-word karaoke highlighting synced to the audio, auto-advance between scenes, and bookmarking. The save system uses a three-tier approach: if AI-generated title and cover already exist (background task), save is instant. No spinner, no waiting.",
      },
      {
        type: "text",
        content:
          "The Library shows your saved stories as 3D CSS book cards with perspective transforms, spine shadows, and page edges. While a cover generates, the book shows a blur+shimmer overlay. Published stories get a BookDetailsPage with likes, 1-5 star ratings (denormalized on the story doc for zero pop-in), and threaded comments.",
      },
      {
        type: "image",
        src: "/images/blog/03-book-details.jpg",
        alt: "Published story with social features",
        caption: "Published story with character portraits, ratings, and social features",
      },

      // --- Safety ---
      {
        type: "heading",
        content: "Safety and Content Filtering",
      },
      {
        type: "text",
        content:
          "AI models sometimes refuse requests they interpret as inappropriate, and Gemini's refusal text would get rendered as actual story scenes, complete with AI-generated illustrations of the refusal message. Our solution: a pre-pipeline Gemini Flash classifier (temp 0, ~200ms) catches non-story prompts (coding questions, recipes, homework) in any language. It fails open on errors. A post-generation pattern matcher in 6 languages handles edge cases. For borderline content, the Narrator redirects in-character (\"That part of the library is forbidden! Let's explore this mysterious path instead...\") rather than breaking the fourth wall.",
      },

      // --- Multi-Language ---
      {
        type: "heading",
        content: "Multi-Language Support",
      },
      {
        type: "text",
        content:
          "Reveria generates stories in 8 languages: English, Spanish, French, German, Japanese, Hindi, Portuguese, and Chinese. Language flows through SharedPipelineState and touches every agent: Narrator system prompt, TTS voice selection, title generation in the story's language, content filtering patterns, and Director Chat personality. Making it a field on shared state was the cleanest pattern. Adding a new language is a one-line addition to the voice mapping.",
      },

      // --- Cloud Infrastructure ---
      {
        type: "heading",
        content: "Cloud Infrastructure and Deployment",
      },
      {
        type: "text",
        content:
          "The backend runs on Cloud Run (containerized FastAPI), the frontend on Firebase Hosting. Scene images go to Google Cloud Storage with signed URL fallback. The CI/CD pipeline has four GitHub Actions jobs: backend tests (Python 3.12, pytest with mocked Firebase), frontend tests (eslint, Vite build, Playwright), backend deploy (gcloud run deploy), and frontend deploy (Firebase Hosting). Push to main triggers everything automatically.",
      },
      {
        type: "list",
        items: [
          "Per-user circuit breaker: when a user hits their Imagen quota, subsequent calls short-circuit immediately rather than wasting API roundtrips. Jitter on retry delays prevents thundering herd.",
          "Retry utility with transient error classification, used throughout the Gemini client.",
          "GCS signed URL fallback when make_public() fails. Atomic usage tracking via Firestore transactions so users don't lose quota on failed generations.",
          "First-message WebSocket auth: frontend sends the Firebase token as the first WS message after connect, avoiding credential leakage in server logs and browser history.",
        ],
      },
      {
        type: "image",
        src: "/images/blog/cloud-infrastructure.svg",
        alt: "Cloud infrastructure diagram",
        caption: "Cloud Run + Firebase Hosting + GCS + Firestore",
      },

      // --- Lessons Learned ---
      {
        type: "heading",
        content: "Lessons Learned",
      },
      {
        type: "list",
        items: [
          "Prompt engineering is architecture. The difference between \"write an image prompt\" and our hybrid construction pipeline is the difference between inconsistent images and visual coherence. When your prompt construction has four stages with different temperatures, it's architecture, not a template.",
          "Use native API features before building workarounds. Our Director Chat initially used 3-5 separate Gemini calls per interaction. Enabling four config options on the Live API eliminated every workaround we'd built.",
          "Per-scene is the right granularity. Batch-level parallelism feels sequential to the user. Scene-level parallelism (fire off image/audio/commentary as each scene completes) makes the experience feel live. The UX improvement is dramatic.",
          "Make agents proactive, not just reactive. Our Director started as a purely reactive observer. The breakthrough was giving it a suggestion field that proposes what should happen next, fed to the Narrator at the start of the next scene. A read-only analyst became an active creative partner.",
          "Voice UX needs silence detection, not button choreography. Web Audio's AnalyserNode was the fix. Detect speech-to-silence transitions, auto-stop the recorder. One tap to start, zero taps after that.",
          "Flow audits find crashes, code audits find patterns. Our interaction-flow audit caught 9 bugs the code scan would never find. The critical one: silently dropping a Gemini Live API tool call. The protocol requires a FunctionResponse for every tool call. Dropping it corrupted the session permanently.",
          "Templates are modes, not skins. A Manga template changes the scene composer, activates the text-free defense, adjusts TTS, and shifts the Narrator's tone. When a config option touches four pipeline stages, it's a mode.",
          "Character consistency requires structural solutions. You can't prompt-engineer your way to consistent characters with a single Gemini call. Separate extraction from composition, prepend descriptions verbatim, use hex color codes, and anchor descriptions to actual rendered portraits via Gemini Vision.",
        ],
      },

      // --- Tech Stack ---
      {
        type: "heading",
        content: "Tech Stack",
      },
      {
        type: "list",
        items: [
          "Frontend: React + CSS (glassmorphism) + Vite (story canvas, director mode, library, explore)",
          "Real-time: WebSocket (native) for streaming interleaved output",
          "Backend: Python 3.12 + FastAPI + Uvicorn (WebSocket handler, orchestration)",
          "Agent Framework: Google ADK (multi-agent orchestration)",
          "LLM: Gemini 2.0 Flash via Vertex AI (story generation, prompt engineering, analysis)",
          "Image Gen: Imagen 3 via Vertex AI (scene illustrations, book covers, character portraits)",
          "Director Chat: Gemini Live API with native audio (real-time voice brainstorming)",
          "Voice: Web Audio API + Gemini Native Audio (input capture + expressive narration)",
          "Auth: Firebase Authentication (Google Sign-In)",
          "Database: Cloud Firestore (story persistence, user libraries, social features)",
          "Storage: Google Cloud Storage (scene images, cover images)",
          "Hosting: Cloud Run + Firebase Hosting (containerized deployment)",
          "CI/CD: GitHub Actions (4-job pipeline: test + deploy)",
        ],
      },

      // --- What's Next ---
      {
        type: "heading",
        content: "What's Next",
      },
      {
        type: "list",
        items: [
          "Imagen Visual Anchor API (CONTROL_TYPE_FACE_MESH): use the first scene's character render as a reference image for subsequent scenes. The most promising path to true character consistency.",
          "Cinematic Video Scenes with Veo 2: short video clips for high-tension climax scenes, triggered when the Director's tension_level >= 8.",
          "Multi-Voice Narration: character-specific voices so dialogue scenes sound like distinct people, mapped from personality traits.",
          "Floating Director Orb for Mobile: move the canvas voice-reactive orb into a floating FAB with bottom-sheet transcript drawer for natural mobile interaction.",
        ],
      },

      // --- Try It ---
      {
        type: "heading",
        content: "Try It",
      },
      {
        type: "text",
        content:
          "Reveria was built for the Gemini Live Agent Challenge. The live app is at reveria.web.app and the source code is on GitHub at github.com/Dileep2896/storyforge.",
      },
      {
        type: "callout",
        content:
          "Built for the Gemini Live Agent Challenge hackathon (Creative Storyteller Track) using Google's AI technologies including Gemini 2.0 Flash, Imagen 3, Gemini Live API, Gemini Native Audio, and the Agent Development Kit (ADK). #GeminiLiveAgentChallenge",
      },
    ],
  },
  {
    slug: "reveria-dev-journey",
    title:
      "The Reveria Journey: 65+ Sessions, 3 Rewrites, and a Feature Graveyard",
    date: "2026-03-14",
    category: "Hackathon",
    tags: ["AI", "Gemini", "Hackathon", "Dev Diary", "Debugging", "Architecture"],
    image: "/images/blog/01-template-chooser.jpg",
    readTime: 15,
    excerpt:
      "The raw dev diary behind Reveria: how a hackathon project evolved through 65+ coding sessions, 3 major rewrites, a feature graveyard, and countless debugging sessions.",
    github: "https://github.com/Dileep2896/storyforge",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "How a hackathon project evolved through 65+ coding sessions, 3 major rewrites, and countless \"why isn't this working\" moments.",
      },

      // --- Day 1 ---
      {
        type: "heading",
        content: "Day 1: Can We Even Do This?",
      },
      {
        type: "text",
        content:
          "It started with a question: can you build an AI storybook generator that actually feels like a book? Not a chat interface, not a wall of text. A real, page-turning, illustrated book.",
      },
      {
        type: "text",
        content:
          "Session 1 was the usual scaffolding. React + Vite frontend, FastAPI backend, Docker for good measure, a $5 GCP budget cap because hackathons and runaway cloud bills don't mix. The WebSocket echo endpoint worked on the first try. That never happens, so we took it as a good sign.",
      },
      {
        type: "text",
        content:
          "Session 2 is where things got exciting. Gemini 2.0 Flash streaming text over WebSocket, split into scenes with [SCENE] markers. The first time a story streamed in, word by word, with the narrator maintaining conversation history so you could say \"make it scarier\" and it would actually continue the same narrative. That moment of seeing it work, genuinely work, is why you do hackathons.",
      },
      {
        type: "text",
        content:
          "Session 3 brought Imagen 3 and nearly broke everything. The two-step pipeline seemed elegant on paper. In practice, the character sheet extraction returned wildly different results each time, image prompts were inconsistent, and the 16:9 aspect ratio left black letterboxing edges we had to crop with transform: scale(1.04). But the flipbook worked. react-pageflip with 22 fixed page slots, scene reveal animations, drop-cap typography. It looked like a book.",
      },
      {
        type: "text",
        content:
          "Sessions 4-8 were about making it not break. Word limits to keep Gemini from writing novels per scene. Art style pills (only 6 at this point). A cleanup audit that found dead code everywhere, 5 unused dependencies, and 11 print() calls that should have been logging. Book depth shadows for a 3D effect. Page gutter shadows simulating binding darkness. An attempt at spine shadows that looked great until you flipped a page and the shadow stayed floating in mid-air. Reverted.",
      },
      {
        type: "quote",
        content:
          "What worked: The core loop. Prompt, stream text, generate images, flip pages. It felt magical even in v0.1. What didn't: Image consistency. Every scene had different-looking characters. We knew this would be a problem. We just didn't know how big.",
      },

      // --- Day 2 ---
      {
        type: "heading",
        content: "Day 2: The Director Arrives",
      },
      {
        type: "text",
        content:
          "Session 9 introduced the Director panel: a structured analysis engine that watched your story and gave feedback. Narrative arc with a mini SVG curve. Character chips. Tension bars with trend arrows. Visual style mood pills. All collapsible, all with shimmer loading states. It was the first feature that made Reveria feel like more than a toy.",
      },
      {
        type: "text",
        content:
          "Session 10 tackled image continuity head-on. Characters looked completely different across story continuations because the Illustrator rebuilt its character sheet from scratch each time. The fix: accumulate story text across batches and merge character sheets instead of replacing them. If the extraction failed, keep the old sheet. Simple in retrospect, took hours to debug because the failure mode was subtle: characters would slowly drift rather than obviously break.",
      },

      // --- Day 3 ---
      {
        type: "heading",
        content: "Day 3: The Firebase Marathon",
      },
      {
        type: "text",
        content:
          "Fourteen sessions in one day. This is where it stopped being a demo and became an app.",
      },
      {
        type: "stats",
        items: [
          { value: "14", label: "Sessions in One Day" },
          { value: "14", label: "Features Shipped" },
          { value: "3", label: "Save Flow Tiers" },
          { value: "1", label: "Very Long Day" },
        ],
      },
      {
        type: "text",
        content:
          "Firebase foundation: Auth with Google Sign-In, Firestore persistence, the save flow with its three tiers (instant if metadata exists, use WebSocket background result if available, call API with spinner as last resort). Library and Explore pages with 3D CSS book cards. Image error handling with specific reasons. Favorites with optimistic Firestore updates. Per-scene actions: regenerate image, regenerate scene, delete scene, each with its own WebSocket message type, backend handler, and loading state.",
      },
      {
        type: "text",
        content:
          "The kind of bugs you find on marathon days: opening your own completed book from Explore didn't pass the status field, so it defaulted to 'draft' and the book appeared editable. The translateZ(2px) fix for click events inside preserve-3d containers, because 3D CSS and click handlers are not friends. The Library \"New Story\" button that navigated to / without saving the current story.",
      },
      {
        type: "quote",
        content:
          "14 features in one day. Each one small, each one necessary, each one with its own edge cases and Firestore indexes and CSS animations. This was the day the codebase stopped being something one person could hold in their head.",
      },

      // --- Day 4 ---
      {
        type: "heading",
        content: "Day 4: The Image Consistency Breakthrough",
      },
      {
        type: "text",
        content:
          "This is the session that changed everything. Characters looked different in every scene, and we finally understood why.",
      },
      {
        type: "text",
        content:
          "The root cause: _create_image_prompt() asked Gemini to write a complete image prompt under 100 words. Gemini, being helpful, summarized character descriptions to fit the limit. \"A 23-year-old woman with auburn hair in a loose braid, green eyes, freckled cheeks, wearing a burgundy leather jacket with brass buckles and a silver compass pendant\" became \"woman in dark dress.\" Imagen never saw the details.",
      },
      {
        type: "text",
        content:
          "The fix was a hybrid prompt architecture. Split into two stages: identify which characters appear in the scene (tiny Gemini call), then have Gemini write only the scene composition while character descriptions get prepended verbatim from the reference sheet. No summarization. No creative rewriting. The exact character description hits Imagen every time. It sounds obvious now. It took three days to figure out.",
      },

      // --- Feature Sprint ---
      {
        type: "heading",
        content: "The Feature Sprint",
      },
      {
        type: "text",
        content:
          "With image consistency solved, we went on a feature tear. Multi-language support (8 languages with language-specific TTS voices). Reading Mode with word-by-word karaoke narration sync. PDF export with fpdf2. Character portraits via Imagen 3 with Gemini Vision for visual DNA extraction. Content filtering with pre-pipeline Gemini Flash classification. Hex color codes and anti-drift anchors in character sheets.",
      },

      // --- Feature Graveyard ---
      {
        type: "heading",
        content: "The Feature Graveyard",
      },
      {
        type: "text",
        content:
          "Not everything survived. Sometimes the right decision is deleting code you spent days writing.",
      },
      {
        type: "list",
        items: [
          "Ambient music (built Session 39, removed Session 53): 7 mood-mapped ambient tracks that crossfaded when the Director's mood analysis changed. Web Audio API with AudioContext and GainNode, proportional crossfades, browser autoplay policy workarounds. Nobody noticed it was there. Removed.",
          "Gemini Live Voice v1 (built Session 41, removed Session 53): Continuous voice conversation for story brainstorming. MediaRecorder streaming 16kHz PCM, backend LiveSession class, auto-fill prompt detection. Too complex for what users actually wanted. The voice feature came back later in a very different form (Director Chat), but this first version was the wrong abstraction.",
          "Cast Characters / Subject Reference (built across multiple sessions, removed later): Photo upload for character likeness. Vision analysis, Imagen edit_image with subject binding. Likeness quality from Imagen's subject reference was not good enough. Characters looked vaguely similar at best. The entire feature was removed rather than shipping something half-baked.",
        ],
      },

      // --- Deep Work ---
      {
        type: "heading",
        content: "Deep Work: Sessions 43-64",
      },
      {
        type: "text",
        content:
          "Fewer new features, more structural improvements. The Great Decomposition: seven monolithic files (500-800 lines each) broken into 22 smaller modules, all under 320 lines. SceneCard.jsx went from 782 lines to 128. App.jsx from 557 to 324. Not glamorous work, but the codebase became navigable again.",
      },
      {
        type: "text",
        content:
          "Backend resilience: per-user circuit breakers on Imagen, a retry utility with transient error detection, GCS retry with signed URL fallback, atomic usage tracking with Firestore transactions, batched deletions for stories with lots of scenes, TTS silence insertion when a segment fails so audio doesn't just cut out mid-sentence.",
      },
      {
        type: "text",
        content:
          "Per-scene streaming: the architecture rewrite that should have been there from day 1. Instead of generating all text, then all images, then all audio in batch, the pipeline now fires tasks per scene as soon as text is ready. Character extraction runs once on the first scene. The perceived latency dropped dramatically because users see images appearing while text is still generating for later scenes.",
      },

      // --- Interaction-Flow Audit ---
      {
        type: "heading",
        content: "The Interaction-Flow Audit",
      },
      {
        type: "text",
        content:
          "Nine bugs found by asking \"what happens if...?\" questions instead of reading code. Walking through every major user flow and thinking about race conditions, disconnects, and state mismatches.",
      },
      {
        type: "list",
        items: [
          "The critical one: When generation was already running and the Director issued a generate_story tool call, the tool call was silently dropped without sending a FunctionResponse back to the Gemini Live API. This corrupted the session. The Live API requires a FunctionResponse for every tool call, no exceptions.",
          "The subtle one: asyncio.CancelledError inherits from BaseException, not Exception. So the except Exception block in handle_generate never caught it. When a WebSocket disconnected during generation, the usage counter was never decremented. Users lost a generation credit for stories they never received.",
          "The sneaky one: After a story reset, storyIdRef.current becomes null, but scene-scoped WebSocket messages kept arriving and applied their data without checking. Stale data from the old story could leak into the new session.",
          "Other finds: hero photo analysis blocking the entire WebSocket message loop for 30 seconds, double-click save race conditions, scene busy indicators stuck after reconnect, director live notes accumulating across batches.",
        ],
      },

      // --- Director Chat Rewrites ---
      {
        type: "heading",
        content: "Director Chat: Three Rewrites",
      },
      {
        type: "text",
        content:
          "Version 1: Separate API calls for everything. send_audio() for the conversation, transcribe_audio() for user speech, another transcribe_audio() for the Director's response, detect_intent() to check generation intent, suggest_prompt() to extract a story prompt. Five API calls per interaction. Slow and expensive.",
      },
      {
        type: "text",
        content:
          "Version 2: The rewrite after actually reading the Gemini Live API docs more carefully. Native audio transcription, native function calling for generation intent, context window compression for long sessions. Three to five API calls eliminated per interaction.",
      },
      {
        type: "text",
        content:
          "Version 3: VAD (Voice Activity Detection) for natural conversation flow. Web Audio's AnalyserNode computing RMS levels, detecting speech-to-silence transitions, auto-stopping the recorder after 1.2 seconds of quiet. Speak, pause, auto-send, Director responds. No button-pushing required.",
      },
      {
        type: "quote",
        content:
          "The manual \"Suggest\" button stayed as a fallback because native tool calling reliability in audio mode hovers around 60-70%. Sometimes the best engineering is admitting the technology isn't reliable enough and building a backup path.",
      },

      // --- Streaming Audio & Voice Orb ---
      {
        type: "heading",
        content: "Streaming Audio & Voice-Reactive Orb (Sessions 63-64)",
      },
      {
        type: "text",
        content:
          "The Director Chat had a noticeable thinking gap. Full audio responses had to be collected, encoded as WAV, and sent as a data URL before playback could start. The fix: stream PCM chunks incrementally. Each chunk is base64-encoded and sent as a WebSocket message. A useStreamingAudio hook on the frontend feeds chunks into Web Audio API AudioBufferSource nodes scheduled for gapless playback. Director voice starts within 200-400ms instead of 1-2 seconds.",
      },
      {
        type: "text",
        content:
          "Mute control replaced barge-in: tapping the orb during Director speech stops playback instantly. This proved more reliable than keeping the mic hot during speech, which picked up echo even with echoCancellation enabled.",
      },
      {
        type: "text",
        content:
          "The CSS orb became a canvas-based multi-blob visualization. Four overlapping soft blobs blend Dream Violet and Story Amber with heavy gaussian blur, each orbiting independently for organic motion. Real-time amplitude from the mic or streaming audio drives blob size and orbit radius. Asymmetric smoothing (fast attack, slow decay) for organic feel. Six visual modes blending smoothly via per-frame color and speed lerping. The kind of detail that makes voice interaction feel alive instead of mechanical.",
      },

      // --- The Numbers ---
      {
        type: "heading",
        content: "The Numbers",
      },
      {
        type: "stats",
        items: [
          { value: "65+", label: "Coding Sessions" },
          { value: "~60K", label: "Lines of Code" },
          { value: "3", label: "Major Rewrites" },
          { value: "3", label: "Features Removed" },
        ],
      },

      // --- What We'd Do Differently ---
      {
        type: "heading",
        content: "What We'd Do Differently",
      },
      {
        type: "list",
        items: [
          "Start with per-scene streaming from day 1. The batch pipeline was the wrong architecture. We knew it by Session 10 and didn't fix it until Session 54. Forty sessions of working around the wrong abstraction.",
          "Read the API docs more carefully, earlier. The Gemini Live API had native transcription, tool calling, and context compression the entire time. We built manual versions of all three before discovering the native features existed.",
          "Build interaction tests before UI. The Session 59 audit found 9 bugs by just thinking through user flows. If we'd written those scenarios as test cases from the start, we would have caught them during development.",
          "Ship fewer features, polish more. The feature graveyard represents weeks of work that was ultimately deleted. More time on character consistency and the reading experience would have been a better investment.",
        ],
      },

      // --- Timeline ---
      {
        type: "heading",
        content: "Timeline",
      },
      {
        type: "list",
        items: [
          "Day 1 (Sessions 1-8): Core pipeline, Imagen 3, flipbook, responsive UI, book shadows",
          "Day 2 (Sessions 9-10): Director panel, structured analysis, image continuity fix",
          "Day 3 (Sessions 11-24): Firebase, Library, Explore, routing, 14 features in one day",
          "Day 4 (Sessions 25-42): Hybrid prompts, multi-lang, portraits, reading mode, PDF export",
          "Day 5 (Sessions 43-49): Decomposition, social features, content filtering, prompt engineering",
          "Day 6 (Sessions 50-53): Subscription tiers, feature cleanup, author attribution",
          "Day 7 (Sessions 54-58): Per-scene streaming, Director Chat, native API rewrite",
          "Day 8 (Sessions 59-62): Interaction audit, visual narratives, cinematic opening, panel redesign",
          "Day 9 (Sessions 63-65+): Streaming audio, mute control, voice-reactive orb, text input mode, accessibility",
        ],
      },
      {
        type: "callout",
        content:
          "Built for the Gemini Live Agent Challenge hackathon. The live app is at reveria.web.app and the source code is on GitHub at github.com/Dileep2896/storyforge.",
      },
    ],
  },
  {
    slug: "startup-to-1-5m-valuation",
    title: "From $0 to $1.5M Valuation: What I Learned Building a Startup as a Student",
    date: "2026-02-18",
    category: "Startup",
    tags: ["Startup", "Flutter", "AWS", "EV", "Entrepreneurship", "Mobile Dev"],
    image: "/images/blog/placeholder-startup.svg",
    readTime: 10,
    excerpt:
      "How I co-founded EVon Energy, built a unified EV charging app with Flutter and AWS, raised $15K, and hit a $1.5M valuation before graduating.",
    github: "",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "I was 21, sitting in my apartment in Bangalore, staring at a problem that genuinely annoyed me. India was rolling out electric vehicles everywhere, but the charging infrastructure was a mess. Every charging network had its own app, its own payment system, its own map. If you owned an EV, you needed five different apps just to find a charger. Nobody was solving the fragmentation problem. So I thought, why not me?",
      },
      {
        type: "heading",
        content: "The Idea That Wouldn't Leave",
      },
      {
        type: "text",
        content:
          "EVon Energy started as a simple idea: one app to find, navigate to, and pay for any EV charger regardless of the network. Think of it like Google Maps but specifically for EV charging. No more switching between Tata Power, Ather, ChargeZone, and a dozen other apps. Just open EVon, find the nearest available charger, and go.",
      },
      {
        type: "text",
        content:
          "I pitched this to a few friends, and the response was immediate. Two of them said they'd join. Within a week, we had a team of six. That speed should have been a warning sign about how naive we all were, but honestly, the naivety helped. We didn't know what we didn't know, and that let us move fast without overthinking.",
      },
      {
        type: "stats",
        items: [
          { value: "$15K", label: "Raised" },
          { value: "$1.5M", label: "Valuation" },
          { value: "6", label: "Team Members" },
          { value: "30%", label: "More Charger Access" },
        ],
      },
      {
        type: "heading",
        content: "Building the MVP",
      },
      {
        type: "text",
        content:
          "I chose Flutter for the app because we needed to ship on both iOS and Android simultaneously with a team of exactly one mobile developer (me). Flutter's single codebase approach wasn't just convenient, it was the only realistic option given our resources. The backend ran on AWS Amplify with a PostgreSQL database using PostGIS for geospatial queries. When a user searched for nearby chargers, PostGIS could calculate distances and filter by availability in milliseconds.",
      },
      {
        type: "text",
        content:
          "The hardest technical challenge was aggregating charger data from multiple networks. Each provider had a different API format, different availability statuses, different pricing models. I ended up building an adapter layer that normalized everything into a common schema. It was messy code, honestly. But it worked, and that's what mattered at the MVP stage.",
      },
      {
        type: "list",
        items: [
          "Flutter + Dart for cross-platform mobile development",
          "AWS Amplify for backend infrastructure and authentication",
          "PostgreSQL with PostGIS for geospatial charger queries",
          "REST APIs with custom adapter layer for multi-network aggregation",
          "Firebase Cloud Messaging for real-time charger availability updates",
        ],
      },
      {
        type: "heading",
        content: "Raising Money as a Student",
      },
      {
        type: "text",
        content:
          "Here's something nobody tells you about fundraising: investors don't invest in ideas. They invest in traction and teams. Our first three pitches were disasters. We had a beautiful deck, a working prototype, and zero users. Every investor said the same thing: come back when you have numbers.",
      },
      {
        type: "text",
        content:
          "So we pivoted our approach. Instead of pitching to VCs, we went directly to EV charging station owners. We offered to list their chargers on our platform for free in exchange for data access. Within two months, we had partnerships with enough stations to cover 30% more chargers than any single network's app. That was our traction metric.",
      },
      {
        type: "text",
        content:
          "With that number, we went back to investors. This time, we raised $15K in pre-seed funding and got a $1.5M valuation. For a student-led startup with a working MVP and real partnerships, that felt like a win.",
      },
      {
        type: "quote",
        content:
          "Investors don't invest in ideas. They invest in traction and teams. Our first three pitches were disasters. Come back when you have numbers, they said.",
      },
      {
        type: "heading",
        content: "Leading a Team of Six",
      },
      {
        type: "text",
        content:
          "Leading a team was the skill I didn't know I needed. Writing code is one thing. Getting six people aligned on priorities, resolving disagreements about product direction, and keeping everyone motivated when progress is slow? That's a completely different challenge.",
      },
      {
        type: "text",
        content:
          "The biggest lesson: be decisive, even when you're not sure. A team stuck in analysis paralysis moves slower than a team making imperfect decisions and iterating. I made plenty of wrong calls, but making them quickly meant we could course-correct just as quickly.",
      },
      {
        type: "heading",
        content: "What I'd Do Differently",
      },
      {
        type: "list",
        items: [
          "Talk to users before writing a single line of code. We built features we assumed people wanted instead of asking them.",
          "Charge early. We offered everything for free to get traction, but that made it harder to prove revenue potential later.",
          "Don't build what you can integrate. I spent weeks building a payment system from scratch when we could have used Razorpay from day one.",
          "Hire for gaps, not for comfort. We had too many developers and not enough people who understood the EV market.",
        ],
      },
      {
        type: "heading",
        content: "What This Taught Me About Software",
      },
      {
        type: "text",
        content:
          "Building a startup taught me more about software engineering than any course or internship. Not because the code was complex (it wasn't), but because the constraints were real. Every architectural decision had a cost: time, money, or both. You learn to make tradeoffs fast. You learn that perfect code that ships late is worse than decent code that ships now. You learn that the best technical solution is the one your team can actually maintain.",
      },
      {
        type: "text",
        content:
          "EVon Energy eventually paused operations when I moved to the US for my Master's at RIT. But the experience shaped everything I've built since. Every hackathon, every project, every internship since then has been informed by that year of building something real with real stakes.",
      },
      {
        type: "callout",
        content:
          "EVon Energy was an EV charging aggregation startup I co-founded in Bangalore, India in 2022. While the company is no longer active, the technical and business lessons from this experience continue to shape my approach to building products.",
      },
    ],
  },
  {
    slug: "12-hackathon-wins-playbook",
    title: "12 Hackathons, 12 Wins: My Playbook for Winning Every Time",
    date: "2026-02-15",
    category: "Career",
    tags: ["Hackathons", "Strategy", "Career", "Teamwork", "Rapid Prototyping"],
    image: "/images/blog/placeholder-career.svg",
    readTime: 9,
    excerpt:
      "After winning 12 hackathons in a row, here's the honest playbook I follow for picking ideas, building fast, and presenting work that stands out to judges.",
    github: "",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "People always ask me the same question when they hear about my hackathon record: how? Like there's some secret formula or cheat code. There isn't. But there is a system, a set of habits I've developed over 12 hackathons that consistently puts me in a position to win. None of this is rocket science. Most of it is just being disciplined about things that other teams skip.",
      },
      {
        type: "stats",
        items: [
          { value: "12", label: "Hackathon Wins" },
          { value: "48hr", label: "Average Build Time" },
          { value: "50+", label: "Projects Built" },
          { value: "100%", label: "Win Rate" },
        ],
      },
      {
        type: "heading",
        content: "Rule 1: Solve a Real Problem, Not a Cool Technology Demo",
      },
      {
        type: "text",
        content:
          "The biggest mistake I see at hackathons is teams that start with a technology and then look for a problem to apply it to. 'Let's build something with blockchain!' or 'Let's use this new AI API!' That's backwards. Judges have seen a hundred generic chatbots and NFT platforms. They haven't seen a solution that makes them think, 'wow, that would actually help people.'",
      },
      {
        type: "text",
        content:
          "I always start with a problem I've personally experienced or observed. Good Deeds came from watching newcomers struggle to integrate into local communities. StoryForge came from frustration with flat, text-only AI storytelling. When the problem is real, the passion is real, and judges can feel that.",
      },
      {
        type: "quote",
        content:
          "Start with a problem you've personally experienced. When the problem is real, the passion is real, and judges can feel that.",
      },
      {
        type: "heading",
        content: "Rule 2: Scope Ruthlessly",
      },
      {
        type: "text",
        content:
          "You have 24 to 48 hours. That's it. The number one killer of hackathon projects is scope creep. Teams try to build a full product and end up with a half-working mess. Instead, I identify the one core feature that demonstrates the value proposition and build that flawlessly.",
      },
      {
        type: "text",
        content:
          "For StoryForge, the core feature was Director Mode, the ability to steer a story in real time. Everything else (multiple art styles, voice selection, genre presets) was secondary. I made sure Director Mode worked perfectly before touching anything else. If time ran out, at least the demo would show something unique and polished.",
      },
      {
        type: "list",
        items: [
          "Write down every feature you want to build",
          "Cross out everything that isn't essential to demonstrate the core value",
          "Whatever's left, cut it in half again",
          "Build that. Polish it. Make it demo-ready.",
        ],
      },
      {
        type: "heading",
        content: "Rule 3: The Tech Stack Should Be Boring",
      },
      {
        type: "text",
        content:
          "A hackathon is not the place to learn a new framework. Use what you know cold. For me, that's React or Next.js for web, Flutter for mobile, Node.js or FastAPI for backend, and Firebase or MongoDB for data. I can spin up a full-stack app with these tools in under an hour because I've done it dozens of times.",
      },
      {
        type: "text",
        content:
          "The exception is the sponsor's technology. If the hackathon is sponsored by Google and they want you to use Gemini, then yes, learn Gemini. But everything around it should be tools you can use in your sleep. You want to spend your limited time on the hard problems, not on configuring a build tool.",
      },
      {
        type: "heading",
        content: "Rule 4: Plan the Demo Before You Write Code",
      },
      {
        type: "text",
        content:
          "This is probably the most counterintuitive rule, and the most important one. Before I write a single line of code, I script the demo. I know exactly what I'm going to show the judges, in what order, and what story I'm going to tell about why this project matters. Then I build backwards from the demo.",
      },
      {
        type: "text",
        content:
          "Why? Because the demo is how you win. I've seen technically brilliant projects lose to simpler ones because the team couldn't explain what they built or why it mattered. The demo is your three-minute pitch. Every second counts. If you don't plan it, you'll ramble, skip the best parts, and run out of time.",
      },
      {
        type: "quote",
        content:
          "I've seen technically brilliant projects lose to simpler ones because the team couldn't explain what they built or why it mattered.",
      },
      {
        type: "heading",
        content: "Rule 5: Sleep",
      },
      {
        type: "text",
        content:
          "I know this sounds ridiculous at a hackathon, but hear me out. In a 36-hour hackathon, I sleep for 4 to 5 hours. Not zero. The teams that pull all-nighters are zombies by demo time. They make bugs at 3 AM that take hours to fix. Their demos are incoherent because they're running on caffeine and adrenaline.",
      },
      {
        type: "text",
        content:
          "I'd rather have 30 hours of focused, sharp coding than 36 hours of increasingly sloppy work. My best hackathon code has always been written in the morning after a few hours of sleep, not at 4 AM.",
      },
      {
        type: "heading",
        content: "Rule 6: Make It Look Good",
      },
      {
        type: "text",
        content:
          "Shallow? Maybe. But it matters. A lot. Judges spend 3 to 5 minutes with each project. If your app looks like a default Bootstrap template, they'll assume the whole project is low-effort. If it looks polished, they'll assume the code underneath is solid too.",
      },
      {
        type: "text",
        content:
          "I spend the last 2 to 3 hours of every hackathon purely on UI polish. Smooth animations, consistent spacing, a dark theme that doesn't look like an afterthought. Tailwind CSS makes this fast. A few gradients, some glassmorphism effects, rounded corners, and you go from 'student project' to 'this could be a real product.'",
      },
      {
        type: "heading",
        content: "Rule 7: Tell a Story, Not a Feature List",
      },
      {
        type: "text",
        content:
          "During the demo, don't say 'this app has real-time chat, video calling, and notification features.' Instead, say 'imagine you just moved to a new country and you don't speak the language. You open PolyChat, and within minutes you're video-calling with a native speaker who wants to learn your language. That's PolyChat.' Same product, completely different impact.",
      },
      {
        type: "text",
        content:
          "Judges are humans. They respond to narratives, not feature lists. Start with the problem, show the solution through a user journey, and end with impact. Every single time.",
      },
      {
        type: "heading",
        content: "The Honest Truth",
      },
      {
        type: "text",
        content:
          "I won't pretend every hackathon was smooth. I've had servers crash during demos, databases corrupt at 2 AM, and teammates who disappeared halfway through. The wins come from recovery, not from things going according to plan. The teams that win are the ones that adapt when things break, and they always break.",
      },
      {
        type: "text",
        content:
          "If there's one thing I want you to take from this: hackathons aren't about being the best coder in the room. They're about being the most prepared, the most focused, and the best communicator. Code is maybe 40% of winning. The other 60% is everything else.",
      },
      {
        type: "callout",
        content:
          "These strategies come from my personal experience across 12 hackathons. Every hackathon is different, and what works for me might not work for everyone. The key is developing your own system and iterating on it.",
      },
    ],
  },
  {
    slug: "india-to-rit-what-changed",
    title: "I Left India to Study CS at RIT. Here's What Changed.",
    date: "2026-02-10",
    category: "Personal",
    tags: ["Career", "Education", "RIT", "International Student", "Growth"],
    image: "/images/blog/placeholder-personal.svg",
    readTime: 7,
    excerpt:
      "Moving from Bangalore to Rochester for a Master's in CS at RIT changed how I think about software, careers, and what it means to build things that matter.",
    github: "",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "In July 2023, I packed two suitcases and flew from Bangalore to Rochester, New York. I'd just spent a year building a startup, had three internships under my belt, and thought I knew what being a software engineer meant. I was wrong. Not in a dramatic, life-shattering way. More like discovering that the map you've been using only covered half the territory.",
      },
      {
        type: "heading",
        content: "Why I Left a Startup for a Master's Degree",
      },
      {
        type: "text",
        content:
          "People thought I was crazy. EVon Energy had momentum. We had funding, partnerships, a growing user base. Why would I leave all of that to go back to school? The honest answer: I hit a ceiling. I could build apps, but I didn't deeply understand the systems underneath them. I could use AWS services, but I couldn't explain how distributed systems actually worked. I could write machine learning code from tutorials, but I couldn't design an ML pipeline from scratch.",
      },
      {
        type: "text",
        content:
          "RIT's CS program offered exactly what I was missing: depth. Not more frameworks. Not more languages. Actual computer science. Algorithms that make you think differently about problems. Systems design that changes how you architect software. Research that pushes you to the edge of what's known.",
      },
      {
        type: "quote",
        content:
          "I could build apps, but I didn't deeply understand the systems underneath them. RIT offered what I was missing: depth. Not more frameworks. Actual computer science.",
      },
      {
        type: "heading",
        content: "The Culture Shock Nobody Warned Me About",
      },
      {
        type: "text",
        content:
          "I expected the weather shock (Rochester winters are no joke). I expected the food adjustment. What I didn't expect was the difference in how people approach work. In India, the tech culture I grew up in was hustle-focused. Work long hours, ship fast, figure it out later. At RIT, the emphasis was on understanding before building. Professors would stop you mid-implementation to ask why you chose that approach. Teammates would push back on solutions that worked but weren't well-reasoned.",
      },
      {
        type: "text",
        content:
          "At first, this frustrated me. I was used to moving fast. But slowly, I realized this approach produces better engineers. Understanding why something works is more valuable than knowing that it works. It changed how I write code, how I review code, and how I think about system design.",
      },
      {
        type: "heading",
        content: "Research Changed My Perspective",
      },
      {
        type: "text",
        content:
          "I never planned to do research. I was a builder, not a researcher. But when an opportunity opened to work as a Research Assistant building VR simulations in Unity, I took it out of curiosity. It turned out to be one of the most valuable experiences of my degree.",
      },
      {
        type: "text",
        content:
          "Research taught me patience. In industry, you ship an MVP and iterate. In research, you spend weeks reading papers before writing a single line of code. You form hypotheses, design experiments, and accept that most of your initial assumptions are wrong. This methodical approach made me a better debugger, a better architect, and honestly a better thinker.",
      },
      {
        type: "stats",
        items: [
          { value: "35%", label: "More Interactivity in VR Simulations" },
          { value: "40%", label: "Faster Data Processing" },
          { value: "25%", label: "Better User Retention" },
        ],
      },
      {
        type: "heading",
        content: "The Hackathon Scene Here Is Different",
      },
      {
        type: "text",
        content:
          "In India, hackathons were mostly about speed. Build the fastest MVP and pitch it well. In the US, hackathons emphasize innovation and technical depth. Judges ask harder questions. They want to see your architecture diagram, understand your data flow, and know why you chose one approach over another. It raised my game significantly.",
      },
      {
        type: "text",
        content:
          "I've now won hackathons on both continents, and the skills are different. Indian hackathons taught me to ship fast. American hackathons taught me to think deeply. The combination is powerful.",
      },
      {
        type: "heading",
        content: "What Actually Changed",
      },
      {
        type: "list",
        items: [
          "How I think about code: I used to optimize for shipping speed. Now I optimize for clarity and maintainability first, speed second. Future me (and my teammates) appreciate this.",
          "How I approach problems: I spend more time understanding before jumping to solutions. The extra time upfront saves hours of debugging later.",
          "My technical breadth: VR development, reinforcement learning, advanced distributed systems. These aren't things I would have explored on my own.",
          "My network: Working with people from completely different backgrounds and cultures gives you perspectives you can't get from staying in one place.",
          "My confidence: Knowing I can thrive in a completely unfamiliar environment is something no amount of technical skill can give you. You have to do it.",
        ],
      },
      {
        type: "heading",
        content: "Advice for Anyone Considering the Same Move",
      },
      {
        type: "text",
        content:
          "If you're a developer in India thinking about a Master's abroad, here's what I wish someone had told me:",
      },
      {
        type: "list",
        items: [
          "Your industry experience is your superpower. Most of your classmates will be coming straight from undergrad. You've already shipped real products. Use that perspective.",
          "Don't just take easy courses. Take the ones that scare you. That's where the growth is.",
          "Build things outside of class. The degree gives you knowledge. Personal projects give you proof.",
          "The transition is hard. Financially, emotionally, socially. Give yourself grace during the first semester. It gets better.",
          "Network relentlessly. The connections you make at university will matter more than your GPA. Go to events, join clubs, talk to people outside your comfort zone.",
        ],
      },
      {
        type: "text",
        content:
          "Rochester winters are brutal, the dining hall food is questionable, and there are days when you wonder why you left a perfectly good career to sit in a lecture hall again. But two years later, I can say without hesitation: this was the right call. The person who landed at Rochester airport in 2023 and the person writing this today are not the same engineer.",
      },
      {
        type: "callout",
        content:
          "This post reflects my personal experience as an international student at RIT. Everyone's journey is different, and what worked for me may not apply to everyone. If you're considering a similar move, I'm happy to chat. Reach out on LinkedIn.",
      },
    ],
  },
  {
    slug: "real-time-tech-compared",
    title: "Building Real-Time Features That Actually Work: WebSocket vs Stream SDK vs Liveblocks",
    date: "2026-02-05",
    category: "Technical",
    tags: ["WebSocket", "Real-time", "Stream SDK", "Liveblocks", "React", "Architecture"],
    image: "/images/blog/placeholder-technical.svg",
    readTime: 11,
    excerpt:
      "I've used WebSocket, Stream SDK, and Liveblocks across three different production projects. Here's an honest comparison of what works, what doesn't, and when to use each.",
    github: "",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "Real-time features are one of those things that sound simple and are absolutely not. 'Just add live updates' is a sentence that has caused more engineering headaches than almost anything else I can think of. Over the past year, I've built real-time systems using three completely different approaches: raw WebSocket connections for StoryForge, Stream SDK for PolyChat, and Liveblocks for DocuMate. Each taught me something different about what real-time actually means in production.",
      },
      {
        type: "stats",
        items: [
          { value: "3", label: "Projects" },
          { value: "3", label: "Different Approaches" },
          { value: "1000s", label: "Real-time Events" },
          { value: "1", label: "Developer (Me)" },
        ],
      },
      {
        type: "heading",
        content: "Approach 1: Raw WebSocket (StoryForge)",
      },
      {
        type: "text",
        content:
          "For StoryForge, I needed to stream AI-generated story content (text, images, audio) from a Python/FastAPI backend to a React frontend in real time. The content was generated progressively. Each chapter's text came first, then illustrations and audio followed as they completed. I needed fine-grained control over what gets sent and when.",
      },
      {
        type: "text",
        content:
          "I went with raw WebSocket because no SDK could give me the control I needed. The backend sends structured JSON messages with a type field (text_chunk, image_ready, audio_ready, story_complete) and the frontend routes each message type to the appropriate UI component. It's simple in concept.",
      },
      {
        type: "code",
        content: "// Frontend WebSocket message handler\nws.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  switch (data.type) {\n    case 'text_chunk':\n      appendToChapter(data.chapter, data.content);\n      break;\n    case 'image_ready':\n      setChapterImage(data.chapter, data.url);\n      break;\n    case 'audio_ready':\n      setChapterAudio(data.chapter, data.url);\n      break;\n  }\n};",
      },
      {
        type: "text",
        content:
          "The problems came fast. WebSocket connections drop silently. The browser might not even fire an error event. I had to implement heartbeat pings every 15 seconds, automatic reconnection with exponential backoff, and message queuing so that content generated during a disconnect would be delivered on reconnect. What started as 20 lines of WebSocket code turned into 200 lines of connection management code.",
      },
      {
        type: "list",
        items: [
          "Pros: Total control over message format and timing. No vendor lock-in. No per-message costs. Works with any backend language.",
          "Cons: You build everything yourself. Reconnection, heartbeat, buffering, error handling. It's a lot of infrastructure code that has nothing to do with your actual product.",
          "Best for: Custom streaming protocols, AI output streaming, any case where you need control over the wire format.",
        ],
      },
      {
        type: "heading",
        content: "Approach 2: Stream SDK (PolyChat)",
      },
      {
        type: "text",
        content:
          "PolyChat is a language learning social platform with real-time chat and video calling. For this, I used Stream's Chat and Video SDKs. The difference in developer experience was night and day compared to raw WebSocket.",
      },
      {
        type: "text",
        content:
          "With Stream, I didn't write a single line of WebSocket code. The SDK handles connections, reconnection, message ordering, read receipts, typing indicators, and presence. On the video side, it handles WebRTC negotiation, TURN/STUN servers, and quality adaptation. All I had to do was configure channels, attach event listeners, and render the UI.",
      },
      {
        type: "code",
        content: "// Stream Chat setup - that's really it\nconst client = StreamChat.getInstance(apiKey);\nawait client.connectUser(user, token);\nconst channel = client.channel('messaging', channelId);\nawait channel.watch();\n\n// Messages, typing, presence - all handled\nchannel.on('message.new', (event) => {\n  // SDK already updated the local state\n  // Just re-render\n});",
      },
      {
        type: "text",
        content:
          "The tradeoff is flexibility. Stream's chat UI components are opinionated. You can customize them, but you're working within their design system. For PolyChat, this was fine because I wanted standard chat features. If I'd needed something unusual (like StoryForge's progressive multimodal streaming), Stream wouldn't have been the right choice.",
      },
      {
        type: "list",
        items: [
          "Pros: Massive time savings. Production-ready features out of the box: chat, video, presence, typing indicators, read receipts. Handles all the hard networking stuff.",
          "Cons: Vendor lock-in. Pricing scales with monthly active users. Limited customization of core behavior. You're dependent on their uptime.",
          "Best for: Chat applications, social features, video calling, any standard real-time communication pattern.",
        ],
      },
      {
        type: "heading",
        content: "Approach 3: Liveblocks (DocuMate)",
      },
      {
        type: "text",
        content:
          "DocuMate is a collaborative document editor, think Google Docs. For this, I used Liveblocks, which is built specifically for real-time collaboration. The core challenge in collaborative editing isn't just syncing data. It's conflict resolution. When two people edit the same paragraph simultaneously, whose version wins? How do you merge changes without losing anyone's work?",
      },
      {
        type: "text",
        content:
          "Liveblocks solves this with CRDTs (Conflict-free Replicated Data Types) under the hood. I didn't have to think about conflict resolution at all. I defined my collaborative data structures using Liveblocks' storage API, and the SDK handled merging, syncing, and broadcasting automatically. Live cursors showing where each user was editing came almost for free.",
      },
      {
        type: "code",
        content: "// Liveblocks collaborative storage\nconst [doc, setDoc] = useStorage(\n  (root) => root.document\n);\n\n// Updates automatically sync to all\n// connected users via CRDTs\nconst updateContent = useMutation(\n  ({ storage }, newContent) => {\n    storage.get('document').set('content', newContent);\n  }, []\n);",
      },
      {
        type: "text",
        content:
          "The Liveblocks and Lexical editor integration was the smoothest part of the entire DocuMate project. Liveblocks has first-class support for Lexical, so rich text collaboration (bold, italics, headings, lists) just worked. Threaded comments were also built-in. The hardest part was actually the access control layer (who can view vs edit), not the real-time sync.",
      },
      {
        type: "list",
        items: [
          "Pros: CRDTs handle conflict resolution automatically. Live cursors and presence out of the box. Deep integrations with popular editors (Lexical, Tiptap, Monaco). Comments and notifications built-in.",
          "Cons: Specialized for collaboration. Not suitable for chat or streaming use cases. Pricing based on monthly active users. Smaller community than Stream.",
          "Best for: Collaborative editing, whiteboards, design tools, any app where multiple users modify shared state simultaneously.",
        ],
      },
      {
        type: "heading",
        content: "The Decision Framework",
      },
      {
        type: "text",
        content:
          "After building with all three, here's how I decide which to use:",
      },
      {
        type: "list",
        items: [
          "Need custom streaming or total wire-level control? Use raw WebSocket. You'll write more code, but you'll own every bit of behavior.",
          "Building chat, social features, or video? Use Stream SDK (or a competitor like SendBird). The time savings are enormous and the edge cases they handle (offline support, message ordering, typing indicators) would take months to build yourself.",
          "Building collaborative editing or shared-state apps? Use Liveblocks. CRDT-based conflict resolution is not something you want to implement from scratch. Trust me.",
          "Not sure yet? Start with WebSocket. You can always migrate to a managed solution later, but you can't easily go the other direction.",
        ],
      },
      {
        type: "heading",
        content: "Common Mistakes I Made",
      },
      {
        type: "list",
        items: [
          "Underestimating reconnection complexity with raw WebSocket. Budget 3x more time than you think for connection management.",
          "Not testing on slow networks. Real-time features that work on localhost and break on 3G are useless. Use Chrome's network throttling during development.",
          "Ignoring optimistic updates. Users expect instant feedback. Show the action immediately and reconcile with the server in the background.",
          "Forgetting about message ordering. Network packets can arrive out of order. Your UI needs to handle this gracefully, especially for chat.",
        ],
      },
      {
        type: "text",
        content:
          "Real-time is hard. There's no way around that. But picking the right tool for the job makes the difference between a weekend of work and months of infrastructure code. Know what level of control you need, choose accordingly, and don't build what you don't have to.",
      },
      {
        type: "callout",
        content:
          "All three approaches described here come from production projects in my portfolio. Check out StoryForge (WebSocket), PolyChat (Stream SDK), and DocuMate (Liveblocks) in my projects section to see them in action.",
      },
    ],
  },
];

const socialIcons = [
  {
    name: "github",
    Icon: FaGithub,
    link: "https://github.com/Dileep2896",
  },
  {
    name: "linkedin",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/dileep2896/",
  },
  {
    name: "resume",
    Icon: FaFileAlt,
    link: "https://s3-personal-bucket.s3.amazonaws.com/Resume.pdf",
  },
];

const testimonials = [
  {
    name: "Huy Le",
    title: "AI Researcher",
    text: "Dileep is very attentive, hardworking, and smart person. He's always delivering above and beyond. He has helped us a lot with the interview for the student incubator program for the tech part and financial part. You should definitely work with this guy. His commitment will help you a lot.",
  },
  {
    name: "Nitish Chandrashekar",
    title: "MS Computer Science @ RIT | ML & Big Data",
    text: "I've had the pleasure of working alongside Dileep during our Master's program at RIT, and I can't say enough good things about him. From day one, I was impressed by how he approached technical challenges with both expertise and genuine enthusiasm. What really stands out about Dileep is his talent for mobile app development.",
  },
  {
    name: "Shehab Saleh",
    title: "BS Mechatronics Engineering @ RIT",
    text: "It gives me great pleasure to provide this recommendation for Dileep Kumar Sharma, a devoted and accomplished software engineer. I have previously had the chance to work with him and I have witnessed firsthand his proficiency with contemporary web technologies like AWS, Next.js, and MERN stack among others.",
  },
];

const skillCategories = [
  { category: "Frontend", skills: ["React", "Next.js", "HTML/CSS", "Tailwind", "Three.js"] },
  { category: "Mobile", skills: ["Flutter", "React Native", "Android (Kotlin/Java)"] },
  { category: "Backend", skills: ["Node.js", "Express", "FastAPI", "Django"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda)", "GCP", "Docker", "CI/CD"] },
  { category: "Databases", skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
  { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Dart", "Java", "Kotlin", "C++"] },
  { category: "Tools", skills: ["Git", "Figma", "Jira", "Postman"] },
];

export {
  words,
  abilities,
  counterItems,
  hackathonImgList,
  expCards,
  socialIcons,
  techImgList,
  techStackIcons,
  navLinks,
  projects,
  examsImgList,
  testimonials,
  skillCategories,
  blogPosts,
};
