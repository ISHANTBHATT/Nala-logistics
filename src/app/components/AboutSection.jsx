"use client";
import Image from "next/image";
import { Building2, Plane, Warehouse } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 flex flex-col items-center">
          <div className="relative h-[500px] w-full md:w-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Workers in safety gear"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex  gap-8">
            <Card className="p-6 text-center bg-white shadow-lg rounded-xl">
              <div className="text-4xl font-bold text-primary">35+</div>
              <p className="text-gray-600">Years Of Experience</p>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg rounded-xl">
              <div className="text-4xl font-bold text-primary">100%</div>
              <p className="text-gray-600">Happy Customers</p>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-primary mb-2 text-2xl font-semibold">
              About Us
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Reliable Maritime &
              <br />
              Logistics Solutions
            </h3>
            {/* <p className="text-gray-600 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-[70px] h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className=" font-semibold text-primary mb-2">
                  We offer a comprehensive solution for all your logistics
                  requirements throughout East Africa.
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-28 h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h4 className=" font-semibold text-primary mb-2">
                  Experience immediate access through our Dubai-based office,
                  where you can contact us anytime and enjoy full visibility of
                  your cargo and equipment.
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Warehouse className="w-6 h-6" />
              </div>
              <div>
                <h4 className=" font-semibold text-primary mb-2">
                  Gain access to our digital tools that offer clear and
                  up-to-date information.
                </h4>
              </div>
            </div>
          </div>

          <div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-teal-800 p-6 rounded-xl text-xl text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
