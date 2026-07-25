import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <div id="projects" className="flex flex-col gap-6">
      <h2 className="text-[50px] lg:text-[64px] font-bold text-white leading-none text-center lg:text-left">
        RECENT
        <span className=" block text-[50px] lg:text-[64px] font-bold text-[#353334] leading-none text-center lg:text-left">
          PROJECTS
        </span>
      </h2>

      <div className="flex flex-col gap-4 lg:gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 border-b border-[#2a2828] pb-8 last:border-none"
          >
            <div
              className={`w-20 lg:w-28 h-20 lg:h-28 shrink-0 rounded-2xl overflow-hidden border-2 ${project.accent}`}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white text-lg lg:text-2xl font-bold">
                {project.name}
              </h3>
              <p className="text-[#837A7A] text-sm lg:text-base">
                {project.tagline}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
