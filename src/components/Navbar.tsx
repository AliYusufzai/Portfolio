"use client";

import { useState } from "react";
import {
  FaHome,
  FaFolder,
  FaBriefcase,
  FaWrench,
  FaEdit,
} from "react-icons/fa";

const navItems = [
  { icon: FaHome, label: "Home", href: "#home" },
  { icon: FaFolder, label: "Projects", href: "#projects" },
  { icon: FaBriefcase, label: "Experience", href: "#experience" },
  { icon: FaWrench, label: "Skills", href: "#skills" },
  { icon: FaEdit, label: "Contact", href: "#contact" },
];

const NAVBAR_OFFSET = 50;

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });

    // keep the URL hash in sync without triggering a jump
    window.history.pushState(null, "", href);
  };

  return (
    <nav className="flex justify-center pt-6 bg-[#151312]">
      <div className="flex items-center gap-2 bg-[#1C1A19] backdrop-blur-md rounded-2xl px-4 py-1 shadow-lg">
        {navItems.map(({ icon: Icon, label, href }) => (
          <div key={label} className="relative">
            <a
              href={href}
              aria-label={label}
              onClick={(e) => handleClick(e, href)}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#c0b7b7] hover:text-white hover:bg-[#2a2828] transition-colors"
            >
              <Icon size={18} />
            </a>

            {/* Tooltip */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-md bg-[#2a2828] px-2 py-1 text-xs text-white shadow-md transition-all duration-150 ${
                hovered === label
                  ? "opacity-100 translate-y-0 pointer-events-none"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
