import React from "react";
import { motion } from "framer-motion";
import { useProject } from "../../../Context/ProjectProvider";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

export default function Projects() {
    const { sampleProjects } = useProject();

    return (
        <section id="projects" className="py-24 bg-transparent min-h-screen relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header Section - Centered */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold italic tracking-tighter text-white uppercase">
                            Projects
                        </h2>
                        {/* Centered blue line */}
                        <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleProjects && sampleProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                            transition={{
                                delay: (index % 3) * 0.1,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/30 transition-all duration-500 shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-indigo-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                                        <HiOutlineExternalLink size={24} />
                                    </a>
                                    <a href="#" className="p-3 bg-white/10 text-white backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all border border-white/20 transform translate-y-4 group-hover:translate-y-0 delay-75">
                                        <HiOutlineCode size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                                    {project.short || "Web Development"}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                                    {project.details}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    <span className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">#React</span>
                                    <span className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">#Tailwind</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}