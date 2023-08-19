import React from "react";

import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";
import { ChecklistIcon } from "../components/icons";
import { rc } from "../lib/utils";

function HeroSection() {
  return (
    <Section>
      <SectionExplain className="md:w-[60%] mt-10 mx-auto">
        <SectionHeading className="text-center">
          Discover flexible spaces and solutions to your business
        </SectionHeading>
        <SectionDescription className="text-center">
          For companies of all sizes, we provide the global scale and
          flexibility to help your business adapt to uncertainty. Find the space
          that's right for you.
        </SectionDescription>
      </SectionExplain>
    </Section>
  );
}

const prices = [
  {
    icon: "./icons/silver-price.png",
    tag: "Silver",
    price: "$399/mth",
    desc: "Pay one simple price for everything related to your workspace.",
    features: [
      {
        text: "Coworking & Rooms",
        included: true,
      },
      {
        text: "High-speed Internet",
        included: true,
      },
      {
        text: "Explusive Workspace",
        included: false,
      },
      {
        text: "Customisable Room",
        included: false,
      },
      {
        text: "All-inclusive Pricing",
        included: false,
      },
    ],
  },
  {
    icon: "./icons/gold-price.png",
    tag: "Gold",
    price: "$599/mth",
    desc: "Pay one simple price for everything related to your workspace.",
    features: [
      {
        text: "Coworking & Rooms",
        included: true,
      },
      {
        text: "High-speed Internet",
        included: true,
      },
      {
        text: "Explusive Workspace",
        included: true,
      },
      {
        text: "Customisable Room",
        included: true,
      },
      {
        text: "Meeting Rooms",
        included: true,
      },
      {
        text: "Private Office",
        included: true,
      },
      {
        text: "All-inclusive Pricing",
        included: false,
      },
    ],
  },
  {
    icon: "./icons/platinum-price.png",
    tag: "Platinum",
    price: "$999",
    desc: "Pay one simple price for everything related to your workspace.",
    features: [
      {
        text: "Coworking & Rooms",
        included: true,
      },
      {
        text: "High-speed Internet",
        included: true,
      },
      {
        text: "Explusive Workspace",
        included: true,
      },
      {
        text: "Customisable Room",
        included: true,
      },
      {
        text: "All-inclusive Pricing",
        included: true,
      },
    ],
  },
];

function PricingSection() {
  const [plan, setPlan] = React.useState("monthly");

  return (
    <Section className="flex-col">
      <div className="bg-[#C9E8FF] h-14 p-2 mx-auto md:w-fit rounded-full flex items-center animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-in">
        <div
          className={rc(
            plan === "monthly"
              ? "bg-white  flex items-center text-primary-default rounded-full h-full px-4"
              : "px-4",
            "cursor-pointer"
          )}
          onClick={() => setPlan("monthly")}
        >
          <p className={plan === "monthly" ? "font-bold mx-auto" : ""}>
            Monthly
          </p>
        </div>
        <div
          className={rc(
            plan === "annual"
              ? "bg-white  flex items-center text-primary-default rounded-full h-full px-4"
              : "px-4",
            "cursor-pointer"
          )}
          onClick={() => setPlan("annual")}
        >
          <p className={plan === "annual" ? "font-bold mx-auto" : ""}>
            Annual (save 15%)
          </p>
        </div>
      </div>

      {plan === "monthly" ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {prices.map((price, i) => (
            <Card className="h-fit" key={i} active={i === 1}>
              <img src={price.icon} alt="icon" className="w-8" />
              <p className="font-semibold">{price.tag}</p>
              <h3 className="font-bold text-3xl">{price.price}</h3>
              <p className="opacity-60 text-sm">{price.desc}</p>
              <div className="border-t-2"></div>

              <div className="flex flex-col gap-4">
                {price.features.map((feature, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <ChecklistIcon
                      color={feature.included ? "#5FBE51" : "#E2E2E2"}
                    />
                    <p className="text-black/50">{feature.text}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full">Get Started</Button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="cont text-center p-10">
          <h1 className="font-bold text-5xl opacity-50">Annual Plan</h1>
        </div>
      )}
    </Section>
  );
}

const questions = [
  {
    text: "What are the benefits of joining the Futurspace network?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "What should I expect from the screening process?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "Is Telephone service available?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "Is the money refundable if I am unable to register?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/min.png",
  },
];

function FAQSection() {
  const [active, setActive] = React.useState(0);

  return (
    <Section className="flex-col text-xs md:text-lg">
      <SectionExplain className="md:w-[80%] mb-10 mx-auto">
        <SectionHeading className="text-center">
          Frequently asked questions about coworking
        </SectionHeading>
        <SectionDescription className="text-center md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo
          at sit mi sed gravida et imperdiet sagittis euismod tortor fringilla
          amet.
        </SectionDescription>
      </SectionExplain>
      <div className="space-y-5">
        {questions.map((faq, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <div className="w-[80%]">
                <CardTitle>{faq.text}</CardTitle>
                {i === active && (
                  <CardDesc className="opacity-80">{faq.desc}</CardDesc>
                )}
              </div>
              <button onClick={() => setActive(i)}>
                <img
                  src={i === active ? "/icons/min.png" : "/icons/plus.png"}
                  alt="icon"
                  className="w-7 h-7 hover:p-0.5"
                />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section className="mt-4" row>
      <div className="bg-[#F0F6FF] p-10 rounded-3xl flex md:flex-row flex-col-reverse md:gap-20 gap-12 items-center">
        <div className="flex flex-col gap-8 md:w-[80%]">
          <SectionHeading>
            Confused about which plan would be most suitable for me?
          </SectionHeading>
          <Button className="w-fit">Contact us</Button>
        </div>
        <div>
          <img src="/images/pricing1.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-[80%]">
        <SectionHeading className="text-center">
          We enable people to work where they want, when they want and how they
          want
        </SectionHeading>
        <SectionDescription className="text-center md:w-[60%]">
          We offer offices for lease by the day, by the week, or by the year.
          Choose from any of our 3000 locations. Get a free quote!
        </SectionDescription>
      </SectionExplain>

      <div className="w-full">
        <div className="rounded-full border md:w-[40%] border-gray-300 flex justify-between p-2 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button>Submit</Button>
        </div>

        <SectionDescription className="text-center mt-4">
          No worries, we don’t do spam!
        </SectionDescription>
      </div>
    </Section>
  );
}

function PricingPage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <SubscribeSection />
    </>
  );
}

export default PricingPage;
