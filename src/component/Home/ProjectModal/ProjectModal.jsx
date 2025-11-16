import React from 'react'
// import { useProject } from '../../../Context/ProjectProvider'
import { useProject } from '../../../Context/ProjectProvider'
import { motion } from 'framer-motion'

function ProjectModal() {

    const { openProject, setOpenProject } = useProject()
    if (!openProject) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full bg-white/5 rounded-2xl p-6"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">{openProject.title}</h3>
                        <p className="text-sm text-gray-400">{openProject.date}</p>                     </div>
                    <button
                        onClick={() => setOpenProject(null)}
                        className="text-sm px-3 py-1 rounded-md border border-white/10"
                    >                         Close
                    </button>
                </div>
                <p className="mt-4 text-gray-200">{openProject.details}</p>
            </motion.div>
        </div>
    )
}

export default ProjectModal
