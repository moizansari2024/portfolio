import React from "react";
import { motion } from "framer-motion";
import { useProject } from "../../../Context/ProjectProvider";

function ProjectPage() {

    const { sampleProjects, setOpenProject } = useProject();

    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setOpenProject(project)}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:bg-white/10 transition"
                    >
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-400">{project.date}</p>
                        <p className="mt-3 text-gray-300">{project.short}</p>
                        <div className="mt-4 text-indigo-400 text-sm font-medium">
                            Click to view details →
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ProjectPage







