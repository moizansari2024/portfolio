import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 py-16"
        >
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <div className="bg-white/5 dark:bg-black/20 rounded-xl p-6 md:p-8 text-gray-300 backdrop-blur-sm">
                <p>
                    I build user interfaces with React, Tailwind CSS and Framer Motion.
                    I enjoy turning complex problems into intuitive experiences.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                    <li>• React</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion</li>
                    <li>• JavaScript (ES6+)</li>
                </ul>
            </div>
        </motion.section>
    );
}
