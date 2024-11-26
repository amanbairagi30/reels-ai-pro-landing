import { Clapperboard, User, WandSparkles, Zap } from "lucide-react";
import React from "react";

const StepCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  index: number;
  description: string;
}) => (
  <div className="relative group overflow-hidden border-2 transition-all duration-500 hover:border-primary bg-gradient-to-t hover:from-primary/10 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-full lg:w-[80%]">
    <div className="bg-gradient-to-br from-accent dark:from-accent/80 w-16 h-16 flex items-center justify-center rounded-xl">
      {icon}
    </div>
    <div>
      <h1 className="text-2xl mt-12 font-extrabold">{title}</h1>
      <div className="text-sm text-gray-400 mt-2">{description}</div>
    </div>
    <div className="z-[-1] blur-[5px] group-hover:blur-[0px] bg-gradient-to-b transition-all duration-500 ease-in-out from-foreground/10 group-hover:from-primary/50 dark:group-hover:from-primary/50 dark:from-foreground/30 to-transparent bg-clip-text text-transparent absolute bottom-[-7.5rem] right-4 font-extrabold text-[15rem]">
      {index + 1}
    </div>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Zap className="group-hover:text-orange-200 w-6 h-6" />,
      title: "Provide Product Info",
      description:
        "Provide your product link or describe & upload assets, and we'll analyze it to ensure the best outcomes for your ad campaigns.",
    },
    {
      icon: <Clapperboard className="group-hover:text-orange-200 w-6 h-6" />,
      title: "AI Script Generation",
      description:
        "Our AI generates engaging scripts for your ad based on the provided information, ensuring relevance and creativity.",
    },
    {
      icon: <User className="group-hover:text-orange-200 w-6 h-6" />,
      title: "Select Actor & Voice",
      description:
        "Choose an actor and voice for your ad that aligns with your brand's tone and enhances its storytelling impact.",
    },
    {
      icon: <WandSparkles className="group-hover:text-orange-200 w-6 h-6" />,
      title: "Render & Export",
      description:
        "Render the video and get automatically edited outputs ready for use on various platforms with minimal effort.",
    },
  ];

  return (
    <section className="relative flex items-center justify-start mt-[10rem] md:mt-[20rem] mb-10">
      <div className="top-[0rem] left-[-20%] z-[-1] absolute bg-gradient-to-t opacity-20 dark:md:opacity-50 from-primary to-yellow-800  blur-[12em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out size-[40rem]"></div>
      <div className="flex flex-col lg:flex-row items-start w-full flex-wrap gap-4">
        <div className="flex w-full lg:max-w-[50%] flex-col lg:sticky top-40">
          <h1 className="text-3xl font-bold text-center md:text-left md:text-4xl">
            How it Works
          </h1>
          <p className="text-sm text-center md:text-left text-gray-400 md:text-lg my-4">
            Discover how Reels AI Pro simplifies your workflow, making it
            effortless to create high-quality, engaging video ads with ease.
          </p>
        </div>
        <div className="flex-1 h-fit">
          <div className="grid grid-cols-1 place-items-center gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                index={index}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
