"use client";
import Image from "next/image";
import { Building2, Plane, Warehouse } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-gray-600">Years Of Experience</p>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg rounded-xl">
              <div className="text-4xl font-bold text-primary">95%</div>
              <p className="text-gray-600">Successful Transport</p>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-primary mb-2 text-2xl font-semibold">
              About Us
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              We'll keep free items
              <br />
              Damage Free
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Cost-Effective Operation
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Wide Range of Equipment
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <Warehouse className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Logistics Warehousing
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-primary hover:bg-blue-700 p-6 rounded-xl text-xl text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
