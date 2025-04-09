import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'Schedule', to: 'schedule' },
  { name: 'About', to: 'about' },
  { name: 'Teams', to: 'teams' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="font-pixel text-neon-pink text-lg">ARCADE-A-THON</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="font-poppins text-gray-300 hover:text-neon-blue cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-neon-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a0a]/95 backdrop-blur-md rounded-lg">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block px-3 py-2 font-poppins text-gray-300 hover:text-neon-blue cursor-pointer transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}