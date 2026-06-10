import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Copmonents/Button";
function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello Tailwind v4</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10 " href="#login">
          Click mesadsadasdasd
        </Button>
      </div>
      <ButtonGradient />
    </div>
  );
}

export default App;
