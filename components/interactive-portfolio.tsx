"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Database,
  Globe,
  Zap,
  Target,
  Users,
  ExternalLink,
} from "lucide-react"
import ProjectModal from "./project-modal"
import { projectsData } from "@/lib/projects-data"

export default function InteractivePortfolio() {
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: number }>({})
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const skills = [
    { name: "Python", level: 90, icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "Java", level: 85, icon: Code, color: "from-orange-500 to-orange-600" },
    { name: "Next.js", level: 80, icon: Globe, color: "from-gray-800 to-gray-900" },
    { name: "React", level: 85, icon: Globe, color: "from-cyan-500 to-cyan-600" },
    { name: "Spring Boot", level: 75, icon: Code, color: "from-green-500 to-green-600" },
    { name: "PostgreSQL", level: 70, icon: Database, color: "from-indigo-500 to-indigo-600" },
    { name: "Problem Solving", level: 95, icon: Target, color: "from-purple-500 to-purple-600" },
    { name: "Teaching", level: 90, icon: Users, color: "from-pink-500 to-pink-600" },
  ]

  const achievements = [
    { icon: Code, title: "6+ Projects", description: "Full-Stack Applications" },
    { icon: Users, title: "2+ Years", description: "Teaching Experience" },
    { icon: Target, title: "Problem Solver", description: "Complex Challenges" },
    { icon: Zap, title: "Fast Learner", description: "New Technologies" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setSkillProgress((prev) => ({ ...prev, [skill.name]: skill.level }))
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">DS</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Danyal Husain Shah
              </h1>
              <p className="text-2xl md:text-3xl text-purple-200 mb-8">Software Developer & Tech Educator</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Mail className="w-5 h-5 text-purple-300" />
                <span>shahd9290@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Phone className="w-5 h-5 text-cyan-300" />
                <span>07763685539</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-pink-300" />
                <span>London, UK</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                    <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                    <p className="text-xs text-white/70">{achievement.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full flex items-center gap-2 bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={skillProgress[skill.name] || 0} className="flex-1 h-2" />
                          <span className="text-sm text-white/70 min-w-[3rem]">{skillProgress[skill.name] || 0}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                        <ExternalLink className="w-4 h-4 text-white/60" />
                      </div>
                      <p className="text-white/70 text-sm">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-white/30 text-white/80">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">FunTech Limited</CardTitle>
                      <p className="text-purple-200">Virtual Tutor & Tech Camp Coordinator</p>
                      <p className="text-sm text-white/60">Jul 2023 - Present</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Development & Teaching</h4>
                      <ul className="text-white/70 space-y-2 text-sm">
                        <li>• Python Programming & Web Development</li>
                        <li>• Software Engineering Best Practices</li>
                        <li>• Curriculum Development & Course Design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Leadership & Management</h4>
                      <ul className="text-white/70 space-y-2 text-sm">
                        <li>• Tech camp operations and coordination</li>
                        <li>• Student mentoring and progress tracking</li>
                        <li>• Team collaboration and project management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
