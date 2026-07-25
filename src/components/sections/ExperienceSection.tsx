import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <div id="experience" className="flex flex-col gap-4 lg:gap-6">
      <h2 className="text-[50px] lg:text-[64px] font-bold text-white leading-none text-center lg:text-left">
        04 YEARS OF
        <span className="block text-[50px] lg:text-[64px] font-bold text-[#353334] leading-none text-center lg:text-left">
          EXPERIENCE
        </span>
      </h2>
      <div className="flex flex-col gap-8">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="flex items-center border-b border-[#2a2828] pb-8 last:border-none"
          >
            <div className="flex flex-col gap-2 lg:gap-4">
              <h3 className="text-white text-xl lg:text-2xl font-bold">
                {exp.company}
              </h3>
              <p className="text-[#837A7A] text-sm lg:text-base">
                {exp.description}
              </p>
              <p className="text-[#c0b7b7] text-sm lg:text-base">
                {exp.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
