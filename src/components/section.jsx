import React from "react";
import { rc } from "@/lib/utils";

function SectionHeading({ className, children }) {
  return (
    <div className="w-full">
      <h1 className={rc("font-bold md:text-4xl text-3xl text-left", className)}>
        {children}
      </h1>
    </div>
  );
}

function SectionDescription({ className, children, maxWidth }) {
  return (
    <div className="w-full">
      <h1
        className={rc(
          "md:text-lg text-base leading-6 text-[#000]/50 mx-auto text-left",
          maxWidth && " max-w-5xl",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
}

function SectionTag({ className, children }) {
  return (
    <p className={rc("text-primary-default font-bold", className)}>
      {children}
    </p>
  );
}

function SectionExplain({ className, children }) {
  return <div className={rc("space-y-6", className)}>{children}</div>;
}

function Section({ children, className, col, row }) {
  return (
    <section
      className={rc(
        "flex justify-between cont gap-16 mb-32 items-center",
        className,
        col && "md:flex-col flex-col",
        row && "md:flex-row flex-col"
      )}
    >
      {children}
    </section>
  );
}

export {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
};
