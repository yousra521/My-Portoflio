import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Heading — full width on mobile + tablet */}
        <SectionHeading num="04" label="Experience" title="Training & Education" />

        {/* Two-column layout ONLY on lg+ */}
        <div className="flex flex-col lg:flex-row lg:gap-24">

          {/* LEFT: quote — hidden on mobile/tablet, shown on lg */}
          <div className="hidden lg:block lg:w-1/3 flex-shrink-0">
            <div className="bg-white p-8 rounded-[24px] border border-[#D9DCE3] sticky top-32">
              <p className="text-xl font-serif text-[#0E1224] italic leading-relaxed">
                "Building from software engineering fundamentals toward modern front-end development."
              </p>
            </div>
          </div>

          {/* RIGHT: Timeline — full width on mobile/tablet, 2/3 on lg */}
          <div className="w-full lg:w-2/3 relative">
            {/* Timeline vertical line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[#6EE7B7] via-[#D9DCE3] to-transparent"></div>

            <div className="space-y-12 md:space-y-16 relative">
              {portfolioData.experience.map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-16">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1.5 w-[30px] h-[30px] md:w-[46px] md:h-[46px] rounded-full bg-white border border-[#D9DCE3] flex items-center justify-center shadow-sm z-10">
                    <div className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full ${item.type === 'TRAINING' ? 'bg-[#6EE7B7]' : 'bg-[#A78BFA]'}`}></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-[#D9DCE3] rounded-[24px] p-6 md:p-8 shadow-sm hover:border-[#BFC4CF] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] rounded-full text-xs font-semibold text-[#6B7280] uppercase tracking-wider w-max">
                        {item.type}
                      </div>
                      <div className="text-sm font-medium text-[#9CA3AF]">{item.date}</div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-[#0E1224] mb-2">{item.title}</h3>
                    <div className="text-[#0E1224] font-medium mb-5 text-sm md:text-base">{item.role}</div>

                    <ul className="space-y-3">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#6B7280] text-sm md:text-base leading-relaxed">
                          {i > 0 || item.type === 'TRAINING' ? (
                            <span className="text-[#6EE7B7] mt-1 text-[10px] flex-shrink-0">■</span>
                          ) : null}
                          <span className={i === 0 && item.type === 'EDUCATION' ? "font-semibold text-[#0E1224]" : ""}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote block — shown on mobile/tablet only, below timeline */}
            <div className="mt-12 lg:hidden bg-white p-6 md:p-8 rounded-[24px] border border-[#D9DCE3]">
              <p className="text-lg md:text-xl font-serif text-[#0E1224] italic leading-relaxed text-center">
                "Building from software engineering fundamentals toward modern front-end development."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
