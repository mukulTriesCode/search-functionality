import React from "react";

const Heading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="container text-light my-20 text-center">
      {title && (
        <div className="relative">
          <h1
            className="heading relative"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <span className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-0">
            <img src="./images/squiggle-9.svg" alt="squiggle" />
          </span>
        </div>
      )}
    </section>
  );
};

export default Heading;
