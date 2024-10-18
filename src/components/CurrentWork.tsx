import React from "react";

const CurrentWork: React.FC = () => {
  const data = [
    {
      title: "Currently",
      description:
        "I’m a <span>Frontend</span> Developer at RW Infotech, an Headless CMS experts company.",
    },
    {
      title: "Availability",
      description: "I’m currently available to work togather.",
    },
    {
      title: "Links",
      links: [
        { name: "Github", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
  ];

  return (
    <section className="container my-20 text-light flex">
      <div className="flex flex-col gap-9 w-3/5">
        {data.map((item, index) => (
          <div key={index}>
            {item?.title && (
              <h2 className="current-work-heading mb-4">{item.title}</h2>
            )}
            {item.description && (
              <p
                className="font-fraunces font-light text-[1.75rem] [&_span]:text-primary"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            )}
            {item.links && (
              <div className="flex flex-col gap-2">
                {item.links.map((link, linkIndex) => (
                  <a
                    href={link.url}
                    key={linkIndex}
                    className="font-fraunces text-primary hover:underline underline-offset-4 decoration-2 duration-300 text-[1.75rem] w-fit"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-2/5 h-fit top-10 sticky">
        <img
          src="https://cdn.dribbble.com/users/776205/screenshots/3857304/media/ebcb3befb35eeb78c0466d06ff244d25.gif"
          alt=""
        />
      </div>
    </section>
  );
};

export default CurrentWork;
