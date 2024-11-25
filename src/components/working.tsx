import { Zap } from "lucide-react";
import React from "react";

const StepCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="border-2 flex flex-col text-left rounded-xl p-5 items-start justify-between h-[20rem] w-full lg:w-[80%]">
    <div className="border-2 w-16 h-16 flex items-center justify-center rounded-xl">
      {icon}
    </div>
    <div>
      <h1 className="text-2xl mt-12 font-extrabold">{title}</h1>
      <div className="text-sm text-gray-400 mt-2">{description}</div>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Provide Product Info",
      description:
        "Provide your product link or describe & upload assets, and we'll analyze it to ensure the best outcomes for your ad campaigns.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI Script Generation",
      description:
        "Our AI generates engaging scripts for your ad based on the provided information, ensuring relevance and creativity.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Select Actor & Voice",
      description:
        "Choose an actor and voice for your ad that aligns with your brand's tone and enhances its storytelling impact.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Render & Export",
      description:
        "Render the video and get automatically edited outputs ready for use on various platforms with minimal effort.",
    },
  ];

  return (
    <section className="flex items-center justify-start mt-[10rem] md:mt-[20rem] mb-10">
      <div className="flex flex-col lg:flex-row items-start w-full flex-wrap gap-4">
        <div className="flex w-full lg:max-w-[50%] flex-col lg:sticky top-6">
          <h1 className="text-3xl text-center md:text-left md:text-4xl">
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
