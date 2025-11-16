import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Typewriter() {
    const name = "Hi, I’m Moiz Ahmed.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 60 : 120;
        const timeout = setTimeout(() => {
            if (!isDeleting && index < name.length) {
                setDisplayText(name.substring(0, index + 1));
                setIndex((prev) => prev + 1);
            } else if (isDeleting && index > 0) {
                setDisplayText(name.substring(0, index - 1));
                setIndex((prev) => prev - 1);
            } else if (!isDeleting && index === name.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && index === 0) {
                setIsDeleting(false);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);

    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <div>
                {/* 🧠 Typewriter Heading (fixed height to prevent layout shift) */}
                <div className="relative h-[70px] flex items-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white whitespace-pre">
                        {displayText}
                        <span className="border-r-4 border-indigo-500 ml-2 animate-pulse"></span>
                    </h1>
                </div>

                {/* ✅ Static text below (no movement) */}
                <p className="mt-2 text-gray-300 max-w-xl leading-relaxed">
                    Frontend developer focused on modern, responsive interfaces with clean UI and smooth animations.
                </p>

                <div className="mt-6 flex gap-4">
                    <Link
                        to="/projects"
                        className="px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                        View Projects
                    </Link>

                    <a
                        href="/resume.pdf"
                        download
                        className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/10 transition-all"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
