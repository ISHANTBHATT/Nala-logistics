"use client";
import Image from "next/image";
import { Settings, GitBranch, Handshake, FileCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanySection() {
  return (
    <>
      {/* Values Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-primary text-2xl font-semibold">
                Company Values
              </h2>
              <h3 className="text-4xl font-bold text-gray-800">
                Our Core Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nala Shipping, like many successful companies, likely upholds a
                set of core values that guide its operations and interactions
                with stakeholders. While specific values can vary, typical core
                values for a shipping company might include:
              </p>
            </div>
          </div>
          <div className="relative h-[300px] rounded-3xl overflow-hidden">
            <Image
              src="/images/2.jpg"
              alt="Warehouse worker with tablet"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center space-y-4 bg-white shadow-lg rounded-xl">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-primary">
              <Settings className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-800">Integrity</h4>
          </Card>

          <Card className="p-6 text-center space-y-4 bg-white shadow-lg rounded-xl">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-primary">
              <GitBranch className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-800">Teamwork</h4>
          </Card>

          <Card className="p-6 text-center space-y-4 bg-white shadow-lg rounded-xl">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-primary">
              <Handshake className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-800">Customer Focus</h4>
          </Card>

          <Card className="p-6 text-center space-y-4 bg-white shadow-lg rounded-xl">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-primary">
              <FileCheck className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-800">Innovation</h4>
          </Card>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="relative h-[500px] bg-[#001324]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001324] to-transparent z-10" />
        <Image
          src="/images/2.jpg"
          alt="Container ship"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-lg space-y-6">
            <h2 className="text-primary">We are NALA Shipping</h2>
            <h3 className="text-3xl font-bold text-white">
              Your Complete Guide to Global Maritime and Logistics Services
            </h3>
            <div className="flex gap-2">
              <Input placeholder="Enter your Email ID" className="bg-white" />
              <Link href="/contact">
                <button className="bg-primary hover:bg-teal-800 text-gray-900 px-8 h-full">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
