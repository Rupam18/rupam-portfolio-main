"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-card/30 border-t border-card-border relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Feel free to reach out for collaborations, opportunities, or just to say hi!"
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s talk about everything!</h3>
                            <p className="text-muted leading-relaxed">
                                I&apos;m currently looking for new opportunities. Whether you have a question or just want to connect, I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-muted hover:text-accent transition-colors group">
                                <div className="h-12 w-12 rounded-xl bg-card border border-card-border flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <span className="font-medium">hello@example.com</span>
                            </a>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <a href="#" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:bg-card-border transition-all hover:scale-110">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-blue-500 hover:bg-card-border transition-all hover:scale-110">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-sky-500 hover:bg-card-border transition-all hover:scale-110">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3 bg-card/50 backdrop-blur-md border border-card-border rounded-2xl p-8 shadow-2xl"
                        onSubmit={(e: React.FormEvent) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <Input
                                    type="text"
                                    id="name"
                                    className="bg-background/50 border-card-border focus-visible:ring-accent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <Input
                                    type="email"
                                    id="email"
                                    className="bg-background/50 border-card-border focus-visible:ring-accent"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                            <Input
                                type="text"
                                id="subject"
                                className="bg-background/50 border-card-border focus-visible:ring-accent"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                            <Textarea
                                id="message"
                                rows={5}
                                className="bg-background/50 border-card-border focus-visible:ring-accent resize-none"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <Button size="lg" className="w-full sm:w-auto bg-accent text-background hover:bg-accent/90">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
