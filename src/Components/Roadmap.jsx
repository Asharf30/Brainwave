import Section from "./Section";
import { roadmap } from "../constants.jsx";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Roadmap = () => {
  const [selected, setSelected] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".roadmap-anim", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: "#roadmap", start: "top 80%" }});
  });

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <div className="text-center mb-10 roadmap-anim">
          <h2 className="h2">What we're working on</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] roadmap-anim">
          {roadmap.map((item, index) => {
            const status = item.status === "done" ? "Done" : "In progress";
            const isSelected = index === selected;
            return (
              <div 
                key={item.id} 
                onClick={() => setSelected(index)}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] cursor-pointer transition-all duration-500 ${isSelected ? "bg-conic-gradient scale-[1.02] shadow-2xl shadow-color-1/30 z-10" : "bg-n-6 scale-100 opacity-80 hover:opacity-100 hover:scale-[1.01]"}`}>
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img src={grid} className="w-full" width={550} height={550} alt="Grid" />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <div className="font-code text-xs font-bold uppercase tracking-wider text-n-4">{item.date}</div>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img src={item.status === "done" ? check2 : loading1} className="mr-2.5" width={16} height={16} alt={status} />
                        <div className="font-code text-xs font-bold uppercase tracking-wider">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img src={item.imageUrl} className="w-full" width={628} height={426} alt={item.title} />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Gradient />
      </div>
    </Section>
  );
};
export default Roadmap;
