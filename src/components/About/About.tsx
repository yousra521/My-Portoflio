import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import myPictureImg from '../../assets/my_picture.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading num="01" label="About Me" title="More About Me" />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="relative aspect-square bg-[#FAF9F6] rounded-[24px] border border-[#D9DCE3] overflow-hidden flex items-center justify-center w-full max-w-md mx-auto md:max-w-none">
            <img src={myPictureImg} alt="Yousra Mohammed" className="w-full h-full object-cover" />
          </div>
          
          {/* Content Side */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-xl md:text-2xl font-serif text-[#0E1224] mb-4 md:mb-6 leading-relaxed">
              I design interfaces that feel simple, intentional, and engineered.
            </h3>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-10 md:mb-12">
              {portfolioData.personalInfo.shortBio}
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {portfolioData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-3xl font-serif text-[#0E1224]">{stat.value}</div>
                  <div className="text-sm font-semibold text-[#0E1224]">{stat.label}</div>
                  <div className="text-xs text-[#6B7280]">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
