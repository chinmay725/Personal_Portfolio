export const portfolioData = {
  name: "Chinmay Ratnakar Deshmukh",
  title: "Frontend Developer | Full-Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "deshmukhchinmay300@gmail.com",
  linkedin: "www.linkedin.com/in/chinmay-deshmukh",
  github: "github.com/chinmay725",
  
  education: {
    degree: "B.Tech in Electronics and Computer Engineering",
    institution: "DBATU",
    year: "2026"
  },
  
  experience: [
    {
      company: "CUB TO KING IT SOLUTIONS PVT. LTD.",
      role: "Software Developer – Intern",
      duration: "March 2025 – March 2026",
      location: "Pune, Maharashtra",
      achievements: [
        "Engineered responsive React.js interfaces using CSS Flexbox and Grid across 10+ pages.",
        "Improved mobile rendering speed by 25% across major browsers.",
        "Collaborated with senior engineers to convert client wireframes and functional specifications into interactive UI components.",
        "Developed a library of 20+ reusable React.js components, improving maintainability and reducing implementation time by 30%.",
        "Resolved 35+ UI issues through debugging, cross-device testing, and Lighthouse audits.",
        "Participated in agile sprint deliveries."
      ]
    }
  ],
  
  skills: {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Context API",
      "Responsive Web Design",
      "DOM Manipulation"
    ],
    backend: [
      "RESTful APIs",
      "Supabase",
      "JWT"
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ],
    programming: [
      "Java",
      "SQL",
      "TypeScript (Basics)",
      "Core CS Fundamentals",
      "OOPs"
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Vercel",
      "Netlify"
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "ShopKart — E-Commerce Platform",
      description: "A full-stack e-commerce application featuring product discovery, shopping cart, wishlist, and order management.",
      features: [
        "Product search and multi-criteria filtering",
        "Shopping cart and wishlist",
        "Order status tracking",
        "15+ secure RESTful API endpoints",
        "Rate limiting and stock validation",
        "Inventory restoration upon order cancellation",
        "Passwordless email OTP authentication for shoppers",
        "JWT-based role-based access control and bcrypt-hashed admin credentials",
        "Automated invoice emails"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Online Food Delivery",
      description: "A responsive food ordering web application built using HTML5, CSS3, and JavaScript.",
      features: [
        "Dynamic menu rendering using the Fetch API and JSON",
        "Category filtering",
        "Interactive shopping cart",
        "Real-time price calculations",
        "Quantity controls",
        "Animated Swiper.js carousel transitions",
        "15+ menu items"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Swiper.js", "Fetch API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],
  
  certifications: [
    {
      title: "Introduction to Front End Development",
      provider: "Simplilearn",
      year: "2026"
    },
    {
      title: "Introduction to HTML and CSS",
      provider: "IBM SkillsBuild",
      year: "2026"
    },
    {
      title: "Prompt Engineering for Developers",
      provider: "Wingspan",
      year: "2026"
    }
  ],
  
  statistics: [
    { value: "1", label: "Year Internship Experience" },
    { value: "20+", label: "Reusable Components" },
    { value: "10+", label: "Pages Developed" },
    { value: "35+", label: "UI Issues Resolved" }
  ]
}

export const aiKnowledgeBase = {
  name: portfolioData.name,
  title: portfolioData.title,
  location: portfolioData.location,
  email: portfolioData.email,
  education: `${portfolioData.education.degree} from ${portfolioData.education.institution}, graduating in ${portfolioData.education.year}`,
  experience: portfolioData.experience.map(exp => 
    `${exp.role} at ${exp.company} (${exp.duration}) in ${exp.location}. Key achievements: ${exp.achievements.slice(0, 3).join(" ")}`
  ).join(" "),
  skills: {
    frontend: portfolioData.skills.frontend.join(", "),
    backend: portfolioData.skills.backend.join(", "),
    databases: portfolioData.skills.databases.join(", "),
    tools: portfolioData.skills.tools.join(", ")
  },
  projects: portfolioData.projects.map(p => 
    `${p.title}: ${p.description}. Technologies: ${p.technologies.join(", ")}`
  ).join(" "),
  certifications: portfolioData.certifications.map(c => 
    `${c.title} from ${c.provider} (${c.year})`
  ).join(" "),
  interests: "Full-Stack Web Development, Frontend Engineering, Backend Development, and Database Development",
  roles: "Entry-level Frontend Developer, Full-Stack Developer, and Graduate Engineer Trainee roles"
}
