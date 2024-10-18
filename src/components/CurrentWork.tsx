import React, { useEffect, useState } from "react";
import animationData from "../assets/sphere.json";
import { CurrentWorkProps } from "../utils/types";
import { LottieProps } from "react-lottie-player";

const CurrentWork: React.FC<CurrentWorkProps> = ({ currentWorkData }) => {
  const [Lottie, setLottie] = useState<React.FC<LottieProps> | null>(null);

  useEffect(() => {
    const loadLottie = async () => {
      const Lottie = await import("react-lottie-player");
      setLottie(Lottie.default);
    };
    loadLottie();
  }, []);

  return (
    <section className="container my-44 text-light flex relative">
      <div className="flex flex-col gap-9 text-center">
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
              <div className="flex gap-2 items-center justify-around px-8">
                {item.links.map((link, linkIndex) => (
                  <a
                    href={link.url}
                    key={linkIndex}
                    className="font-fraunces cursor-none text-primary hover:underline underline-offset-4 decoration-2 duration-300 text-[1.75rem] w-fit flex gap-4 items-center"
                  >
                    <p>{link.name}</p>
                    <div className="max-w-8">
                      <img src={link?.icon} alt={link.name} />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  -z-10">
        {Lottie && <Lottie className="w-[500px]" animationData={animationData} speed={1} loop play />}
      </div>
    </section>
  );
};

export default CurrentWork;
