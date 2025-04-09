import { motion, transform } from 'framer-motion';

const gameElements = [
  // Pokemon Characters
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', // Pikachu
    alt: 'Pikachu',
    size: 'w-40 h-40',
    opacity: 'opacity-60'
    
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', // Charizard
    alt: 'Charizard',
    size: 'w-22 h-30 ',
    opacity: 'opacity-50'
    
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png', // Mewtwo
    alt: 'Mewtwo',
    size: 'w-25 h-40',
    opacity: 'opacity-50'
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', // Snorlax
    alt: 'Snorlax',
    size: 'w-24 h-25',
    opacity: 'opacity-40'
  },
  // Pac-Man Characters
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png',
    alt: 'Pac-Dot',
    size: 'w-8 h-8',
    opacity: 'opacity-40'
  },
  // Mario Elements
  
  
  // Minecraft Elements
 
  // Zelda Elements
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
    alt: 'Master Ball',
    size: 'w-14 h-14',
    opacity: 'opacity-40'
  },
  // Additional Pokemon for variety
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', // Mew
    alt: 'Mew',
    size: 'w-20 h-30',
    opacity: 'opacity-35'
  },
  {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png', // Lugia
    alt: 'Lugia',
    size: 'w-32 h-32',
    opacity: 'opacity-20'
  }
];

export default function FloatingGameElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {gameElements.map((element, index) => (
        <motion.img
          key={index}
          src={element.src}
          alt={element.alt}
          className={`absolute ${element.size} ${element.opacity} filter brightness-125`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            rotate: [0, Math.random() * 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}