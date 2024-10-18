import React from "react";

const BannerImage: React.FC<{src: string}> = ({src}) => {
  return (
    <section className="">
      <div className="w-full h-[400px] object-cover relative">
        <div className="w-full h-full object-cover absolute z-20">
          <img
            className="w-full h-full object-cover"
            src="./noise.svg"
            alt="noise"
            draggable="false"
          />
        </div>
        <img
          className="w-full h-full object-cover grayscale"
          src={src}
          alt="banner-image"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default BannerImage;
