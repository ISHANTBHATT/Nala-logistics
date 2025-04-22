// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// // import { MessageCircle } from "lucide-react";
// import { FiMessageCircle } from "react-icons/fi";
// export default function Faq() {
//   const faqs = [
//     {
//       id: 1,
//       question: "What types of cargo does NALA Shipping handle?",
//       answer: `NALA Shipping specializes in handling a wide range of cargo types, including containerized goods, bulk commodities, and hazardous materials. Our services are tailored to meet the specific needs of each shipment, ensuring safe and efficient transportation.`,
//     },
//     {
//       id: 2,
//       question:
//         "How does NALA Shipping ensure the safety and security of my cargo?",
//       answer: `We prioritize the safety and security of your cargo by employing advanced tracking systems, stringent security measures, and comprehensive risk management protocols. Our team is dedicated to maintaining the highest standards of safety throughout the shipping process.`,
//     },
//     {
//       id: 3,
//       question: "Can NALA Shipping manage customs clearance and documentation?",
//       answer:
//         "Yes, NALA Shipping offers comprehensive customs clearance and documentation services. Our experienced professionals navigate the complexities of international trade regulations to ensure smooth and timely clearance of your shipments.",
//     },
//     {
//       id: 4,
//       question:
//         "What are NALA Shipping's standard transit times for international shipments?",
//       answer:
//         "Transit times vary depending on the origin, destination, and shipping method. We provide estimated delivery times during the booking process and keep you updated on your shipment's progress to ensure transparency and reliability.",
//     },
//     {
//       id: 5,
//       question: "How can I track my shipment with NALA Shipping?",
//       answer:
//         "NALA Shipping offers a user-friendly online tracking system that allows you to monitor your shipment's status in real-time. Simply enter your tracking number on our website, and you’ll receive detailed updates on your cargo's journey.",
//     },
//   ];

//   return (
//     <>
//       <div className="relative min-h-[400px] flex items-center justify-start mt-20">
//         {/* Background with overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('/images/contact_banner4.jpg')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50"></div>
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

//       <section className="py-16 px-4">
//         <div className="w-full mx-auto px-20 ">
//           <div>
//             <h2 className="text-4xl md:text-4xl font-bold text-primary mb-2  text-center">
//               FAQ's
//             </h2>
//             <h3 className="text-muted-foreground mb-2 text-center">
//               POPULAR QUESTIONS
//             </h3>
//             <h2 className="text-4xl font-bold mb-8 text-center">
//               Frequently Inquired Questions
//             </h2>

