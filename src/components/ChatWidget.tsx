import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "../lib/utils";
import { chatWithAI } from "../services/geminiService";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      text: "Halo! Saya asisten AI Aldi. Silakan tanya apa saja tentang pekerjaan, keahlian, atau cara menghubunginya!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatWithAI(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response || "I'm sorry, I couldn't process that.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-sm tracking-wide">Assistant</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">Gemini-3-Flash Integrated</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-transparent">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex gap-3 max-w-[85%] flex-col",
                    m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {m.role === "user" ? "You" : "AI"}
                    </span>
                  </div>
                  <div className={cn(
                    "rounded-2xl px-4 py-3 text-sm leading-relaxed border shadow-lg",
                    m.role === "user" 
                      ? "bg-blue-600/40 border-blue-400/20 text-white rounded-tr-none" 
                      : "bg-white/10 border-white/5 text-slate-200 rounded-tl-none"
                  )}>
                    <div className="prose prose-sm max-w-none text-inherit">
                      <ReactMarkdown>
                        {m.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex mr-auto items-start max-w-[85%] gap-3 flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">AI</span>
                  </div>
                  <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 shadow-lg">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-slate-950/40 border-t border-white/10">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Aldi..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-5 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-1.5 bg-purple-600 rounded-xl hover:bg-purple-500 text-white disabled:opacity-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-mono">
                AI response style: Frosted
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-md",
          isOpen ? "bg-white/10 text-white" : "bg-purple-600 text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
