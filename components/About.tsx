"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, PenTool, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    const cards = [
        {
            title: "Frontend Engineering",
            description: "Building responsive, highly interactive user interfaces primarily with React, Next.js, and Tailwind CSS.",
            icon: <PenTool className="h-6 w-6 text-accent mb-4" />
        },
        {
            title: "Backend Development",
            description: "Developing scalable and secure REST APIs and server-side logic using Node.js and Express.",
            icon: <Database className="h-6 w-6 text-accent mb-4" />
        },
        {
            title: "Problem Solving",
            description: "Constantly sharpening my logic and computational thinking through Data Structures and Algorithms.",
            icon: <Code2 className="h-6 w-6 text-accent mb-4" />
        }
    ];

    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto max-w-5xl relative z-10">
                <SectionHeading
                    title="About Me"
                    subtitle="A glimpse into who I am and what drives my passion for development."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-lg text-muted/90"
                    >
                        <p>
                            Hello! I&apos;m <span className="text-foreground font-semibold">Rupam Kumar Sarangi</span>, a B.Tech student with an insatiable curiosity for software engineering.
                        </p>
                        <p>
                            My journey began with a simple desire to build things that matter. Today, I focus heavily on the <span className="text-accent font-medium">MERN stack</span> (MongoDB, Express, React, Node.js), crafting applications that aren&apos;t just functional, but deliver exceptional user experiences.
                        </p>
                        <p>
                            When I&apos;m not pushing pixels or wrangling APIs, you can find me solving algorithmic challenges. I believe that a strong foundation in <span className="text-accent font-medium">DSA</span> is key to writing efficient, scalable code.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Abstract visual placeholder for profile image / decoration */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-card-border/50 border border-card-border p-8 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl group-hover:bg-accent/40 transition-colors" />
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-colors" />

                            <div className="h-full w-full border border-dashed border-accent/20 rounded-xl flex items-center justify-center text-muted relative z-10 bg-background/40 backdrop-blur-md">
                                <span className="font-mono text-sm">[ Profile Image / Graphic ]</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-card-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
                                <CardHeader>
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                                    >
                                        {card.icon}
                                    </motion.div>
                                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted/90 leading-relaxed">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
