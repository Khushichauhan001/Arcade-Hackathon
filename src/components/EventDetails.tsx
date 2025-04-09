import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Users, Cpu } from 'lucide-react';

const prizes = [
  { place: '1ST PLACE', amount: '$5,000', color: 'text-yellow-400' },
  { place: '2ND PLACE', amount: '$3,000', color: 'text-gray-300' },
  { place: '3RD PLACE', amount: '$1,000', color: 'text-amber-600' },
];

export default function EventDetails() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-pixel text-center mb-16 text-neon-green">MISSION BRIEFING</h2>
        
        <motion.div 
          className="game-card p-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6 mb-8">
            <Gamepad2 className="w-8 h-8 text-neon-pink flex-shrink-0" />
            <div>
              <h3 className="font-pixel text-lg mb-4 text-neon-pink">THE CHALLENGE</h3>
              <p className="text-gray-300 leading-relaxed">
                Create an innovative arcade-style game that pushes the boundaries of modern gaming while paying homage to the classics. Your mission is to blend retro aesthetics with cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 mb-8">
            <Cpu className="w-8 h-8 text-neon-blue flex-shrink-0" />
            <div>
              <h3 className="font-pixel text-lg mb-4 text-neon-blue">TECH STACK</h3>
              <p className="text-gray-300 leading-relaxed">
                Use any game engine or framework of your choice. Whether it's Unity, Godot, or pure JavaScript - show us what you can create in 48 hours!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <Users className="w-8 h-8 text-neon-green flex-shrink-0" />
            <div>
              <h3 className="font-pixel text-lg mb-4 text-neon-green">TEAM SIZE</h3>
              <p className="text-gray-300 leading-relaxed">
                Form teams of 2-4 players. Solo players are welcome but remember - multiplayer makes the game more fun!
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="font-pixel text-xl mb-8 text-neon-pink">PRIZE POOL</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <motion.div
                key={prize.place}
                className="game-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Trophy className={`w-12 h-12 mx-auto mb-4 ${prize.color}`} />
                <h4 className="font-pixel text-sm mb-2">{prize.place}</h4>
                <p className={`text-2xl font-pixel ${prize.color}`}>{prize.amount}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}