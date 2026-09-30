import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Code2, Database, Layout, PenTool, Cpu, Layers } from 'lucide-react';

const iconMap = {
  frontend: <Layout size={24} className="text-[#6EE7B7]" />,
  programming: <Code2 size={24} className="text-[#A78BFA]" />,
  softwareEngineering: <Layers size={24} className="text-[#6EE7B7]" />,
  database: <Database size={24} className="text-[#A78BFA]" />,
  tools: <PenTool size={24} className="text-[#6EE7B7]" />,
  core: <Cpu size={24} className="text-[#A78BFA]" />,
};

const categoryTitles = {
  frontend: "Front-End",
  programming: "Programming",
  softwareEngineering: "Software Eng.",
  database: "Database",
  tools: "Tools",
  core: "Core Skills"
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading num="03" label="Skills" title="Skills & Tools" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>).map((category) => (
            <div 
              key={category}
              className="bg-[#FAF9F6] border border-[#D9DCE3] rounded-[24px] p-8 hover:border-[#6EE7B7]/50 hover:shadow-[0_10px_30px_rgba(14,18,36,0.03)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-[#D9DCE3] shadow-sm mb-6">
                {iconMap[category]}
              </div>
              <h3 className="text-xl font-serif text-[#0E1224] mb-6">{categoryTitles[category]}</h3>
              
              <ul className="space-y-3">
                {portfolioData.skills[category].map((skill, i) => (
                  <li key={i} className="text-[#6B7280] text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9DCE3]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
