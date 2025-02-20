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
            backgroundImage: `url('/images/contact_banner4.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className=" relative w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-8">
            Contact Us
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
          <span className="text-[#228186]">CONTACT US</span>
        </nav>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-800 font-sans">
        {/* Title and Subtitle */}
        <h2 className="text-5xl font-bold mb-2">Get In Touch</h2>
        <p className="text-base text-gray-600 mb-10">
          If you have any questions to support your business, please contact us
          directly.
        </p>

        {/* Contact Form & Map */}
        <div className="flex flex-wrap gap-5 mb-10">
          {/* Contact Form */}
          <div className="flex-1 min-w-[300px]  p-5 rounded-md">
            <form
              //   onSubmit={(e) => e.preventDefault()}
              className="flex flex-col"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="*Please enter your name"
                  required
                  className="w-full p-3 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="*Please enter your phone"
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="*Email address"
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="*Your message"
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186] resize-vertical"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#228186] hover:bg-[#1A6266] text-white py-3 px-6 rounded transition-colors"
              >
                SEND MESSAGE
              </button>
              <p className="text-sm text-gray-500 mt-3">
                *These fields are required.
              </p>
            </form>
          </div>

          {/* Map Section */}
          <div className="flex-1 min-w-[300px] h-[400px]">
            {/* Replace the src below with your own Google Maps embed link */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8926969686764!2d-73.99008188432444!3d40.67792927933511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f0cb4f6f490fadb%3A0xXXXXXXXXXXXXXXX!2sGowanus%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1615839045635!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded border-0"
            />
          </div>
        </div>

        {/* Contact Info (Phone, Email, Location) */}
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <span className="text-3xl text-orange-500">&#128222;</span>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+58 (1) 123-456-7890</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <span className="text-3xl text-orange-500">&#9993;</span>
            <div>
              <p className="font-semibold">Email</p>
              <p>info@carguy.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <span className="text-3xl text-orange-500">&#128205;</span>
            <div>
              <p className="font-semibold">Location</p>
              <p>8273 NW 98th, Florida 33195 USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
