import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-2 mt-28 md:mt-48">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-start md:items-center justify-center space-y-8 md:space-y-8">
          {/* Logo, Company Name, and Socials */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <div className="flex gap-2  border-white w-full items-center">
              <div className=" border-green-500 w-5 h-5">
                <Image
                  src={"https://www.reelsai.pro/reels-ai-pro-logo.svg"}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  alt="logo"
                />
              </div>
              <span className="text-xl">ReelsAI</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              className="bg-none md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Get in Touch
            </Link>
            <Link
              className="bg-none md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Terms of Service
            </Link>
            <Link
              className="bg-none md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Privacy Notice
            </Link>
            <Link
              className="bg-none md:bg-accent/50 px-2 py-1 rounded-lg"
              href={"#"}
            >
              Shipping and Refund Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-left md:text-center">
          © {new Date().getFullYear()} ReelsAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
