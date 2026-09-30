interface SectionHeadingProps {
  num: string;
  label: string;
  title: string;
}

export function SectionHeading({ num, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#9CA3AF] font-serif text-sm">{num}</span>
        <span className="w-8 h-[1px] bg-[#D9DCE3]"></span>
        <span className="text-[#0E1224] text-xs font-semibold tracking-widest uppercase">{label}</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0E1224] leading-tight max-w-2xl text-balance">
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h2>
    </div>
  );
}
