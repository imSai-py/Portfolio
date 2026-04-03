import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "مرحبا",
  "Namaste"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = isLoading ? 'hidden' : 'unset';
    
    if (index === greetings.length - 1) {
      const finishTimeout = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(finishTimeout);
    }
    
    // Cycle every 160ms
    const cycleTimeout = setTimeout(() => {
      setIndex(index + 1);
    }, 160);
    
    return () => clearTimeout(cycleTimeout);
  }, [index, isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0d0e15]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex items-center text-4xl md:text-5xl lg:text-6xl font-black text-white px-8"
          >
            <span className="w-3 h-3 rounded-full bg-[#00D4AA] mr-5 animate-pulse"></span>
            {greetings[index]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
