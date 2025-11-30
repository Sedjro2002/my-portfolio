export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    languages: string[];
    frameworks: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Sedjro BONOU",
  role: "Backend and AI Engineer",
  about:
    "I am a passionate Software Engineer specializing in the design and development of high-performance, scalable technological solutions. Through my experience at MTN Benin and as a consultant for multinational companies, I have worked on applications used by thousands of users, complex backend architectures, advanced API integrations, and innovative AI-driven projects. Curious, results-oriented, and committed to technical excellence, I build reliable, modern, and user-centric solutions. I enjoy transforming ideas into real products while applying best practices in software engineering, DevOps, and security.",
  profileImage: "/images/profile.webp",
  blogUrl: "https://medium.com/@haricrim",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Sedjro2002",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sedjro-bonou",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://x.com/MEdjro",
      icon: "Twitter", // Lucide might not have X yet, using Twitter as fallback or X if available in next step
    },
    {
      platform: "Medium",
      url: "https://medium.com/@haricrim",
      icon: "BookText", // Using BookText as a generic icon for Medium if branded one is missing
    },
    {
      platform: "Email",
      url: "mailto:habibhbn3@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    languages: ["Python", "Rust", "TypeScript", "Go"],
    frameworks: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Actix Web",
      "Axum",
      "React/Next.js",
      "Vue.js",
    ],
    web: [
      "REST APIs",
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "webAssembly",
      "gRPC",
      "GraphQL",
    ],
    tools: [
      "Git",
      "Postman",
      "VS Code",
      "NeoVim",
      "uv",
      "cargo",
      "Docker",
      "Kubernetes",
      "AI",
    ],
  },
  experience: [
    {
      company: "Freelance",
      role: "Software Consultant",
      period: "April, 2025 - Present",
      description: [
        "Supporting international companies with the design and development of large‑scale software systems.",
        "Building backend services, optimizing APIs, and contributing to system architecture.",
        "Working with distributed teams using Agile/Scrum methodologies.",
        "Improving CI/CD pipelines, DevOps workflows, and software quality.",
      ],
    },
    {
      company: "MTN Bénin",
      role: "Software Engineer",
      period: "March, 2024 – Present",
      description: [
        "Developing APIs, backend services, and modern user interfaces.",
        "Contributing to digital products used by thousands of customers nationwide.",
        "Designing and developing applications integrating artificial intelligence.",
        "Writing technical documentation, feasibility analyses, and architectural proposals.",
        "Working closely with architects, project managers, business analysts, and cross‑functional teams.",
        "Applying Agile, DevOps, CI/CD, and security best practices.",
      ],
    },
    {
      company: "Hôtel RAMAH",
      role: "Web Developer",
      period: "October, 2022 – November, 2023",
      description: [
        "Built a complete website using Python (Flask) to increase the business’s online visibility.",
      ],
    },
    {
      company: "Debt Management Office (CAGD Bénin)",
      role: "Network Administration Assistant",
      period: "August, 2023 – October, 2023",
      description: [
        "Supported IT infrastructure monitoring, maintenance, and troubleshooting.",
        "Managed internal network equipment and supervised user support operations.",
      ],
    },
    {
      company: "IITECH",
      role: "Web Developer",
      period: "August, 2022 – October, 2022",
      description: [
        "Supported IT infrastructure monitoring, maintenance, and troubleshooting.",
        "Managed internal network equipment and supervised user support operations.",
      ],
    },
    {
      company: "IITECH",
      role: "Web Developer",
      period: "August, 2022 – October, 2022",
      description: [
        "Migrated large legacy PHP applications to Laravel.",
        "Improved application architecture and optimized performance.",
      ],
    },
  ],
  projects: [
    {
      title: "Cuexi Experts",
      description:
        "Cuexi Experts is a platform that provides expert advice and guidance on various topics related to technology and business.",
      techStack: [
        "Python",
        "Django",
        "PostgreSQL",
        "Rest APIs",
        "Docker",
        "Kubernetes",
        "Langchain",
      ],
      link: "https://cuexi.com/",
      thumbnail: "/images/projects/cuexi.png",
    },
    {
      title: "XSD to Form",
      description:
        "An Open Source project that converts XML Schema Definition (XSD) files into HTML forms.",
      techStack: ["TypeScript", "React", "Node.js", "NextJs"],
      link: "https://xmltoform.sedjro.com/",
      github: "https://github.com/Sedjro2002/xml-form-generator",
      thumbnail: "/images/projects/xml_to_form.png",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects, work experience, and resume.",
      techStack: ["TypeScript", "React", "Node.js", "NextJs"],
      link: "https://portfolio.sedjro.com/",
      github: "https://github.com/Sedjro2002/my-portfolio",
      thumbnail: "/images/projects/portfolio.png",
    },
    {
      title: "MTN Device Financing",
      description:
        "A platform which allows MTN Benin millions customers to buy devices (smartphones) on credit.",
      techStack: ["Python", "That's all I can say😁"],
      link: "http://kpedekpede.mtn.bj/",
      thumbnail: "/images/projects/mtn_device_financing.png",
    },
    {
      title: "MTN Home Unlimited",
      description:
        "A platform which allows MTN Benin millions customers to buy 4G and 5G routers and monthly bundles.",
      techStack: ["Python", "That's all I can say😁"],
      link: "https://home.mtn.bj/",
      thumbnail: "/images/projects/mtn_home.png",
    },
  ],
};
