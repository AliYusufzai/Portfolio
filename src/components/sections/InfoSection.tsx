import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function InfoSection() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <div className="">
        <h1 className="text-[50px] lg:text-[90px] font-bold text-white leading-none text-center lg:text-left">
          SOFTWARE
          <span className="block text-[50px] lg:text-[90px] font-bold text-[#353334] leading-none text-center lg:text-left">
            ENGINEER
          </span>
        </h1>
      </div>
      <p className="text-[#837A7A] text-lg lg:text-lg text-center lg:text-left ">
        I build scalable backend systems with Node.js, NestJS, and AWS — and I'm
        expanding across the stack with React and Next.js. Focused on clean
        architecture, real-world performance, and shipping things that actually
        work in production.
      </p>
      <div className="flex gap-4">
        <a
          href="https://linkedin.com/in/aleeraza03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-13 h-13 flex items-center justify-center rounded-full bg-[#1c1a1a] border border-[#2a2828] text-[#c0b7b7] hover:text-white hover:border-[#3a3838] transition-colors"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/AliYusufzai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-13 h-13 flex items-center justify-center rounded-full bg-[#1c1a1a] border border-[#2a2828] text-[#c0b7b7] hover:text-white hover:border-[#3a3838] transition-colors"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}
