import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar2 } from "./components/Navbar2";
import Footer2 from "./components/Footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nala Shipping",
  description:
    "We are a professional company specializing in Maritime and Logistics Solutions. Nala Shipping, established in 2024 in Kenya, meets the rising demand for reliable shipping and logistics across East Africa. The company aims to enhance trade between the Indian Subcontinent, the Middle East, and East Africa by providing transparent, integrated solutions backed by advanced digital tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar2 />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
