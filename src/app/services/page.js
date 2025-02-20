"use client";

import { FileText, CombineIcon as Conveyor, Truck } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const logos = [
  { id: 1, src: "/images/client2.png", alt: "Abstract" },
  { id: 2, src: "/images/client2.png", alt: "YinYangPaint" },
  { id: 3, src: "/images/client2.png", alt: "TechLogo" },
  { id: 4, src: "/images/client2.png", alt: "AbstractLogo" },
  { id: 5, src: "/images/client2.png", alt: "AbstractLogo2" },
  { id: 6, src: "/images/client2.png", alt: "Abstract2" },
];

const solutions = [
  {
    number: "01",
    icon: FileText,
    title: "Air Cargo",
    description:
      "Our aim is to optimize and improve your supply chain so that we can give you the best service",
  },
  {
    number: "02",
    icon: Conveyor,
    title: "Ocean Freight",
    description:
      "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
  },
  {
    number: "03",
    icon: Truck,
    title: "Customs",
    description:
      "A tracking number for the entire process, so that you can find the exact position, this process will help you",
  },
  {
    number: "04",
    icon: FileText,
    title: "Trucking",
    description:
      "Our aim is to optimize and improve your supply chain so that we can give you the best service",
  },
  {
    number: "05",
    icon: Conveyor,
    title: "Warehousing",
    description:
      "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...",
  },
  {
    number: "06",
    icon: Truck,
    title: "Project Cargo",
    description:
      "A tracking number for the entire process, so that you can find the exact position, this process will help you",
  },
];

export default function SolutionsCards() {
  return (
    <>
      <div className="relative min-h-[400px] flex items-center justify-start">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services_banner.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className=" relative w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-8">
            Service
          </h1>
        </div>
        <nav
          className="bg-white/90 w-80 h-14 font-bold absolute left-0 bottom-0 flex justify-end items-center px-4 py-2 rounded-md text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[#0a2342] hover:text-[#228186] transition-colors"
          >
            HOME
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#228186]">SERVICES</span>
        </nav>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-4">
          Has a wide range of solutions
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard dummy text ever since the when an printer took.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {solutions.map((solution, index) => (
            <div key={index} className="relative group p-8 py-20">
              {/* <div className="absolute -top-10 right-8 text-[120px] font-bold text-gray-100 transition-colors duration-300 group-hover:text-[#ff6b00] select-none">
                {solution.number}
              </div> */}
              <div className="absolute -top-10  text-[150px] font-bold text-gray-100 transition-colors duration-300 group-hover:text-[#ff6b00] select-none z-10">
                {solution.number}
              </div>
              <div className="relative flex flex-col items-center justify-center py-14 px-8  rounded-xl transition-all duration-300 hover:bg-white hover:shadow-[0_0_50px_#228186] ">
                <div className="bg-blue-50 rounded-full w-28 h-28 flex items-center justify-center mb-6">
                  <solution.icon className="w-16 h-16 text-[#228186]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a2342] mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                <button className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center transition-colors duration-300 hover:border-[#228186] hover:text-[#228186]">
                  {/* <span className="sr-only">
                    Learn more about {solution.title}
                  </span> */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto max-w-7xl flex flex-col  text-center">
        <h2 className="text-5xl font-semibold text-[#228186] mb-2">
          Our Clients
        </h2>
        <motion.div
          className=" h-32 md:h-40 w-full bg-white p-4 md:p-10 flex items-center   overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-20 w-full object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}
