import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Lightbulb, Code, Send, Award } from 'lucide-react';

const stages = [
  { icon: Lightbulb, name: 'Ideation', date: 'May 1' },
  { icon: Code, name: 'Hacking', date: 'May 2-3' },
  { icon: Send, name: 'Submission', date: 'May 3' },
  { icon: Award, name: 'Judging', date: 'May 4' },
  { icon: Trophy, name: 'Winners', date: 'May 5' },
];

export default function EventRoadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4" ref={ref}>
      <h2 className="text-2xl font-pixel text-center mb-16 text-neon-green">GAME STAGES</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-neon-blue opacity-20 transform -translate-y-1/2" />
        <div className="relative flex justify-between">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-neon-blue flex items-center justify-center mb-4 relative z-10">
                <stage.icon className="w-8 h-8 text-neon-blue" />
              </div>
              <p className="font-pixel text-sm text-neon-blue mb-2">{stage.name}</p>
              <p className="text-xs text-gray-400">{stage.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}