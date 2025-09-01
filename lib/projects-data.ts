export const projectsData = [
    {
        id: "mobileapp",
        title: "Prayer Guide App",
        description: "A comprehensive mobile guide to prayer in Islam.",
        longDescription:
            "A mobile application designed to assist new muslims in learning how to pray. This application supports iOS and Android.\n\n Disclaimer: This project is in its early stages, and as such information is very vague.",
        tech: [".NET MAUI", "C#", "XAML"],
        period: "Aug 2025 - Present",
        status: "Ongoing",
        category: "Mobile Application",
        features: [
            "Cross-platform compatibility",
        ],
        challenges: [
            "Learning a new framework",
        ],
        // github: "https://github.com/shahd9290/prayer-guide-app.git"
    },
    {
        id: "revision-platform",
        title: "Competitive Revision Website",
        description: "Full-stack web application for competitive learning with real-time features and gamification",
        longDescription:
            "For my Final Year Project, I was tasked to created a full-stack web application in order to provide a service of my own choice. I had opted to supply a revision application, with a gamified twist as a means of ensuring that students stay engaged with their revision as opposed to becoming distracted. This led to gamifying the system, by allowing students compete with one another via a points-based system.\n\nThe full leaderboard system has not yet been implemented, but is a feature is planned to be added in the future.",
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
        id: "sle",
        title: "MIDI Music Language",
        description: "A music based programming language created with ART.",
        longDescription: "For my CS3480 Software Language Engineering module, I was tasked with created a programming language using ART (Ambiguity Retained Translation) in order to cover a specific purpose. When developing this language, I made sure that many core programming features were covered to ensure familiarity when compared with other languages such as Python or Java.\n\nThere are two types of syntax available. Reduction, which focused on the rewrite style of execution, and Attribute, which is provided with corresponding Java code to simplify how the code should be executed.",
        tech: ["Java", "ART"],
        period: "Jan 2025 - Apr 2025",
        status: "Completed",
        grade: 80,
        category: "Software",
        features: [
            "Arithmetic",
            "Control Flow",
            "Iteration",
            "Data Structures (Lists)",
            "Functions & Procedures (Attribute)",
        ],
        challenges: [
            "Reduction Syntax",
            "Inconsistent features between Attribute and Reduction.",
        ],
        github: "https://github.com/shahd9290/CS3480-Music-Programming-Language"
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
        description: "Python-based password manager with encryption and simple interface",
        longDescription:
            "My very first project was a simple password manager that I had created for my A-Level Computer Sciene coursework. Built with Python and SQLite3, it allows users to store passwords to their system that are encrypted with a dedicated key, with a simple interface provided to facilitate ease of use.\n\nInterestingly this project was completed without the use of Object-Oriented Programming principles, which I have used in my more recent projects, and thus this project serves as a reminder for myself to keep track of how my programs evolve as I progress through my career.",
        grade: 62,
        tech: ["Python", "SQLite3", "Tkinter", "Cryptography", "Encryption", "Decryption", "GUI Design", "Image Generation"],
        period: "Sep 2021 - May 2022",
        status: "Completed",
        category: "Software",
        features: [
            "Secure password encryption and storage",
            "Password generation",
            "User-friendly interface with pagination",
            "Master password authentication",
            "Cross-platform compatibility",
        ],
        challenges: [
            "Developing the Tkinter UI to ensure that it updates appropriately for each feature",
            "Ensuring that the correct number of passwords are displayed on each page",
            "Image thumbnail generation for each password",
        ],
        github: "https://github.com/shahd9290/Password-Manager",
    },
]
