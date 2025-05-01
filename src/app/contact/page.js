// "use client";
// import Link from "next/link";
// import React, { useState } from "react";

// function Page() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userEmail: email,
//         userName: Name,
//         phone: phone,
//         message: message,
//       }),
//     });
//     setIsLoading(false);
//   };
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
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
//             Contact Us
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
//           <span className="text-[#228186]">CONTACT US</span>
//         </nav>
//       </div>
//       <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-800 font-sans">
//         {/* Title and Subtitle */}
//         <h2 className="text-5xl font-bold mb-2">Get In Touch</h2>
//         <p className="text-base text-gray-600 mb-10">
//           If you have any questions to support your business, please contact us
//           directly.
//         </p>

//         {/* Contact Form & Map */}
//         <div className="flex flex-wrap gap-5 mb-10">
//           {/* Contact Form */}
//           <div className="flex-1 min-w-[300px]  p-5 rounded-md">
//             <form onSubmit={handleSubmit} className="flex flex-col">
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="*Please enter your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="*Please enter your phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="*Email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   name="message"
//                   placeholder="*Your message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186] resize-vertical"
//                   rows={5}
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[#228186] hover:bg-[#1A6266] text-white py-3 px-6 rounded transition-colors"
//               >
//                 SEND MESSAGE
//               </button>
//               <p className="text-sm text-gray-500 mt-3">
//                 *These fields are required.
//               </p>
//             </form>
//           </div>

//           {/* Map Section */}
//           <div className="flex-1 min-w-[300px] h-[400px]">
//             {/* Replace the src below with your own Google Maps embed link */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.68521556359!2d39.58386093984297!3d-4.035184590614036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sin!4v1741003304694!5m2!1sen!2sin"
//               allowFullScreen
//               loading="lazy"
//               className="w-full h-full rounded border-0"
//             />
//           </div>
//         </div>

//         {/* Contact Info (Phone, Email, Location) */}
//         <div className="flex flex-wrap gap-8 justify-between">
//           <div className="flex items-center gap-3 flex-1 min-w-[180px]">
//             <span className="text-3xl text-orange-500">&#128222;</span>
//             <div>
//               <p className="font-semibold">Phone</p>
//               <p>+254 740 211008</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 flex-1 min-w-[180px]">
//             <span className="text-3xl text-orange-500">&#9993;</span>
//             <div>
//               <p className="font-semibold">Email</p>
//               <p>nalashipping@protonmail.com</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 flex-1 min-w-[180px]">
//             <span className="text-3xl text-orange-500">&#128205;</span>
//             <div>
//               <p className="font-semibold">Location</p>
//               <p>Nala Shipping Limited Mombasa, Kenya</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

//working
"use client";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, phone, message } = formData;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          userName: name,
          phone: phone,
          message: message,
        }),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="*Please enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="*Please enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="*Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186]"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="*Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#228186] resize-vertical"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#228186] hover:bg-[#1A6266] text-white py-3 px-6 rounded transition-colors"
              >
                {isLoading ? "Sending..." : "SEND MESSAGE"}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.68521556359!2d39.58386093984297!3d-4.035184590614036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sin!4v1741003304694!5m2!1sen!2sin"
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
              <p>+254 740 211008</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <span className="text-3xl text-orange-500">&#9993;</span>
            <div>
              <p className="font-semibold">Email</p>
              <p>nalashipping@protonmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <span className="text-3xl text-orange-500">&#128205;</span>
            <div>
              <p className="font-semibold">Location</p>
              <p>Nala Shipping Limited Mombasa, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
