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

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
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
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
