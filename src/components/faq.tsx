import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/data";

export default function FAQ() {
  return (
    <>
      <section className="flex flex-col items-center justify-start mt-[10rem] md:mt-[20rem] mb-10">
        <div className="flex flex-col lg:flex-row items-start w-full flex-wrap gap-4">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="text-3xl text-center md:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-center text-gray-400 md:text-lg my-4">
              Your questions answered, empowering your journey with ReelsAI.pro.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 flex w-full md:w-3/4 flex-wrap">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
          >
            {faqData.map((faq, idx) => (
              // <AccordionItem
              //   key={idx}
              //   header={faq.question}
              //   text={faq.answer}
              // />
              <AccordionItem
                className="rounded-xl bg-gradient-to-br from-accent/50 px-4 py-2"
                key={idx}
                value={`item-${idx + 1}`}
              >
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
