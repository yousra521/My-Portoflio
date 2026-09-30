import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import smartHomeImg from '../../assets/smart_home.png';
import bankImg from '../../assets/bank.png';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading num="02" label="Featured Projects" title="Selected Work" />
        
        <div className="space-y-32">
          {/* Project 1 */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1">
              <div className="aspect-[4/3] rounded-[24px] bg-white border border-[#D9DCE3] shadow-sm group hover:-translate-y-1 transition-transform duration-500 overflow-hidden relative flex items-center justify-center">
                <img src={smartHomeImg} alt={portfolioData.projects[0].title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2 flex flex-col items-start">
              <div className="text-[#9CA3AF] font-serif text-5xl mb-6 opacity-30">01</div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0E1224] mb-4">{portfolioData.projects[0].title}</h3>
              <div className="text-[#6EE7B7] text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-3">
                {portfolioData.projects[0].role} <span className="w-1 h-1 rounded-full bg-[#D9DCE3]"></span> {portfolioData.projects[0].category}
              </div>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                {portfolioData.projects[0].description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {portfolioData.projects[0].highlights.slice(0,3).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6B7280] text-sm">
                    <span className="text-[#0E1224] mt-1 text-xs">■</span> {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {portfolioData.projects[0].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#E7FAF2] text-[#16815A] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="group flex items-center gap-2 text-sm font-semibold text-[#0E1224] hover:text-[#6EE7B7] transition-colors cursor-not-allowed">
                CASE STUDY UNAVAILABLE <span className="text-[#9CA3AF]">(Confidential)</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
              <div className="text-[#9CA3AF] font-serif text-5xl mb-6 opacity-30">02</div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0E1224] mb-4">{portfolioData.projects[1].title}</h3>
              <div className="text-[#6EE7B7] text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-3">
                {portfolioData.projects[1].role} <span className="w-1 h-1 rounded-full bg-[#D9DCE3]"></span> {portfolioData.projects[1].category}
              </div>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                {portfolioData.projects[1].description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {portfolioData.projects[1].highlights.slice(0,3).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6B7280] text-sm">
                    <span className="text-[#0E1224] mt-1 text-xs">■</span> {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {portfolioData.projects[1].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#E7FAF2] text-[#16815A] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="group flex items-center gap-2 text-sm font-semibold text-[#0E1224] hover:text-[#6EE7B7] transition-colors cursor-not-allowed">
                CASE STUDY UNAVAILABLE <span className="text-[#9CA3AF]">(Academic)</span>
              </div>
            </div>
            
            <div className="md:col-span-6 lg:col-span-7">
              <div className="aspect-[4/3] rounded-[24px] bg-white border border-[#D9DCE3] shadow-sm group hover:-translate-y-1 transition-transform duration-500 overflow-hidden relative flex items-center justify-center">
                <img src={bankImg} alt={portfolioData.projects[1].title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Academic Projects Summary */}
          <div className="bg-[#0E1224] rounded-[32px] p-12 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#6EE7B7]/10 to-transparent opacity-50"></div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="text-[#6EE7B7] text-sm font-semibold tracking-widest uppercase mb-6">Academic Projects</div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Foundational engineering work focusing on system analysis, database design, and quality assurance.
              </h3>
              <p className="text-[#9CA3AF] text-lg mb-10">
                Throughout my academic journey, I have focused on translating requirements into documented architectures, employing UML/DFD methodologies, and conducting rigorous testing.
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/80 font-medium justify-center md:justify-start">
                <span>✓ Requirements Gathering</span>
                <span>✓ UML & DFD</span>
                <span>✓ Quality Assurance</span>
                <span>✓ Database Design</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}