import React from "react";
import { MdCode, MdPalette, MdSmartphone } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <MdCode size={60} />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies like React, tailored to your specific needs and optimized for performance.",
  },
  {
    id: 2,
    icon: <MdPalette size={60} />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that enhance user experience and keep visitors engaged with your brand.",
  },
  {
    id: 3,
    icon: <MdSmartphone size={60} />,
    title: "Mobile App Development",
    description:
      "Mobile-first approach ensuring your website looks perfect and functions flawlessly on all devices.",
  },
];

const Services = () => {
  return (
    <section className="pt-10 lg:pt-20 bg-LightBg dark:bg-DarkBg transition-colors duration-300">
      <div className="mx-auto container pt-7 lg:pt-20 px-5 lg:px-10 flex flex-col items-center justify-center text-LightText dark:text-DarkText">
        <div className="text-center">
          <h1 className="text-[38px] lg:text-[50px] font-bold">Our Services</h1>
          <div className="h-1 w-24 bg-LightText dark:bg-DarkText mx-auto mb-8 rounded-full" />
          <p className="lg:text-[18px] max-w-4xl text-center">
            We offer comprehensive web solutions to help your business thrive in
            the digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white dark:bg-DarkBgSecondary rounded-xl shadow-lg lg:w-[350px] px-8 py-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                index == 1
                  ? "lg:translate-y-[40px]"
                  : index == 2
                  ? "lg:translate-y-[80px]"
                  : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="">{service.icon}</div>
                <h2 className="text-[24px] font-bold">{service.title}</h2>
                <p className="">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
