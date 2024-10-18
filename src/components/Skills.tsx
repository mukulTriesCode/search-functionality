import React from "react";

const skillData = [
  {
    label: "Skills",
    data: [
      {
        label: "Frontend",
        technologies: [
          { label: "HTML", logo: "" },
          { label: "CSS", logo: "" },
          { label: "SASS", logo: "" },
          { label: "BootStrap", logo: "" },
          { label: "Tailwind CSS", logo: "" },
          { label: "JavaScript", logo: "" },
          { label: "TypeScript", logo: "" },
          { label: "ReactJS", logo: "" },
          { label: "NextJS", logo: "" },
          { label: "Redux", logo: "" },
        ],
      },
      {
        label: "Headless CMS",
        technologies: [
          { label: "Prismic", logo: "" },
          { label: "Sanity", logo: "" },
        ],
      },
      {
        label: "API",
        technologies: [
          { label: "Axios", logo: "" },
          { label: "GraphQL", logo: "" },
          { label: "Postman", logo: "" },
          { label: "Insomnia", logo: "" },
        ],
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="container my-20">
      {skillData.map((skill) => (
        <React.Fragment key={skill?.label}>
          {skill?.label && <h2 className="text-6xl my-7">{skill?.label}</h2>}
          <ul className="flex flex-col">
            {skill?.data.map((val, i, skillArr) => (
              <React.Fragment key={val?.label}>
                <li
                  className={`border-t-2 border-primary py-8 ${
                    i === skillArr.length - 1 ? "border-b-2" : ""
                  }`}
                >
                  {val?.label && (
                    <h6 className="text-5xl mb-7">{val?.label}</h6>
                  )}
                  <ul className="grid grid-cols-2 gap-5">
                    {val?.technologies.map((tech) => (
                      <React.Fragment key={tech?.label}>
                        {tech?.label && (
                          <li className="font-fraunces text-2xl font-light">
                            <p>{tech?.label}</p>
                            {tech?.logo && (
                              <div className="">
                                <img src={tech?.logo} alt="" />
                              </div>
                            )}
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Skills;
