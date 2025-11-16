// import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Home/Navbar/Navbar";
// import Hero from "./component/Home/Hero/Hero";
// import About from "./component/Home/About/About";
// import Contact from "./component/Home/Contact/Contact";
// import Footer from "./component/Home/Footer/Footer";
// import ProjectsPage from "./component/Home/ProjectPage/ProjectsPage"; // <-- your projects page
// import ProjectModal from "./component/Home/ProjectModal/ProjectModal";

// export default function App() {
//   return (
//     <div className="min-h-screen text-gray-100 bg-black">

//       <Navbar />


//       <main className="pt-20">
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>


//         {/* <ProjectModal /> */}
//         <Footer />
//       </main>
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Home/Navbar/Navbar";
import Hero from "./component/Home/Hero/Hero";
import About from "./component/Home/About/About";
import Contact from "./component/Home/Contact/Contact";
import Footer from "./component/Home/Footer/Footer";
import ProjectsPage from "./component/Home/ProjectPage/ProjectPage"; // ✅ Fixed import
import ProjectModal from "./component/Home/ProjectModal/ProjectModal";

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ProjectModal />
        <Footer />
      </main>
    </div>
  );
}
