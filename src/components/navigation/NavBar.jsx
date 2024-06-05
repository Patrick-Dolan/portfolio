import { useState } from "react";
import CloseIcon from "../../assets/Icons/CloseIcon";
import HamburgerIcon from "../../assets/Icons/HamburgerIcon";

function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(true);

  const NavBarSpacer = () => {
    return <div className="min-h-20 mb-4"></div>
  }

  return (
    <>
      <nav id="nav" className="bg-primary min-h-20 flex items-center fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center flex-grow px-6 text-white">
          <a href="#header">
            <h1 className="text-lg font-bold">Patrick Dolan</h1>
          </a>
          <button onClick={() => setMobileNavOpen(true)}>
            <HamburgerIcon />
          </button>
        </div>
        {mobileNavOpen &&
          <div>
            <div className="fixed top-0 right-0 bottom-0 left-1/3 z-10 bg-white">
              <div className="flex flex-col">
                <div className="flex justify-end items-center min-h-20 mx-6">
                  <button onClick={() => setMobileNavOpen(false)}>
                    <CloseIcon fill="bg-black" />
                  </button>
                </div>
                <ul className="ml-8 space-y-4">
                  <li><a className="uppercase text-lg font-medium" href="#about">About</a></li>
                  <li><a className="uppercase text-lg font-medium" href="#projects">Projects</a></li>
                  <li><a className="uppercase text-lg font-medium" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-0" onClick={() => setMobileNavOpen(false)}></div>
          </div>
        }
      </nav>
      <NavBarSpacer />
    </>
  )
}

export default NavBar;