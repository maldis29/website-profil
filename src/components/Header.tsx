import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 md:p-12 mb-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
      {/* Decorative inner glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "circOut" }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-tr from-purple-500 to-blue-500 p-1 mb-6 shadow-xl relative z-10"
      >
        <div className="w-full h-full rounded-[1.3rem] bg-slate-900 flex items-center justify-center overflow-hidden">
          <img 
            src={PERSONAL_INFO.avatar} 
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 relative z-10"
      >
        {PERSONAL_INFO.name}
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg md:text-xl text-purple-300 font-medium italic relative z-10"
      >
        {PERSONAL_INFO.tagline}
      </motion.p>
    </header>
  );
}
