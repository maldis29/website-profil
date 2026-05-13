import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${PERSONAL_INFO.contact.email}`,
      value: PERSONAL_INFO.contact.email,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: PERSONAL_INFO.contact.linkedin,
      value: "Muhamad Aldi Susilo",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: PERSONAL_INFO.contact.github,
      value: "@maldis29",
    },
  ];

  return (
    <section id="contact" className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-6">Kontak</h2>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors group relative"
              title={link.value}
            >
              <div className="text-slate-400 group-hover:text-white transition-colors">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
