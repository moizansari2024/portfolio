import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styling vahi rakhi hai jo aapki thi
  const linkClass = "relative px-3 py-2 transition-all duration-300 text-sm font-medium tracking-wide text-gray-400 hover:text-white cursor-pointer group";

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
          ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo - Scroll to Home */}
        <Link to="home" smooth={true} duration={500} className="group flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-bold tracking-tighter text-white uppercase italic">
            Portfolio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-white active-link" // Active hone par text white hoga
                className={linkClass}
              >
                {item}

                {/* Underline Logic: Hover par bhi dikhegi aur active hone par bhi */}
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-pink-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 group-[.active-link]:scale-x-100 transition-transform duration-300 origin-center"
                />
              </Link>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="relative group p-[1.5px] rounded-full overflow-hidden transition-all active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-6 py-2 bg-black rounded-full transition-all ">
              <span className="text-sm font-bold text-white">Resume</span>
            </div>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none z-50 p-2"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-4xl font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="/resume.pdf"
                download
                className="mt-4 px-10 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-white font-bold text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}