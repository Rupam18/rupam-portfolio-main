"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false); // Close the menu

        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            // Smoothly scroll to the target section
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-background/80 backdrop-blur-md border-card-border py-4" : "bg-transparent border-transparent py-4 md:py-6"}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group z-50">
                    <Terminal className="text-accent h-6 w-6 group-hover:rotate-12 transition-transform" />
                    <span className="font-mono font-bold text-xl tracking-tighter">Rupam<span className="text-accent">.dev</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium text-muted hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-foreground z-50 relative p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 top-[60px] md:top-[73px] bg-background border-b border-card-border overflow-y-auto h-[calc(100vh-60px)]"
                    >
                        <div className="absolute inset-0 bg-background z-[-1]" /> {/* Extra solid layer to prevent bleed */}
                        <nav className="flex flex-col py-8 px-6 gap-6 h-full items-center justify-start mt-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-2xl font-semibold text-foreground hover:text-accent transition-colors w-full text-center py-2"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
