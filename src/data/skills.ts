import { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiRedis,
  SiSocketdotio,
  SiDocker,
  SiGit,
  SiMysql,
  SiCloudflare,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];
