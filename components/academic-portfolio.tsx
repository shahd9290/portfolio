"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, BookOpen, Code2 } from "lucide-react"

export default function AcademicPortfolio() {
  const technicalSkills = [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "Next.js",
    "React",
    "TailwindCSS",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Linux",
    "Adobe Creative Suite",
  ]

  const softSkills = [
    "Leadership",
    "Team Coordination",
    "Problem Solving",
    "Communication",
    "Presentation",
    "Teaching",
    "Project Management",
    "Attention to Detail",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Danyal Husain Shah</h1>
            <p className="text-xl text-gray-600 mb-4">Computer Science Graduate</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
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
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Personal Profile */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Personal Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                An enthusiastic, honest and reliable computer science graduate, actively seeking opportunities to
                develop a career in the technical sector. Keen interest in software programming, application development
                and product design. Ready to learn and keep up to date with the rapidly developing technological
                advancements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Royal Holloway, University of London</h3>
                    <p className="text-gray-600">BSc Computer Science [Software Engineering]</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Sep 2022 - Jun 2025</p>
                    <Badge className="mt-1">First Class Honours</Badge>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Modules:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Software Engineering</div>
                    <div>• IT Project Management</div>
                    <div>• Databases</div>
                    <div>• Final Year Project (Advanced Web Development)</div>
                    <div>• Operating Systems</div>
                    <div>• Small Enterprise Team Project</div>
                    <div>• Software Language Engineering</div>
                    <div>• Software Verification</div>
                    <div>• Functional Programming & Applications</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">The Rosedale Hewens Academy Trust</h3>
                    <p className="text-gray-600">A-Levels</p>
                  </div>
                  <p className="text-sm text-gray-500">Sep 2020 - Jun 2022</p>
                </div>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>• Mathematics [A]</div>
                  <div>• Computer Science [A]</div>
                  <div>• Cambridge Technical in IT [Merit]</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Employment */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Employment History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">FunTech Limited</h3>
                    <p className="text-gray-600">Virtual Tutor</p>
                  </div>
                  <p className="text-sm text-gray-500">Jul 2023 - Present</p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-3">
                  <li>
                    Delivered lessons in Computer Science, covering various levels of Python Programming, including
                    Fundamentals, Object Oriented Programming and Game Development
                  </li>
                  <li>
                    Delivered lessons covering the basics of the Adobe Creative Cloud Suite and Microsoft Office Suite
                  </li>
                  <li>Delivered lessons covering the basics of SQL queries – written in MySQL</li>
                </ul>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-700">Tech Camp Location Co-ordinator [2024]</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                    <li>
                      Manage the day-to-day operations of one of the company's camps ensuring all facilities are safe,
                      secure, and well-maintained
                    </li>
                    <li>Deliver lessons to students covering varying levels of Computer Science and ICT education</li>
                    <li>Engage with parents throughout the week - informing them of their child's progress</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-700">Tech Camp Secondary Lead [2023]</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                    <li>
                      Delivered lessons covering Computer Science topics including Python Programming, Unreal Engine 4
                      and Cyber Security
                    </li>
                    <li>Assisted the Lead Tutor in managing day-to-day operations of location camps</li>
                    <li>Delivered weekly presentations to parents showcasing student work</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Royal Holloway, University of London</h3>
                    <p className="text-gray-600">Teaching Assistant</p>
                  </div>
                  <p className="text-sm text-gray-500">Sep 2024 - Apr 2025</p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-3">
                  <li>
                    Assisted lecturers in lab sessions, providing support to students as they completed exercises
                    relevant to various modules
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Learning Labs Tuition Group</h3>
                    <p className="text-gray-600">Mathematics Tutor</p>
                  </div>
                  <p className="text-sm text-gray-500">Nov 2022 - Jun 2023</p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-3">
                  <li>Delivered lessons in Mathematics to students ranging from Key Stage 2 to A-Levels</li>
                  <li>Identified and created resource packs suited to the student's revision needs</li>
                  <li>Maintained communication with parents through bespoke reports</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Key Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Competitive Revision Website</h3>
                  <p className="text-sm text-gray-500">Oct 2024 - Apr 2025</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced a competitive revision website as part of Advanced Web Development Final Year Project,
                  utilising Spring Boot, Next.js and PostgreSQL to power the system.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Religious Reminder Chatbot</h3>
                  <p className="text-sm text-gray-500">Feb 2025</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced a chat bot as a side project, designed to remind users on various aspects of religion,
                  utilising Python, asynchronous functions and object oriented programming.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Assets Management Website Backend</h3>
                  <p className="text-sm text-gray-500">Jan 2024 - Mar 2024</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced the backend of an Assets Management Website Application for Small Enterprise Team Project
                  module, utilizing Spring Boot and Java to provide key functionality.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Ball Shooter Tank Robotics Project</h3>
                  <p className="text-sm text-gray-500">Jan 2023 - Mar 2023</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced a ball shooter tank as part of a group robotics project using Java, with Bluetooth
                  connectivity to an external Android device for QR code scanning.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Trading Card Game Client</h3>
                  <p className="text-sm text-gray-500">Mar 2023</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced a client for a trading card game using Java, connecting to a server to download and upload
                  card information for the trading experience.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Password Manager</h3>
                  <p className="text-sm text-gray-500">Sep 2021 - May 2022</p>
                </div>
                <p className="text-sm text-gray-600">
                  Produced a password manager for A-Level Computer Science coursework using Python and SQLite3, with a
                  simple interface design suitable for users of all categories.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* References */}
        <section>
          <Card>
            <CardContent className="py-4">
              <p className="text-center text-gray-600 italic">References available upon request</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
