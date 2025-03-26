// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Phone,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   ChevronDown,
// } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Navbar2 = () => {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const isHomePage = pathname === "/";
//   return (
//     <header className="w-full fixed z-50">
//       {/* Top bar */}
//       <div
//         className={` text-white py-2 ${
//           isScrolled || !isHomePage
//             ? "bg-gray-900 "
//             : "bg-transparent text-white"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex space-x-4">
//             <a
//               href="https://facebook.com"
//               className="hover:text-orange-500 transition-colors"
//             >
//               <Facebook size={18} />
//             </a>
//             <a
//               href="https://twitter.com"
//               className="hover:text-orange-500 transition-colors"
//             >
//               <Twitter size={18} />
//             </a>
//             <a
//               href="https://instagram.com"
//               className="hover:text-orange-500 transition-colors"
//             >
//               <Instagram size={18} />
//             </a>
//             <a
//               href="https://youtube.com"
//               className="hover:text-orange-500 transition-colors"
//             >
//               <Youtube size={18} />
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Phone size={18} className="text-orange-500" />
//             <span>(+58) 123-456-7890</span>
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <div className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <span className="text-3xl font-bold">
//                 Cargoy
//                 <span className="text-orange-500">▶</span>
//               </span>
//             </div>

//             {/* Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               <Link
//                 href="/"
//                 className="font-medium hover:text-orange-500 transition-colors"
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/about"
//                 className="font-medium hover:text-orange-500 transition-colors"
//               >
//                 ABOUT
//               </Link>
//               <div className="relative group">
//                 <button className="flex items-center font-medium hover:text-orange-500 transition-colors">
//                   PAGES
//                   <ChevronDown size={16} className="ml-1" />
//                 </button>
//               </div>
//               <Link
//                 href="/services"
//                 className="font-medium hover:text-orange-500 transition-colors"
//               >
//                 SERVICES
//               </Link>
//               <Link
//                 href="/blogs"
//                 className="font-medium hover:text-orange-500 transition-colors"
//               >
//                 BLOGS
//               </Link>
//               <Link
//                 href="/contact"
//                 className="font-medium hover:text-orange-500 transition-colors"
//               >
//                 CONTACT
//               </Link>
//             </nav>

//             {/* CTA Button */}
//             <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
//               GET QUOTE
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar2;

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { Facebook, Instagram, Twitter, Youtube, Phone } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Image from "next/image";

// export function Navbar2() {
//   const [scrolled, setScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 20;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrolled]);

