"use client"

import {useEffect, useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    Calendar,
    Code,
    Database,
    ExternalLink,
    Github,
    Globe,
    Linkedin,
    Mail,
    MapPin,
    Phone, Quote,
    Smartphone
} from "lucide-react"
import ProjectModal from "@/components/project-modal"
import Link from "next/link";
import {ModeToggle} from "@/components/dark-toggle";
import axios from "axios";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import TestiCarousel from "@/components/testi-carousel";

export default function ModernPortfolio() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [skills, setSkills] = useState<any[]>([])
    const [projectsData, setProjectsData] = useState<any[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])


    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skill`)
                setSkills(res.data)
            } catch (err) {
                console.error("Failed to fetch skills", err)
            }
        }
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project`)
                setProjectsData(res.data)
            } catch (err) {
                console.error("Failed to fetch projects", err)
            }
        }
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/testimonial`)
                setTestimonials(res.data)
            } catch (e) {
                console.error("Failed to fetch testimonials", e)
            }
        }
        fetchSkills()
        fetchProjects()
        fetchTestimonials()

    }, [])

    const skillCategories = {
        Languages: skills.filter((s) => s.category === "Languages"),
        Frameworks: skills.filter((s) => s.category === "Frameworks"),
        Database: skills.filter((s) => s.category === "Database"),
        Tools: skills.filter((s) => s.category === "Tools"),
        OS: skills.filter((s) => s.category === "OS"),
        Miscellaneous: skills.filter((s) => s.category === "Miscellaneous"),

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
            case "Mobile Application":
                return Smartphone
            default:
                return Code
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#1a1c1e]">
            {/* Hero Section */}
            <section
                className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#1a1c1e] dark:to-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-slate-200 mb-4">Danyal Husain Shah</h1>
                    <p className="text-2xl text-blue-600 font-medium mb-4">Graduate Software Developer</p>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        An aspiring full-stack developer aiming to create software that benefits everyone
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4"/>
                            <span>shahd9290@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4"/>
                            <span>07763 685539</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4"/>
                            <span>London, UK</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Button
                            className="flex items-center gap-2 dark:bg-gray-950 dark:text-slate-200 dark:border dark:border-gray-500"
                            asChild>

                            <Link href="https://github.com/shahd9290">
                                <Github className="w-4 h-4"/>
                                GitHub
                            </Link>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2" asChild>
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
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        I recently graduated from Royal Holloway, University of London with a Bachelor&apos;s degree in
                        Computer Science.
                        My interest is in Software Development - creating applications which can be beneficial to a
                        variety of users over the internet.
                        I have had previous experience with full-stack applications using a variety of modern frameworks
                        - some of which I have taught to other students
                        as part of their education.
                    </p>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">Professional
                        Experience</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Junior Web Developer</CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">RESO Studios • Sep 2025 - Present</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        Maintained the company's website, organising various components to improve
                                        usability.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Virtual Tutor & Tech Camp Coordinator</CardTitle>
                                <p className="text-gray-600 dark:text-gray-400">FunTech Limited • Jul 2023 - Aug
                                    2025</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        Delivered Computer Science lessons covering Python Programming, Game
                                        Development, and Web Technologies
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
                                <p className="text-gray-600 dark:text-gray-400">Royal Holloway, University of London •
                                    Sep 2024 - Apr
                                    2025</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                        Assisted lecturers in lab sessions, providing support to students as they
                                        completed exercises relevant to various modules.
                                    </li>
                                    <li>Engaged in weekly meetings with students, to discuss what they had learned in
                                        their lectures and whether they were able to apply it to exercises they were
                                        provided.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Education - Simplified */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">Education</h2>
                    <Card>
                        <CardContent>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">BSc Computer Science [Software
                                        Engineering]</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Royal Holloway, University of
                                        London</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2022 - Jun 2025</p>
                                </div>
                                <Badge variant="secondary">First Class Honours</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">Technical Skills</h2>
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
                                                {skill.name.includes("*") ? (
                                                    <>
                                                        {skill.name.replace("*", "")}
                                                        <sup>*</sup>
                                                    </>
                                                ) : (
                                                    skill.name
                                                )}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <footer><i><sup>*</sup> - Currently Learning <br/> Skills not currently present I am willing to
                            learn.</i></footer>
                    </div>
                </section>

                {/* Featured Projects */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.slice(0, 6).map((project) => {
                            const CategoryIcon = getCategoryIcon(project.category)
                            return (
                                <Card
                                    key={project._id}
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
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.tech.slice(0, 3).map((tech:string) => (
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
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-6">Testimonials</h2>
                    <TestiCarousel testimonials={testimonials} />
                </section>

            </div>

            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <ModeToggle/>
        </div>
    )
}
