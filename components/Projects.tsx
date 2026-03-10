"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
    const projects = [
        {
            title: "Consistency OS",
            description: "A comprehensive habit tracking application featuring dynamic streak calendars and user-specific habit completion data visualization.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
            github: "https://github.com/Rupam18/consistency-os",
            live: "https://consistency-os-pzkf.vercel.app/"
        },
        {
            title: "SaaS Platform",
            description: "A multi-tenant task management system featuring JWT authentication, role-based access control, and PostgreSQL with Redis caching for performance optimization.",
            techStack: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Redis"],
            github: "https://github.com/Rupam18/saas-platform",
            live: "https://saas-platform-olive.vercel.app/"
        },
        {
            title: "Real-time Chat App",
            description: "A real-time messaging application allowing users to create rooms, send text messages, and share media securely.",
            techStack: ["React", "Socket.io", "Express", "Tailwind CSS"],
            github: "https://github.com",
            live: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Some of the recent work I've built to solve real-world problems."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex h-full"
                        >
                            <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-card-border hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500 overflow-hidden group">
                                <div className="h-48 w-full bg-gradient-to-br from-card to-card-border relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                                    <Folder className="h-12 w-12 text-muted/30 group-hover:scale-125 group-hover:text-accent/50 transition-all duration-700" />
                                </div>

                                <CardHeader className="flex-grow pb-3">
                                    <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm md:text-base text-muted/90 mt-2 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-4 pt-4 border-t border-card-border/50">
                                    <Button variant="ghost" size="sm" className="text-muted hover:text-foreground" asChild>
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                    {project.live && (
                                        <Button variant="ghost" size="sm" className="text-muted hover:text-accent" asChild>
                                            <a href={project.live} target="_blank" rel="noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
