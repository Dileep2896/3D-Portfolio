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
} from "react-icons/fa";

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
    description:
      "PolyChat helps users connect globally to practice languages via real-time chat and video, enabling authentic conversations with native speakers.",
    image: "/images/projects/polyproject.png",
    github: "https://github.com/Dileep2896/PolyChat",
    demo: "https://polychat.vercel.app/",
    tech: ["React", "Express", "MongoDB", "Zustand", "Stream SDK"],
    bg: "bg-[#fff]",
  },
  {
    title: "Soocily — Social Media App (Flutter)",
    description:
      "A fully functional social media application built with Flutter to explore advanced architecture and state management.",
    image: "/images/projects/soocily.png",
    github: "https://github.com/Dileep2896/soocily",
    demo: null,
    tech: ["Flutter", "Firebase", "Bloc"],
    bg: "bg-[#e5f2fc]",
  },
  {
    title: "Interviewer — Real-Time Interview Practice Tool",
    description:
      "A web tool for simulating technical interviews with timed, randomized questions and real-time feedback.",
    image: "/images/projects/interviewer.png",
    github: "https://github.com/Dileep2896/interviewer",
    demo: "https://interviewer-demo.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    bg: "bg-[#b8bfdd]",
  },
  {
    title: "Good Deeds — Community-Focused Marketplace",
    description:
      "A marketplace connecting newcomers and locals to build trust-based service networks.",
    image: "/images/projects/gooddeeds.png",
    github: "https://github.com/Dileep2896/Hackathon",
    demo: null,
    tech: ["Flutter", "Firebase", "Node.js"],
    bg: "bg-[#bed5f0]",
  },
  {
    title: "Spotify Clone — Flutter Mobile Application",
    description:
      "A cross-platform clone of Spotify demonstrating media streaming, backend APIs, and mobile UI.",
    image: "/images/projects/spotify_clone.png",
    github: "https://github.com/Dileep2896/spotify_clone",
    demo: null,
    tech: ["Flutter", "Firebase", "REST APIs"],
    bg: "bg-[#f2f2f2]",
  },
  {
    title: "TaskNexus — Project Management Application",
    description:
      "A full-featured platform for tracking and managing collaborative projects efficiently.",
    image: "/images/projects/project.png",
    github: "https://github.com/Dileep2896/TaskNexus",
    demo: null,
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    bg: "bg-[#e9ecf5]",
  },
  {
    title: "DocuMate — Collaborative Doc Editor",
    description:
      "Real-time collaborative document editing platform with live updates and multi-user support.",
    image: "/images/projects/documate.png",
    github: "https://github.com/Dileep2896/documate",
    demo: null,
    tech: ["React", "Quill.js", "Socket.io", "Node.js"],
    bg: "bg-[#f7faff]",
  },
  {
    title: "GadgetBay — Inventory Management System",
    description:
      "Web application for managing gadgets inventory, including analytics, purchases, and expenses.",
    image: "/images/projects/gadgetbay.png",
    github: "https://github.com/Dileep2896/GadgetBay",
    demo: null,
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    bg: "bg-[#edf1f6]",
  },
  {
    title: "Split — Full-Stack Expense Splitter",
    description:
      "Flutter-based mobile app for splitting expenses among friends using Firebase.",
    image: "/images/projects/split.png",
    github: "https://github.com/Dileep2896/split",
    demo: null,
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    bg: "bg-[#e0f4f8]",
  },
  {
    title: "TalkBot — OpenAI Chatbot App",
    description:
      "A full-stack MERN chatbot that integrates OpenAI’s API for intelligent conversations.",
    image: "/images/projects/talkbot.png",
    github: "https://github.com/Dileep2896/ai-chat-bot",
    demo: null,
    tech: ["React", "Express", "MongoDB", "OpenAI API"],
    bg: "bg-[#cde2f3]",
  },
  {
    title: "The Almost Final Countdown — Timer Game",
    description:
      "A simple React game that tests your timing precision against countdowns.",
    image: "/images/projects/timer_game.png",
    github: "https://github.com/Dileep2896/react-timer-game",
    demo: null,
    tech: ["React", "JavaScript", "Hooks"],
    bg: "bg-[#e4ebfa]",
  },
  {
    title: "GymGrit — Fitness Web App",
    description:
      "A modern platform for gym enthusiasts and trainers to manage workouts and schedules.",
    image: "/images/projects/gymgrit.png",
    github: "https://github.com/Dileep2896/react-gymgrit",
    demo: null,
    tech: ["React", "Tailwind CSS", "ExerciseDB API"],
    bg: "bg-[#f0f4f9]",
  },
  {
    title: "Flutter Chat App",
    description:
      "A real-time Flutter + Firebase chat app with bonus features like music sync during chats.",
    image: "/images/projects/flutter_chat_app.png",
    github: "https://github.com/Dileep2896/chat_app",
    demo: null,
    tech: ["Flutter", "Firebase", "Realtime Database"],
    bg: "bg-[#e2f0ff]",
  },
  {
    title: "NASA Astronomy Picture of the Day",
    description:
      "Displays NASA’s daily APOD with descriptions using their public API.",
    image: "/images/projects/Nasa.png",
    github: "https://github.com/Dileep2896/reactjs-nasa",
    demo: null,
    tech: ["React", "NASA API", "Tailwind"],
    bg: "bg-[#dbe8ff]",
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
];

const expCards = [
  {
    review:
      "RIT (Rochester Institute of Technology) is a renowned research university recognized for its innovation in computing, engineering, and immersive technologies.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Research Assistant, RIT",
    date: "Aug 2024 – Present",
    responsibilities: [
      "Built immersive VR simulations in Unity with C#, increasing interactivity by 35%.",
      "Reduced feedback processing latency by 40% via real-time analytics pipelines.",
      "Developed a reinforcement learning-powered adaptive training module, improving retention by 25%.",
    ],
    icons: [FaUniversity, FaBrain, FaVrCardboard],
  },
  {
    review:
      "EVon Energy is a mobility-tech startup focused on simplifying electric vehicle charging by building scalable infrastructure and real-time navigation tools.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Founder – Software Engineer, EVon Energy",
    date: "Aug 2022 – Jul 2023",
    responsibilities: [
      "Spearheaded a 6-member team to build a unified EV charging app, expanding access by 30%.",
      "Raised $15K and achieved a $1.5M valuation during MVP launch.",
      "Built the app using Flutter, AWS Amplify, and PostgreSQL/PostGIS, with real-time charger updates via OCPP.",
    ],
    icons: [FaBolt, FaChargingStation, FaRocket],
  },
  {
    review:
      "Impactional Games is a software development company specializing in building interactive gaming applications and digital products for external clients.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Flutter Developer Intern, Impactional",
    date: "Jan 2022 – Apr 2022",
    responsibilities: [
      "Integrated Chess.com API with BLoC-managed UI, increasing responsiveness by 40%.",
      "Ported Unity apps to Flutter via Dart FFI, reducing build times by 60%.",
      "Enhanced UX across products, resulting in a 25% boost in user retention.",
    ],
    icons: [FaGamepad, FaMobileAlt, FaCode],
  },
  {
    review:
      "Hilspade is a sports analytics startup delivering real-time statistical insights for badminton players, enhancing gameplay analysis and performance tracking.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Android Developer Intern, Hilspade",
    date: "Sept 2021 – Jan 2022",
    responsibilities: [
      "Built a real-time sports tracking Android app using Java, Room DB, and RxJava.",
      "Improved app performance by 20% and supported gameplay data from camera sensors.",
      "Helped secure funding with a working MVP demonstrating player tracking.",
    ],
    icons: [FaChartLine, FaRunning, FaAndroid],
  },
  {
    review:
      "Pranamitra Consulting is a matchmaking startup offering matrimonial web platforms that connect individuals across India through data-driven compatibility systems.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Software Engineering Intern, Pranamitra Consulting",
    date: "Jul 2021 – Nov 2021",
    responsibilities: [
      "Automated AWS Lambda-based profile workflows, cutting manual tasks by 40%.",
      "Improved Elasticsearch query performance by 25% via API and backend tuning.",
      "Collaborated with designers to revamp the frontend using React, Redux, and Material-UI.",
    ],
    icons: [FaHeart, FaUsers, FaLaptopCode],
  },
];

const expLogos = [
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

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/fb.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  hackathonImgList,
  expCards,
  expLogos,
  socialImgs,
  techImgList,
  techStackIcons,
  navLinks,
  projects,
  examsImgList,
};
