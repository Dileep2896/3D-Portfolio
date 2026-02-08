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
  { value: 7, suffix: "", label: "Years of Development" },
  {
    value: 1.5,
    suffix: "M",
    prefix: "$",
    label: "Startup Valuation",
  },
  { value: 3, suffix: "", label: "Internship Experience" },
  { value: 50, suffix: "+", label: "Projects Built" },
  { value: 12, suffix: "x", label: "Hackthon Winner" },
];

const projects = [
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
    image: "/images/projects/polyproject.png",
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
    demo: "https://polychat.vercel.app/",
    tech: ["React", "Express", "MongoDB", "Zustand", "Stream SDK"],
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
    image: "/images/projects/soocily.png",
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
    image: "/images/projects/interviewer.png",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%201.png",
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%202.png",
      "https://raw.githubusercontent.com/Dileep2896/interviewer/main/public/screen%203.png",
    ],
    github: "https://github.com/Dileep2896/interviewer",
    demo: "https://interviewer-demo.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
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
    image: "/images/projects/gooddeeds.png",
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
    image: "/images/projects/spotify_clone.png",
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
    image: "/images/projects/project.png",
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
    image: "/images/projects/documate.png",
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
    image: "/images/projects/gadgetbay.png",
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
    image: "/images/projects/split.png",
    gallery: [
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image1.png",
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image2.png",
      "https://raw.githubusercontent.com/Dileep2896/split/main/assets/image3.png",
    ],
    github: "https://github.com/Dileep2896/split",
    demo: null,
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
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
    image: "/images/projects/talkbot.png",
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
    image: "/images/projects/timer_game.png",
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
    image: "/images/projects/gymgrit.png",
    gallery: ["/images/projects/gymgrit.png"],
    github: "https://github.com/Dileep2896/react-gymgrit",
    demo: null,
    tech: ["React", "Tailwind CSS", "ExerciseDB API"],
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
    image: "/images/projects/flutter_chat_app.png",
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
    image: "/images/projects/Nasa.png",
    gallery: ["/images/projects/Nasa.png"],
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
    imgPath: "/achievements/hackathon/1.jpg",
  },
  {
    imgPath: "/achievements/hackathon/2.png",
  },
  {
    imgPath: "/achievements/hackathon/3.jpg",
  },
  {
    imgPath: "/achievements/hackathon/4.png",
  },
  {
    imgPath: "/achievements/hackathon/5.jpg",
  },
  {
    imgPath: "/achievements/hackathon/6.png",
  },
  {
    imgPath: "/achievements/hackathon/7.png",
  },
  {
    imgPath: "/achievements/hackathon/8.png",
  },
  {
    imgPath: "/achievements/hackathon/9.jpg",
  },
  {
    imgPath: "/achievements/hackathon/10.png",
  },
  {
    imgPath: "/achievements/hackathon/11.png",
  },
  {
    imgPath: "/achievements/hackathon/12.png",
  },
];

const examsImgList = [
  {
    imgPath: "/achievements/exams/1.png",
  },
  {
    imgPath: "/achievements/exams/2.jpg",
  },
  {
    imgPath: "/achievements/exams/3.jpg",
  },
  {
    imgPath: "/achievements/exams/4.png",
  },
  {
    imgPath: "/achievements/exams/5.png",
  },
  {
    imgPath: "/achievements/exams/6.jpg",
  },
];

const techImgList = [
  {
    imgPath: "/achievements/technical/1.jpg",
  },
  {
    imgPath: "/achievements/technical/2.png",
  },
  {
    imgPath: "/achievements/technical/3.jpeg",
  },
  {
    imgPath: "/achievements/technical/4.jpeg",
  },
  {
    imgPath: "/achievements/technical/5.jpeg",
  },
  {
    imgPath: "/achievements/technical/6.jpeg",
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
    logoPath: "/images/logo1.png",
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
    logoPath: "/images/logo2.png",
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
    logoPath: "/images/logo3.png",
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
    logoPath: "/images/logo4.png",
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
    logoPath: "/images/logo5.png",
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

const expLogos = [
  {
    name: "logo-metis",
    imgPath: "/images/logo-metis.svg",
  },
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
  {
    name: "logo4",
    imgPath: "/images/logo4.png",
  },
  {
    name: "logo5",
    imgPath: "/images/logo5.png",
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

export {
  words,
  abilities,
  counterItems,
  hackathonImgList,
  expCards,
  expLogos,
  socialIcons,
  techImgList,
  techStackIcons,
  navLinks,
  projects,
  examsImgList,
};
