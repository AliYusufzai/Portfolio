import ContentSection from "@/components/ContentSection";
import PhotoCard from "@/components/PhotoCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center py-10 lg:py-20 gap-6 lg:gap-2 bg-[#151312] font-sans">
      <div className="w-full max-w-7xl lg:max-w-10/12 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-2 px-4 lg:px-8">
        <div className="w-full lg:sticky lg:top-10 lg:self-start">
          <PhotoCard />
        </div>
        <ContentSection />
      </div>
    </div>
  );
}
