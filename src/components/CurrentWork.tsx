import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/sphere.json";
import { CurrentWorkProps } from "../utils/types";

const CurrentWork: React.FC<CurrentWorkProps> = ({ currentWorkData }) => {
  return (
    <section className="container my-20 text-light flex">
      <div className="flex flex-col gap-9 w-3/5">
        {currentWorkData.map((item, index) => (
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
      <div className="w-2/5 flex">
        <Lottie animationData={animationData} speed={1} loop play />
      </div>
    </section>
  );
};

export default CurrentWork;
