import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
