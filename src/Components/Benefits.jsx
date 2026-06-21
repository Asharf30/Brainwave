import Section from "./Section";
import { benefits } from "../constants.jsx";
import { GradientLight } from "./design/Benefits";
import Arrow from "../assets/svg/Arrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Benefits = () => {
  useGSAP(() => {
    gsap.fromTo(".benefit-anim", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: "#features", start: "top 80%" }});
  });

  return (
    <Section id="features">
      <div className="container relative z-2">
        <h2 className="h2 mb-10 md:mb-20 text-center benefit-anim">Chat Smarter, Not Harder with Brainwave</h2>
        <div className="flex flex-wrap gap-10 mb-10 benefit-anim">
          {benefits.map((item) => (
            <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" style={{ backgroundImage: `url(${item.backgroundUrl})` }} key={item.id}>
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore more</p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />
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
