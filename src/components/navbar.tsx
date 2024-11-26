"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { SelectTheme } from "./theme-toggler";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Generate", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Examples", href: "#" },
  ];

  return (
    <nav className="py-2 z-[10000] rounded-xl backdrop-blur-sm bg-white/5 sticky top-8 border-2 border-foreground/5 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5">
            <Image
              src={"https://www.reelsai.pro/reels-ai-pro-logo.svg"}
              className="w-full h-full object-cover"
              width={400}
              height={400}
              alt="ReelsAI logo"
            />
          </div>
          <span className="text-xl font-semibold">ReelsAI</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:bg-gradient-to-tr hover:from-primary hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button>Login</Button>
          <SelectTheme />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">
                    <Image
                      src={"https://www.reelsai.pro/reels-ai-pro-logo.svg"}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                      alt="ReelsAI logo"
                    />
                  </div>
                  <span className="text-xl font-semibold mr-2">ReelsAI</span>

                  <SelectTheme />
                </div>
                {/* <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger> */}
              </div>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-lg hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4">
                <Button onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Button>
                <SelectTheme />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
