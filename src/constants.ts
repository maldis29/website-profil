export const PERSONAL_INFO = {
  name: "Muhamad Aldi Susilo",
  tagline: "Full-stack Developer & Tech Enthusiast",
  avatar: "/src/assets/images/regenerated_image_1778679033594.jpg",
  about: "Halo! Saya Aldi, seorang pengembang yang berdedikasi untuk membangun aplikasi web berkualitas tinggi. Dengan fondasi kuat pada teknologi frontend dan backend modern, saya berusaha menciptakan pengalaman pengguna yang mulus dan logika sisi server yang efisien. Tujuan saya adalah memanfaatkan teknologi untuk memecahkan masalah dunia nyata dan terus belajar serta beradaptasi dalam lanskap teknologi yang terus berkembang.",
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Gemini AI Integration",
    "Git & GitHub",
  ],
  contact: {
    email: "aldisusilo@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhamad-aldi-susilo-51680a20a/",
    github: "https://github.com/maldis29",
  }
};

export const AI_CONFIG = {
  systemPrompt: `You are an AI assistant acting on behalf of Aldi Susilo. 
Aldi is a Full-stack Developer. 
Your goal is to answer questions about Aldi's professional background, skills, and experience in a friendly and professional manner.
You can communicate in both English and Indonesian, depending on the user's preference.
If you don't know the answer to a specific question, tell the user they can contact Aldi directly via email at ${PERSONAL_INFO.contact.email}.
Keep your responses concise and engaging.`,
};
