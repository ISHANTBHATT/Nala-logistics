// import React from "react";

// const Hero2 = () => {
//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 lg:pr-12">
//           <h2 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-4">
//             WHY CHOOSE US
//           </h2>
//           <h1 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6">
//             We Are Professional
//             <br />
//             Logistics & cargo Agency
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Sed ut perspiciatis unde omnis iste natus error volup tatem
//             accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa
//             illo inventore.
//           </p>
//           <p className="text-gray-600 mb-8">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae
//             ab illo inventore veritatis quasi architecto beatae itae dicta sunt
//             explicabo.
//           </p>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
//             Learn More
//           </button>
//         </div>
//         <div className="lg:w-1/2 mt-8 lg:mt-0">
//           <img
//             src="https://placehold.co/600x400"
//             alt="Logistics Professional"
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero2;

//working
// import Image from "next/image";

// export default function Hero2() {
//   return (
//     <section className="min-h-screen px-20 py-40">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div className="relative h-full">
//           <div className="absolute top-0 h-full w-80 z-20 left-10 shadow-xl">
//             <Image
//               src="/images/pic3.jpg"
//               alt="Delivery Person"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="absolute top-10 h-[490px] w-80 z-10 left-20 bg-white shadow-2xl shadow-blue-500"></div>
//           <div className="absolute -bottom-32 right-0 h-full w-96 z-1">
//             <Image
//               src="/images/pic4.jpg"
//               alt="Warehouse Manager"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold text-[#FF9B3E] mb-2">
//             WHY CHOOSE US
//           </h2>
//           <h3 className="text-3xl md:text-5xl font-bold text-[#002B5B] mb-6">
//             We Are Professional
//             <br />
//             Logistics & cargo Agency
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Sed ut perspiciatis unde omnis iste natus error volup tatem
//             accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa
//             illo inventore.
//           </p>
//           <p className="text-gray-600 mb-8">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae
//             ab illo inventore veritatis quasi architecto beatae itae dicta sunt
//             explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut
//             fugit, sed quia consequuntur magni dolores is eos qui ratione
//             voluptatem sequi nesciunt.
//           </p>
//           <div className="flex items-center gap-8">
//             <button className="bg-[#FF9B3E] text-white px-8 py-3 rounded-lg hover:bg-[#002B5B] transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero2() {
//   return (
//     <section className="min-h-screen px-4 md:px-20 py-20 md:py-40">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           className="relative h-full"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="absolute top-0 h-full w-64 md:w-80 z-20 left-4 md:left-10 shadow-xl">
//             <Image
//               src="/images/pic3.jpg"
//               alt="Delivery Person"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="absolute top-10 h-[400px] md:h-[400px] w-64 md:w-80 z-10 left-12 md:left-20 bg-white shadow-2xl shadow-[#228186]"></div>
//           <div className="absolute -bottom-20 md:-bottom-32 right-0 h-full w-72 md:w-96 z-1">
//             <Image
//               src="/images/pic4.jpg"
//               alt="Warehouse Manager"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-stroke-orange">
//             WHY CHOOSE US
//           </h2>
//           <h3 className="text-2xl md:text-5xl font-bold text-[#002B5B] mb-6">
//             We Are Professional
//             <br />
//             Logistics & cargo Agency
//           </h3>
//           <p className="text-gray-600 mb-6 text-sm md:text-base">
//             Sed ut perspiciatis unde omnis iste natus error volup tatem
//             accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa
//             illo inventore.
//           </p>
//           <p className="text-gray-600 mb-8 text-sm md:text-base">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae
//             ab illo inventore veritatis quasi architecto beatae itae dicta sunt
//             explicabo.
//           </p>
//           <div className="flex items-center gap-8">
//             <button className="bg-[#228186] text-white px-6 py-2 md:px-8 md:py-3 rounded-xl hover:bg-[#1A6266] transition-colors text-sm md:text-base">
//               Learn More
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  return (
    <section className="h-full container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-24 lg:py-40">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          className="relative md:mx-auto h-[500px] sm:h-[600px] md:h-[500px] md:w-[550px] lg:w-full lg:h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* First Image */}
          <div className="absolute top-0 left-0 w-48 sm:w-56 md:w-64 lg:w-80 lg:h-96 h-64 sm:h-72 md:h-80 z-20 shadow-xl">
            <Image
              src="/images/pic3.jpg"
              alt="Delivery Person"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>

          {/* White Background */}
          <div className="absolute top-8 sm:top-12 left-6 sm:left-8 md:left-12 lg:left-20 w-48 sm:w-56 md:w-64 lg:w-72 lg:h-96 h-64 sm:h-72 md:h-80 z-10 bg-white shadow-2xl shadow-[#228186]" />

          {/* Second Image */}
          <div className="absolute bottom-0 md:-bottom-20 lg:-bottom-32 right-0 w-56 sm:w-64 md:w-72 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96">
            <Image
              src="/images/pic4.jpg"
              alt="Warehouse Manager"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-stroke-orange">
            WHY CHOOSE US
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#002B5B] mb-4 md:mb-6">
            We Are Professional
            <br className="hidden sm:block" />
            Logistics & cargo Agency
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6">
            Sed ut perspiciatis unde omnis iste natus error volup tatem
            accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa
            illo inventore.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae
            ab illo inventore veritatis quasi architecto beatae itae dicta sunt
            explicabo.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="bg-[#228186] text-white px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-xl hover:bg-[#1A6266] transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
