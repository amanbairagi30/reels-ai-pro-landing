import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import HowItWorksSection from "./working";
import FAQ from "./faq";

export default function Hero() {
  return (
    <>
      <section className="mt-10 relative">
        <Navbar />
        <div className="flex relative flex-col items-center justify-center gap-6 mt-20">
          <div className="top-[15rem] md:top-[5rem] left-[20%] z-[-1] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-yellow-800  blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[10rem] h-[20rem] md:h-[60rem] rotate-[54deg]"></div>

          <div className="top-[-20rem] md:top-[-40rem] -left-[50%rem] z-[-1] absolute bg-gradient-to-t from-primary to-purple-300 opacity-50  blur-[4em] md:blur-[8em] rounded-full w-[10rem] md:w-[30rem] h-[20rem] md:h-[40rem] transition-all duration-700 ease-out rotate-[50deg]"></div>

          <div className="flex flex-col items-center justify-center w-full md:w-[80%]">
            <Badge className="w-fit mb-4 text-xs">
              Trusted by 1000+ Startups
            </Badge>
            <h1 className="text-3xl font-bold text-center md:text-5xl xl:text-6xl">
              Create video ads easily
              <div className="mt-1">
                using{" "}
                <span className="bg-gradient-to-tr from-primary via-primary/80 to-primary/10 bg-clip-text text-transparent">
                  AI
                </span>{" "}
                <span className="">in snap</span>
              </div>
            </h1>
            <p className="font-secondary text-sm md:text-lg text-center mt-4">
              Transform your product into compelling video ads with the power of
              AI and{" "}
              <span className="block lg:hidden">unleash the potential</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Button>Get Started</Button>
              <Button variant={"muted"}>How it works ?</Button>
            </div>

            <p className="text-xs">No credit card required</p>
          </div>
        </div>

        <div className="flex gap-8 my-20 items-center justify-center">
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
          <div className="relative max-w-[300px] max-h-[500px] aspect-[9/16]">
            <Badge className="absolute bottom-[-2rem] left-[50%] translate-x-[-50%] flex border-4 border-primary bg-primary flex-col items-center h-14 justify-center">
              <div className="text-xl font-extrabold">612%</div>
              more engaging
            </Badge>
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

        <HowItWorksSection />

        <FAQ />

        {/* <section className="flex items-center justify-start mt-40 mb-10">
          <div className="flex items-start w-full flex-wrap">
            <div className="flex max-w-[50%] border-2 flex-col sticky top-6">
              <h1 className="text-2xl md:text-4xl">How it Works</h1>
              <p className="text-md mt-4">
                Discover how Reels AI Pro simplifies your workflow, making it
                effortless to create high-quality, engaging video ads with ease.
              </p>
            </div>
            <div className="flex-1 h-fit">
              <div className="grid grid-cols-1 place-items-center gap-8">
                <div className="border-2 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-[80%]">
                  <div className="border-2 w-16 h-16 flex items-center justify-center rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-2xl mt-12 font-extrabold">
                      Provide Product Info
                    </h1>
                    <div className="text-sm text-gray-400 mt-2">
                      Provide your product link or describe & upload assets, and
                      we'll analyze it to ensure the best outcomes for your ad
                      campaigns.
                    </div>
                  </div>
                </div>

                <div className="border-2 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-[80%]">
                  <div className="border-2 w-16 h-16 flex items-center justify-center rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-2xl mt-12 font-extrabold">
                      AI Script Generation
                    </h1>
                    <div className="text-sm text-gray-400 mt-2">
                      Our AI generates engaging scripts for your ad based on the
                      provided information, ensuring relevance and creativity.
                    </div>
                  </div>
                </div>
                <div className="border-2 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-[80%]">
                  <div className="border-2 w-16 h-16 flex items-center justify-center rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-2xl mt-12 font-extrabold">
                      Select Actor & Voice
                    </h1>
                    <div className="text-sm text-gray-400 mt-2">
                      Choose an actor and voice for your ad that aligns with
                      your brand's tone and enhances its storytelling impact.
                    </div>
                  </div>
                </div>
                <div className="border-2 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-[80%]">
                  <div className="border-2 w-16 h-16 flex items-center justify-center rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-2xl mt-12 font-extrabold">
                      Render & Export
                    </h1>
                    <div className="text-sm text-gray-400 mt-2">
                      Render the video and get automatically edited outputs
                      ready for use on various platforms with minimal effort.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
}
