import Section from "./Section";
import { testimonials } from "../constants.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Testimonials = () => {
  useGSAP(() => {
    gsap.fromTo(".testim-anim", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: "#testimonials", start: "top 80%" }});
  });

  return (
    <Section id="testimonials">
      <div className="container">
        <div className="text-center mb-10 testim-anim">
          <h2 className="h2">What our users say</h2>
          <p className="body-2 mt-4 text-n-4">Join thousands of satisfied professionals using Brainwave.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 testim-anim">
          {testimonials.map((item) => (
            <div key={item.id} className="relative p-8 bg-n-8 rounded-[2rem] border border-n-6 transition-all duration-300 hover:border-n-4 hover:shadow-xl hover:shadow-color-1/10 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-n-6 rounded-full flex items-center justify-center font-code font-bold text-n-1 text-xl mr-4 uppercase">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h6 className="h6 text-n-1">{item.name}</h6>
                  <p className="body-2 text-n-4 text-sm">{item.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < item.rating ? "text-color-1" : "text-n-6"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="body-2 text-n-3 italic">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Testimonials;
