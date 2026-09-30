import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', num: '01' },
    { name: 'Projects', href: '#projects', num: '02' },
    { name: 'Skills', href: '#skills', num: '03' },
    { name: 'Experience', href: '#experience', num: '04' },
    { name: 'Contact', href: '#contact', num: '05' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#D9DCE3]/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#0E1224] font-serif font-bold text-2xl tracking-tighter">
          YM<span className="text-[#6EE7B7]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#0E1224] text-sm font-medium hover:text-[#6EE7B7] transition-colors group flex items-center gap-1.5"
            >
              <span className="text-[#9CA3AF] text-xs font-serif group-hover:text-[#A78BFA] transition-colors">{link.num}</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="group flex items-center gap-2 text-sm font-semibold text-[#0E1224] hover:text-[#6EE7B7] transition-colors"
          >
            Let’s Talk 
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#0E1224]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-[#D9DCE3]">
              <a href="#" className="text-[#0E1224] font-serif font-bold text-2xl tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                YM<span className="text-[#6EE7B7]">.</span>
              </a>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0E1224] p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 px-6 py-12 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-[#0E1224] flex items-baseline gap-4"
                >
                  <span className="text-[#6EE7B7] text-lg font-sans">{link.num}</span>
                  {link.name}
                </a>
              ))}
              <div className="pt-8 mt-auto">
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-[#0E1224] pb-1 border-b-2 border-[#6EE7B7]"
                >
                  Let’s Talk →
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
