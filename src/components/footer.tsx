import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-2 mt-28 md:mt-48">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-start md:items-center justify-center space-y-8 md:space-y-1">
          {/* Logo, Company Name, and Socials */}
          <div className="flex bg-accent/50 md:bg-transparent w-full p-4 rounded-xl flex-col items-start md:items-center md:justify-center gap-4">
            <div className="flex gap-2 border-white w-full md:justify-center items-center">
              <div className=" border-green-500 w-5 h-5">
                <Image
                  src={"https://www.reelsai.pro/reels-ai-pro-logo.svg"}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  alt="logo"
                />
              </div>
              <span className="text-xl md:text-2xl">ReelsAI</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Facebook size={14} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Twitter size={14} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Instagram size={14} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="flex bg-accent/50 font-semibold md:bg-transparent w-full py-4 px-2 rounded-xl text-xs md:text-sm flex-col md:flex-row md:items-center md:justify-center gap-4">
            <Link
              className="bg-none transition-all duration-300 hover:text-primary w-fit md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Get in Touch
            </Link>
            <Link
              className="bg-none transition-all duration-300 hover:text-primary w-fit md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Terms of Service
            </Link>
            <Link
              className="bg-none transition-all duration-300 hover:text-primary w-fit md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Privacy Notice
            </Link>
            <Link
              className="bg-none transition-all duration-300 hover:text-primary w-fit md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Shipping and Refund Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 px-2 md:mt-2 font-semibold text-xs text-left md:text-center">
          © {new Date().getFullYear()} ReelsAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
