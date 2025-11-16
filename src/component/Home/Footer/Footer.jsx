import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="backdrop-blur bg-black/70 border-t border-white/10 text-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center">
                {/* Social Links */}
                <div className="flex gap-6 text-2xl mb-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        className="hover:text-white transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Divider line */}
                <div className="w-2/3 border-t border-white/10 mb-4"></div>

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-white font-medium">Moiz Ahmed</span> | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
