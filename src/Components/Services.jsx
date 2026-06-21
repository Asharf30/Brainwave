import Section from "./Section";
import { brainwaveServices } from "../constants.jsx";
import { service1, check } from "../assets";
import { Gradient } from "./design/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  useGSAP(() => {
    gsap.fromTo(".service-anim", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: "#how-to-use", start: "top 80%" }});
  });

  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="mb-[3rem] md:mb-[5rem] text-center service-anim">
          <h2 className="h2">Generative AI made for creators.</h2>
          <p className="body-1 max-w-3xl mx-auto mt-4 text-n-2">Brainwave unlocks the potential of AI-powered applications</p>
        </div>
        <div className="relative service-anim">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img className="w-full h-full object-cover md:object-right" width={800} alt="Smartest AI" height={730} src={service1} />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};
export default Services;
