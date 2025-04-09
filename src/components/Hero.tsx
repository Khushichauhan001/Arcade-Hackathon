import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center pixel-pattern scanline">
      <div className="text-center z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-pixel neon-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ARCADE-A-THON
        </motion.h1>
        <motion.p 
          className="text-neon-blue text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Level Up Your Coding Game
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-transparent border-2 border-neon-pink rounded-lg font-pixel text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 neon-border flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Gamepad2 className="w-6 h-6" />
          JOIN NOW
        </motion.button>
      </div>
    </section>
  );
}