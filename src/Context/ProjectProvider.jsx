import React, { useContext, useState } from "react";
import ProjectContext from "./CreateContext"


const sampleProjects = [
    {
        id: 1,
        title: "Weather App",
        short: "Weather API app.",
        details: "Built with React + OpenWeather API.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0EMX-U4VruHS_xfVMNNe_FfoX6NMcytTJA&s",
    },
    {
        id: 2,
        title: "Portfolio",
        short: "Responsive portfolio.",
        details: "Smooth animations with Framer Motion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0EMX-U4VruHS_xfVMNNe_FfoX6NMcytTJA&s",
    },
    {
        id: 3,
        title: "Todo App",
        short: "Simple CRUD todo app.",
        details: "Uses localStorage for persistence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0EMX-U4VruHS_xfVMNNe_FfoX6NMcytTJA&s",
    },
     {
        id: 4,
        title: "Quiz Application",
        short: "Simple Quiz App",
        details: "Uses localStorage for persistence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0EMX-U4VruHS_xfVMNNe_FfoX6NMcytTJA&s",
    },
];


export const ProjectContextProvider = ({ children }) => {
    const [openProject, setOpenProject] = useState(null);

    return (
        <ProjectContext.Provider value={{ sampleProjects, openProject, setOpenProject }}>
            {children}
        </ProjectContext.Provider>
    );
};
export const useProject = () => useContext(ProjectContext)