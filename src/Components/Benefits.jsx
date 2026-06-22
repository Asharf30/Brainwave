import Section from "./Section";
import { benefits } from "../constants.jsx";
import { GradientLight } from "./design/Benefits";
import Arrow from "../assets/svg/Arrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  useGSAP(() => {
    // Heading entrance
    gsap.fromTo(
      ".benefit-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#features", start: "top 85%" },
      }
    );

    // Staggered card entrance
    gsap.fromTo(
      ".benefit-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "#features", start: "top 75%" },
      }
    );
  });

  return (
    <Section id="features">
      <div className="container relative z-2">
        <h2 className="h2 mb-10 md:mb-16 text-center benefit-heading">
          Chat Smarter, Not Harder with Brainwave
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center mb-10">
          {benefits.map((item) => (
            <div
              className="benefit-card block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full max-w-[24rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-color-1/15 cursor-pointer"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Benefits;