//   const links = [
//     {
//       id: 1,
//       name: "HOME",
//       link: "/",
//     },
//     {
//       id: 2,
//       name: "ABOUT",
//       link: "about",
//     },
//     {
//       id: 3,
//       name: "SERVICES",
//       link: "services",
//     },
//     // {
//     //   id: 4,
//     //   name: "INDUSTRIES SERVED",
//     //   link: "industries",
//     // },
//     {
//       id: 5,
//       name: "FAQs",
//       link: "faqs",
//     },
//     // {
//     //   id: 6,
//     //   name: "CAREERS",
//     //   link: "careers",
//     // },
//     {
//       id: 7,
//       name: "CONTACT",
//       link: "contact",
//     },
//   ];
//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
//         scrolled ? "bg-white shadow-md" : "bg-transparent"
//       )}
//     >
//       {/* Top Bar */}
//       <div className={cn("border-b border-white/10", scrolled ? "hidden" : "")}>
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-12">
//             {/* Social Icons */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="#"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <Facebook size={18} />
//               </Link>
//               <Link
//                 href="#"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <Twitter size={18} />
//               </Link>
//               <Link
//                 href="#"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <Instagram size={18} />
//               </Link>
//               {/* <Link
//                 href="#"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <Youtube size={18} />
//               </Link> */}
//             </div>
//             {/* Contact & CTA */}
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 text-white/80 ">
//                 <Phone size={18} />
//                 <span className="text-sm md:text-base">+254 740 211008</span>
//               </div>
//               <Button
//                 variant="destructive"
//                 className="bg-[#228186] hover:bg-[#1A6266] rounded-xl text-white/80"
//               >
//                 Contact
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             {scrolled ? (
//               <>
//                 <Image
//                   src="/images/logo.png"
//                   alt="Ark"
//                   width={1000}
//                   height={1000}
//                   className="w-20 h-20"
//                 />
//               </>
//             ) : (
//               <>
//                 <Image
//                   src="/images/logo2.png"
//                   alt="Ark"
//                   width={1000}
//                   height={1000}
//                   className="w-28 h-20"
//                 />
//                 <span className="text-2xl font-bold text-white/80">
//                   NALA SHIPPING
//                 </span>
//               </>
//             )}
//           </Link>

//           {/* Desktop Navigation */}
//           <NavigationMenu className="hidden lg:flex">
//             <NavigationMenuList className="gap-2">
//               {links.map((item) => (
//                 <NavigationMenuItem key={item.id}>
//                   <Link
//                     href={item.link}
//                     className={cn(
//                       "px-4 py-2 text-sm font-medium transition-colors",
//                       scrolled
//                         ? "text-gray-600 hover:text-gray-900"
//                         : "text-white/80 hover:text-white"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             className={cn(
//               "lg:hidden",
//               scrolled ? "text-gray-600" : "text-white"
//             )}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }

/* <AnimatePresence>
{menuOpen && (
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ duration: 0.3 }}
    className="fixed top-0 left-0 w-full h-full bg-primary text-white flex flex-col p-6 shadow-lg z-50"
  >
    <button
      className="self-end mb-4 text-white"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>
    {links.map((item) => (
      <Link
        key={item.id}
        href={item.link}
        className="py-2 px-4 text-lg font-semibold hover:bg-white/10 transition"
        onClick={() => setMenuOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </motion.div>
)}
</AnimatePresence> */

"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar2() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isHomePage = pathname === "/";
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "/about" },
    { id: 3, name: "SERVICES", link: "/services" },
    { id: 5, name: "FAQs", link: "/faqs" },
    { id: 7, name: "CONTACT", link: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled || !isHomePage ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div
        className={cn(
          "border-b ",
          scrolled ? "hidden" : "",
          !isHomePage ? "border-gray-200" : "border-white/10"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            {/* Social Icons */}
            <div
              className={cn(
                "flex items-center gap-4",
                !isHomePage
                  ? "text-gray-800 "
                  : "text-white/80 hover:text-white"
              )}
            >
              <Link href="#" className=" transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
            {/* Contact & CTA */}
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center gap-2 ",
                  !isHomePage ? "text-gray-800" : "text-white/80"
                )}
              >
                <Phone size={18} />
                <span className="text-sm md:text-base">+254 740 211008</span>
              </div>
              <Button className="bg-[#228186] hover:bg-[#1A6266] rounded-xl text-white/80">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <>
                <img
                  src="/images/logo.png"
                  alt="Ark"
                  // width={1500}
                  // height={1500}
                  className="w-28 h-auto"
                />
                <span className="text-2xl font-bold text-white">
                  NALA SHIPPING
                </span>
              </>
            ) : (
              <>
                <Image
                  src="/images/logo2.png"
                  alt="Ark"
                  width={1000}
                  height={1000}
                  className="w-28 h-20"
                />
                <span className="text-2xl font-bold text-white/80">
                  NALA SHIPPING
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation Links - RESTORED */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  scrolled || !isHomePage
                    ? "text-gray-800 hover:text-primary"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {/* <Button
            variant="ghost"
            className={cn(
              "lg:hidden  hover:text-primary w-10 h-10",
              scrolled ? " text-gray-800" : "text-white"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          > */}
          <Menu
            className={cn(
              "lg:hidden  hover:text-primary w-6 h-6",
              scrolled || !isHomePage ? " text-gray-800" : "text-white"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg> */}
          {/* </Button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-primary text-white flex flex-col p-6 shadow-lg z-50"
          >
            <button
              className="self-end mb-4 text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="py-2 px-4 text-lg font-semibold hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
