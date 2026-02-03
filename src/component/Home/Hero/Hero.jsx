import { motion } from "framer-motion";
import Typewriter from "../TypeWriter/TypeWriter";
import MyPhoto from "../../../assets/images/MyPhoto.jpeg";

export default function Hero() {
    return (
        /* 1. bg-[#030303] hata kar bg-transparent kar diya aur ID remove kar di 
           kyunki ID ab App.jsx mein main container par hai */
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-visible">

            {/* --- LOCAL BACKGROUND DECORATIONS REMOVED --- */}
            {/* (Ab ye background App.jsx se handle ho raha hai) */}

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
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <button className="px-5 py-3.5 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg">
                            View My Projects
                        </button>
                        <button className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                {/* --- RIGHT: IMAGE CONTAINER --- */}
                <div className="relative flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Light glow inside the frame */}
                        <div className="absolute inset-0 bg-indigo-500/10 blur-[60px] rounded-full"></div>

                        <div className="relative group p-1.5 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
                            <div className="relative w-60 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[450px] rounded-[2rem] overflow-hidden">
                                <img
                                    src={MyPhoto}
                                    alt="Moiz Ahmed"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}