import { brainwave } from "../assets";
import clsx from "clsx";
import { navigation } from "../constants.jsx";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <div
      className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
    border-n-6 lg:bg-n-8/90 lg:backdrop:blur-sm
    "
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        {" "}
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={clsx(
            " hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static",
            "lg:flex flex-col lg:mx-auto lg:bg-transparent",
          )}
        >
          <div
            className={clsx(
              "relative z-2 flex flex-col  items-center justify-center m-auto lg:flex-row",
            )}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={clsx(
                  "relative block font-code text-2xl uppercase text-n-4 transition-colors duration-300 ease-in-out hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12",
                  item.onlyMobile && "lg:hidden",
                  item.url === location.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50",
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
