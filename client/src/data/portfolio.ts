import { SkillCategory } from "@/types";

export const personalInfo = {
  name: "Bijay Chand",
  title: "Aspiring Cloud & DevOps Engineer | Cyber Security Student | Web Developer",
  email: "dev.bijaychand@gmail.com",
  github: "https://github.com/bijaychand24-code",
  linkedin: "https://www.linkedin.com/in/bijay-chand",
  resumeUrl: "/Bijay_Chand_Resume.pdf",
  location: "Dehradun, Uttarakhand, India",
  university: "Maya Devi University",
  degree: "Bachelor of Computer Applications — Cyber Security",
  currentSemester: "5th Semester",
  graduationYear: "Present",
  personalStatement: "Building secure, scalable and high-performance digital solutions while growing toward a career in Cloud Computing, DevOps and Cyber Security.",
  shortBio: "Aspiring Cloud & DevOps Engineer focused on building scalable web applications, learning cloud infrastructure, and developing secure digital solutions.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#journal", label: "Learning Journal" },
  { href: "#services", label: "What I Do" },
  { href: "#contact", label: "Contact" },
  { href: "/Bijay_Chand_Resume.pdf", label: "Resume" },
];

export const heroRoles = [
  "Cloud Computing",
  "DevOps",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Cyber Security",
  "Web Development",
  "React.js",
  "Node.js",
  "MongoDB",
  "Linux",
  "CI/CD",
];

