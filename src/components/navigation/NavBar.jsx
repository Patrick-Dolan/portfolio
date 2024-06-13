import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import CloseIcon from "../../assets/Icons/CloseIcon";
import HamburgerIcon from "../../assets/Icons/HamburgerIcon";

function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);
  const windowWidth = useWindowWidth();

  const tabletBreakpoint = 768;

  const NavBarSpacer = () => {
    return <div className="min-h-20 bg-primary"></div>
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollTop(scrollTop);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNavOpen]);

  useEffect(() => {
    if (windowWidth > tabletBreakpoint) {
      setMobileNavOpen(false);
    }
  }, [windowWidth]);

  const showSmallNav = windowWidth < tabletBreakpoint;

  return (
    <>
      <nav id="nav" className={`bg-primary min-h-20 flex items-center fixed top-0 left-0 right-0 transition-transform duration-100 ${hidden && "-translate-y-full"} shadow-md`}>
        <div className="flex justify-between items-center flex-grow px-6 text-white md:px-0 md:max-w-172 md:mx-auto lg:max-w-277">
          <a href="#header">
            <h1 className="text-lg font-bold md:text-xl lg:text-2xl"><span className="text-secondary">&lt;</span>Patrick Dolan <span className="text-secondary">/&gt;</span></h1>
          </a>
          {showSmallNav 
            ? (
              <button onClick={() => setMobileNavOpen(true)}>
                <HamburgerIcon />
              </button>
            )
            :(
              <ul className="text-white flex gap-10">
                <li><a className="uppercase tracking-widest hover:text-secondary-light hover:underline" href="#projects">Projects</a></li>
                <li><a className="uppercase tracking-widest hover:text-secondary-light hover:underline" href="#about">About</a></li>
                <li><a className="uppercase tracking-widest hover:text-secondary-light hover:underline" href="#contact">Contact</a></li>
              </ul>
            )
          }
        </div>
        {/* Mobile nav drawer */}
        {showSmallNav && 
          <div className={`transition-opacity duration-200 ease-in-out ${mobileNavOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`fixed top-0 left-1/3 right-0 bottom-0 z-20 bg-white transform transition-transform duration-200 ease-in-out ${mobileNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col">
                <div className="flex justify-end items-center min-h-20 mx-6">
                  <button onClick={() => setMobileNavOpen(false)}>
                    <CloseIcon fill="bg-black" />
                  </button>
                </div>
                <ul className="ml-8 space-y-4">
                  <li><a className="uppercase text-lg font-medium" onClick={() => setMobileNavOpen(false)} href="#projects">Projects</a></li>
                  <li><a className="uppercase text-lg font-medium" onClick={() => setMobileNavOpen(false)} href="#about">About</a></li>
                  <li><a className="uppercase text-lg font-medium" onClick={() => setMobileNavOpen(false)} href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className={`fixed top-0 right-0 bottom-0 left-0 bg-black opacity-60 z-10 ${!mobileNavOpen && "hidden"}`} onClick={() => setMobileNavOpen(false)}></div>
          </div>
        }
      </nav>
      <NavBarSpacer />
    </>
  )
}

export default NavBar;