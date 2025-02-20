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
      question: "What is GTA in transport?",
      answer: `A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`,
    },
    {
      id: 2,
      question: "Can we take input on transportation?",
      answer: `A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`,
    },
    {
      id: 3,
      question: " What are e-way bills?",
      answer:
        "A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      id: 4,
      question: "What is unique number in e way Bill?",
      answer:
        "A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      id: 5,
      question: "Can we take input on transportation?",
      answer:
        "A digital interface the person causing the movement of goods uploads the relevant information prior to the commencement of movement of goods and generates e-way bill on the GST portal. Best service are provide us. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
  ];

  return (
    <>
      <div className="relative min-h-[400px] flex items-center justify-start">
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
                  <AccordionContent className="whitespace-pre-wrap">
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
