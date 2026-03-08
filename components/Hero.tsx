"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 px-6">
            {/* Abstract Glowing Background Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]"
                />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="mb-8"
                >
                    <Badge variant="outline" className="px-4 py-1.5 text-xs sm:text-sm border-accent/30 text-accent bg-accent/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for opportunities
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hi, I&apos;m <span className="block sm:inline text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.6)] mt-2 sm:mt-0">Rupam Kumar Sarangi</span>
                </motion.h1>

                <motion.h2
                    className="text-lg sm:text-xl md:text-3xl text-muted font-medium mb-8 max-w-3xl px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Aspiring Software Engineer building real-world applications.
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg text-muted/80 max-w-2xl mb-12 leading-relaxed px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    I&apos;m passionate about learning in public and transforming ideas into robust, scalable digital products.
                    Currently diving deep into full-stack development and Data Structures & Algorithms.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full px-6 sm:px-0 sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button size="lg" className="rounded-full w-full sm:w-auto px-8 bg-foreground text-background hover:bg-foreground/90 group" asChild>
                        <a href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto px-8 border-card-border bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all" asChild>
                        <a href="#contact">
                            Contact Me
                            <Mail className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
