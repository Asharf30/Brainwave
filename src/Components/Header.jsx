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

  const [activeHash, setActiveHash] = useState(location.hash);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const sections = document.querySelectorAll("div[id], section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      if (current) {
        setActiveHash(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    if (!e.currentTarget.hash) return;
    setOpenNav(false);
    setActiveHash(e.currentTarget.hash);
  };

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!openNav) {
        gsap.set(navRef.current, {
          yPercent: -100,
          opacity: 0,
          display: "none",
        });
        gsap.set(linksRef.current, { y: -30, opacity: 0 });
        return;
      }
    }

    if (openNav) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.6 } });
      tl.set(navRef.current, { display: "flex" })
        .fromTo(navRef.current, { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo(linksRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 }, "-=0.35");
    } else {
      document.body.style.overflow = "";
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 0.5 } });
      tl.to(linksRef.current, { y: -30, opacity: 0, stagger: 0.04, duration: 0.25 })
        .to(navRef.current, { yPercent: -100, opacity: 0 }, "-=0.15")
        .set(navRef.current, { display: "none" });
    }
    return () => { document.body.style.overflow = ""; };
  }, [openNav]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      document.body.style.overflow = "";
      gsap.killTweensOf([navRef.current, ...linksRef.current]);
      gsap.set(navRef.current, { clearProps: "all" });
      gsap.set(linksRef.current, { clearProps: "all" });
    });
    return () => { mm.revert(); };
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <>
      {/* Header bar */}
      <div
        className={`fixed top-0  left-0 w-full z-50 overflow-x-hidden bg-n-8/90 backdrop-blur-sm border-b border-n-6 ${
          openNav ? "!bg-n-8" : ""
        }`}
      >
        <div className="flex items-center min-w-0 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a href="#hero" className="block shrink-0 w-[12rem] xl:mr-8">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>

          {/* Desktop nav — inline, visible only on lg+ */}
          <nav className="hidden lg:flex lg:mx-auto">
            <div className="flex items-center">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={clsx(
                    "block font-code text-xs font-semibold uppercase leading-5 transition-colors duration-300 hover:text-color-1 xl:px-12 px-6",
                    item.onlyMobile && "hidden",
                    item.url === activeHash
                      ? "text-n-1 drop-shadow-md"
                      : "text-n-1/50"
                  )}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <a
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block shrink-0"
          >
            New Account
          </a>
          <Button className="hidden lg:flex shrink-0" href="#login">
            Sign In
          </Button>
          <Button className="ml-auto lg:hidden shrink-0" px="px-3" onClick={toggleNav}>
            <MenuSvg openNavigation={openNav} />
          </Button>
        </div>
      </div>

      {/* Mobile nav overlay — OUTSIDE the header div, renders above everything */}
      <nav
        ref={navRef}
        className="fixed top-[5rem] left-0 right-0 bottom-0 z-[9999] bg-n-8 overflow-y-auto overflow-x-hidden hidden lg:hidden flex-col"
      >
        <div className="relative flex flex-col items-center justify-center m-auto h-full w-full">
          {navigation.map((item) => (
            <a
              ref={addToRefs}
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={clsx(
                "relative block font-code text-2xl uppercase transition-colors duration-300 ease-in-out",
                "hover:text-color-1 px-6 py-6 md:py-8",
                item.url === activeHash
                  ? "text-color-1 drop-shadow-md"
                  : "text-n-4"
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
        <HamburgerMenu />
      </nav>
    </>
  );
};

export default Header;
