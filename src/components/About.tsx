import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";

export default function About() {
  return (
    <section id="about" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Tentang Saya</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          {PERSONAL_INFO.about}
        </p>
      </motion.div>
    </section>
  );
}
