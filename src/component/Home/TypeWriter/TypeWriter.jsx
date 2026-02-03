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
        <section className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-2">
            <div className="opacity-0 animate-fadeIn delay-200">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
                    Hello, I’m
                </p>

            </div>


            <div className="relative h-[80px] flex items-center opacity-0 animate-fadeIn delay-500">
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold whitespace-pre bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(to right, #ec4899, #6366f1)" }}
                >
                    {displayText}
                    <span className="border-r-4 border-indigo-500 ml-2 animate-pulse"></span>
                </h1>
            </div>


            <p className="mt-2 text-gray-300 max-w-md leading-relaxed break-words">
                Frontend Developer building responsive, user-friendly web interfaces with React, Tailwind, and smooth animations for modern digital experiences.
            </p>



            {/* <div className="mt-6 flex flex-col sm:flex-row sm:gap-4 gap-3 opacity-0 animate-fadeIn delay-800">
                <Link
                    to="/projects"
                    className="px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-gray-300 font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                >
                    View Projects
                </Link>

                <a
                    href="/resume.pdf"
                    download
                    className="px-5 py-3 rounded-md border border-white/10 text-gray-300 font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/10"
                >
                    Download Resume
                </a>
            </div> */}



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
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
            </style>
        </section>
    );
}
