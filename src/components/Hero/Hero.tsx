import { motion } from 'framer-motion';
import heroImg from '../../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6EE7B7]/10 to-[#A78BFA]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#6EE7B7]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Content Column */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start mt-8 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#0E1224]"></span>
            <span className="text-[#0E1224] text-xs font-semibold tracking-widest uppercase">Front-End Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-5xl lg:text-8xl font-serif text-[#0E1224] leading-[1.1] mb-6"
          >
            Hi, I’m <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Yousra</span>
              <span className="absolute bottom-2 left-0 w-full h-[30%] bg-[#6EE7B7]/40 -z-10 -rotate-1"></span>
            </span> <br/>
            Mohammed
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7280] text-lg md:text-xl max-w-lg mb-8 lg:mb-10 leading-relaxed"
          >
            I’m a Software Engineering student focused on Front-End Web Development, passionate about creating clean, user-friendly digital experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="px-6 lg:px-8 py-4 bg-[#0E1224] text-white text-sm lg:text-base font-medium hover:bg-[#18203A] transition-colors rounded-full flex items-center justify-center gap-2 group"
            >
              VIEW MY WORK 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="/CV.pdf" 
              download="Yousra_Mohammed_CV.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 lg:px-8 py-4 border border-[#0E1224] text-[#0E1224] text-sm lg:text-base font-medium hover:bg-[#0E1224]/5 transition-colors rounded-full flex items-center justify-center gap-2 group"
            >
              DOWNLOAD CV 
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </motion.div>
        </div>
        
        {/* Visual Column */}
        <div className="md:col-span-6 lg:col-span-5 relative mt-8 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[24px] bg-white border border-[#D9DCE3] shadow-[0_20px_40px_rgba(14,18,36,0.04)] overflow-hidden flex flex-col"
          >
            <img src={heroImg} alt="Hero illustration" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
