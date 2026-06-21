import Section from "./Section";
import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import { pricing } from "../constants.jsx";
import Button from "./Button";
import { check } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Pricing = () => {
  useGSAP(() => {
    gsap.fromTo(".pricing-anim", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: "#pricing", start: "top 80%" }});
  });

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex pricing-anim">
          <img src={smallSphere} className="relative z-1" width={255} height={255} alt="Sphere" />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} className="w-full" width={950} height={400} alt="Stars" />
          </div>
        </div>
        <div className="mb-10 text-center pricing-anim">
          <h2 className="h2">Pay once, use forever</h2>
        </div>
        <div className="flex gap-[1rem] max-lg:flex-wrap pricing-anim">
          {pricing.map((item) => (
            <div key={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4">
              <h4 className="h4 mb-4">{item.title}</h4>
              <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
              <div className="flex items-center h-[5.5rem] mb-6">
                {item.price && (
                  <>
                    <div className="h3">$</div>
                    <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                  </>
                )}
              </div>
              <Button className="w-full mb-6" href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"} white={!!item.price}>
                {item.price ? "Get started" : "Contact us"}
              </Button>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start py-5 border-t border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 pricing-anim">
          <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="/pricing">See the full details</a>
        </div>
      </div>
      <LeftLine />
      <RightLine />
    </Section>
  );
};
export default Pricing;
