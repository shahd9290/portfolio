export const projectsData = [
  {
    id: "revision-platform",
    title: "Competitive Revision Website",
    description: "Full-stack web application for competitive learning with real-time features and gamification",
    longDescription:
    "For my Final Year Project, I was tasked to created a full-stack web application in order to provide a service of my own choice. I had opted to supply a revision application, with a gamified twist as a means of ensuring that students stay engaged with their revision as opposed to becoming distracted. This led to gamifying the system, by allowing students compete with one another via a points-based system. The full leaderboard system has not yet been implemented, but is one that will be added in the future.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "TailwindCSS", "JWT Authentication"],
    period: "Oct 2024 - Apr 2025",
    status: "Completed",
    grade: 89,
    category: "Web Development",
    features: [
      "Real-time competitive quizzes and challenges",
      "User authentication and profile management",
      "Progress tracking and analytics dashboard",
      "Responsive design for mobile and desktop",
      "RESTful API with comprehensive documentation",
      "Database optimization for high performance"
    ],
    challenges: [
      "Designed efficient database schema to handle complex user relationships and scoring",
      "Built responsive UI components that work seamlessly across different screen sizes",
      "Integrated JWT authentication with refresh token mechanism for security",
    ],
    github: "https://github.com/shahd9290/Competitive-Revision-Website",
    // demo: "https://revision-platform-demo.vercel.app",
  },
  {
    id: "ai-chatbot",
    title: "Islamic Discord Bot",
    description: "A Discord bot designed to provide Islamic reminders.",
    longDescription:
      "A bot designed to remind users about various aspects of Islam on one of the biggest chat platforms on the Internet. The bot would send regular Islamic reminders, whilst providing users with the ability to calculate their Zakat, and read verses and entire surahs of the Qur'an. This bot was developed as part of the Royal Holloway Islamic Society Hackathon 2025, and secured second place overall in the competition.",
    tech: ["Python", "Discord.py", "AsyncIO"],
    period: "Feb 2025",
    status: "Completed",
    category: "Software",
    features: [
      "Daily Islamic Reminders",
      "Location Based Prayer Times",
      "Zakat Calculator",
      "Quranic Verses",
      "Islamic Quiz",
    ],
    challenges: [
      "Navigating the Discord.py library",
      "Configuring the embeds for Surahs"
    ],
    github: "https://github.com/shahd9290/isoc-hackathon",
  },
  {
    id: "asset-management",
    title: "Enterprise Asset Management System",
    description: "Full-stack web application designed to manage and track assets.",
    longDescription:
      "During my second year I was part of a team responsible for developing an Assets Management Repository as part of our Small Enterprise Team Project module. My primary responsibility was focusing on the backend of the system, which included development of the assets entity and mapping it to the database.",
    tech: ["Spring Boot", "Java", "PostgreSQL", "REST API", "JPA/Hibernate", "Gradle", "JUnit"],
    period: "Jan 2024 - Mar 2024",
    status: "Completed",
    grade: 81,
    category: "Web Development",
    features: [
      "Complete CRUD operations for asset management",
      "User authentication and role-based access control",
      "Search and filtering capabilities",
      "Database relationships and data integrity constraints",
    ],
    challenges: [
      "Designed complex database relationships for asset hierarchies and dependencies",
      "Built comprehensive validation system for data integrity",
      "Created flexible API endpoints that support various client requirements",
    ],
    github: "https://github.com/shahd9290/Assets-Repository",
  },
  {
    id: "password-manager",
    title: "Secure Password Manager",
    description: "Python-based password manager with encryption and user-friendly interface",
    longDescription:
      "A secure password management application developed for A-Level Computer Science coursework. Built with Python and SQLite3, this application provides encrypted storage for passwords with a simple, intuitive interface suitable for users of all technical levels. Features include password generation, secure storage, and easy retrieval.",
    tech: ["Python", "SQLite3", "Tkinter", "Cryptography", "Hashing", "GUI Design"],
    period: "Sep 2021 - May 2022",
    status: "Completed",
    category: "Software",
    features: [
      "Secure password encryption and storage",
      "Password strength analysis and generation",
      "User-friendly interface with search functionality",
      "Master password authentication",
      "Backup and restore capabilities",
      "Cross-platform compatibility",
    ],
    challenges: [
      "Implemented strong encryption algorithms for password security",
      "Designed intuitive interface for non-technical users",
      "Built efficient database schema for password organization",
      "Created secure authentication system with proper hashing",
    ],
    github: "https://github.com/shahd9290/Password-Manager",
  },
]
