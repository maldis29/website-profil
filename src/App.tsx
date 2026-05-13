/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-purple-500/30 relative overflow-hidden font-sans">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <Header />
        <main className="mt-8 space-y-6">
          <About />
          <Skills />
          <Contact />
        </main>
        
        <footer className="mt-24 pt-12 border-t border-white/10 text-center text-slate-500 text-[10px] tracking-[0.2em] uppercase font-mono">
          © {new Date().getFullYear()} Aldi Susilo. Dibuat dengan React & AI.
        </footer>
      </div>
      
      <ChatWidget />
    </div>
  );
}

