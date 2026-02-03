import { motion } from "framer-motion";
import Typewriter from "../TypeWriter/TypeWriter";
import MyPhoto from "../../../assets/images/MyPhoto.jpeg";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-visible pt-8">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
      >
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full">
              <Typewriter />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="px-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="px-7 py-3.5 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg">
                View My Projects
              </button>
              <button className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: IMAGE CONTAINER --- */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative group mx-auto lg:mx-0"
          >
            {/* Soft border glow */}
             <div className="absolute -inset-4 border-2 border-indigo-500/20 rounded-2xl group-hover:rotate-6 transition-transform duration-500"></div>

            {/* Image Container with adjusted width & height */}
            <div className="relative w-72 h-80 md:w-96 md:h-[450px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={MyPhoto}
                alt="Moiz Ahmed"
                className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
