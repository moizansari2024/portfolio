import React, { useContext, useState } from "react";
import ProjectContext from "./CreateContext"


const sampleProjects = [
    {
        id: 1,
        title: "Weather App",
        date: "July 2024",
        short: "Weather API app.",
        details: "Built with React + OpenWeather API.",
        image: "",
    },
    {
        id: 2,
        title: "Portfolio",
        date: "Aug 2024",
        short: "Responsive portfolio.",
        details: "Smooth animations with Framer Motion.",
        image: "",
    },
    {
        id: 3,
        title: "Todo App",
        date: "Sep 2024",
        short: "Simple CRUD todo app.",
        details: "Uses localStorage for persistence.",
        image: "",
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