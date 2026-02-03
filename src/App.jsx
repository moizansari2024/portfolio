import { motion } from "framer-motion";
// import { ProjectContextProvider } from "./component/Home/ProjectPage/ProjectContextProvider"; // Path check karlein
import Navbar from "./component/Home/Navbar/Navbar"
import Hero from "./component/Home/Hero/Hero";
import About from "./component/Home/About/About";
import Projects from "./component/Home/ProjectPage/ProjectPage"
import Contact from "./component/Home/Contact/Contact"
import Footer from "./component/Home/Footer/Footer"
import { ProjectContextProvider } from "./Context/ProjectProvider";

export default function App() {
  return (
    /* 1. Context Provider se poori app ko wrap kiya */
    <ProjectContextProvider>
      <main className="relative bg-[#030303] text-white overflow-hidden selection:bg-indigo-500/30">
        
        {/* --- GLOBAL BACKGROUND (Fixed) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
          </div>

          {/* Top-Left Pink Blob */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-500 rounded-full blur-[130px]"
          />

          {/* Middle-Right Indigo Blob */}
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.09, 0.05], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[160px]"
          />

          {/* Bottom-Left Cyan Blob */}
          <motion.div
            animate={{ opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px]"
          />
        </div>

        {/* --- CONTENT LAYER (z-10) --- */}
        <div className="relative z-10">
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </div>
      </main>
    </ProjectContextProvider>
  );
}