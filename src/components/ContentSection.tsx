import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";
import InfoSection from "./sections/InfoSection";
import FadeInSection from "./FadeInSection";
import ContactSection from "./sections/ContactSection";

export default function ContentSection() {
  return (
    <div className="px-6 min-h-fit flex flex-col gap-8 lg:gap-10 ">
      <FadeInSection>
        <InfoSection />
      </FadeInSection>
      <FadeInSection>
        <ProjectSection />
      </FadeInSection>
      <FadeInSection>
        <ExperienceSection />
      </FadeInSection>
      <FadeInSection>
        <SkillsSection />
      </FadeInSection>
      <FadeInSection>
        <ContactSection />
      </FadeInSection>
    </div>
  );
}
