import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { SelectTheme } from "./theme-toggler";

export default function Navbar() {
  return (
    <>
      <nav className="border-primary flex items-center justify-between">
        <div className="flex items-center gap-2 w-full h-8">
          <Image
            src={"https://www.reelsai.pro/reels-ai-pro-logo.svg"}
            className="w-8 h-8 object-cover"
            width={400}
            height={400}
            alt="logo"
          />
          <span className="text-xl">ReelsAI</span>
        </div>
        <ul className="flex w-full items-center justify-center gap-6">
          <li>Generate</li>
          <li>Gallery</li>
          <li>Examples</li>
        </ul>
        <div className="flex w-full items-center justify-end gap-4">
          <Button>Login</Button>
          <SelectTheme />
        </div>
      </nav>
    </>
  );
}
