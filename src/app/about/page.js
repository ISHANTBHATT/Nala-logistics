import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <>
      <div className="relative min-h-[400px] flex items-center justify-start">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about_banner2.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className=" relative w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-8">
            About Us
          </h1>
        </div>
        <nav
          className="bg-white/90 w-80 h-14 font-bold rounded-tr-xl absolute left-0 bottom-0 flex justify-end items-center px-4 py-2 rounded-md text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[#0a2342] hover:text-[#228186] transition-colors"
          >
            HOME
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#228186]">About Us</span>
        </nav>
      </div>
      <main className="flex flex-col">
        {/* SECTION 2: About Us + Stats */}
        <section className="w-full bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Image (or you can do a 2-column approach) */}
              <div className="relative  w-full rounded-xl overflow-hidden md:h-full ">
                <Image
                  src="/images/about.png"
                  alt="Warehouse workers"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right: Content */}
              <div className="">
                <h2 className="text-xl font-bold text-[#228186] uppercase">
                  About Us
                </h2>
                <h1 className="mt-2 text-3xl font-bold text-gray-800">
                  We’ll keep free items Damage Free
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>

                {/* Bullet points */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-blue-600">Icon</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Cost-Effective Operation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-blue-600">Icon</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Wide Range of Equipment
                      </h3>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-blue-600">Icon</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Logistics Warehousing
                      </h3>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats + Button */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">50+</h3>
                      <p className="text-sm text-gray-600">
                        Years Of Experience
                      </p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">95%</h3>
                      <p className="text-sm text-gray-600">
                        Successful Transport
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Link
                      href="#contact"
                      className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Core Values & Hero */}
        <section className="w-full bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Top: Our Core Values */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-[#228186] uppercase">
                Company Values
              </h2>
              <h1 className="mt-2 text-3xl font-bold text-gray-800">
                Our Core Values
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Nisi ut semper volutpat
                tempor. Praesent consequat fringilla sit amet.
              </p>
            </div>

            {/* Cards: Entrepreneurship, Collaboration, Commitment, Integrity & Respect */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {/* Card 1 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow hover:shadow-md transition">
                {/* Replace with actual icon or image */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600">Icon</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Entrepreneur Ship
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Brief description of this value.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600">Icon</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Collaboration
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Brief description of this value.
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600">Icon</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Commitment
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Brief description of this value.
                </p>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-center p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600">Icon</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Integrity & Respect
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Brief description of this value.
                </p>
              </div>
            </div>
          </div>

          {/* Hero / Tracking */}
          <div className="relative bg-blue-900 text-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
              {/* Left: Ship Image */}
              <div className="relative h-64 w-full mb-8 lg:mb-0 lg:w-1/2 lg:h-96 lg:mr-8">
                <Image
                  src="/images/container-ship.jpg"
                  alt="Container Ship"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Right: Text + Tracking */}
              <div className="lg:w-1/2">
                <h2 className="text-xl font-bold uppercase text-yellow-400">
                  We are Logistics
                </h2>
                <h1 className="mt-2 text-3xl font-bold">
                  Your Guide to Global Logistics in World
                </h1>
                <p className="mt-4 max-w-xl text-gray-100">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                {/* Tracking Box */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center">
                  <input
                    type="text"
                    placeholder="Enter Your Tracking ID"
                    className="w-full rounded-md border-2 border-gray-300 p-2 text-gray-800 focus:outline-none focus:border-yellow-400"
                  />
                  <button className="mt-2 w-full rounded-md bg-yellow-400 px-4 py-2 text-blue-900 font-semibold hover:bg-yellow-300 sm:mt-0 sm:ml-2 sm:w-auto">
                    Track
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
