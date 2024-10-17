import React from "react";

const Work: React.FC = () => {
  const lookup: [string, number][] = [
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const toRomanNumeral = (num: number): string =>
    lookup.reduce((acc, [k, v]) => {
      acc += k.repeat(Math.floor(num / v));
      num = num % v;
      return acc;
    }, "");

  return (
    <section className="container text-center my-20 text-light">
      <h2 className="heading relative">
        Selected{" "}
        <span className="underline decoration-primary underline-offset-[1rem] decoration-4">
          Work
        </span>
        <span className="absolute -z-10 left-1/2 -translate-x-1/2 ">
          <img
            src="https://stordahl.dev/images/squiggle/6.svg"
            alt="squiggle"
          />
        </span>
      </h2>
      <div className="mt-20 text-start">
        {[...Array(4)].map((_, i, arr) => (
          <details
            key={i}
            className={`border-t-2 border-primary ${
              i === arr.length - 1 ? "border-b-2" : ""
            }`}
            style={{ listStyleType: "none" }}
          >
            <summary
              className="work-heading my-9 mb-11 group"
              style={{ listStyleType: "none" }}
            >
              <span className="w-24 inline-block text-primary">
                {toRomanNumeral(i + 1)}.
              </span>
              <span className="relative">
                React Code Editor
                <span
                  className={`absolute -z-10 left-1/2 -translate-x-1/2 duration-300 opacity-0 group-hover:opacity-100 ${
                    i === arr.length - 1 ? "-top-1/2" : ""
                  }`}
                >
                  <img
                    src={`https://stordahl.dev/images/squiggle/${i + 1}.svg`}
                    alt="squiggle"
                  />
                </span>
              </span>
            </summary>
            <div className="ps-24">
              <p className="text-3xl my-9 mb-11 font-fraunces font-light">
                Code editor is created using React + TS with Redux Toolkit for
                state management
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Work;
