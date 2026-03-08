"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
    },
    {
        title: "Other Tools",
        skills: ["Git", "GitHub", "Docker", "Postman", "Framer Motion", "Vercel"],
    },
];

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-24 px-6 relative bg-card/20 border-y border-card-border/50">
            <div className="container mx-auto max-w-5xl">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with to bring ideas to life."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card className="h-full bg-background/50 border-card-border hover:border-accent/30 transition-colors backdrop-blur-sm group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg md:text-xl flex items-center gap-3">
                                        <span className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-mono group-hover:bg-accent group-hover:text-background transition-colors">
                                            0{idx + 1}
                                        </span>
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-2"
                                    >
                                        {category.skills.map((skill) => (
                                            <motion.div key={skill} variants={item}>
                                                <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-card hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all font-medium">
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
