"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LearningTimeline() {
    const timelineData = [
        {
            day: "Today",
            title: "Mastering Next.js App Router",
            description: "Building server-side rendered applications and understanding the nuances of React Server Components."
        },
        {
            day: "Day 50",
            title: "Advanced React Patterns",
            description: "Exploring higher-order components, render props, and custom hooks to write clean, reusable code."
        },
        {
            day: "Day 30",
            title: "Diving into Data Structures",
            description: "Implementing Linked Lists, Trees, and Graphs in JavaScript. Solving problems on LeetCode."
        },
        {
            day: "Day 15",
            title: "Backend Foundations",
            description: "Setting up Express servers, designing RESTful APIs, and connecting to MongoDB."
        },
        {
            day: "Day 1",
            title: "The Journey Begins",
            description: "Committed to learning in public. Set up the development environment and built the first static webpage."
        }
    ];

    return (
        <section id="journey" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Decorative vertical line in background for large screens */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <SectionHeading
                    title="Learning in Public"
                    subtitle="Documenting my 100 Days of Code journey and the milestones along the way."
                />

                <div className="mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-card-border before:to-transparent">
                    {timelineData.map((item, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-card-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-accent group-hover:border-accent transition-colors z-10"
                            >
                                <BookOpen className="h-4 w-4 text-muted group-hover:text-background transition-colors" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:z-20"
                            >
                                <Card className="bg-card/50 backdrop-blur-sm border-card-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                                                {item.day}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
