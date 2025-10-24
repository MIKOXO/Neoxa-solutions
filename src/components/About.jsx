import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 lg:pt-20 bg-LightBg dark:bg-DarkBg transition-colors duration-300"
    >
      <div className="mx-auto container pt-7 lg:pt-20 px-5 lg:px-10 flex flex-col items-center justify-center text-LightText dark:text-DarkText">
        <h1 className="text-[38px] lg:text-[50px] font-bold">About Us</h1>
        <div className="h-1 w-24 bg-LightText dark:bg-DarkText mx-auto mb-8 rounded-full" />
        <p className="lg:text-[18px] max-w-4xl text-center">
          We are a team of passionate developers and designers dedicated to
          creating exceptional digital experiences. With years of experience in
          web development, we bring your vision to life with modern technologies
          and best practices.
        </p>
        <p className="lg:text-[18px] max-w-4xl text-center mt-6">
          Our mission is to help businesses and individuals establish a strong
          online presence through innovative, user-friendly websites that not
          only look great but also deliver measurable results.
        </p>
      </div>
    </section>
  );
};

export default About;
