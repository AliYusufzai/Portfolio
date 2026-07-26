// components/PhotoCard.tsx
import Image from "next/image";

export default function PhotoCard() {
  return (
    <div className="relative w-full max-w-full">
      <div className="bg-white rounded-3xl relative z-0 pt-8 lg:px-8 overflow-hidden">
        <svg
          className="absolute -top-12 -left-2 w-40 h-40 z-10"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 90 C 10 40, 80 10, 190 150"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="10 8"
            strokeLinecap="round"
            transform="scale(1, -1) translate(0, -160)"
          />
        </svg>

        <div className="w-70 h-50 lg:h-80 mx-auto relative aspect-3/4 rounded-3xl overflow-hidden ">
          <Image
            src="/placeholder-portrait.png"
            alt="Portrait"
            fill
            className=" object-cover opacity-90 rounded-3xl"
            priority
          />
        </div>
        <h2 className="text-black text-center mt-4 font-bold text-2xl md:text-3xl ">
          Ali Raza Yusufzai
        </h2>

        <p className="text-[#837A7A] text-center font-medium text-base md:text-lg leading-tight p-3">
          A Software Engineer who has developed countless innovative solutions
        </p>
      </div>
    </div>
  );
}
