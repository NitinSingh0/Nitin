import {
  vazeAdmin,
  vazeConnect,
  vazeLeave,
  inventrix,
  loading,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  vaze,
  svm,
  carrent,
  jobit,
  threejs,
  net,
  express,
  php,
  github1,
  mysql,
  reactnative
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: "Full-Stack Web Developer",
//     icon: web,
//   },
//   {
//     title: "React & .NET Developer",
//     icon: mobile,
//   },
//   {
//     title: "Database Engineer",
//     icon: backend,
//   },
//   {
//     title: "Git & Open-Source Contributor",
//     icon: creator,
//   },
// ];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "SaaS & Enterprise Systems",
    icon: backend,
  },
  {
    title: "AI Integrations",
    icon: creator,
  },
  {
    title: "API & System Architecture",
    icon: mobile,
  },
];
// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },

//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "React Native",
//     icon: reactnative,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "PHP",
//     icon: php,
//   },
//   {
//     name: ".NET",
//     icon: net,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "MySQL",
//     icon: mysql,
//   },
//   {
//     name: "Express.js",
//     icon: express,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "GitHub",
//     icon: github1,
//   },
// ];
const technologies = [
  // 🚀 CORE STACK (what you want to be hired for)
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: reactjs,
  },
  {
    name: "ASP.NET",
    icon: net,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },

  // 🧠 AI & ADVANCED (your differentiator)
  {
    name: "Python (AI & Automation)",
    icon: backend,
  },

  // 🗄 DATABASES (important for backend credibility)
  {
    name: "PostgreSQL",
    icon: mysql,
  },
  {
    name: "SQL Server (SSMS)",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // ⚙️ SYSTEM & APIs (high-value skills)
  {
    name: "REST APIs",
    icon: backend,
  },

  // 🚀 DEPLOYMENT (THIS GETS CLIENTS)
  {
    name: "Linux Deployment",
    icon: backend,
  },
  {
    name: "IIS Deployment",
    icon: backend,
  },
  {
    name: "Docker",
    icon: backend,
  },

  // 🎨 FRONTEND SUPPORT (keep minimal)
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Nivotime Pvt. Ltd.",
    icon: backend, // replace with company logo if possible
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Designed and developed scalable SaaS platforms for insurance and employee benefits, supporting 10K+ users in production.",
      "Architected and built high-performance REST APIs handling policy management, claims processing, and document workflows.",
      "Optimized SQL queries and database schemas, reducing API response time by 35% and improving system performance.",
      "Developed reusable frontend components using React.js & Next.js, reducing development time by 30%.",
      "Led end-to-end development lifecycle including system design, development, deployment, and post-release optimization.",
      "Deployed and maintained applications on Linux and IIS servers ensuring scalability, uptime, and security.",
      "Collaborated with cross-functional teams to convert complex business requirements into scalable production systems.",
    ],
  },

  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-Employed",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Built and deployed multiple production-grade applications including SaaS platforms, automation systems, and enterprise tools.",
      "Developed an automated exam duty scheduling system reducing manual workload and eliminating allocation conflicts.",
      "Created a full-scale leave management system with multi-level approval workflows and real-time tracking.",
      "Designed a centralized doctor record management system with export/reporting features for multi-branch operations.",
      "Integrated AI-powered chatbots and automation tools to streamline workflows and improve efficiency.",
      "Worked directly with clients to deliver scalable, business-driven technical solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You have the right to work, but never to the fruits of work. Focus on effort, not results, and success will follow.",
    name: "Bhagavad Gita",
    designation: "Sacred Hindu Scripture",
    company: "Ancient Wisdom",
    image:
      "https://www.bhagavad-gita.us/wp-content/uploads/2012/09/gita-104.jpg", // Replace with a relevant image
  },
  {
    testimonial:
      "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action. Keep innovating and pushing boundaries.",
    name: "Dr. A.P.J. Abdul Kalam",
    designation: "Former President & Scientist",
    company: "ISRO / DRDO",
    image:
      "https://media.gettyimages.com/id/73101369/photo/indian-president-dr-apj-abdul-kalam-addressed-the-nation-on-the-eve-of-indias-republic-day-25.jpg?s=612x612&w=0&k=20&c=Uwa57CwLwJI33P2qvHsNHskaq-pGTHXehv_v0UjlCzo=", // Replace with a relevant image
  },
  {
    testimonial:
      "Take the stones people throw at you and use them to build a monument. Every challenge is an opportunity to grow.",
    name: "Ratan Tata",
    designation: "Industrialist & Philanthropist",
    company: "Tata Group",
    image:
      "https://media.gettyimages.com/id/163137581/photo/geneva-switzerland-tata-group-chairman-ratan-tata-looks-on-during-the-83rd-geneva-motor-show.jpg?s=612x612&w=0&k=20&c=Ts-YxhOSVB_GoP4lZnKmoKPKls8YQv6V2-EVhiNFfFk=", // Replace with a relevant image
  },
];

const projects = [
  {
    name: "Insurance SaaS Platform",
    description:
      "Built a scalable insurance and employee benefits platform handling policy management, claims processing, and document workflows. Designed high-performance APIs and optimized database queries to support enterprise-scale operations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: ".net", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: loading,
    source_code_link: "#",
  },

  {
    name: "Automated Exam Duty Scheduling System",
    description:
      "Developed an intelligent scheduling system that automatically assigns exam duties based on availability, experience, and workload, reducing manual effort and eliminating scheduling conflicts.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: loading,
    source_code_link: "#",
  },

  {
    name: "Enterprise Leave Management System",
    description:
      "Created a full-scale leave management platform with multi-level approval workflows, real-time tracking, and role-based access for HODs, principals, and administrators.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: ".net", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    image: vazeLeave,
    source_code_link:
      "https://github.com/NitinSingh0/vaze-leave-management.git",
  },

  {
    name: "Doctor Record Management System",
    description:
      "Designed a centralized system for managing and exporting doctor records across multiple branch offices with secure role-based access and reporting capabilities.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
    ],
    image: loading,
    source_code_link: "#",
  },

  {
    name: "AI Automation & Chat System",
    description:
      "Built AI-powered chatbot and automation tools using Python and modern AI APIs to streamline workflows, handle queries, and improve operational efficiency.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
    ],
    image: loading,
    source_code_link: "#",
  },
  {
    name: "Inventrix Event Website",
    description:
      "Created a responsive event platform for the IT department’s annual fest, enabling event discovery, registrations, and improved user interaction through a modern UI.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "bootstrap", color: "blue-text-gradient" },
    ],
    image: inventrix,
    source_code_link: "https://github.com/NitinSingh0/INVENTRIX.git",
  },

  {
    name: "Vaze Connect – Student Platform",
    description:
      "Built a full-scale student networking platform enabling posts, messaging, chatbot interaction, and polls to improve campus engagement and communication across users.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: vazeConnect,
    source_code_link: "https://github.com/NitinSingh0/threads-app.git",
  },

  {
    name: "Admin Dashboard – Vaze Connect",
    description:
      "Developed a centralized admin panel for managing users, reports, and platform activity, enabling moderation, analytics, and efficient control over the system.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: vazeAdmin,
    source_code_link: "https://github.com/NitinSingh0/AdminPannel.git",
  },
  {
    name: "College Website (In Progress)",
    description:
      "Contributing to the development of an official college website to improve digital presence, centralize information, and enhance accessibility for students and faculty.",
    tags: [
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    image: loading,
    source_code_link: "https://github.com/rushiii3/KETS.git",
  }
];

export { services, technologies, experiences, testimonials, projects };
