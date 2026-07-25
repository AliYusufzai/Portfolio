import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <div id="skills" className="flex flex-col gap-8">
      <h2 className="text-[50px] lg:text-[64px] font-bold text-white leading-none text-center lg:text-left">
        CORE
        <span className="block text-[50px] lg:text-[64px] font-bold text-[#353334] leading-none text-center lg:text-left ">
          STACK
        </span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {skills.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 bg-[#1c1a1a] rounded-2xl py-6 px-4 border border-[#2a2828] hover:border-[#3a3838] transition-colors"
          >
            <Icon size={36} color={color} />
            <span className="text-[#c0b7b7] text-sm font-medium text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