//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger>{faq.question}</AccordionTrigger>
//                   <AccordionContent className="whitespace-pre-wrap text-base">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { Ship, Package, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function IncotermsGuide() {
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
            INCOTERMS
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
          <span className="text-[#228186]">INCOTERMS</span>
        </nav>
      </div>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#228186] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  International Commercial Terms (Incoterms)
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80  md:text-xl">
                  Standardized terms that define responsibilities between buyers
                  and sellers in international trade
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Introduction
              </h2>
              <p className="text-slate-700  leading-7">
                International trade can be complex and fraught with potential
                misunderstandings. To mitigate these risks, Incoterms
                (International Commercial Terms) have been established by the
                International Chamber of Commerce (ICC). These standardized
                terms provide clear definitions and responsibilities for buyers
                and sellers, making international transactions smoother and more
                predictable.
              </p>

              <h2 className="text-2xl font-bold tracking-tight pt-6">
                Overview of Incoterms
              </h2>
              <p className="text-slate-700  leading-7">
                Incoterms are updated periodically to reflect changes in
                international trade practices. The latest version, Incoterms
                2020, includes 11 terms that are categorized into two groups:
                those that apply to any mode of transport, and those specific to
                sea and inland waterway transport.
              </p>
            </div>
          </div>
        </section>

        {/* Incoterms Tabs */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white ">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="any-mode" className="mx-auto max-w-[800px]">
              {/* <div className="flex justify-center mb-8">
                <TabsList className="bg-[#228186]/10">
                  <TabsTrigger
                    value="any-mode"
                    className="flex items-center gap-2 data-[state=active]:bg-[#228186] data-[state=active]:text-white"
                  >
                    <Truck className="h-4 w-4" />
                    <span>Any Mode of Transport</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="sea-transport"
                    className="flex items-center gap-2 data-[state=active]:bg-[#228186] data-[state=active]:text-white"
                  >
                    <Ship className="h-4 w-4" />
                    <span>Sea Transport</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="additional-terms"
                    className="flex items-center gap-2 data-[state=active]:bg-[#228186] data-[state=active]:text-white"
                  >
                    <Package className="h-4 w-4" />
                    <span>Additional Terms</span>
                  </TabsTrigger>
                </TabsList>
              </div> */}

              <TabsList className="flex w-full bg-[#228186]/10">
                <TabsTrigger
                  value="any-mode"
                  className="
        flex-1                /* equal width */
        flex items-center justify-center gap-1
        px-2 py-1             /* tighter padding */
        text-xs sm:text-sm    /* responsive text */
        data-[state=active]:bg-[#228186]
        data-[state=active]:text-white
      "
                >
                  <Truck className="h-4 w-4" />
                  <span>Any Mode of Transport</span>
                </TabsTrigger>

                <TabsTrigger
                  value="sea-transport"
                  className="
        flex-1 flex items-center justify-center gap-1
        px-2 py-1 text-xs sm:text-sm
        data-[state=active]:bg-[#228186]
        data-[state=active]:text-white
      "
                >
                  <Ship className="h-4 w-4" />
                  <span>Sea Transport</span>
                </TabsTrigger>

                <TabsTrigger
                  value="additional-terms"
                  className="
        flex-1 flex items-center justify-center gap-1
        px-2 py-1 text-xs sm:text-sm
        data-[state=active]:bg-[#228186]
        data-[state=active]:text-white
      "
                >
                  <Package className="h-4 w-4" />
                  <span>Additional Terms</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="any-mode" className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">
                  Incoterms for Any Mode of Transport
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>EXW (Ex Works)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller makes the goods available at their premises.
                        The buyer bears all costs and risks involved in taking
                        the goods from there to the desired destination.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>FCA (Free Carrier)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller delivers the goods, cleared for export, to
                        the carrier selected by the buyer. The buyer bears all
                        risks and costs after this point.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>CPT (Carriage Paid To)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller pays for the carriage of the goods to the
                        named destination. The risk, however, passes to the
                        buyer once the goods have been handed to the carrier.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>
                        CIP (Carriage and Insurance Paid To)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Similar to CPT, but the seller is also required to
                        obtain insurance for the goods during transport.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>DPU (Delivered at Place Unloaded)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller is responsible for delivering and unloading
                        the goods at the named place of destination. The risk is
                        transferred to the buyer after unloading.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>DAP (Delivered at Place)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller delivers when the goods are placed at the
                        disposal of the buyer on the arriving means of transport
                        ready for unloading at the named place of destination.
                        The seller bears all risks involved in bringing the
                        goods to that point.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2 border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>DDP (Delivered Duty Paid)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller is responsible for delivering the goods to
                        the named place in the country of the buyer, including
                        all costs and risks, duties, taxes, and customs
                        clearance.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sea-transport" className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">
                  Incoterms for Sea and Inland Waterway Transport
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>FAS (Free Alongside Ship)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller delivers when the goods are placed alongside
                        the vessel at the named port of shipment. The buyer
                        bears all costs and risks from that point onwards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>FOB (Free On Board)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller delivers the goods on board the vessel
                        nominated by the buyer at the named port of shipment.
                        The risk passes to the buyer once the goods are on
                        board.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>CFR (Cost and Freight)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The seller pays the costs and freight to bring the goods
                        to the port of destination. The risk is transferred to
                        the buyer once the goods are on board the vessel.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>CIF (Cost, Insurance and Freight)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Similar to CFR, but the seller also has to procure and
                        pay for insurance for the goods during the transport.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="additional-terms" className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">
                  Additional Container Shipping Terms
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>TEU & FEU</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>TEU (Twenty-foot Equivalent Unit):</strong> A
                        standard measure used in container shipping to describe
                        the capacity of container ships and terminals. One TEU
                        represents the capacity of a standard 20-foot container.
                      </p>
                      <p className="mt-2">
                        <strong>FEU (Forty-foot Equivalent Unit):</strong>{" "}
                        Similar to TEU, this term denotes a container that has
                        the capacity of a standard 40-foot container.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>Demurrage & Detention</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Demurrage:</strong> The charges that a shipper
                        incurs for the storage of containers beyond the allotted
                        free time at a port or terminal.
                      </p>
                      <p className="mt-2">
                        <strong>Detention:</strong> Fees charged for holding
                        containers beyond the agreed duration outside the port
                        or terminal, typically at the consignee's facility.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Bill of Lading:</strong> A legal document
                        between the shipper and carrier detailing the type,
                        quantity, and destination of the goods being
                        transported. It serves as a receipt of shipment when the
                        goods are delivered.
                      </p>
                      <p className="mt-2">
                        <strong>Cargo Manifest:</strong> A comprehensive list of
                        all goods being shipped on a vessel, including details
                        such as weight, destination, and handling instructions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>Service Providers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Freight Forwarder:</strong> A company or
                        individual that arranges shipments for businesses or
                        individuals, often handling logistics, documentation,
                        and customs clearance.
                      </p>
                      <p className="mt-2">
                        <strong>Customs Broker:</strong> A professional licensed
                        to handle customs clearance for importers, ensuring
                        compliance with all regulatory requirements.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>Equipment & Measurements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Chassis:</strong> A wheeled trailer used to
                        transport containers over land, typically part of the
                        intermodal transportation system.
                      </p>
                      <p className="mt-2">
                        <strong>Deadweight Tonnage (DWT):</strong> The total
                        weight a ship can safely carry, including cargo, fuel,
                        crew, and provisions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#228186]/20 hover:border-[#228186]/50 transition-colors">
                    <CardHeader>
                      <CardTitle>Shipping Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>Intermodal:</strong> Refers to the use of
                        multiple modes of transportation (ship, rail, truck) to
                        move containers from origin to destination.
                      </p>
                      <p className="mt-2">
                        <strong>LCL (Less than Container Load):</strong> A
                        shipping term for cargo that does not completely fill a
                        container. Multiple LCL shipments are often consolidated
                        in a single container.
                      </p>
                      <p className="mt-2">
                        <strong>FCL (Full Container Load):</strong> Cargo that
                        occupies the entire container, providing better security
                        and fewer handling risks.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Other Considerations */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Other Terms used in Container Shipping
              </h2>
              <p className="text-slate-700  leading-7">
                In addition to Incoterms, businesses should also consider other
                logistical aspects such as inventory management and warehousing.
                Efficient inventory management ensures that products are
                available to meet customer demand without overstocking, which
                can tie up capital. Warehousing strategies, including location
                and automation, can greatly influence the speed and cost of
                distribution.
              </p>
              <p className="text-slate-700  leading-7">
                Implementing advanced technologies such as real-time tracking
                and data analytics can provide insights into shipping processes,
                helping to optimize routes and reduce transit times. A
                comprehensive understanding of these elements, combined with a
                mastery of Incoterms, equips businesses to navigate the
                complexities of international trade, ensuring reliable and
                cost-effective delivery of goods across borders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
