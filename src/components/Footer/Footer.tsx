import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0E1224] text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="inline-block text-white font-serif font-bold text-3xl tracking-tighter mb-6">
              YM<span className="text-[#6EE7B7]">.</span>
            </a>
            <h4 className="text-xl font-serif mb-2">{portfolioData.personalInfo.name}</h4>
            <p className="text-[#9CA3AF] text-sm max-w-sm mb-6">
              Front-End Developer <br />
              Software Engineering Student
            </p>
          </div>
          
          <div>
            <h5 className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-6">Navigation</h5>
            <ul className="space-y-4">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/80 hover:text-[#6EE7B7] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-6">Social</h5>
            <ul className="space-y-4">
              <li>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-[#A78BFA] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-[#A78BFA] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-sm text-white/80 hover:text-[#A78BFA] transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">
            &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
          <div className="text-xs text-[#9CA3AF] flex items-center gap-2">
            <span>Designed & Engineered with</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
