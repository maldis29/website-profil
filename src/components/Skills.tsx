import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { cn } from "../lib/utils";

export default function Skills() {
  return (
    <section id="skills" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-6">Keahlian</h2>
        <div className="flex flex-wrap gap-2">
          {PERSONAL_INFO.skills.map((skill, index) => {
            const colors = [
              "bg-purple-500/20 border-purple-500/30 text-purple-200",
              "bg-blue-500/20 border-blue-500/30 text-blue-200",
              "bg-emerald-500/20 border-emerald-500/30 text-emerald-200",
              "bg-pink-500/20 border-pink-500/30 text-pink-200",
              "bg-amber-500/20 border-amber-500/30 text-amber-200",
              "bg-indigo-500/20 border-indigo-500/30 text-indigo-200"
            ];
            const colorClass = colors[index % colors.length];
            
            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={cn(
                  "px-3 py-1.5 border rounded-lg text-sm font-medium transition-all hover:brightness-125 cursor-default",
                  colorClass
                )}
              >
                {skill}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
