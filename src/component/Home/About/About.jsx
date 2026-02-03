import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineBadgeCheck } from "react-icons/hi";
import MyPhoto from "../../../assets/images/MyPhoto.jpeg"

export default function About() {
  const stats = [
    { icon: <HiOutlineBriefcase />, label: "Experience", value: "2+ Years" },
    { icon: <HiOutlineBadgeCheck />, label: "Completed", value: "20+ Projects" },
    { icon: <HiOutlineAcademicCap />, label: "Education", value: "Bachelors" },
  ];

  return (
    /* Fix: bg-black ko bg-transparent se replace kiya */
    <section id="about" className="py-24 bg-transparent text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
       
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold italic tracking-tighter"
          >
            ABOUT ME
             <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative group mx-auto lg:mx-0"
          >
            {/* Soft border glow */}
            <div className="absolute -inset-4 border-2 border-indigo-500/20 rounded-2xl group-hover:rotate-6 transition-transform duration-500"></div>
            
            {/* Image Container with subtle backdrop blur */}
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={MyPhoto} 
                alt="About Moiz" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Right: Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Stats Cards - Glassmorphism style */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-md transition-all"
                >
                  <div className="text-2xl text-indigo-500 mb-2 flex justify-center">{stat.icon}</div>
                  <h5 className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-tight">{stat.label}</h5>
                  <p className="text-xs md:text-sm font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Moiz Ahmed</span>, a passionate Full Stack Developer 
                dedicated to building high-quality web applications.
              </p>
              <p>
                I specialize in modern technologies like <span className="text-indigo-400">React, Tailwind CSS, and Framer Motion</span>. 
              </p>
            </div>

            {/* CTA Button */}
            <motion.div className="mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all active:scale-95"
              >
                Let's Talk Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}