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
  reactnative,
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

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React & .NET Developer",
    icon: mobile,
  },
  {
    title: "Database Engineer",
    icon: backend,
  },
  {
    title: "Git & Open-Source Contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github1,
  },
];

const experiences = [
  {
    title: "Secondary School Education (SSC - 10th Grade)",
    company_name: "Saraswati Vidya Mandir Kushbhawanpur UP [CBSE Board]",
    icon: svm,
    iconBg: "#383E56",
    date: "April 2018 - March 2019",
    points: [
      "Built a strong academic foundation in science and mathematics.",
      "Engaged in coding challenges and problem-solving exercises.",
    ],
  },
  {
    title: "Higher Secondary Education (HSC - 12th Grade)",
    company_name: "Saraswati Vidya Mandir Kushbhawanpur UP [CBSE Board]",
    icon: svm,
    iconBg: "#E6DEDD",
    date: "April 2020 - March 2021",
    points: [
      "Focused on foundational programming, problem-solving, and mathematics.",
      "Participated in technical and extracurricular activities.",
    ],
  },

  {
    title: "Bachelor of Science in Information Technology",
    company_name: "University of Mumbai",
    icon: vaze,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Achieved a 9.9 CGPA while gaining expertise in software development, databases, and web technologies.",
      "Worked on projects involving React.js, Node.js, .NET, and database management.",
      "Active participant in tech clubs, hackathons, and research competitions.",
      "Developed a leave management system and student networking application.",
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
    name: "Vaze College Leave Management System",
    description:
      "A web-based leave management system with role-based access, multi-level approval, and a streamlined application process for faculty, HODs, and administrators.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: vazeLeave, // Replace with actual image reference
    source_code_link:
      "https://github.com/NitinSingh0/vaze-leave-management.git",
  },
  {
    name: "Vaze Connect App",
    description:
      "A student networking app for Vaze College with features like posts, messaging, chatbot, polling, and user connections, enhancing student interactions and engagement.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: vazeConnect, // Replace with actual image reference
    source_code_link: "https://github.com/NitinSingh0/threads-app.git",
  },
  {
    name: "Vaze Connect Admin Panel",
    description:
      "Admin dashboard for managing user activities, polls, reports, and moderation in the Vaze Connect App, built using the MERN stack for efficient data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: vazeAdmin, // Replace with actual image reference
    source_code_link: "https://github.com/NitinSingh0/AdminPannel.git",
  },
  {
    name: "Inventrix Official Website (2023-24) & (2024-25)",
    description:
      "An official website developed for the IT department's annual event, featuring event details, registration, and an interactive UI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: inventrix, // Replace with actual image reference
    source_code_link: "https://github.com/NitinSingh0/INVENTRIX.git",
  },

  {
    name: "Vaze Official Website",
    description:
      "Working on an official website for V.G. Vaze College, designed to provide an intuitive and informative digital presence for students and faculty. Features include announcements, academic resources, and event updates.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: loading, // Replace with actual image reference
    source_code_link: "https://github.com/rushiii3/KETS.git",
  },
  {
    name: "Vaze Supervision Website",
    description:
      "A streamlined Professor Allotment Exam System designed for efficient professor allocation during exams. Features an intuitive dashboard for administrators to manage and track assignments seamlessly.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: loading, // Replace with actual image reference
    source_code_link: "https://github.com/NitinSingh0/Examination.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
