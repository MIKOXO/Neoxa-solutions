import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white dark:bg-DarkBg transition-colors duration-300 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-DarkBgSecondary">
      <div className="mx-auto container px-5 lg:px-10 py-5 flex flex-row items-center justify-between text-LightText dark:text-DarkText">
        {/* Logo */}
        <div>
          <h1 className="text-[28px] lg:text-[38px] font-bold ">Neoxa</h1>
        </div>

        {/* Links */}
        <nav className="flex flex-row items-center justify-center gap-10">
          <ul className="hidden lg:flex flex-row gap-7">
            <li className="inline-block mx-4">
              <a href="#" className="link">
                Home
              </a>
            </li>
            <li className="inline-block mx-4">
              <a href="#" className="link">
                About
              </a>
            </li>
            <li className="inline-block mx-4">
              <a href="#" className="link">
                Services
              </a>
            </li>
            <li className="inline-block mx-4">
              <a href="#" className="link">
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle */}
          <div className="ml-5">
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative right-0 w-8 h-[21px] flex flex-col justify-between items-center group"
            >
              <div
                className={clsx(
                  "w-8 h-[2px] bg-LightText dark:bg-DarkText transform transition duration-300 ease-in-out overflow-y-auto",
                  isOpen ? "rotate-45 translate-y-[10px]" : ""
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-LightText dark:bg-DarkText transition duration-300 ease-in-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-LightText dark:bg-DarkText transform transition duration-300 ease-in-out",
                  isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                )}
              />
            </button>
            <div
              className={clsx(
                "bg-white dark:bg-DarkBgSecondary shadow-xl rounded-xl w-full absolute px-6 py-4 top-28 right-0 items-center justify-center z-10 overflow-hidden",
                isOpen ? "flex" : "hidden"
              )}
            >
              <ul className="flex flex-col gap-7 items-center justify-center">
                <li className="inline-block mx-4">
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li className="inline-block mx-4">
                  <a href="#" className="">
                    About
                  </a>
                </li>
                <li className="inline-block mx-4">
                  <a href="#" className="">
                    Services
                  </a>
                </li>
                <li className="inline-block mx-4">
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
