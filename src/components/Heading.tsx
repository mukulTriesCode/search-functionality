import React from "react";

const Heading: React.FC = () => {
  return (
    <section className="container text-light my-20 text-center">
      <h1 className="text-8xl relative">
        Enter the{" "}
        <span className="underline decoration-primary underline-offset-[1rem] decoration-4">
          Realm
        </span>
        <br />
        Of Frontend
        <span className="absolute -z-10 left-1/2 -translate-x-1/2 ">
          <img
            src="https://stordahl.dev/images/squiggle/9.svg"
            alt="squiggle"
          />
        </span>
      </h1>
    </section>
  );
};

export default Heading;
