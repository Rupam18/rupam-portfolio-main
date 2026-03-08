"use client";

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Loader2 } from "lucide-react";

// Dynamically import the calendar with SSR turned off to prevent hydration mismatch
const GitHubCalendar = dynamic(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar), {
    ssr: false,
    loading: () => (
        <div className="flex justify-center items-center h-[150px] w-full text-muted">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span>Loading contributions...</span>
        </div>
    )
});

export default function GithubContributions() {
    return (
        <section id="contributions" className="py-24 px-6 relative bg-background border-t border-card-border/50 overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10 w-full overflow-hidden">
                <SectionHeading
                    title="GitHub Contributions"
                    subtitle="A reflection of my daily coding consistency and open-source activities."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 p-3 sm:p-6 md:p-10 rounded-2xl bg-card/30 backdrop-blur-sm border border-card-border shadow-2xl flex flex-col justify-center items-center max-w-full"
                >
                    <div className="flex justify-center w-full max-w-full overflow-x-hidden min-h-[160px]">
                        <div className="w-full flex justify-center scale-[0.5] sm:scale-100 origin-center transition-transform">
                            <GitHubCalendar
                                username="Rupam18"
                                blockSize={14}     // Increased size
                                blockMargin={4}
                                fontSize={14}      // Increased font size
                                colorScheme="dark"
                                showWeekdayLabels={false}
                                showMonthLabels={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