export const stats = [
  { value: "BCA", label: "Cyber Security" },
  { value: "8 Weeks", label: "MERN Internship" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Featured Projects" },
];

export const aboutData = {
  mission: "Build useful, secure and scalable technology solutions.",
  vision: "Become a highly skilled Cloud/DevOps professional capable of designing and managing reliable cloud infrastructure.",
  strengths: [
    "Continuous learning",
    "Problem solving",
    "Technical curiosity",
    "Adaptability",
    "Team collaboration",
    "Practical project development",
  ],
};

export const focusAreas = [
  {
    icon: "Cloud",
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", level: "Learning" },
      { name: "Docker", level: "Learning" },
      { name: "Kubernetes", level: "Learning" },
      { name: "Linux", level: "Intermediate" },
      { name: "GitHub Actions", level: "Learning" },
      { name: "CI/CD", level: "Learning" },
    ],
  },
  {
    icon: "Globe",
    title: "Web Development",
    technologies: [
      { name: "HTML5", level: "Intermediate" },
      { name: "CSS3", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Beginner" },
      { name: "Prisma", level: "Learning" },
    ],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Learning" },
      { name: "Terraform", level: "Learning" },
      { name: "Linux", level: "Intermediate" },
      { name: "CI/CD", level: "Learning" },
      { name: "Nginx", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Code",
    skills: [
      { name: "React.js", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML5", level: "Intermediate" },
      { name: "CSS3", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Cpu",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Socket.IO", level: "Learning" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Beginner" },
      { name: "S3 Storage", level: "Intermediate" },
      { name: "Prisma", level: "Learning" },
    ],
  },
  {
    category: "Cyber Security",
    icon: "Shield",
    skills: [
      { name: "Network Security", level: "Learning" },
      { name: "IAM Security", level: "Intermediate" },
      { name: "SSL/TLS", level: "Intermediate" },
      { name: "Linux Security", level: "Intermediate" },
      { name: "Digital Forensics", level: "Learning" },
      { name: "Cyber Security Fundamentals", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Docker Compose", level: "Intermediate" },
      { name: "GitHub Actions", level: "Learning" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern personal brand website with deployment automation and production-grade hosting on AWS.",
    longDescription: "This portfolio website is built as a full-stack application demonstrating modern web development practices. It features a responsive design with dark UI, smooth animations, backend contact workflow, SEO optimization, and AWS-based deployment infrastructure.",
    image: "/projects/portfolio.webp",
    technologies: ["React", "Vite", "Node.js", "Nginx", "AWS", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/bijaychand24-code/BijayChand",
    liveDemo: "https://bijaychand.me",
    featured: true,
    impact: "Production-grade deployment on AWS EC2 with secure HTTPS and zero-downtime updates.",
  },
  {
    id: 2,
    title: "Multi-Tier Web App",
    description: "A Dockerized multi-service application using Django, MySQL, and Nginx for scalable deployment.",
    longDescription: "Built a full-stack multi-tier application with Docker Compose, MySQL, Django, and Nginx. The project focuses on environment-based configuration, volume persistence, service orchestration, and secure container lifecycle management.",
    image: "/projects/multi-tier.webp",
    technologies: ["Docker", "Django", "MySQL", "Nginx", "Linux", "Compose"],
    category: "Cloud",
    github: "https://github.com/bijaychand24-code/Multi-Tier_Web_Application",
    liveDemo: "https://github.com/bijaychand24-code/Multi-Tier_Web_Application",
    featured: true,
    impact: "Containerized platform with service isolation, persistent storage, and repeatable deployment flow.",
  },
  {
    id: 3,
    title: "Real-Time Chat App",
    description: "A responsive chat platform with instant messaging and live communication features.",
    longDescription: "Built a live chat application with Socket.IO, responsive layouts, and modern frontend architecture for real-time communication experiences across devices.",
    image: "/projects/chat.webp",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/bijaychand24-code/realtime-chat",
    liveDemo: "#",
    featured: false,
    impact: "Real-time collaborative experience built with stateful browser communication and clean UX.",
  },
];

export const awsJourneyPosts = [
  {
    title: "Day 1–7: AWS fundamentals, EC2, and cloud basics",
    description: "A quick recap of how I started learning AWS services, IAM foundations, and instance setup fundamentals.",
    link: "https://www.linkedin.com/in/bijay-chand/recent-activity/posts/",
    tag: "30-Day AWS Challenge",
  },
  {
    title: "Day 8–15: IAM, VPC, Security Groups, and networking basics",
    description: "My notes on networking essentials, secure architecture patterns, and why cloud security starts with design.",
    link: "https://www.linkedin.com/in/bijay-chand/recent-activity/posts/",
    tag: "Cloud Security",
  },
  {
    title: "Day 16–22: S3, Route 53, and hosting in production",
    description: "Exploring static hosting, DNS routing, and how to expose web apps with reliability and security in mind.",
    link: "https://www.linkedin.com/in/bijay-chand/recent-activity/posts/",
    tag: "AWS Hosting",
  },
  {
    title: "Day 23–30: Observability, cost awareness, and deployment habits",
    description: "Reflection on CloudWatch, performance monitoring, troubleshooting, and building better cloud habits.",
    link: "https://www.linkedin.com/in/bijay-chand/recent-activity/posts/",
    tag: "DevOps Insight",
  },
];

export const experience = [
  {
    id: 1,
    title: "MERN Stack Web Development Internship",
    company: "CodeTech IT Solutions Pvt. Ltd.",
    location: "Remote",
    startDate: "07 April 2026",
    endDate: "02 June 2026",
    duration: "8 Weeks",
    role: "MERN Stack Web Development Intern",
    description: [
      "Developed web applications using MERN technologies",
      "Worked with React and Node.js for full-stack development",
      "Built and consumed REST APIs for frontend-backend communication",
      "Worked with MongoDB for database operations and data modeling",
      "Built real-time applications using Socket.IO for WebSocket communication",
      "Developed responsive web interfaces with modern CSS frameworks",
      "Practiced Git/GitHub workflow for version control and collaboration",
      "Improved practical full-stack development skills through hands-on projects",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Git", "GitHub"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications — Cyber Security",
    institution: "Maya Devi University",
    location: "Dehradun, Uttarakhand, India",
    startYear: "2024",
    endYear: "Present",
    currentSemester: "5th Semester",
    coursework: [
      "Cyber Security",
      "Network Security",
      "Database Management",
      "Operating Systems",
      "Computer Networks",
      "Cloud Computing",
      "Web Development",
      "Software Engineering",
      "Digital Forensics",
      "Linux Fundamentals",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training",
    date: "Completed",
    credentialId: "AWS CP",
    link: "#",
    status: "Completed",
  },
  {
    id: 2,
    name: "Windows Forensic Analysis Bootcamp",
    issuer: "Cybersecurity Bootcamp",
    date: "Completed",
    credentialId: "DFIR",
    link: "#",
    status: "Completed",
  },
  {
    id: 3,
    name: "AWS Solutions Architect Associate",
    issuer: "AWS Learning Path",
    date: "In Progress",
    credentialId: "SAA-C03",
    link: "#",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Kubernetes",
    date: "Planned",
    credentialId: "CKA",
    link: "#",
    status: "Planned",
  },
  {
    id: 5,
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "Planned",
    credentialId: "Terraform",
    link: "#",
    status: "Planned",
  },
];

export const services = [
  {
    icon: "Code",
    title: "Web Development",
    description: "Modern responsive websites and web applications built with React, Node.js, and modern tooling.",
  },
  {
    icon: "Search",
    title: "SEO",
    description: "On-page optimization, technical SEO audits, and website performance optimization.",
  },
  {
    icon: "Cpu",
    title: "API Integration",
    description: "REST API integration, backend development, and third-party service integration.",
  },
];

export const whyWorkWithMe = [
  {
    icon: "BookOpen",
    title: "Continuous Learner",
    description: "Always improving technical and practical skills through courses, certifications, and hands-on projects.",
  },
  {
    icon: "Shield",
    title: "Security Mindset",
    description: "Cyber Security background helps me think about secure application design from day one.",
  },
  {
    icon: "Cloud",
    title: "Cloud Focused",
    description: "Strong interest in AWS, cloud infrastructure, and DevOps practices for scalable solutions.",
  },
  {
    icon: "Puzzle",
    title: "Problem Solver",
    description: "Enjoy solving technical problems and building practical projects that make an impact.",
  },
];

export const contactInfo = {
  email: "dev.bijaychand@gmail.com",
  github: "https://github.com/bijaychand24-code",
  linkedin: "https://www.linkedin.com/in/bijay-chand",
};