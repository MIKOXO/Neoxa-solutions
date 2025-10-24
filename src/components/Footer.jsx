import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="pt-10 lg:pt-20 bg-LightBg dark:bg-DarkBg text-LightText dark:text-DarkText transition-colors duration-300 "
    >
      {/* Horizontal Line */}
      <div className="h-[0.1px] w-full bg-gray-200 dark:bg-DarkBgSecondary mb-3 rounded-full" />
      <div className="mx-auto container pt-7 lg:py-10 px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
        <div className="max-lg:text-center">
          <h1 className="text-[28px] lg:text-[38px] font-bold ">Neoxa</h1>
          <span>
            Building exceptional digital experiences for businesses worldwide.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center max-lg:justify-center">
          <ul className="flex flex-col lg:flex-row gap-7 max-sm:text-center">
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
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-center max-lg:text-center gap-2 pb-4">
          <p>
            <span className="font-semibold">Email: </span> Help@neoxa.com
          </p>
          <p>
            <span className="font-semibold">Location: </span>Addis Ababa,
            Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
