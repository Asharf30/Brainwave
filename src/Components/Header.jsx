import { brainwave } from "../assets";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { navigation } from "../constants.jsx";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header.jsx";
import gsap from "gsap";

const Header = () => {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const isFirstRender = useRef(true);

  // Clear array on each render so we don't accumulate duplicates
  // linksRef.current = [];

  const handleClick = () => {
    setOpenNav(false);
  };

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  // 1. Handle animations on openNav change (mobile only)
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!openNav) {
        // Set initial closed state without animation on first load
        gsap.set(navRef.current, {
          yPercent: -100,
          opacity: 0,
          display: "none",
        });
        gsap.set(linksRef.current, {
          y: -30,
          opacity: 0,
        });
        return;
      }
    }

    if (openNav) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 0.6 },
      });

      tl.set(navRef.current, { display: "flex" })
        .fromTo(
          navRef.current,
          { yPercent: -100, opacity: 0 },
          { yPercent: 0, opacity: 1 },
        )
        .fromTo(
          linksRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 },
          "-=0.35",
        );
    } else {
      // Allow body scroll when menu is closed
      document.body.style.overflow = "";

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 0.5 },
      });

      tl.to(linksRef.current, {
        y: -30,
        opacity: 0,
        stagger: 0.04,
        duration: 0.25,
      })
        .to(
          navRef.current,
          {
            yPercent: -100,
            opacity: 0,
          },
          "-=0.15",
        )
        .set(navRef.current, { display: "none" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  // 2. Handle desktop resize resets (runs once on mount)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      document.body.style.overflow = "";
      gsap.killTweensOf([navRef.current, ...linksRef.current]);
      gsap.set(navRef.current, { clearProps: "all" });
      gsap.set(linksRef.current, { clearProps: "all" });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };
  return (
    <div
      className={`fixed top-0 z-50 w-full left-0 bg-n-8/90 backdrop-blur-sm border-b
    border-n-6 lg:bg-n-8/90 lg:backdrop:blur-sm
     ${openNav ? "bg-n-8" : ""}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        {" "}
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          ref={navRef}
          className="fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 hidden lg:static lg:flex flex-col lg:mx-auto lg:bg-transparent"
        >
          <div
            className={clsx(
              "relative z-2 flex flex-col  items-center justify-center m-auto lg:flex-row",
            )}
          >
            {navigation.map((item) => (
              <a
                ref={addToRefs}
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={clsx(
                  "relative block  font-code text-2xl uppercase text-n-4 transition-colors duration-300 ease-in-out hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12",
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
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account{" "}
        </a>
        <Button className="hidden lg:flex " href="#login">
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
