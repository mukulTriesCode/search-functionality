import React from "react";

const workData = {
  title: "Selected <u>Work</u>",
  projects: [
    {
      title: "React Code Editor",
      description:
        "Code editor is created using React + TS with Redux Toolkit for state management",
    },
    {
      title: "E-commerce Website",
      description:
        "E-commerce website built using React, Redux, and Firebase for authentication and database management",
    },
    {
      title: "Portfolio Website",
      description:
        "Portfolio website created using React, Redux, and CSS for styling and animations",
    },
    {
      title: "Chatbot Application",
      description:
        "Chatbot application developed using React, Redux, and Dialogflow for conversational AI",
    },
  ],
};

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
      {workData?.title && (
        <div className="relative">
          <h2
            className="heading relative"
            dangerouslySetInnerHTML={{ __html: workData?.title }}
          ></h2>
          <span className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 ">
            <img src="./images/squiggle-6.svg" alt="squiggle" />
          </span>
        </div>
      )}
      <div className="mt-20 text-start">
        {workData?.projects.map((project, i, projectArr) => (
          <React.Fragment key={project?.title}>
            {project?.title && (
              <details
                className={`border-t-2 border-primary ${
                  i === projectArr.length - 1 ? "border-b-2" : ""
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
                    {project?.title}
                    <span
                      className={`absolute -z-10 left-1/2 -translate-x-1/2 duration-300 opacity-0 group-hover:opacity-100 scale-105`}
                    >
                      <img
                        src={`./images/squiggle-${i + 1}.svg`}
                        alt="squiggle"
                      />
                    </span>
                  </span>
                </summary>
                {project?.description && (
                  <div className="ps-24">
                    <p className="text-3xl my-9 font-fraunces font-light">
                      {project?.description}
                    </p>
                  </div>
                )}
              </details>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Work;
