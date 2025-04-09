import { Github, Twitter, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-pixel text-neon-pink mb-4">CONTACT</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@arcade-a-thon.com" className="text-gray-400 hover:text-neon-blue flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@arcade-a-thon.com
              </a>
              <a href="https://arcade-a-thon.com" className="text-gray-400 hover:text-neon-blue flex items-center gap-2">
                <Globe className="w-4 h-4" />
                arcade-a-thon.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-pixel text-neon-pink mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-pixel text-neon-pink mb-4">ORGANIZED BY</h3>
            <p className="text-gray-400">TechCorp Gaming Division</p>
          </div>
        </div>
        
        <div className="text-center text-gray-500 font-pixel text-sm">
          <p>&copy; 2024 ARCADE-A-THON. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}