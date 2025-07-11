"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Code, Palette, Zap, Star, Github, Linkedin, ExternalLink } from "lucide-react"
import ProjectModal from "./project-modal"
import { projectsData } from "@/lib/projects-data"

export default function CreativePortfolio() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      skills: ["Next.js", "React", "TailwindCSS", "Spring Boot"],
    },
    {
      title: "Tools & Technologies",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      skills: ["PostgreSQL", "Git", "Docker", "Linux"],
    },
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Danyal Husain Shah
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creative Software Developer building innovative solutions through code and design
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Mail className="w-5 h-5 text-purple-500" />
                <span>shahd9290@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Phone className="w-5 h-5 text-pink-500" />
                <span>07763685539</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>London, UK</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-20">
        {/* About Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
            About Me
          </h2>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                I'm a passionate software developer who loves creating meaningful technology solutions. My journey spans
                from building enterprise-level applications to teaching the next generation of developers. I combine
                technical expertise with creative thinking to develop applications that make a real impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <div className={`inline-block p-4 bg-gradient-to-r ${category.color} rounded-full mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all cursor-pointer"
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 6).map((project, index) => {
              const colors = [
                "from-violet-500 to-purple-600",
                "from-emerald-500 to-teal-600",
                "from-amber-500 to-orange-600",
                "from-blue-500 to-indigo-600",
                "from-pink-500 to-rose-600",
                "from-cyan-500 to-blue-600",
              ]
              const color = colors[index % colors.length]

              return (
                <Card
                  key={project.id}
                  className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} className={`text-xs bg-gradient-to-r ${color} text-white`}>
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge className={`text-xs bg-gradient-to-r ${color} text-white`}>
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">FunTech Limited</CardTitle>
                    <p className="text-gray-600">Virtual Tutor & Tech Camp Coordinator</p>
                    <p className="text-sm text-gray-500">Jul 2023 - Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Development & Teaching</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Python Programming & Web Development</li>
                      <li>• Software Engineering Best Practices</li>
                      <li>• Curriculum Development & Course Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Leadership & Management</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Tech camp operations and coordination</li>
                      <li>• Student mentoring and progress tracking</li>
                      <li>• Team collaboration and project management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
