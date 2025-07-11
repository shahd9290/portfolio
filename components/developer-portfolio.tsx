"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, User, Code, Briefcase, Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react"
import ProjectModal from "./project-modal"
import { projectsData } from "@/lib/projects-data"

export default function DeveloperPortfolio() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "Frontend Development": ["Next.js", "React", "TailwindCSS", "HTML/CSS"],
    "Backend Development": ["Spring Boot", "Node.js", "REST APIs", "FastAPI"],
    "Databases & Tools": ["PostgreSQL", "MySQL", "Git", "Docker", "Linux"],
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Terminal Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-gray-300">danyal@developer-portfolio:~$</span>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        {/* Terminal Welcome */}
        <div className="mb-8">
          <div className="text-green-300 mb-2">{">"} Welcome to Danyal's Developer Portfolio Terminal</div>
          <div className="text-gray-400 mb-4">{">"} Full-Stack Developer | Software Engineer | Tech Educator</div>
          <div className="flex items-center">
            <span className="text-blue-400">danyal@portfolio:~$ </span>
            <span className="ml-2">
              {currentCommand}
              {showCursor && <span className="bg-green-400 text-gray-900">_</span>}
            </span>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5" />
            <span className="text-xl font-bold">$ cat developer_profile.txt</span>
          </div>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="text-green-300 mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <User className="w-4 h-4" />
                  <span className="text-xl font-bold">Danyal Husain Shah</span>
                </div>
                <div className="text-yellow-400 mb-2">Software Developer & Tech Educator</div>
                <div className="text-gray-400 space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>shahd9290@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>07763685539</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>London, UK</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate full-stack developer with expertise in modern web technologies and a strong background in
                software engineering. I build scalable applications and enjoy sharing knowledge through teaching and
                mentoring.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5" />
            <span className="text-xl font-bold">$ tree skills/</span>
          </div>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="text-yellow-400 mb-2">├── {category}/</div>
                  {items.map((skill, index) => (
                    <div key={skill} className="ml-4 text-gray-300">
                      {index === items.length - 1 ? "└──" : "├──"} {skill}
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5" />
            <span className="text-xl font-bold">$ ls -la projects/</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.slice(0, 4).map((project, index) => {
              const colors = ["green-400", "blue-400", "yellow-400", "purple-400"]
              const color = colors[index % colors.length]

              return (
                <Card
                  key={project.id}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <CardContent className="p-6">
                    <div className={`border-l-2 border-${color} pl-4`}>
                      <div className={`text-${color} font-bold flex items-center gap-2`}>
                        {project.title}
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div className="text-gray-400 text-sm">{project.period}</div>
                      <div className="text-gray-300 mt-1 text-sm">{project.description}</div>
                      <div className="flex gap-2 mt-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className={`text-xs border-${color} text-${color}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="text-xl font-bold">$ cat work_experience.log</span>
          </div>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 space-y-6">
              <div>
                <div className="text-green-300 font-bold">FunTech Limited</div>
                <div className="text-yellow-400">Virtual Tutor & Tech Camp Coordinator</div>
                <div className="text-gray-400 text-sm">Jul 2023 - Present</div>
                <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Teaching Python, Web Development, and Software Engineering concepts</li>
                  <li>Managing technical education programs and curriculum development</li>
                  <li>Mentoring students in programming best practices and problem-solving</li>
                </ul>
              </div>

              <div>
                <div className="text-green-300 font-bold">Royal Holloway, University of London</div>
                <div className="text-yellow-400">Teaching Assistant</div>
                <div className="text-gray-400 text-sm">Sep 2024 - Apr 2025</div>
                <div className="text-gray-300 mt-2 text-sm">
                  Supporting computer science lab sessions and helping students with programming assignments
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terminal Footer */}
        <div className="mt-12 text-center text-gray-500">
          <div>$ echo "Ready to collaborate on your next project!"</div>
          <div className="mt-2 flex justify-center gap-4">
            <span className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
              <Github className="w-4 h-4" />
              GitHub
            </span>
            <span className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
              <Mail className="w-4 h-4" />
              Contact
            </span>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
