import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const teams = [
  { name: 'Pixel Pirates', members: 4, avatar: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=100&h=100' },
  { name: 'Retro Rebels', members: 3, avatar: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=100&h=100' },
  { name: 'Binary Bandits', members: 2, avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100' },
  { name: 'Code Crushers', members: 4, avatar: 'https://images.unsplash.com/photo-1548944881-4c2d72298907?auto=format&fit=crop&w=100&h=100' },
  { name: 'Syntax Squad', members: 3, avatar: 'https://images.unsplash.com/photo-1554923687-6fad4924b969?auto=format&fit=crop&w=100&h=100' },
  { name: 'Debug Dragons', members: 2, avatar: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=100&h=100' },
];

export default function TeamsGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-pixel text-center mb-16 text-neon-green">REGISTERED TEAMS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              className="game-card p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={team.avatar}
                alt={team.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-neon-blue"
              />
              <h3 className="font-pixel text-center text-neon-blue mb-2">{team.name}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">{team.members} members</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}