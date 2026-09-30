import { portfolioData } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FAF9F6] to-white rounded-full border border-[#FAF9F6] -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#6EE7B7]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-[#D9DCE3]"></span>
          <span className="text-[#0E1224] text-xs font-semibold tracking-widest uppercase">05 / Contact</span>
          <span className="w-8 h-[1px] bg-[#D9DCE3]"></span>
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0E1224] leading-tight mb-8">
          Let’s Build <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-[#0E1224]">Something</span>
            <span className="absolute bottom-2 left-0 w-full h-[30%] bg-[#6EE7B7]/40 -z-10 -rotate-1"></span>
          </span> <br className="hidden md:block" />
          Meaningful.
        </h2>
        
        <p className="text-[#6B7280] text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
          I’m open to opportunities, collaborations, and conversations around software development and front-end experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href={`mailto:${portfolioData.personalInfo.email}`} 
            className="px-10 py-5 bg-[#0E1224] text-white font-medium hover:bg-[#18203A] transition-colors rounded-full flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            GET IN TOUCH 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="px-10 py-5 border border-[#0E1224] text-[#0E1224] font-medium hover:bg-[#0E1224]/5 transition-colors rounded-full flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            SEND EMAIL 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Contact Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 max-w-3xl mx-auto pt-12 border-t border-[#D9DCE3]/50">
          <div className="flex flex-col gap-2">
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest">Email</span>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-[#0E1224] text-sm md:text-base hover:text-[#6EE7B7] transition-colors truncate">
              {portfolioData.personalInfo.email}
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest">Phone</span>
            <a href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`} className="text-[#0E1224] text-sm md:text-base hover:text-[#6EE7B7] transition-colors">
              {portfolioData.personalInfo.phone}
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest">LinkedIn</span>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0E1224] text-sm md:text-base hover:text-[#6EE7B7] transition-colors">
              Yousra Mohammed
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest">GitHub</span>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#0E1224] text-sm md:text-base hover:text-[#6EE7B7] transition-colors">
              @yousra521
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
