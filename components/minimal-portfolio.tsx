"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react"
import ProjectModal from "./project-modal"
import { projectsData } from "@/lib/projects-data"

export default function MinimalPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "Next.js",
    "React",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Docker",
    "TailwindCSS",
    "REST APIs",
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Danyal Husain Shah</h1>
          <p className="text-xl text-gray-600 mb-6">Software Developer</p>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
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

          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">
            Full-stack software developer with a passion for building scalable web applications and sharing knowledge
            through teaching. I specialize in modern web technologies and have experience in both frontend and backend
            development.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Projects</h2>
          <div className="space-y-6">
            {projectsData.slice(0, 4).map((project) => (
              <Card
                key={project.id}
                className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{project.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Virtual Tutor & Tech Camp Coordinator</h3>
                  <p className="text-gray-600">FunTech Limited</p>
                </div>
                <span className="text-sm text-gray-500">Jul 2023 - Present</span>
              </div>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Teaching Python programming, web development, and software engineering concepts</li>
                <li>• Managing technical education programs and developing curriculum</li>
                <li>• Mentoring students in programming best practices and problem-solving</li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Teaching Assistant</h3>
                  <p className="text-gray-600">Royal Holloway, University of London</p>
                </div>
                <span className="text-sm text-gray-500">Sep 2024 - Apr 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Supporting computer science lab sessions and helping students with programming assignments and
                debugging.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-4">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">BSc Computer Science [Software Engineering]</h3>
              <p className="text-gray-600">Royal Holloway, University of London</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">2022 - 2025</span>
              <div className="mt-1">
                <Badge variant="secondary">First Class Honours</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
