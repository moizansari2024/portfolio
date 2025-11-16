// import { createContext, useContext, useState } from "react";


// // Create Context
// const ProjectContext = createContext();

// // Sample project data
// const sampleProjects = [
//     {
//         id: 1,
//         title: "Weather App",
//         date: "July 2024",
//         short: "Weather API app.",
//         details: "Built with React + OpenWeather API.",
//     },
//     {
//         id: 2,
//         title: "Portfolio",
//         date: "Aug 2024",
//         short: "Responsive portfolio.",
//         details: "Smooth animations with Framer Motion.",
//     },
//     {
//         id: 3,
//         title: "Todo App",
//         date: "Sep 2024",
//         short: "Simple CRUD todo app.",
//         details: "Uses localStorage for persistence.",
//     },
// ];

// // Provider component
// export const ProjectProvider = ({ children }) => {
//     const [openProject, setOpenProject] = useState(null);

//     return (
//         <ProjectContext.Provider
//             value={{ sampleProjects, openProject, setOpenProject }}
//         >
//             {children}
//         </ProjectContext.Provider>
//     );
// };

// // Custom hook for using context
// export const useProjects = () => useContext(ProjectContext);













// import { motion } from "framer-motion";
// // import { useProjects } from "../../../context/ProjectContext/ProjectContext";

// export default function ProjectModal() {
//     // const { openProject, setOpenProject } = useProjects();
//     // if (!openProject) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="max-w-2xl w-full bg-white/5 rounded-2xl p-6"
//             >
//                 <div className="flex items-start justify-between">
//                     <div>
//                         <h3 className="text-xl font-semibold">{openProject.title}</h3>
//                         <p className="text-sm text-gray-400">{openProject.date}</p>
//                     </div>
//                     <button
//                         onClick={() => setOpenProject(null)}
//                         className="text-sm px-3 py-1 rounded-md border border-white/10"
//                     >
//                         Close
//                     </button>
//                 </div>
//                 <p className="mt-4 text-gray-200">{openProject.details}</p>
//             </motion.div>
//         </div>
//     );
// }

