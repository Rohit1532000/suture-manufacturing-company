import banner1 from "@/assets/herobanner1.jpeg";
import banner2 from "@/assets/herobanner.jpeg";
import banner3 from "@/assets/herobanner2.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { img: banner1, title: "Precision in Every Stitch", subtitle: "Excellence in Every Patient Outcome" },
  { img: banner2, title: "Crafted for Absolute Precision", subtitle: "Trusted by Surgeons Worldwide" },
  { img: banner3, title: "Innovative Solutions for Modern Surgery", subtitle: "Leading the Way in Surgical Excellence" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const next = () => setI(v => (v + 1) % slides.length);
  const prev = () => setI(v => (v - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-white">
      <div className="relative aspect-[1700/580] w-full">
        <img
          src={slides[i].img}
          alt={slides[i].title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/70 backdrop-blur hover:bg-white text-medical-dark flex items-center justify-center shadow-premium transition-all hover:scale-110">
          <ChevronLeft />
        </button>
        <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/70 backdrop-blur hover:bg-white text-medical-dark flex items-center justify-center shadow-premium transition-all hover:scale-110">
          <ChevronRight />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-10 bg-medical" : "w-2 bg-medical/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
