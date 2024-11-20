import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <>
      <section className="mt-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-6 py-10 mt-20">
          <div className="flex flex-col items-center justify-center w-full md:w-[80%]">
            <Badge className="w-fit mb-4 text-md">
              Trusted by 1000+ Startups
            </Badge>
            <h1 className="text-5xl text-center md:text-7xl xl:text-8xl">
              Create video ads easily
              <div>
                using <span className="">AI</span>{" "}
                <span className="">in snap</span>
              </div>
            </h1>
            <p className="text-lg mt-4">
              Transform your product into compelling video ads with the power of
              AI
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button>Get Started</Button>
            <Button variant={"ghost"}>How it works ?</Button>
          </div>
        </div>

        <div className="flex gap-8 items-center justify-center">
          <div className="max-w-[300px] hidden md:block max-h-[400px] aspect-[9/16]">
            <iframe
              className="w-full rounded-xl h-full"
              src="https://www.youtube.com/embed/2JmmMZybbQo?enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="widget2"
              data-gtm-yt-inspected-6="true"
              title="ReelsAI.pro sample ad for LongShotAI"
            ></iframe>
          </div>
          <div className="max-w-[300px] max-h-[500px] aspect-[9/16]">
            <iframe
              className="w-full rounded-xl h-full"
              src="https://www.youtube.com/embed/2JmmMZybbQo?enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="widget2"
              data-gtm-yt-inspected-6="true"
              title="ReelsAI.pro sample ad for LongShotAI"
            ></iframe>
          </div>
          <div className="max-w-[300px] hidden md:block max-h-[400px] aspect-[9/16]">
            <iframe
              className="w-full rounded-xl h-full"
              src="https://www.youtube.com/embed/2JmmMZybbQo?enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="widget2"
              data-gtm-yt-inspected-6="true"
              title="ReelsAI.pro sample ad for LongShotAI"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
