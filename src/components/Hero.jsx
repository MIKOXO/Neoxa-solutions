import React from "react";
import heroIllustration from "../assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pb-5 bg-LightBg dark:bg-DarkBg transition-colors duration-300">
      <div className="mx-auto container pt-7 lg:pt-20 px-5 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-LightText dark:text-DarkText animate-fade-in text-center lg:text-left">
          <h1 className="max-lg:mt-5 text-[32px] sm:text-[44px] font-bold">
            Build Your Digital Future
          </h1>
          <p className="lg:text-[18px] mt-4 mb-6 max-w-lg">
            Transform your ideas into reality with our modern web solutions. We
            create beautiful, responsive websites that drive results.
          </p>

          <div className="pt-4 pb-6">
            <a href="#" className="hero-link">
              Get Started
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="animate-fade-in">
          <img
            src={heroIllustration}
            alt="Hero Illustration"
            className="w-[600px] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
