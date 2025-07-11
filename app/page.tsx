"use client"

import {useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Calendar, Code, Database, ExternalLink, Github, Globe, Linkedin, Mail, MapPin, Phone} from "lucide-react"
import ProjectModal from "@/components/project-modal"
import {projectsData} from "@/lib/projects-data"
import Link from "next/link";

export default function ModernPortfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const skills = [
        {name: "Python", category: "Languages"},
        {name: "Java", category: "Languages"},
        {name: "JavaScript", category: "Languages"},
        {name: "SQL", category: "Languages"},
        {name: "Next.js", category: "Frontend"},
        {name: "React", category: "Frontend"},
        {name: "TailwindCSS", category: "Frontend"},
        {name: "Spring Boot", category: "Backend"},
        {name: "PostgreSQL", category: "Database"},
        {name: "MySQL", category: "Database"},
        {name: "Git", category: "Tools"},
        {name: "Linux", category: "Tools"},
    ]

    const skillCategories = {
        Languages: skills.filter((s) => s.category === "Languages"),
        Frontend: skills.filter((s) => s.category === "Frontend"),
        Backend: skills.filter((s) => s.category === "Backend"),
        Database: skills.filter((s) => s.category === "Database"),
        Tools: skills.filter((s) => s.category === "Tools"),
    }

    const openProjectModal = (project: any) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Web Development":
                return Globe
            case "Backend":
                return Database
            case "Software":
                return Code
            default:
                return Code
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Danyal Husain Shah</h1>
                    <p className="text-2xl text-blue-600 font-medium mb-4">Graduate Software Developer</p>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Full-stack developer passionate about creating innovative web applications and teaching the next
                        generation
                        of programmers
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4"/>
                            <span>shahd9290@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4"/>
                            <span>07763685539</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4"/>
                            <span>London, UK</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Button className="flex items-center gap-2" asChild>

                            <Link href="https://github.com/shahd9290">
                                <Github className="w-4 h-4"/>
                                GitHub
                            </Link>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 bg-transparent" asChild>
                            <Link href="https://www.linkedin.com/in/danyal-shah/">
                                <Linkedin className="w-4 h-4"/>
                                LinkedIn
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {/* About */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I'm a passionate software developer with expertise in full-stack web development and a strong
                        background in
                        teaching technology. I love building applications that solve real problems and sharing knowledge
                        with
                        others. My experience spans from creating enterprise-level backend systems to developing
                        interactive web
                        applications with modern frameworks.
                    </p>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skillCategories).map(([category, categorySkills]) => (
                            <Card key={category} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill) => (
                                            <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm">
                                                {skill.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Featured Projects */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.slice(0, 6).map((project) => {
                            const CategoryIcon = getCategoryIcon(project.category)
                            return (
                                <Card
                                    key={project.id}
                                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                    onClick={() => openProjectModal(project)}
                                >
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <CategoryIcon className="w-4 h-4 text-blue-600"/>
                                            </div>
                                            <Badge variant="outline" className="text-xs">
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4"/>
                                            {project.period}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{project.tech.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-blue-600">
                                            <span>View Details</span>
                                            <ExternalLink className="w-3 h-3"/>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Virtual Tutor & Tech Camp Coordinator</CardTitle>
                                <p className="text-gray-600">FunTech Limited • Jul 2023 - Present</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>
                                        Delivered Computer Science lessons covering Python Programming, Game
                                        Development, and Web
                                        Technologies
                                    </li>
                                    <li>Managed day-to-day operations of tech camps ensuring safe and secure learning
                                        environments
                                    </li>
                                    <li>Mentored students in software development best practices and problem-solving
                                        techniques
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Teaching Assistant</CardTitle>
                                <p className="text-gray-600">Royal Holloway, University of London • Sep 2024 - Apr
                                    2025</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Supporting lecturers in computer science lab sessions, helping students with
                                    programming assignments,
                                    debugging code, and understanding complex software engineering concepts.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Education - Simplified */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
                    <Card>
                        <CardContent>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">BSc Computer Science [Software
                                        Engineering]</h3>
                                    <p className="text-gray-600">Royal Holloway, University of London</p>
                                    <p className="text-sm text-gray-500">Sep 2022 - Jun 2025</p>
                                </div>
                                <Badge>First Class Honours</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </section>

            </div>

            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    )
}
