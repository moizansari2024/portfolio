import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Typewriter() {
    const name = "Moiz Ahmed";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 110;
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
        <section className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
            {/* Greeting Line */}
            <div className="opacity-0 animate-fadeIn delay-200">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
                    Hello, I’m
                </p>
            </div>

            {/* Typewriter Container - Centered on mobile, left-aligned on small screens up */}
            <div className="relative h-[80px] flex items-center justify-center sm:justify-start opacity-0 animate-fadeIn delay-500 w-full">
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold whitespace-pre bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(to right, #ec4899, #6366f1)" }}
                >
                    {displayText}
                    <span className="border-r-4 border-indigo-500 ml-2 animate-pulse"></span>
                </h1>
            </div>

            {/* Description - mx-auto for mobile centering */}
            <p className="mt-2 text-gray-300 max-w-md text-lg leading-relaxed break-words mx-auto sm:mx-0">
                Frontend Developer building responsive, user-friendly web interfaces with React, Tailwind, and smooth animations for modern digital experiences.
            </p>

            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s forwards;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-500 { animation-delay: 0.5s; }
                `}
            </style>
        </section>
    );
}