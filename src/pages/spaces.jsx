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
import { SwiperSlide } from "swiper/react";
import { SSwiper } from "../components/swiper";
import { rc } from "../lib/utils";

function HeroSection() {
  return (
    <Section row>
      <SectionExplain>
        <SectionHeading className="md:text-left text-center">
          A creative coworking space in New York
        </SectionHeading>
        <SectionDescription className="md:text-left text-center">
          You can book personal office space across the country by the day, hour
          or month.
        </SectionDescription>
        <div className="rounded-full border border-gray-300 flex justify-between w-5/6 p-2.5 md:mx-0 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4"
          />
          <Button>Submit</Button>
        </div>
      </SectionExplain>
      <div>
        <img src="./images/space1.png" alt="hero" />
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Hots Desks",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    link: "Learn more",
    icon: "./icons/r-arrow.png",
    image: "./images/home-why1.png",
  },
  {
    title: "Starter Spaces",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    link: "Learn more",
    icon: "./icons/r-arrow.png",
    image: "./images/home-why2.png",
  },
  {
    title: "Coworking Spaces",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    link: "Learn more",
    icon: "./icons/r-arrow.png",
    image: "./images/home-why3.png",
  },
];

function ServiceSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionTag className="text-center">Why Serviced Office</SectionTag>
        <SectionHeading className="text-center">
          We've helped thousands of fast-growing startups and teams
        </SectionHeading>
        <SectionDescription className="text-center">
          Grow without restriction. By giving you space that can be changed as
          your business grows. Only pay for the space you use with everything
          you need to be included in one price.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i} active={i === 1}>
            <img src={service.image} alt="card-img" />
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <div className="flex gap-2 items-center">
              <p className="text-primary-default font-bold">{service.link}</p>
              <img className="w-5 h-5" src={service.icon} alt="icon" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CtaSection() {
  return (
    <Section>
      <div className="flex md:flex-row flex-col-reverse p-16 bg-[#0190fe11] gap-20 rounded-3xl">
        <SectionExplain className="md:w-[60%]">
          <SectionHeading>
            Stay productive with modern workspace, private office, and coworking
            solutions
          </SectionHeading>
          <SectionDescription>
            Workspaces that suit your business. We have professional and
            inspiring work environments to suit businesses of all sizes and
            budget.
          </SectionDescription>
          <Button>Get Started</Button>
        </SectionExplain>
        <div>
          <img src="./images/space2.png" alt="cta-img" />
        </div>
      </div>
    </Section>
  );
}

const reviews = [
  {
    user: "Del Gibbs",
    desc: "Futurspace is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations",
    position: "VP, Globee Softech",
    img: "./images/home-rev1.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
  {
    user: "Britanny",
    desc: "Quisque consectetur vulputate odio, non dictum metus porttitor molestie. Duis pharetra suscipit dolor, quis euismod velit fringilla sed.",
    position: "Co-Founder & CTO - Payfi",
    img: "./images/home-rev2.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
  {
    user: "Randal Robertson",
    desc: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
    position: "Project lead at Zoole",
    img: "./images/home-rev3.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
];

function ReviewsSection() {
  const sliderRef = React.useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  return (
    <div className="mb-32">
      <Section className="mb-0">
        <div className="gap-10">
          <SectionExplain>
            <SectionTag>REVIEWS</SectionTag>
            <SectionHeading>What Our Members Say</SectionHeading>
          </SectionExplain>
        </div>
        <div className="inline-flex gap-10">
          <img
            className="w-10 cursor-pointer md:block hidden"
            src="./icons/L-arrow.png"
            alt="btn-prev"
            onClick={handlePrev}
          />
          <img
            className="w-10 cursor-pointer md:block hidden"
            src="./icons/RB-arrow.png"
            alt="btn-next"
            onClick={handleNext}
          />
        </div>
      </Section>

      <SSwiper refs={sliderRef} initialSlide={1}>
        {reviews.map((rev, i) => (
          <SwiperSlide
            key={i}
            className={rc(
              "max-w-md p-8 space-y-5 rounded-2xl h-64 shadow-md",
              i === 1 && "border border-primary-default"
            )}
          >
            <h2>{rev.rating}</h2>
            <CardDesc>{rev.desc}</CardDesc>
            <div className="flex gap-3">
              <div className="rounded-full">
                <img className="w-10" src={rev.img} alt="user-img" />
              </div>
              <div>
                <CardTitle>{rev.user}</CardTitle>
                <CardDesc>{rev.position}</CardDesc>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SSwiper>
    </div>
  );
}

function FeedbackSection() {
  return (
    <Section>
      <div className="flex flex-col items-start bg-[#0190fe11] md:p-16 px-6 py-8 rounded-3xl">
        <SectionExplain className="m-auto">
          <SectionHeading className="text-center">
            One of our workspace experts will reach out to you based on your
            communication preferences.
          </SectionHeading>
        </SectionExplain>
        <div className="mt-10 px-10 md:w-[80%] p-10 m-auto bg-white rounded-xl">
          <div className="space-y-5 mb-5">
            <SectionHeading className="text-center">
              We'd love to hear from you
            </SectionHeading>
            <SectionDescription className="text-center md:w-[70%]">
              To book a complimentary private day office or desk, simply
              complete the form below.
            </SectionDescription>
          </div>
          <form action="" className="flex gap-10 flex-col">
            <input
              className="px-8 py-4 w-full border rounded-full"
              type="text"
              name="firstName"
              id="fistName"
              placeholder="Enter your name"
            />
            <input
              className="px-8 py-4 w-full border rounded-full"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <input
              className="px-8 py-4 w-full border rounded-full"
              type="text"
              name="message"
              id="message"
              placeholder="Enter your message"
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function ClientSection() {
  return (
    <div className="cont text-center px-20 mb-20">
      <p className="opacity-60 font-bold mb-5">
        Trusted by top companies and startups around the world
      </p>
      <div>
        <img src="./images/about-company.png" alt="partners" />
      </div>
    </div>
  );
}

function SpacesPage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CtaSection />
      <ReviewsSection />
      <FeedbackSection />
      <ClientSection />
    </>
  );
}

export default SpacesPage;
