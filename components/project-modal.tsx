"use client"

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {Calendar, Code, Database, ExternalLink, Github, Globe} from "lucide-react"
import Link from "next/link"

interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    tech: string[]
    period: string
    status: string
    features: string[]
    challenges: string[]
    github?: string
    demo?: string
    image?: string
    category: string
}

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export default function ProjectModal({project, isOpen, onClose}: ProjectModalProps) {
    if (!project) return null

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

    const CategoryIcon = getCategoryIcon(project.category)

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="min-w-7xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <CategoryIcon className="w-5 h-5 text-blue-600"/>
                        </div>
                        <div>
                            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4"/>
                                    {project.period}
                                </div>
                                <Badge
                                    variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Project Image Placeholder */}
                    {project.image && (
                        <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    )}

                    {/* Description */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Overview</h3>
                        <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="px-3 py-1">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Technical Challenges & Solutions</h3>
                        <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600">{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Separator/>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        {project.github && (
                            <Button className="flex items-center gap-2" asChild>
                                <Link href={project.github}>
                                    <Github className="w-4 h-4"/>
                                    View Code
                                </Link>
                            </Button>
                        )}
                        {project.demo && (
                            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                                <ExternalLink className="w-4 h-4"/>
                                Live Demo
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
