
import {
  logo,
  trektoo,
  hrm,
  itworkcenter,
  laundry,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  devloops,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  church,
  itwork,
  mightymedia,
  devfor,
  trektooicon,
  laundaryday,
  // github,
  laravel,
  php,
  nextjs,
  casewise,
  python,
  aiprediction,
  restaurant,
  domesta,
  casewiselogo,
  domestalogo,
  spreddlogo,
  
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer (React & Laravel)",
    icon: web,
  },
  {
    title: "AI Chatbot & NLP Developer (Python)",
    icon: mobile,
  },
  {
    title: "Backend Architect & API Developer",
    icon: backend,
  },
  {
    title: "Relational Database Designer (MySQL)",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  }, 
  {
    name: "AWS",
    icon: aws,
  }, 
  {
    name: "MySql",
    icon: mysql,
  },
 
   {
    name: "Github",
    icon: github,
  },
   {
    name: "php",
    icon: php,
  },
   {
    name: "laravel",
    icon: laravel,
  },
   {
    name: "nextjs",
    icon: nextjs,
  },
 {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Project Manager & Full Stack Developer",
    company_name: "Devloop Technologies",
  icon: devloops,
      iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Leading React and Next.js projects to build dynamic, high-performance web applications",
      "Managing teams for HRM systems, dashboards, and subscriptions.",
      "Implementing scalable backend architecture and payment gateways.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Domesta Bahrain",
    icon: domestalogo || "LD",
    iconBg: "#F0F0F0",
    date: "Apr 2025 - Present",
    points: [
      "Developing Laravel-based SaaS for employees, employers, and agents.",
    "Building role-based dashboards with React and Next.js.",
    "Creating reusable React components for profile management.",
    "Implementing APIs for seamless data flow across user roles.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Casewise (FYP)",
    icon: casewiselogo || "DF",
    iconBg: "#E6DEDD",
    date: "Aug 2024 -  May 2025",
    points: [
      "Developing AI-powered legal services platform using React.js and Laravel.",
    "Integrated TF-IDF + Naive Bayes law matcher and chatbot using Python Flask.",
    "Implemented role-based access, lawyer/case modules, scheduling, and law filtering.",
    ],
  },
  {
    title: "Senior Front End Developer",
    company_name: "Spredd.ai",
    icon: spreddlogo || "TK", // fallback to initials
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Aug 2024",
    points: [
      "Built AI-based sports prediction platform using React, Next.js, Node.js, and MongoDB.",
    "Integrated automated and manual scraping tools with dynamic player data handling.",
    "Developed user-friendly interfaces, prediction dashboards, and Stripe payment system.",
    ],
  },
  {
    title: "Apprenticeship (MERN Stack Development)",
    company_name: "Nex Skills, Lahore",
    icon: itwork,
    iconBg: "#FFEFDD",
    date: "Apr 2024 – Aug 2024",
    points: [
       "Learned core concepts of MongoDB, Express.js, React.js, and Node.js.",
    "Built mini full-stack projects using REST APIs and modern React practices.",
    "Gained hands-on experience in debugging, version control, and deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Razi designed a professional dashboard and website for our company. His attention to UI/UX, responsiveness, and clean React.js code helped us deliver a strong digital presence in Bahrain.",
    name: "Client from Bahrain",
    designation: "Product Owner",
    company: "Domesta",
    // image: firstTestimonial,
  },
  {
    testimonial:
      "Razi developed our AI-based sports prediction platform from scratch. He handled scraping tools, prediction logic, and Stripe integration with efficiency and deep technical knowledge.",
    name: "Client from USA",
    designation: "Founder",
    company: "Spredd.ai",
    // image: secondTestimonial,
  },
  {
    testimonial:
      "Razi led the development of our AI-powered law firm platform as part of his final year project. His integration of Python, Laravel, and role-based access control showed solid full-stack capability.",
    name: "FYP Supervisor",
    designation: "Project Supervisor",
    company: "University Project",
    // image: thirdTestimonial,
  },
];



const projects = [
 {
  name: "CaseWise AI Law Firm",
  description:
    "Built a smart legal assistant platform with AI chatbot integration to analyze user input, match legal sections, and suggest lawyers based on case categories.",
  tags: [
    { name: "laravel", color: "red-text-gradient" },
    { name: "react", color: "blue-text-gradient" },
    { name: "python", color: "green-text-gradient" },
    // { name: "flask", color: "orange-text-gradient" },
    { name: "machine-learning", color: "pink-text-gradient" },
    { name: "mysql", color: "purple-text-gradient" },
  ],
  image: casewise, // Show "Image not available" in frontend
  source_code_link: "https://github.com/MuhammadRazi", // Replace with actual link
},

{
    name: "Domesta Bahrain",
    description:
      "Developed a robust SaaS platform for employees, employers, and agents with role-based dashboards. Features include dynamic profile management, reusable components.",
    tags: [
       { name: "react", color: "blue-text-gradient" },
       { name: "nextjs", color: "black-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
   
    
    { name: "nodejs", color: "green-text-gradient" },
    { name: "javascript", color: "orange-text-gradient" },
    ],
    image: domesta, // Show "Image not available" in frontend
    source_code_link: "https://github.com/",
  },
  {
    name: "Spredd.ai Sports",
    description:
      "Developed an AI-based sports prediction platform featuring player performance forecasts, automated/manual scraping tools, and Stripe payment integration using the MERN stack.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
    { name: "nextjs", color: "orange-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
    { name: "stripe", color: "purple-text-gradient" },
    ],
    image: aiprediction, // Under development — no image
    source_code_link: "https://github.com/MuhammadRazi",
  },
  {
    name: "Restaurant Website",
    description:
      "Built a fully responsive restaurant website with interactive menu, food ordering system, and user-friendly navigation. Focused on smooth UI, modern layout, and efficient ordering flow.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
    { name: "nextjs", color: "orange-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
    { name: "tailwindcss", color: "purple-text-gradient" },
    ],
    image: restaurant,
    source_code_link: "https://github.com/MuhammadRazi",
  },
  {
    name: "IT Work Center Website",
    description:
      "A complete software house and training center portal featuring student enrollment, role-based dashboards, fee management, attendance tracking, and HR salary management.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: itworkcenter,
    source_code_link: "https://github.com/MuhammadRazi",
  },
 
 
];


export { services, technologies, experiences, testimonials, projects };
