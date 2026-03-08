"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [result, setResult] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        setResult("Sending message...");

        const formData = new FormData(event.currentTarget);
        // Replace with the user's actual Web3Forms Access Key later
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! I'll get back to you soon.");
                setStatus("success");
                event.currentTarget.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "Failed to send message.");
                setStatus("error");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setResult("An error occurred. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-card/30 border-t border-card-border relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Feel free to reach out for collaborations, opportunities, or just to say hi!"
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 mt-12 md:mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-6 md:space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s talk about everything!</h3>
                            <p className="text-muted leading-relaxed">
                                I&apos;m currently looking for new opportunities. Whether you have a question or just want to connect, I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:rupamsarangi2001@gmail.com" className="flex items-center gap-4 text-muted hover:text-accent transition-colors group">
                                <div className="h-12 w-12 rounded-xl bg-card border border-card-border flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <span className="font-medium">rupamsarangi2001@gmail.com</span>
                            </a>
                        </div>

                        <div className="pt-8 flex gap-4">
                            <a href="https://github.com/Rupam18" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:bg-card-border transition-all hover:scale-110">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/rupam-sarangi" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-blue-500 hover:bg-card-border transition-all hover:scale-110">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://x.com/RupamSarangi1" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-card border border-card-border flex items-center justify-center text-muted hover:text-sky-500 hover:bg-card-border transition-all hover:scale-110">
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
                        onSubmit={onSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="bg-background/50 border-card-border focus-visible:ring-accent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
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
                                name="subject"
                                required
                                className="bg-background/50 border-card-border focus-visible:ring-accent"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="bg-background/50 border-card-border focus-visible:ring-accent resize-none"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === "loading"}
                                className="w-full sm:w-auto bg-accent text-background hover:bg-accent/90"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                                <Send className="ml-2 h-4 w-4" />
                            </Button>

                            {result && (
                                <div className={`flex items-center gap-2 text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                                    <span>{result}</span>
                                </div>
                            )}
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
