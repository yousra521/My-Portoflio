import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Custom cursor logic for desktop
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);

      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
          cursor.classList.add('hovering');
        } else {
          cursor.classList.remove('hovering');
        }
      };

      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseover', handleMouseOver);
        if (document.body.contains(cursor)) {
          document.body.removeChild(cursor);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0E1224] selection:bg-[#6EE7B7]/30 overflow-x-hidden w-full relative">
      <Navbar />
      <main className="overflow-x-hidden w-full relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
