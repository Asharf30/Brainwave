import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
