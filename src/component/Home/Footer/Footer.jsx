import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        /* CHANGED: bg-black/70 ko bg-transparent kar diya aur backdrop-blur rakha */
        <footer className="relative z-10 backdrop-blur-md bg-transparent border-t border-white/10 text-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center">
                
                {/* Social Links */}
                <div className="flex gap-8 text-2xl mb-8">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-125 text-gray-500"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-125  text-gray-500"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-125  text-gray-500"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        className="transition-all duration-300 hover:scale-125  text-gray-500"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Divider line */}
                <div className="w-1/4 border-t border-white/10 mb-6"></div>

                {/* Copyright */}
                <p className="text-sm text-gray-500 tracking-wide">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-white font-semibold">MOIZ AHMED</span>
                    <span className="mx-2">|</span> 
                    Built with Passion
                </p>
            </div>
        </footer>
    );
}