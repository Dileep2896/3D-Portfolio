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
    demo: "https://polychat.vercel.app/",
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
      "How I Built an AI That Creates Stories You Can See, Hear, and Steer",
    date: "2026-03-14",
    category: "Hackathon",
    tags: ["AI", "Gemini", "Google Cloud", "Hackathon", "ADK", "Veo", "Imagen"],
    image: "/images/blog/storyforge-ui.png",
    readTime: 8,
    excerpt:
      "Building StoryForge for the Gemini Live Agent Challenge: a multimodal AI story engine that turns your ideas into illustrated, narrated, interactive stories using Google's latest AI.",
    github: "https://github.com/Dileep2896/storyforge",
    devpost: "",
    demo: "",
    sections: [
      {
        type: "text",
        content:
          "Have you ever tried telling a story with AI and felt like something was missing? You get a wall of text, maybe a generic image, and that's it. No voice, no visuals that match the mood, no way to jump in and change what happens next. I kept running into this, and it honestly bugged me. Stories are supposed to be alive. They have rhythm, imagery, surprise. So when the Gemini Live Agent Challenge dropped, I saw my chance to build something that actually felt like storytelling.",
      },
      {
        type: "heading",
        content: "What is StoryForge?",
      },
      {
        type: "text",
        content:
          "StoryForge is a multimodal AI story engine. You give it a prompt, a genre, a mood, and it doesn't just write a story. It illustrates every chapter with AI-generated images, narrates the whole thing with expressive AI voice, and (this is the part I'm most proud of) lets you steer what happens next in real time through Director Mode.",
      },
      {
        type: "stats",
        items: [
          { value: "4", label: "AI Agents" },
          { value: "3", label: "Output Modalities" },
          { value: "6", label: "Art Styles" },
          { value: "RT", label: "Real-time Streaming" },
        ],
      },
      {
        type: "text",
        content:
          "Director Mode is where things get interesting. Instead of passively reading, you can intervene at any chapter: change the setting, introduce a new character, shift the tone entirely. The AI picks up your direction and weaves it into the narrative without breaking continuity. It's collaborative storytelling with an AI that actually listens.",
      },
      {
        type: "quote",
        content:
          "Most AI story tools are one-directional: you prompt, it generates, you read. StoryForge flips that. You become a co-author in real time.",
      },
      {
        type: "heading",
        content: "The Architecture: Four Agents, One Story",
      },
      {
        type: "text",
        content:
          "Under the hood, StoryForge runs on Google's Agent Development Kit (ADK) with four specialized agents coordinated by a root orchestrator:",
      },
      {
        type: "architecture",
      },
      {
        type: "list",
        items: [
          "Narrator Agent: Powered by Gemini 2.0 Flash, this agent handles all narrative generation. It takes the user's prompt and genre preferences, writes each scene with consistent characters and plot threads, and streams text in real-time via WebSocket.",
          "Illustrator Agent: Uses a three-hop pipeline (character sheet extraction, image prompt engineering, then Imagen 3 generation) to create visually consistent illustrations across scenes. A character description cache ensures the same character looks the same throughout the story.",
          "TTS Agent: Converts the narrative text into expressive speech using Google Cloud Text-to-Speech with studio-quality voices. Audio generates concurrently for all scenes.",
          "Director Agent: The brain behind Director Mode. It analyzes the full story text and outputs structured JSON covering narrative arc, character analysis, tension levels, and visual style reasoning. This powers the sidebar that makes the AI's creative process visible.",
        ],
      },
      {
        type: "heading",
        content: "How It All Streams Together",
      },
      {
        type: "text",
        content:
          "The key insight behind StoryForge is interleaved output. Instead of generating all text, then all images, then all audio sequentially, the modalities weave together as they complete. Here's what a typical generation looks like:",
      },
      {
        type: "interleave",
      },
      {
        type: "text",
        content:
          "The Narrator runs first (sequential phase), then the Illustrator, Director, and TTS agents all run in parallel to minimize latency. The frontend is built with React and Vite, using WebSocket for real-time streaming. As the backend generates each scene, text, images, and audio stream to the client progressively. You don't wait for the whole story to finish before you start reading.",
      },
      {
        type: "heading",
        content: "Tech Stack",
      },
      {
        type: "list",
        items: [
          "Backend: Python, FastAPI, Google ADK, Gemini 2.0 Flash, Imagen 3, Google Cloud TTS",
          "Frontend: React, Vite, Tailwind CSS",
          "Infrastructure: Google Cloud Run, Firebase Hosting, Cloud Firestore, Cloud Storage",
          "Key APIs: Gemini API, Vertex AI (Imagen 3), Cloud Text-to-Speech",
        ],
      },
      {
        type: "heading",
        content: "Why Creative Storytelling?",
      },
      {
        type: "text",
        content:
          "When I saw the hackathon categories, the Creative Storyteller track clicked immediately. I've always been drawn to projects where technology meets creativity. But beyond personal interest, I thought this was where multimodal AI could really shine. Text-only story generation is a solved problem at this point. The hard part, the interesting part, is orchestrating multiple AI modalities into a single coherent experience. That's what StoryForge tries to do.",
      },
      {
        type: "text",
        content:
          "Plus, I knew Director Mode would be a differentiator. Most AI story tools are one-directional: you prompt, it generates, you read. Making it interactive, letting the user become a co-author in real time, felt like a natural extension that most projects wouldn't attempt.",
      },
      {
        type: "heading",
        content: "The Hard Parts",
      },
      {
        type: "text",
        content:
          "I'll be honest, this project humbled me in a few places. Here's what tripped me up:",
      },
      {
        type: "list",
        items: [
          "Agent coordination: Getting four agents to work in sequence without stepping on each other was harder than expected. The Story Agent needs to finish a chapter before the Image Agent can generate the illustration, but the Audio Agent can start working on earlier chapters in parallel. Getting this pipeline right took a lot of debugging.",
          "Image prompt engineering: Imagen 3 is powerful, but getting consistent character appearances across chapters was tricky. A character described in Chapter 1 might look completely different in Chapter 3. I ended up building a character description cache that gets appended to every image prompt.",
          "WebSocket reliability: WebSocket connections are simple in theory but fragile in practice. Connection drops, buffering issues, and retry logic ate up more time than I'd like to admit.",
          "Director Mode continuity: When a user makes a dramatic intervention (like changing the genre mid-story), the AI has to reconcile the existing narrative with the new direction. Early versions would just ignore previous plot points. Getting the Director Agent to truly respect what came before while honoring the new direction was the trickiest prompt engineering challenge of the project.",
        ],
      },
      {
        type: "quote",
        content:
          "The Illustrator was generating completely different-looking characters every chapter. The fix? A persistent character sheet that accumulates across story continuations, appended to every image prompt.",
      },
      {
        type: "heading",
        content: "What I Learned",
      },
      {
        type: "list",
        items: [
          "ADK makes multi-agent orchestration genuinely approachable. Before this, I'd been stitching agents together manually with custom code. ADK's structured approach saved me hours.",
          "Multimodal AI is more than just calling multiple APIs. The real work is in the coordination layer, making sure the outputs feel like they belong together.",
          "Streaming changes everything about the UX. The difference between waiting 30 seconds for a complete story vs. watching it unfold in real time is enormous. It makes the experience feel alive.",
          "Start with the hardest problem first. I'm glad I tackled Director Mode early instead of treating it as a nice-to-have. It ended up being the feature that makes StoryForge feel different from other story generators.",
        ],
      },
      {
        type: "heading",
        content: "What's Next",
      },
      {
        type: "text",
        content:
          "Post-hackathon, I want to push StoryForge further. Some things on my list:",
      },
      {
        type: "list",
        items: [
          "Video generation with Veo 2 for key story moments",
          "Multiplayer Director Mode where multiple users can co-direct a story",
          "Story persistence and sharing, so you can save and share your creations",
          "More genre-specific voice profiles and illustration styles",
        ],
      },
      {
        type: "heading",
        content: "Try It Out",
      },
      {
        type: "text",
        content:
          "StoryForge is open source. If you want to check it out, play with it, or build on it, here are the links:",
      },
      {
        type: "list",
        items: [
          "GitHub: https://github.com/Dileep2896/storyforge",
        ],
      },
      {
        type: "callout",
        content:
          "This project was built for the Gemini API Developer Competition (Gemini Live Agent Challenge) using Google's AI technologies including Gemini 2.0 Flash, Imagen 3, Google Cloud Text-to-Speech, and the Agent Development Kit (ADK). #GeminiLiveAgentChallenge",
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
