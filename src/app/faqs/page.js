// import React from "react";

// function Page() {
//   return (
//     <>
//       <div className="relative min-h-[400px] flex items-center justify-start">
//         {/* Background with overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('/images/contact_banner4.jpg')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-[#228186]/60"></div>
//         </div>

//         {/* Content */}
//         <div className=" relative w-full max-w-7xl mx-auto px-4 py-16">
//           <h1 className="text-white text-6xl md:text-7xl font-bold mb-8">
//             FAQ
//           </h1>
//         </div>
//         <nav
//           className="bg-white/90 w-80 h-14 font-bold absolute left-0 bottom-0 flex justify-end items-center px-4 py-2 rounded-md text-sm"
//           aria-label="Breadcrumb"
//         >
//           <Link
//             href="/"
//             className="text-[#0a2342] hover:text-[#228186] transition-colors"
//           >
//             HOME
//           </Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-[#228186]">FAQ</span>
//         </nav>
//       </div>
//       <div>Page</div>
//     </>
//   );
// }

// export default Page;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { MessageCircle } from "lucide-react";
import { FiMessageCircle } from "react-icons/fi";
export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What types of cargo does NALA Shipping handle?",
      answer: `NALA Shipping specializes in handling a wide range of cargo types, including containerized goods, bulk commodities, and hazardous materials. Our services are tailored to meet the specific needs of each shipment, ensuring safe and efficient transportation.`,
    },
    {
      id: 2,
      question:
        "How does NALA Shipping ensure the safety and security of my cargo?",
      answer: `We prioritize the safety and security of your cargo by employing advanced tracking systems, stringent security measures, and comprehensive risk management protocols. Our team is dedicated to maintaining the highest standards of safety throughout the shipping process.`,
    },
    {
      id: 3,
      question: "Can NALA Shipping manage customs clearance and documentation?",
      answer:
        "Yes, NALA Shipping offers comprehensive customs clearance and documentation services. Our experienced professionals navigate the complexities of international trade regulations to ensure smooth and timely clearance of your shipments.",
    },
    {
      id: 4,
      question:
        "What are NALA Shipping's standard transit times for international shipments?",
      answer:
        "Transit times vary depending on the origin, destination, and shipping method. We provide estimated delivery times during the booking process and keep you updated on your shipment's progress to ensure transparency and reliability.",
    },
    {
      id: 5,
      question: "How can I track my shipment with NALA Shipping?",
      answer:
        "NALA Shipping offers a user-friendly online tracking system that allows you to monitor your shipment's status in real-time. Simply enter your tracking number on our website, and you’ll receive detailed updates on your cargo's journey.",
    },
  ];

  return (
    <>
      <div className="relative min-h-[400px] flex items-center justify-start mt-20">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/contact_banner4.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className=" relative w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-8">
            FAQ
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
          <span className="text-[#228186]">FAQ</span>
        </nav>
      </div>

      <section className="py-16 px-4">
        <div className="w-full mx-auto px-20 ">
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-2 text-stroke-orange text-center">
              FAQ's
            </h2>
            <h3 className="text-muted-foreground mb-2 text-center">
              POPULAR QUESTIONS
            </h3>
            <h2 className="text-4xl font-bold mb-8 text-center">
              Frequently Inquired Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-wrap text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
