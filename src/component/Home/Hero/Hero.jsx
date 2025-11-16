import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import Typewriter from "../TypeWriter/TypeWriter";

export default function Hero() {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-8"
        >
            {/*             
            <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold">Hi, I’m Moiz Ahmed.</h1>
                <p className="mt-4 text-gray-300">
                    Frontend developer focused on modern, responsive interfaces with clean UI and smooth animations.
                </p>

                <div className="mt-6 flex gap-4">

                    <Link
                        to="/projects"
                        className="px-4 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10"
                    >
                        View Projects
                    </Link>

                    <a
                        href="/resume.pdf"
                        download
                        className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/10"
                    >
                        Download Resume
                    </a>
                </div>
            </div> */}

            <Typewriter />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-56 h-56 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-4xl font-bold shadow-xl mx-auto"
            >
                M
            </motion.div>
        </motion.section>
    );
}
